import React, {useCallback, useContext} from "react";
import {VisuallyHiddenInput} from "../../EditorMenu.styled.tsx";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import {processImage} from "../../../extensions/image/process-image.ts";
import {EditorMenuContext} from "../../EditorMenuContext.tsx";
import {InsertMenuItemProps} from "./EditorMenuAdd.tsx";


export const InsertImage: React.FC<InsertMenuItemProps> = ({onExecute}) => {
    const {editor} = useContext(EditorMenuContext);

    const onSelectFiles = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (!editor) {
            return
        }
        onExecute()
        const files = event.target.files
        if (files && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                processImage(editor.view, files[i])
            }
        }
    }, [editor, onExecute])

    if (!editor) return null;

    return (
        <label>
            <AddPhotoAlternateOutlinedIcon/>
            Insert image from disk...
            <VisuallyHiddenInput
                type="file" accept="image/jpg,image/jpeg,image/png,.svg" multiple
                onChange={onSelectFiles}/>
        </label>
    )
}
