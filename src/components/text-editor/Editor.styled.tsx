import {styled} from "@mui/material";
import {EditorMode} from "./Editor.tsx";

export const StyledEditor = styled('div', {
    shouldForwardProp: (prop) => prop !== "mode"
})<{ mode?: EditorMode }>`
    text-align: left;
    display: flex;
    flex-flow: column nowrap;
    line-height: 1;
    position: relative;
    max-height: 100%;

    flex-grow: 2;

    .MuiButtonBase-root:focus {
        focus-ring: none;
        outline: none;
    }

    .tableWrapper {
        overflow-x: auto;
    }

    .resize-cursor {
        cursor: ew-resize;
        cursor: col-resize;
    }

    & > div:nth-child(2) {
        width: 100%;
        display: flex;
        height: 100%;
        transition: all 2s ease-in-out;
        background-color: #fff;
        border-radius: 0 0 8px 8px;
    }

    div[contenteditable] {
        transition: all .2s ease-in-out;
    }

    div[contenteditable = true] {
        position: static;
        flex-grow: 2;
        padding: ${({mode}) => mode === 'overflow' ? '0' : '6px 12px'};
        box-shadow: ${({mode}) => mode === 'overflow' ? '0 0 0 8px #fff, 0 0 0 10px #ffa60050' : 'none'};
        border-radius: ${({mode}) => mode === 'overflow' ? '0 0 8px 8px' : 0};
        overflow-y: ${({mode}) => mode === 'overflow' ? 'auto' : 'visible'};
    }

    .is-editor-empty:first-of-type::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        color: ${({theme}) => theme.palette.text.disabled};
        opacity: .7;
        font-size: 14px;
        content: attr(data-placeholder);
        transition: all .4s ease-in-out;
        cursor: pointer;
    }

    div[contenteditable = true]:focus-within {
        .is-editor-empty:first-of-type::before {
            opacity: 0;
        }
    }
`
