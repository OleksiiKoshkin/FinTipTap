import React, {useCallback, useContext} from "react";
import {EditorMenuContext} from "../../EditorMenuContext.tsx";
import {InsertMenuItemProps} from "./EditorMenuAdd.tsx";
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';

export const InsertTable: React.FC<InsertMenuItemProps> = ({onExecute}) => {
    const {editor} = useContext(EditorMenuContext);

    const insertTable = useCallback(() => {
        onExecute()
        editor?.chain().focus().insertTable({rows: 3, cols: 3, withHeaderRow: true}).run()
    }, [editor, onExecute])

    if (!editor) return null;

    return (
        <label
            onClick={insertTable}>
            <BackupTableOutlinedIcon/> Insert table
        </label>
    )
}
