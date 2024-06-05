import {StyledButton, StyledEditorMenuGroup} from "../../Editor.styled.tsx";
import React, {useContext} from "react";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import {EditorMenuContext} from "../EditorMenuContext.tsx";

export const EditorMenuQuotesHR: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);
    if (!editor) return null;

    return (
        <StyledEditorMenuGroup>
            <StyledButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                variant={editor.isActive('blockquote') ? 'contained' : 'outlined'}>
                <FormatQuoteOutlinedIcon/>
            </StyledButton>
            <StyledButton
                onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <HorizontalRuleOutlinedIcon/>
            </StyledButton>

        </StyledEditorMenuGroup>
    )
}
