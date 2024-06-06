import React, {useCallback, useContext} from "react";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import {EditorMenuContext} from "../../EditorMenuContext.tsx";
import {InsertMenuItemProps} from "./EditorMenuAdd.tsx";

export const InsertHR: React.FC<InsertMenuItemProps> = ({onExecute}) => {
    const {editor} = useContext(EditorMenuContext);

    const insertHR = useCallback(() => {
        onExecute()
        editor?.chain().focus().setHorizontalRule().run()
    }, [editor, onExecute])

    if (!editor) return null;

    return (
        <label
            onClick={insertHR}>
            <HorizontalRuleOutlinedIcon/> Insert horizontal rule
        </label>
    )
}
