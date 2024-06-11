import {useCurrentEditor} from '@tiptap/react'
import {EditorMenuUndoRedo} from "./items/EditorMenuUndoRedo.tsx";
import {EditorMenuFontStyles} from "./items/EditorMenuFontStyles.tsx";
import {EditorMenuLists} from "./items/EditorMenuLists.tsx";
import {EditorMenuLinks} from "./items/EditorMenuLinks.tsx";
import {EditorMenuQuote} from "./items/EditorMenuQuote.tsx";
import {EditorMenuSubSup} from "./items/EditorMenuSubSup.tsx";
import {EditorMenuAlign} from "./items/EditorMenuAlign.tsx";
import {EditorMenuContext} from "./EditorMenuContext.tsx";
import {EditorMenuFontFamily} from "./items/EditorMenuFontFamily.tsx";
import {EditorMenuTextStyles} from "./items/EditorMenuTextStyles.tsx";
import {EditorMenuAdd} from "./items/insert/EditorMenuAdd.tsx";
import {StyledEditorMenuContainer} from "./EditorMenu.styled.tsx";
import {EditorMenuFontSize} from "./items/EditorMenuFontSize.tsx";
import {EditorMenuTable} from "./items/table/EditorMenuTable.tsx";
import {EditorMenuHighlight} from "./items/color/EditorMenuHighlight.tsx";
import {EditorMode} from "../Editor.tsx";
import React from "react";
import {EditorMenuTextColor} from "./items/color/EditorMenuTextColor.tsx";
import {EditorMenuEmojis} from "./items/emodji/EditorMenuEmojis.tsx";

export type MenuBarProps = {
    mode: EditorMode
}

export const MenuBar: React.FC<MenuBarProps> = ({mode}) => {
    const {editor} = useCurrentEditor()
    if (!editor) {
        return null
    }

    return (
        <EditorMenuContext.Provider value={{editor}}>
            <StyledEditorMenuContainer mode={mode}>
                <EditorMenuUndoRedo/>

                <EditorMenuEmojis/>

                <EditorMenuFontStyles/>

                <EditorMenuAdd/>

                <EditorMenuFontFamily/>

                <EditorMenuTextStyles/>

                <EditorMenuFontSize/>

                <EditorMenuTextColor/>

                <EditorMenuHighlight/>

                <EditorMenuAlign/>

                <EditorMenuTable/>

                <EditorMenuLists/>

                <EditorMenuLinks/>

                <EditorMenuSubSup/>

                <EditorMenuQuote/>
            </StyledEditorMenuContainer>
        </EditorMenuContext.Provider>
    )
}
