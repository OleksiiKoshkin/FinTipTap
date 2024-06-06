import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {Divider, MenuItem} from "@mui/material";
import {StyledMenu, StyledMenuButton} from "../../EditorDropdownMenu.styled.tsx";
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import {EditorActionMenuItem} from "../abstract-action/EditorActionMenuItem.tsx";
import {UnionCommands} from "@tiptap/react";

type MenuItem = {
    command: keyof UnionCommands | '-',
    title?: string
    params?: Record<string, unknown>
}

const menuItems: MenuItem[] = [
    {command: 'insertTable', title: 'Insert table', params: {rows: 3, cols: 3, withHeaderRow: true}},
    {command: '-'},
    {command: 'addRowBefore', title: 'Add row before'},
    {command: 'addRowAfter', title: 'Add row after'},
    {command: '-'},
    {command: 'deleteRow', title: 'Delete row'},
    {command: '-'},
    {command: 'addColumnBefore', title: 'Add column before'},
    {command: 'addColumnAfter', title: 'Add column after'},
    {command: '-'},
    {command: 'deleteColumn', title: 'Delete column'},
    {command: '-'},
    {command: 'mergeCells', title: 'Merge cells'},
    {command: 'splitCell', title: 'Split cells'},
    {command: '-'},
    {command: 'toggleHeaderRow', title: 'Toggle header for the first row'},
    {command: 'toggleHeaderColumn', title: 'Toggle header for the first column'},
    {command: 'toggleHeaderCell', title: 'Toggle header for the cell'},
    {command: '-'},
    {command: 'deleteTable', title: 'Delete table'},
]

export const EditorMenuTable: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <StyledMenuButton
                disableElevation
                onClick={handleClick}
                iconOnly={true}
                endIcon={<KeyboardArrowDownOutlinedIcon/>}
            >
                <TableChartOutlinedIcon/>
            </StyledMenuButton>

            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {menuItems.map((item, idx) => (item.command === '-'
                        ? <Divider key={idx} />
                        : <EditorActionMenuItem
                            key={idx}
                            onExecute={handleClose}
                            title={item.title}
                            actionName={item.command}
                            params={item.params}/>
                ))}

            </StyledMenu>

        </>
    )
}
