import {StyledButton, StyledEditorMenuGroup} from "../EditorMenu.styled.tsx";
import React, {useContext} from "react";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import {EditorMenuContext} from "../EditorMenuContext.tsx";

export const EditorMenuQuote: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);
    if (!editor) return null;

    return (
        <StyledEditorMenuGroup>
            <StyledButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                variant={editor.isActive('blockquote') ? 'contained' : 'outlined'}>
                <FormatQuoteOutlinedIcon/>
            </StyledButton>
        </StyledEditorMenuGroup>
    )
}
