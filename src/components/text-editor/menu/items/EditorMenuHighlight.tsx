import React, {useCallback, useContext} from "react";
import {EditorMenuContext} from "../EditorMenuContext.tsx";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {StyledMenu, StyledMenuButton} from "../EditorDropdownMenu.styled.tsx";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import {StyledHighlightDropdown, StyledHLItem} from "./EditorMenuHighlight.styled.tsx";
import {Divider, MenuItem} from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const availableColors = [
    '#aabcf6',
    '#bdd1f6',
    '#dbe2ff',
    '#fa9797',
    '#ffa8a8',
    '#fcbbbb',
    '#fcc384',
    '#facc97',
    '#ffe0bc',
    '#ffec71',
    '#fff8a8',
    '#faf6c5',
    '#8eff78',
    '#b8ffa8',
    '#d8ffcf',
] as const

export const EditorMenuHighlight: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const {editor} = useContext(EditorMenuContext);

    const handleHighlight = useCallback((color: string) => {
        if (!editor) {
            return;
        }
        // @todo: select word under cursor
        editor.chain().focus().toggleHighlight({color: color}).run()
        handleClose()
    }, [editor])

    const handleReset = useCallback(() => {
        editor?.chain().focus().unsetHighlight().run()
        handleClose()
    }, [editor])


    if (!editor) {
        return null;
    }

    const currentColor = availableColors.find((color) => editor.isActive('highlight', {color})) || 'transparent'

    return (
        <>
            <StyledMenuButton
                disableElevation
                onClick={handleClick}
                iconOnly={true}
                endIcon={<KeyboardArrowDownOutlinedIcon/>}
            >
                <DriveFileRenameOutlineOutlinedIcon
                    sx={{background: currentColor, borderRadius: '50%', padding: '2px'}}/>
            </StyledMenuButton>
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <StyledHighlightDropdown>
                    {availableColors.map((color) => {
                        const active = editor.isActive('highlight', {color})
                        return <StyledHLItem
                            onClick={() => handleHighlight(color)}
                            key={color}
                            highlight={color}
                            active={active}>
                            {active && <CheckOutlinedIcon/>}
                        </StyledHLItem>
                    })}
                </StyledHighlightDropdown>
                <Divider/>

                <MenuItem
                    onClick={handleReset} disableRipple>
                    Remove highlighting
                </MenuItem>

            </StyledMenu>
        </>
    )
}
