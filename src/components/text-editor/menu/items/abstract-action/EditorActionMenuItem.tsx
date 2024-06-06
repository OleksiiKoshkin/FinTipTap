import React, {PropsWithChildren, ReactNode, useCallback, useContext} from "react";
import {EditorMenuContext} from "../../EditorMenuContext.tsx";
import {MenuItem} from "@mui/material";
import {UnionCommands} from "@tiptap/react";

type PerformTableActionProps = {
    onExecute: () => void
    title?: string
    icon?: ReactNode
    actionName: keyof UnionCommands
    params?: Record<string, unknown>
} & PropsWithChildren;

export const EditorActionMenuItem: React.FC<PerformTableActionProps> = (
    {
        onExecute,
        title,
        actionName,
        icon,
        params,
        children
    }) => {
    const {editor} = useContext(EditorMenuContext);

    const action = editor?.commands[actionName] as (params?: unknown) => void;
    const canPerformFn = editor?.can()[actionName] as () => boolean;

    const process = useCallback(() => {
        onExecute()
        action(params)
        editor?.chain().focus().run()
    }, [editor, action, onExecute, params])

    if (!editor) return null;

    const canExecute = canPerformFn()

    return (
        <MenuItem
            disabled={!canExecute}
            onClick={process}>
            {icon}
            {title}
            {children}
        </MenuItem>
    )
}
