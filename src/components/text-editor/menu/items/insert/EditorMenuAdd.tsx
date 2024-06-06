import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {MenuItem} from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {StyledMenu, StyledMenuButton} from "../../EditorDropdownMenu.styled.tsx";
import {InsertImage} from "./InsertImage.tsx";
import {InsertHR} from "./InsertHR.tsx";
import {InsertTable} from "./InsertTable.tsx";

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

                <MenuItem disableRipple>
                    <InsertHR onExecute={handleClose}/>
                </MenuItem>

                <MenuItem disableRipple>
                    <InsertTable onExecute={handleClose}/>
                </MenuItem>
            </StyledMenu>

        </>
    )
}
