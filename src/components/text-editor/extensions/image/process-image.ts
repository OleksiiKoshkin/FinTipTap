import {EditorView} from "@tiptap/pm/view";
import {MAX_IMAGE_SIZE, supportedBitmapTypes, supportedImageTypeNames, supportedImageTypes} from "./consts.ts";
import {resizeBitmapImage} from "./resize-bitmap-image.ts";

function insertToEditor(
    {
        view, data, width, height, left, top
    }: {
        view: EditorView,
        data: string,
        width?: number,
        height?: number,
        left?: number,
        top?: number
    }) {

    const {schema} = view.state;
    const shouldInsert = typeof left !== 'undefined' && typeof top !== 'undefined'
    const coordinates = shouldInsert ? view.posAtCoords({left, top}) : undefined;

    if (shouldInsert && !coordinates) {
        window.alert("Cannot get the coordinates to insert"); // display alert
        return;
    }

    const node = schema.nodes.image.create({
        src: data,
        width: width,
        height: height
    });

    const transaction = shouldInsert && coordinates
        ? view.state.tr.insert(coordinates.pos, node)
        : view.state.tr.replaceSelectionWith(node);

    return view.dispatch(transaction);

}

export const processImage = async (view: EditorView, file: File, left?: number, top?: number) => {
    if (!supportedImageTypes.includes(file.type)) { // check valid image type under 1MB
        window.alert(`Images need to be in ${supportedImageTypeNames.join(' or ')} format.`);
        return false
    }

    const isBitmap = supportedBitmapTypes.includes(file.type.toLowerCase())

    if (isBitmap) {
        // load jpg or png
        const {
            data: resizedData,
            width: resizedWidth,
            height: resizedHeight
        } = await resizeBitmapImage(file, MAX_IMAGE_SIZE, file.type)

        return insertToEditor({
            view,
            data: resizedData,
            width: resizedWidth,
            height: resizedHeight,
            left,
            top
        })
    }
    // load SVG
    const reader = new FileReader();

    reader.onloadend = () => {
        return insertToEditor({
            view,
            data: reader.result as string,
            left,
            top
        })
    }
    reader.readAsDataURL(file);
    return true; // handled
}
