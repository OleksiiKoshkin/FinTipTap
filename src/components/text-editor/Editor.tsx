import {EditorProvider} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import {Color} from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import {StyledEditor} from "./Editor.styled.tsx";
import {MenuBar} from "./menu/EditorMenu.tsx";
import {Link} from "@tiptap/extension-link";
import {Placeholder} from "@tiptap/extension-placeholder";
import {Underline} from "@tiptap/extension-underline";
import {Subscript} from "@tiptap/extension-subscript";
import {Superscript} from "@tiptap/extension-superscript";
import {TaskList} from "@tiptap/extension-task-list";
import {TaskItem} from "@tiptap/extension-task-item";


// https://github.com/bae-sh/tiptap-extension-resize-image/tree/main
//import {ImageResize} from "tiptap-extension-resize-image";
import {ImageResize} from "./extensions/image/ImageResize.ts";
import {handleImageDrop} from "./extensions/image/drop-image.ts";
import {handleImagePaste} from "./extensions/image/paste-image.ts";
import {TextAlign} from "@tiptap/extension-text-align";
import Typography from '@tiptap/extension-typography'
import {FontFamily} from "@tiptap/extension-font-family";
import {TextStyleExtended} from "./extensions/font-size/FontSize.ts";

const extensions = [
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        dropcursor: {
            color: '#ffae00',
        },
    }),
    Typography.configure({
        superscriptTwo: false,
        superscriptThree: false,
    }),
    FontFamily.configure({
        types: ['textStyle'],
    }),
    Color.configure({types: [TextStyle.name, ListItem.name]}),
    // TextStyle.configure({}),
    TextAlign.configure({
        types: ['heading', 'paragraph'],
    }),
    Placeholder.configure({
        placeholder: 'Write something...',
    }),
    Subscript.configure({}),
    Superscript.configure({}),
    Underline.configure({}),
    TaskList,
    TaskItem.configure({
        nested: true,
    }),
    ImageResize,
    Link.configure({
        linkOnPaste: true,
        autolink: false,
        openOnClick: false,
        HTMLAttributes: {
            rel: 'noopener noreferrer',
            target: '_blank',
        },
    }),
    TextStyleExtended
]

export const TextEditor = ({text, setText}: { text: string, setText: (text: string) => void }) => {
    // const editor = useEditor({
    //     extensions,
    //     content: text,
    //     onUpdate({editor}) {
    //         setText(editor.getHTML());
    //     }
    // })
    //
    return <StyledEditor>
        <EditorProvider
            extensions={extensions}
            content={text}
            onUpdate={({editor}) => {
                setText(editor.getHTML());
            }}
            editorProps={{
                handleDrop: handleImageDrop,
                handlePaste: handleImagePaste
            }}
            slotBefore={<MenuBar/>}
        />
    </StyledEditor>
}
