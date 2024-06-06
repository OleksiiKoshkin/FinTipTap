import React, {useCallback, useContext} from "react";
import {EditorMenuContext} from "../../EditorMenuContext.tsx";
import {InsertMenuItemProps} from "./EditorMenuAdd.tsx";
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';

export const InsertURL: React.FC<InsertMenuItemProps> = ({onExecute}) => {
    const {editor} = useContext(EditorMenuContext);

    const onAddLink = useCallback(() => {
            if (!editor) {
                return
            }

            onExecute()

            const previousUrl = editor.getAttributes('link').href
            const url = window.prompt('URL', previousUrl)

            // cancelled
            if (url === null) {
                return
            }

            // empty
            if (url === '') {
                editor.chain().focus().extendMarkRange('link').unsetLink()
                    .run()
                return
            }

            // update link
            if (previousUrl) {
                editor.chain().focus().extendMarkRange('link').setLink({href: url})
                    .run()
            }
            // add new
            console.log('add', url)

            editor.chain().focus().insertContent(
                `<a href='${url}'>${url}</a>`,
                {
                    parseOptions: {
                        preserveWhitespace: false,
                    },
                }
            ).run()

        }, [editor, onExecute]
    )

    if (!editor) return null;

    return (
        <label onClick={onAddLink}>
            <AddLinkOutlinedIcon/>
            Insert hyperlink...
        </label>
    )
}
