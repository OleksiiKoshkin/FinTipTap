import React, {useCallback, useContext} from "react";
import {EditorMenuContext} from "../EditorMenuContext.tsx";
import {Editor} from "@tiptap/react";
import {Level} from "@tiptap/extension-heading";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {Divider, MenuItem} from "@mui/material";
import {StyledMenu, StyledMenuButton} from "../EditorDropdownMenu.styled.tsx";

const availableTextStyles = [
    {title: 'Title', name: 'heading', level: 1},
    {title: 'Heading 2', name: 'heading', level: 2},
    {title: 'Heading 3', name: 'heading', level: 3},
] as const

type AvailableTextStyleNames = typeof availableTextStyles[number]["name"];

const SelectedTextStyleIcon = ({editor, name, level, isDefault}: {
    editor: Editor,
    name?: AvailableTextStyleNames,
    level?: number
    isDefault?: boolean
}) => {
    const selected = name ? editor.isActive(name, {level}) : isDefault
    return <>
        {selected ? <CheckOutlinedIcon/> : <div className={'no-icon'}></div>}
    </>
}

export const EditorMenuTextStyles: React.FC = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const {editor} = useContext(EditorMenuContext);

    const handleStyle = useCallback((level: Level) => {
        editor?.chain().focus().toggleHeading({level}).run()

        handleClose()
    }, [editor])

    const handleReset = useCallback(() => {
        editor?.chain().focus().unsetAllMarks().run()
        editor?.chain().focus().clearNodes().run()
        handleClose()
    }, [editor])

    if (!editor) return null;

    const styleName = availableTextStyles.find((style) =>
        editor.isActive(style.name, {level: style.level}))?.title

    const isDefault = !styleName

    return (
        <>
            <StyledMenuButton
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownOutlinedIcon/>}
            >
                <label>{styleName || 'Default paragraph'}</label>
            </StyledMenuButton>

            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {availableTextStyles.map((style) => (
                    <MenuItem
                        key={style.title}
                        onClick={() => handleStyle(style.level)} disableRipple>
                        <SelectedTextStyleIcon editor={editor} name={style.name} level={style.level}/>
                        {style.title}
                    </MenuItem>
                ))}
                <Divider sx={{my: 0.5}}/>
                <MenuItem
                    onClick={handleReset} disableRipple>
                    <SelectedTextStyleIcon editor={editor} name={undefined} isDefault={isDefault}/>
                    Default paragraph
                </MenuItem>
            </StyledMenu>

        </>
    )
}
