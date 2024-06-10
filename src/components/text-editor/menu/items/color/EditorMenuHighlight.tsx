import React, {useCallback, useContext} from "react";
import {EditorMenuContext} from "../../EditorMenuContext.tsx";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {StyledMenu, StyledMenuButton} from "../../EditorDropdownMenu.styled.tsx";
import {StyledHighlightDropdown, StyledHLItem} from "./EditorMenuHighlight.styled.tsx";
import {Divider, MenuItem} from "@mui/material";
import {textColors} from "./text-colors.tsx";
import {ColorIcon} from "./ColorIcon.tsx";

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

    const currentColor = textColors.find((color) => editor.isActive('highlight', {color})) || '#fff'

    return (
        <>
            <StyledMenuButton
                disableElevation
                onClick={handleClick}
                iconOnly={true}
                endIcon={<KeyboardArrowDownOutlinedIcon/>}
            >
                <ColorIcon color={currentColor} icon={'fill'}/>
            </StyledMenuButton>
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <StyledHighlightDropdown>
                    {textColors.map((color) => {
                        const active = editor.isActive('highlight', {color})
                        return <StyledHLItem
                            onClick={() => handleHighlight(color)}
                            key={color}
                            highlight={color}
                            active={active}>
                        </StyledHLItem>
                    })}
                </StyledHighlightDropdown>
                <Divider/>

                <MenuItem
                    onClick={handleReset} disableRipple>
                    Remove background
                </MenuItem>

            </StyledMenu>
        </>
    )
}
