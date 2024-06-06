import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {MenuItem} from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {StyledMenu, StyledMenuButton} from "../../EditorDropdownMenu.styled.tsx";
import {InsertImage} from "./InsertImage.tsx";
import {EditorActionMenuItem} from "../abstract-action/EditorActionMenuItem.tsx";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";

export type InsertMenuItemProps = {
    onExecute: () => void
}

export const EditorMenuAdd: React.FC = () => {
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
                <AddCircleOutlineOutlinedIcon/>
            </StyledMenuButton>

            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem disableRipple>
                    <InsertImage onExecute={handleClose}/>
                </MenuItem>

                <EditorActionMenuItem
                    onExecute={handleClose}
                    actionName={'setHorizontalRule'}>
                    <HorizontalRuleOutlinedIcon/>
                    Insert horizontal rule
                </EditorActionMenuItem>

                <EditorActionMenuItem
                    onExecute={handleClose}
                    actionName={'insertTable'}
                    params={{rows: 3, cols: 3, withHeaderRow: true}}>
                    <TableChartOutlinedIcon/>
                    Insert table
                </EditorActionMenuItem>
            </StyledMenu>
        </>
    )
}
