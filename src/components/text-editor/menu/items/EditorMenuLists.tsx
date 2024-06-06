import {StyledButton, StyledEditorMenuGroup} from "../EditorMenu.styled.tsx";
import React, {useCallback, useContext} from "react";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import FormatIndentIncreaseOutlinedIcon from "@mui/icons-material/FormatIndentIncreaseOutlined";
import FormatIndentDecreaseOutlinedIcon from "@mui/icons-material/FormatIndentDecreaseOutlined";
import {EditorMenuContext} from "../EditorMenuContext.tsx";

export const EditorMenuLists: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);

    const canSink = editor?.can().sinkListItem('taskItem') || editor?.can().sinkListItem('listItem')
    const canLift = editor?.can().liftListItem('taskItem') || editor?.can().liftListItem('listItem')

    const sinkItem = useCallback(() => {
        if (!editor) {
            return
        }
        editor.chain().focus().sinkListItem('taskItem').run()
        editor.chain().focus().sinkListItem('listItem').run()
    }, [editor])

    const liftItem = useCallback(() => {
        if (!editor) {
            return
        }
        editor.chain().focus().liftListItem('taskItem').run()
        editor.chain().focus().liftListItem('listItem').run()
    }, [editor])

    if (!editor) return null;

    return (
        <>
            <StyledEditorMenuGroup>
                <StyledButton
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    variant={editor.isActive('bulletList') ? 'contained' : 'outlined'}
                >
                    <FormatListBulletedOutlinedIcon/>
                </StyledButton>

                <StyledButton
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    variant={editor.isActive('orderedList') ? 'contained' : 'outlined'}
                >
                    <FormatListNumberedOutlinedIcon/>
                </StyledButton>

                <StyledButton
                    onClick={() => editor.chain().focus().toggleTaskList().run()}
                    variant={editor.isActive('taskList') ? 'contained' : 'outlined'}
                >
                    <PlaylistAddCheckOutlinedIcon/>
                </StyledButton>
            </StyledEditorMenuGroup>

            <StyledEditorMenuGroup disableElevation>
                <StyledButton
                    onClick={sinkItem}
                    disabled={!canSink}
                >
                    <FormatIndentIncreaseOutlinedIcon/>
                </StyledButton>

                <StyledButton
                    onClick={liftItem}
                    disabled={!canLift}
                >
                    <FormatIndentDecreaseOutlinedIcon/>
                </StyledButton>

            </StyledEditorMenuGroup>
        </>
    )
}
