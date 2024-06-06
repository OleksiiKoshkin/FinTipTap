import React, {useCallback, useContext} from "react";
import {EditorMenuContext} from "../EditorMenuContext.tsx";
import {Divider, MenuItem} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import {Editor} from "@tiptap/react";
import {StyledMenu, StyledMenuButton} from "../EditorDropdownMenu.styled.tsx";

const availableFontSizes = [
    {title: '8', size: '8'}, // can be "small" | "medium", etc.
    {title: '10', size: '10'},
    {title: '12', size: '12'},
    {title: '14', size: '14'},
    {title: '16', size: '16'},
    {title: '18', size: '18'},
    {title: '20', size: '20'},
    {title: '22', size: '22'},
    {title: '24', size: '24'},
    {title: '26', size: '26'},
    {title: '28', size: '28'},
    {title: '32', size: '32'},
    {title: '36', size: '36'},
    {title: '40', size: '40'},
] as const

type AvailableSizes = typeof availableFontSizes[number]["size"];

const defaultFontSize = 16;

const SelectedFontSizeIcon = ({editor, size, isDefault}: {
    editor: Editor,
    size?: AvailableSizes,
    isDefault?: boolean
}) => {
    const selected = size ? editor.isActive('textStyle', {fontSize: size}) : isDefault
    return <>
        {selected ? <CheckOutlinedIcon/> : <div className={'no-icon'}></div>}
    </>
}

export const EditorMenuFontSize: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const {editor} = useContext(EditorMenuContext);

    const handleFamily = useCallback((size: AvailableSizes) => {
        editor?.chain().focus().setFontSize(size).run()
        handleClose()
    }, [editor])

    const handleReset = useCallback(() => {
        editor?.chain().focus().unsetFontSize().run()
        handleClose()
    }, [editor])


    if (!editor) return null;

    const fontName = availableFontSizes.find((fontSize) =>
        editor.isActive('textStyle', {fontSize: fontSize.size}))?.title

    const isDefault = !fontName || fontName === defaultFontSize.toString() // @todo: get default item, if title will differ

    return (
        <>
            <StyledMenuButton
                disableElevation
                onClick={handleClick}
                short={true}
                endIcon={<KeyboardArrowDownOutlinedIcon/>}
            >
                <label>{fontName || defaultFontSize}</label>
            </StyledMenuButton>
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {availableFontSizes.map((fontFamily) => (
                    <MenuItem
                        key={fontFamily.title}
                        onClick={() => handleFamily(fontFamily.size)} disableRipple>
                        <SelectedFontSizeIcon editor={editor} size={fontFamily.size}/>
                        {fontFamily.title}
                    </MenuItem>
                ))}

                <Divider sx={{my: 0.5}}/>
                <MenuItem
                    onClick={handleReset} disableRipple>
                    <SelectedFontSizeIcon editor={editor} size={undefined} isDefault={isDefault}/>
                    Default size
                </MenuItem>
            </StyledMenu>
        </>
    )
}
