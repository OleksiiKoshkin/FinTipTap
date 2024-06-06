import {StyledButton, StyledEditorMenuGroup} from "../EditorMenu.styled.tsx";
import React, {useCallback, useContext} from "react";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import {EditorMenuContext} from "../EditorMenuContext.tsx";

export const EditorMenuLinks: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);

    const setLink = useCallback(() => {
        if (!editor) {
            return
        }

        const previousUrl = editor!.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor!.chain().focus().extendMarkRange('link').unsetLink()
                .run()

            return
        }

        // update link
        editor!.chain().focus().extendMarkRange('link').setLink({href: url})
            .run()
    }, [editor])

    if (!editor) return null;

    return (
        <StyledEditorMenuGroup>
            <StyledButton
                onClick={setLink}
                variant={editor.isActive('link') ? 'contained' : 'outlined'}>

                <InsertLinkOutlinedIcon/>
            </StyledButton>

            <StyledButton
                onClick={() => editor.chain().focus().unsetLink().run()}
                disabled={!editor.isActive('link')}
            >
                <LinkOffIcon/>
            </StyledButton>
        </StyledEditorMenuGroup>
    )
}
