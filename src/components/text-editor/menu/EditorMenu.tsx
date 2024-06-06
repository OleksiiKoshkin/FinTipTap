import {useCurrentEditor} from '@tiptap/react'
import {EditorMenuUndoRedo} from "./items/EditorMenuUndoRedo.tsx";
import {EditorMenuFontStyles} from "./items/EditorMenuFontStyles.tsx";
import {EditorMenuLists} from "./items/EditorMenuLists.tsx";
import {EditorMenuLinks} from "./items/EditorMenuLinks.tsx";
import {EditorMenuQuote} from "./items/EditorMenuQuote.tsx";
import {EditorMenuPickColor} from "./items/EditorMenuPickColor.tsx";
import {EditorMenuSubSup} from "./items/EditorMenuSubSup.tsx";
import {EditorMenuAlign} from "./items/EditorMenuAlign.tsx";
import {EditorMenuContext} from "./EditorMenuContext.tsx";
import {EditorMenuFontFamily} from "./items/EditorMenuFontFamily.tsx";
import {EditorMenuTextStyles} from "./items/EditorMenuTextStyles.tsx";
import {EditorMenuAdd} from "./items/insert/EditorMenuAdd.tsx";
import {StyledEditorMenuContainer} from "./EditorMenu.styled.tsx";
import {EditorMenuFontSize} from "./items/EditorMenuFontSize.tsx";

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

                <EditorMenuTextStyles/>

                <EditorMenuFontSize/>

                <EditorMenuAlign/>

                <EditorMenuSubSup/>

                <EditorMenuQuote/>

                <EditorMenuLists/>

                <EditorMenuAdd/>

                <EditorMenuLinks/>


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
