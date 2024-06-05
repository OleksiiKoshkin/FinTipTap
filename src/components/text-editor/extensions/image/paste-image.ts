import {EditorView} from "@tiptap/pm/view";
import {processImage} from "./process-image.ts";

export const handleImagePaste = (view: EditorView, event: ClipboardEvent) => {
    const items = Array.from(event.clipboardData?.items || []);
    const data = event.clipboardData;

    items.forEach((item, idx) => {
        if (item.type.indexOf("image") === 0) {
            const file = data && data.files && data.files[idx];
            if (file) {
                processImage(view, file)
            }
        }
    })
    return true;
}
