import React, {useCallback, useContext} from "react";
import {EditorMenuContext} from "../EditorMenuContext.tsx";
import {Divider, MenuItem} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import {Editor} from "@tiptap/react";
import {StyledMenu, StyledMenuButton} from "../EditorDropdownMenu.styled.tsx";

const availableFontFamily = [
    {title: 'Comic Sans MS', family: 'Comic Sans MS, Comic Sans'},
    {title: 'Monospace', family: 'monospace'},
    {title: 'Cursive', family: 'cursive'},
] as const

type AvailableFamilies = typeof availableFontFamily[number]["family"];

const SelectedFontIcon = ({editor, family, isDefault}: {
    editor: Editor,
    family?: AvailableFamilies,
    isDefault?: boolean
}) => {
    const selected = family ? editor.isActive('textStyle', {fontFamily: family}) : isDefault
    return <>
        {selected ? <CheckOutlinedIcon/> : <div className={'no-icon'}></div>}
    </>
}

export const EditorMenuFontFamily: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const {editor} = useContext(EditorMenuContext);

    const handleFamily = useCallback((family: AvailableFamilies) => {
        editor?.chain().focus().setFontFamily(family).run()
        handleClose()
    }, [editor])

    const handleReset = useCallback(() => {
        editor?.chain().focus().unsetFontFamily().run()
        handleClose()
    }, [editor])


    if (!editor) return null;

    const fontName = availableFontFamily.find((fontFamily) =>
        editor.isActive('textStyle', {fontFamily: fontFamily.family}))?.title

    const isDefault = !fontName

    return (
        <>
            <StyledMenuButton
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownOutlinedIcon/>}
            >
                <label>{fontName || 'Default font'}</label>
            </StyledMenuButton>
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {availableFontFamily.map((fontFamily) => (
                    <MenuItem
                        key={fontFamily.title}
                        onClick={() => handleFamily(fontFamily.family)} disableRipple>
                        <SelectedFontIcon editor={editor} family={fontFamily.family}/>
                        {fontFamily.title}
                    </MenuItem>
                ))}

                <Divider sx={{my: 0.5}}/>
                <MenuItem
                    onClick={handleReset} disableRipple>
                    <SelectedFontIcon editor={editor} family={undefined} isDefault={isDefault}/>
                    Default
                </MenuItem>
            </StyledMenu>
        </>
    )
}
