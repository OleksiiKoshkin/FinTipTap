import {Box, Button, ButtonGroup, styled} from "@mui/material";

export const StyledEditor = styled(Box)`
    min-width: 700px;
    max-width: 700px;
    min-height: 400px;
    border: 1px solid ${({theme}) => theme.palette.divider};
    background-color: #fff;
    border-radius: 8px;
    text-align: left;
    display: flex;
    flex-flow: column nowrap;
    line-height: 1;

    div[contenteditable = true] {
        padding: 6px 12px;
    }

    .is-editor-empty:first-child::before {
        color: #adb5bd;
        content: attr(data-placeholder);
        float: left;
        height: 0;
        pointer-events: none;
    }
`

export const StyledEditorMenuContainer = styled(Box)`
    background-color: #f2f2f2;
    gap: 4px;
    padding: 4px 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px 8px 0 0;

    input[type=color] {
        border-color: #f2f2f2;
        border-radius: 4px;
        background-color: #fffffff0;
        height: 24px;
        width: 32px;
        cursor: pointer;
    }

    .MuiButtonBase-root {
        height: 24px;
        padding: 0;
        min-width: 24px !important;
        border-color: #f2f2f2;
        color: #333;
        font-size: 12px;
        background-color: #ffffff80;

        &:hover {
            background-color: #ffff;
            border-color: transparent;
        }

        &.Mui-disabled {
            background: transparent;
            color: ${({theme}) => theme.palette.text.disabled};
            opacity: .5;
        }
    }

    .MuiButtonBase-root.MuiButton-contained {
        background-color: ${({theme}) => theme.palette.primary.main};
        color: ${({theme}) => theme.palette.primary.contrastText};
        box-shadow: none;
    }

    font-size: 11px;

    svg {
        width: 14px;
        height: 14px;
    }
`

export const StyledEditorMenuGroup = styled(ButtonGroup)`
    margin-right: ${({theme}) => theme.spacing(1)};
    display: flex;
    flex-flow: row wrap;

`

export const StyledButton = styled(Button)`
    // should be on CSS level
`

export const VisuallyHiddenInput = styled('input')`
    clip: rect(0 0 0 0);
    clip-Path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
`