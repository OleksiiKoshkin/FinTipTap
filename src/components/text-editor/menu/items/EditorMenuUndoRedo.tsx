import {StyledButton, StyledEditorMenuGroup} from "../../Editor.styled.tsx";
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import React, {useContext} from "react";
import {EditorMenuContext} from "../EditorMenuContext.tsx";


export const EditorMenuUndoRedo: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);
    if (!editor) return null;

    return (
        <StyledEditorMenuGroup disableElevation>
            <StyledButton
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }>
                <UndoOutlinedIcon/>
            </StyledButton>
            <StyledButton
                onClick={() => editor.chain().focus().redo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }>
                <RedoOutlinedIcon/>
            </StyledButton>
        </StyledEditorMenuGroup>
    )
}
