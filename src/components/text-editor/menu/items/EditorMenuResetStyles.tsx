import {StyledButton, StyledEditorMenuGroup} from "../../Editor.styled.tsx";
import React, {useContext} from "react";
import FormatClearOutlinedIcon from "@mui/icons-material/FormatClearOutlined";
import {EditorMenuContext} from "../EditorMenuContext.tsx";


export const EditorMenuResetStyles: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);
    if (!editor) return null;

    return (
        <StyledEditorMenuGroup disableElevation>
            <StyledButton
                onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                <FormatClearOutlinedIcon/>
            </StyledButton>
        </StyledEditorMenuGroup>
    )
}
