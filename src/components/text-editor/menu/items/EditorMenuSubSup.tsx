import {StyledButton, StyledEditorMenuGroup} from "../EditorMenu.styled.tsx";
import React, {useContext} from "react";

import SubscriptOutlinedIcon from '@mui/icons-material/SubscriptOutlined';
import SuperscriptOutlinedIcon from '@mui/icons-material/SuperscriptOutlined';
import {EditorMenuContext} from "../EditorMenuContext.tsx";

export const EditorMenuSubSup: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);
    if (!editor) return null;

    return (
        <StyledEditorMenuGroup>
            <StyledButton
                onClick={() => editor.chain().focus().toggleSubscript().run()}
                variant={editor.isActive('subscript') ? 'contained' : 'outlined'}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleSubscript()
                        .run()
                }>
                <SubscriptOutlinedIcon/>
            </StyledButton>
            <StyledButton
                onClick={() => editor.chain().focus().toggleSuperscript().run()}
                variant={editor.isActive('superscript') ? 'contained' : 'outlined'}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleSuperscript()
                        .run()
                }>
                <SuperscriptOutlinedIcon/>
            </StyledButton>

        </StyledEditorMenuGroup>
    )
}
