import {Box, styled} from "@mui/material";

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
    position: relative;

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

    div[contenteditable = true] {
        padding: 6px 12px;
        position: static;
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
