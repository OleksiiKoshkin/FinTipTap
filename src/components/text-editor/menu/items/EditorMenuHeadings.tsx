import {StyledButton, StyledEditorMenuGroup} from "../../Editor.styled.tsx";
import React, {useContext} from "react";
import {EditorMenuContext} from "../EditorMenuContext.tsx";

export const EditorMenuHeadings: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);
    if (!editor) return null;

    return (
        <StyledEditorMenuGroup>
            <StyledButton
                onClick={() => editor.chain().focus().setParagraph().run()}
                variant={editor.isActive('paragraph', {level: 1}) ? 'contained' : 'outlined'}
            >
                P
            </StyledButton>
            <StyledButton
                onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                variant={editor.isActive('heading', {level: 1}) ? 'contained' : 'outlined'}
            >
                H1
            </StyledButton>
            <StyledButton
                onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                variant={editor.isActive('heading', {level: 2}) ? 'contained' : 'outlined'}
            >
                H2
            </StyledButton>
            <StyledButton
                onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                variant={editor.isActive('heading', {level: 3}) ? 'contained' : 'outlined'}
            >
                H3
            </StyledButton>
        </StyledEditorMenuGroup>
    )
}
