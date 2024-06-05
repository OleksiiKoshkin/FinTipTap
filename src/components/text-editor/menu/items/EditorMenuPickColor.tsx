import React, {useCallback, useContext} from "react";
import {EditorMenuContext} from "../EditorMenuContext.tsx";

export const EditorMenuPickColor: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);

    const onSelectColor = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (!editor) {
            return
        }

        editor.chain().focus().setColor(event.target.value || '#000000').run()
    }, [editor])

    if (!editor) {
        return null
    }

    return (
        <input
            type="color"
            onInput={onSelectColor}
            value={editor.getAttributes('textStyle').color || '#000000'}
            data-testid="setColor"
        />
    )
}
