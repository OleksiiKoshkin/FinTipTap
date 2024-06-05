import {StyledButton, StyledEditorMenuGroup} from "../../Editor.styled.tsx";
import React, {useContext} from "react";

import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import FormatAlignRightOutlinedIcon from '@mui/icons-material/FormatAlignRightOutlined';
import {EditorMenuContext} from "../EditorMenuContext.tsx";

export const EditorMenuAlign: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);
    if (!editor) return null;

    return (
        <StyledEditorMenuGroup>
            <StyledButton
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                variant={editor.isActive({textAlign: 'left'}) ? 'contained' : 'outlined'}>

                <FormatAlignLeftOutlinedIcon/>
            </StyledButton>

            <StyledButton
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                variant={editor.isActive({textAlign: 'center'}) ? 'contained' : 'outlined'}>

                <FormatAlignCenterOutlinedIcon/>
            </StyledButton>

            <StyledButton
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                variant={editor.isActive({textAlign: 'justify'}) ? 'contained' : 'outlined'}>

                <FormatAlignJustifyOutlinedIcon/>
            </StyledButton>
            <StyledButton
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                variant={editor.isActive({textAlign: 'right'}) ? 'contained' : 'outlined'}>

                <FormatAlignRightOutlinedIcon/>
            </StyledButton>
        </StyledEditorMenuGroup>
    )
}
