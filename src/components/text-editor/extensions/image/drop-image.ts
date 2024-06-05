import {Slice} from "@tiptap/pm/model";
import {EditorView} from "@tiptap/pm/view";
import {processImage} from "./process-image.ts";

export const handleImageDrop = (view: EditorView, event: DragEvent, _: Slice, moved: boolean) => {
    if (moved) {
        return false
    }
    if (!event.dataTransfer || !event.dataTransfer.files || !event.dataTransfer.files[0]) {
        return false
    }
    const files = event.dataTransfer.files
    if (files && files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            processImage(view, files[i], event.clientX, event.clientY)
        }
    }
    return true
}
