import {useCurrentEditor} from '@tiptap/react'
import {StyledEditorMenuContainer} from "../Editor.styled.tsx";
import {EditorMenuUndoRedo} from "./items/EditorMenuUndoRedo.tsx";
import {EditorMenuFontStyles} from "./items/EditorMenuFontStyles.tsx";
import {EditorMenuResetStyles} from "./items/EditorMenuResetStyles.tsx";
import {EditorMenuHeadings} from "./items/EditorMenuHeadings.tsx";
import {EditorMenuLists} from "./items/EditorMenuLists.tsx";
import {EditorMenuLinks} from "./items/EditorMenuLinks.tsx";
import {EditorMenuQuotesHR} from "./items/EditorMenuQuotesHR.tsx";
import {EditorMenuPickColor} from "./items/EditorMenuPickColor.tsx";
import {EditorMenuSubSup} from "./items/EditorMenuSubSup.tsx";
import {EditorMenuInsertImage} from "./items/EditorMenuInsertImage.tsx";
import {EditorMenuAlign} from "./items/EditorMenuAlign.tsx";
import {EditorMenuContext} from "./EditorMenuContext.tsx";
import {EditorMenuFontFamily} from "./items/EditorMenuFontFamily.tsx";

export const MenuBar = () => {
    const {editor} = useCurrentEditor()
    if (!editor) {
        return null
    }

    return (
        <EditorMenuContext.Provider value={{editor}}>
            <StyledEditorMenuContainer>
                <EditorMenuUndoRedo/>

                <EditorMenuFontStyles/>

                <EditorMenuFontFamily/>

                <EditorMenuAlign/>

                <EditorMenuSubSup/>

                <EditorMenuResetStyles/>

                <EditorMenuHeadings/>

                <EditorMenuLists/>

                <EditorMenuInsertImage/>

                <EditorMenuLinks/>

                <EditorMenuQuotesHR/>

                <EditorMenuPickColor/>

                {/*<button*/}
                {/*    onClick={() => editor.chain().focus().setColor('#958DF1').run()}*/}
                {/*    className={editor.isActive('textStyle', {color: '#958DF1'}) ? 'is-active' : ''}*/}
                {/*>*/}
                {/*    purple*/}
                {/*</button>*/}
            </StyledEditorMenuContainer>
        </EditorMenuContext.Provider>
    )
}
