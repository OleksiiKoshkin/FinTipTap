import {Box, Button, ButtonGroup, styled} from "@mui/material";
import {EditorMode} from "../Editor.tsx";

export const StyledEditorMenuContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "mode"
})<{ mode?: EditorMode }>`
    background-color: #f2f2f2;
    gap: 4px;
    padding: 4px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px 8px 0 0;
    position: ${({mode}) => mode === 'overflow' ? 'absolute' : 'relative'};
    transform: ${({mode}) => mode === 'overflow' ? 'translateY(calc(-100% - 8px))' : 'none'};

    box-shadow: ${({mode}) => mode === 'overflow' ? '0 0 0 8px #fff, 0 -2px 0 8px #ffa60050, -2px -1px 0 8px #ffa60050, 2px -1px 0 8px #ffa60050' : 'none'};

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
    margin-right: ${({theme}) => theme.spacing(.5)};
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
