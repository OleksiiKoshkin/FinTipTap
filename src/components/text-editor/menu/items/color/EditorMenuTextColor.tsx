import React, {useCallback, useContext} from "react";
import {EditorMenuContext} from "../../EditorMenuContext.tsx";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {StyledMenu, StyledMenuButton} from "../../EditorDropdownMenu.styled.tsx";
import {StyledHighlightDropdown, StyledHLItem} from "./EditorMenuHighlight.styled.tsx";
import {Divider, MenuItem} from "@mui/material";
import {textColors} from "./text-colors.tsx";
import {ColorIcon} from "./ColorIcon.tsx";

export const EditorMenuTextColor: React.FC = () => {
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
        editor.chain().focus().setColor(color || '#000000').run()
        handleClose()
    }, [editor])

    const handleReset = useCallback(() => {
        editor?.chain().focus().unsetColor().run()
        handleClose()
    }, [editor])


    if (!editor) {
        return null;
    }

    const currentColor = editor.getAttributes('textStyle').color || '#000000';
    const currentColorByCode = textColors.find((color) => color === currentColor)

    return (
        <>
            <StyledMenuButton
                disableElevation
                onClick={handleClick}
                iconOnly={true}
                endIcon={<KeyboardArrowDownOutlinedIcon/>}
            >
                <ColorIcon color={currentColorByCode} icon={'text'}/>
            </StyledMenuButton>
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <StyledHighlightDropdown>
                    {textColors.map((color) => {
                        const active = color === currentColorByCode;
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
                    Remove color
                </MenuItem>

            </StyledMenu>
        </>
    )
}
