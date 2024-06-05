import {createContext} from "react";
import {Editor} from "@tiptap/react";

export type EditorContext = {
    editor: Editor | null
}

export const EditorMenuContext = createContext<EditorContext>({editor: null})
