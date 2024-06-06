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
import {TextAlign} from "@tiptap/extension-text-align";
import Typography from '@tiptap/extension-typography'
import {FontFamily} from "@tiptap/extension-font-family";
import {TextStyleExtended} from "./extensions/font-size/FontSize.ts";
import {TableRow} from "@tiptap/extension-table-row";
import {Table} from "@tiptap/extension-table";
import {TableHeader} from "@tiptap/extension-table-header";
import {TableCell} from "@tiptap/extension-table-cell";
import Highlight from '@tiptap/extension-highlight'

// https://github.com/bae-sh/tiptap-extension-resize-image/tree/main
//import {ImageResize} from "tiptap-extension-resize-image";
import {ImageResize} from "./extensions/image/ImageResize.ts";
import {handleImageDrop} from "./extensions/image/drop-image.ts";
import {handleImagePaste} from "./extensions/image/paste-image.ts";
import React from "react";

const extensions = [
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false,
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false,
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
    TextStyleExtended,
    Table.configure({
        resizable: true,
        HTMLAttributes: {
            class: 'editor-table',
        },
    }),
    TableRow,
    TableHeader,
    // Default TableCell
    TableCell,
    // Custom TableCell with backgroundColor attribute
    // CustomTableCell,
    Highlight.configure({multicolor: true})
]

export type EditorMode = 'embed' | 'overflow'

export type TextEditorProps = {
    text: string
    setText: (text: string) => void
    mode?: EditorMode
}

export const TextEditor: React.FC<TextEditorProps> = ({text, setText, mode = 'embed'}) => {
    return <StyledEditor mode={mode}>
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
            slotBefore={<MenuBar mode={mode}/>}
        />
    </StyledEditor>
}
