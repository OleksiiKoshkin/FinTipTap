import React, {useCallback, useContext} from "react";
import {StyledEditorMenuGroup, VisuallyHiddenInput} from "../../Editor.styled.tsx";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import {processImage} from "../../extensions/image/process-image.ts";
import {EditorMenuContext} from "../EditorMenuContext.tsx";
import {Button} from "@mui/material";


export const EditorMenuInsertImage: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);

    const onSelectFiles = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (!editor) {
            return
        }

        const files = event.target.files
        if (files && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                processImage(editor.view, files[i])
            }
        }
    }, [editor])

    if (!editor) return null;

    return (
        <StyledEditorMenuGroup disableElevation>
            <Button component={"label"}>
                <AddPhotoAlternateOutlinedIcon/>
                <VisuallyHiddenInput
                    type="file" accept="image/jpg,image/jpeg,image/png,.svg" multiple
                    onChange={onSelectFiles}/>
            </Button>
        </StyledEditorMenuGroup>
    )
}
