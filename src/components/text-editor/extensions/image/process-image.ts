import {EditorView} from "@tiptap/pm/view";
import {MAX_FILE_SIZE_IN_MB, MAX_IMAGE_SIZE, supportedImageTypeNames, supportedImageTypes} from "./consts.ts";

export const processImage = (view: EditorView, file: File, left?: number, top?: number) => {
    const filesize = (file.size / 1024) / 1024; // get the filesize in MB
    if (isNaN(filesize)) {
        window.alert("Invalid file size.");
        return false
    }

    if (!supportedImageTypes.includes(file.type) && (isNaN(filesize) || filesize > MAX_FILE_SIZE_IN_MB)) { // check valid image type under 1MB
        window.alert(`Images need to be in ${supportedImageTypeNames.join(' or ')} format and less than ${MAX_FILE_SIZE_IN_MB}MB in size.`);
        return false
    }

    // check the dimensions
    const _URL = window.URL || window.webkitURL;
    const img = new Image();
    img.src = _URL.createObjectURL(file);

    img.onload = function () {
        if (img.width > MAX_IMAGE_SIZE || img.height > MAX_IMAGE_SIZE) {
            window.alert(`Your images need to be less than ${MAX_IMAGE_SIZE} pixels in height and width.`); // display alert
            return false;
        }
        // load data and convert to base64...
        const reader = new FileReader();

        reader.onloadend = function () {
            const {schema} = view.state;
            const shouldInsert = typeof left !== 'undefined' && typeof top !== 'undefined'
            const coordinates = shouldInsert ? view.posAtCoords({left, top}) : undefined;

            if (shouldInsert && !coordinates) {
                window.alert("Cannot get the coordinates to insert"); // display alert
                return;
            }

            const node = schema.nodes.image.create({
                src: reader.result,
                width: img.naturalWidth,
                height: img.naturalHeight
            });

            const transaction = shouldInsert && coordinates
                ? view.state.tr.insert(coordinates.pos, node)
                : view.state.tr.replaceSelectionWith(node);

            return view.dispatch(transaction);
        }
        reader.readAsDataURL(file);
    };
    return true; // handled
}
