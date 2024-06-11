import React, {useCallback, useContext} from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {StyledMenu, StyledMenuButton} from "../../EditorDropdownMenu.styled.tsx";
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import {StyleEmojisDropdown} from "./EditorMenuEmojis.styled.ts";
// https://github.com/nolanlawson/emoji-picker-element
import 'emoji-picker-element';
import {EmojiPicker} from "./EmojiPicker.tsx";
import {EditorMenuContext} from "../../EditorMenuContext.tsx";

export const EditorMenuEmojis: React.FC = () => {
    const {editor} = useContext(EditorMenuContext);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePick = useCallback((emoji: string) => {
        setAnchorEl(() => null);

        editor?.chain().focus().insertContent(emoji, {
            parseOptions: {
                preserveWhitespace: false,
            },
        }).run()
    }, [editor]);

    if (!editor) {
        return null;
    }

    return (
        <>
            <StyledMenuButton
                disableElevation
                disabled={!editor.can()
                    .chain()
                    .focus()
                    .insertContent('a')
                    .run()}
                onClick={handleClick}
                iconOnly={true}
                endIcon={<KeyboardArrowDownOutlinedIcon/>}
            >
                <SentimentSatisfiedOutlinedIcon/>
            </StyledMenuButton>

            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <StyleEmojisDropdown>
                    <EmojiPicker onClick={handlePick}/>
                </StyleEmojisDropdown>
            </StyledMenu>
        </>
    )
}
