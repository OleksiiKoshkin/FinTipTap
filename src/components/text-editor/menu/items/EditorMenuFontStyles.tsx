import {StyledButton, StyledEditorMenuGroup} from "../EditorMenu.styled.tsx";
import React, {useContext} from "react";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import StrikethroughSOutlinedIcon from "@mui/icons-material/StrikethroughSOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import {EditorMenuContext} from "../EditorMenuContext.tsx";

export const EditorMenuFontStyles: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);
    if (!editor) return null;

    return (
        <StyledEditorMenuGroup>
            <StyledButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                variant={editor.isActive('bold') ? 'contained' : 'outlined'}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }>
                <FormatBoldOutlinedIcon/>
            </StyledButton>
            <StyledButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                variant={editor.isActive('italic') ? 'contained' : 'outlined'}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }>
                <FormatItalicOutlinedIcon/>
            </StyledButton>
            <StyledButton
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                variant={editor.isActive('underline') ? 'contained' : 'outlined'}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleUnderline()
                        .run()
                }>
                <FormatUnderlinedOutlinedIcon/>
            </StyledButton>
            <StyledButton
                onClick={() => editor.chain().focus().toggleStrike().run()}
                variant={editor.isActive('strike') ? 'contained' : 'outlined'}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }>
                <StrikethroughSOutlinedIcon/>
            </StyledButton>
        </StyledEditorMenuGroup>
    )
}
