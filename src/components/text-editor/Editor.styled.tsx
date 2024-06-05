import {alpha, Box, Button, ButtonGroup, Menu, MenuProps, styled} from "@mui/material";

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

    div[contenteditable = true] {
        padding: 6px 12px;
        position: static;
    }

    .is-editor-empty:first-child::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        color: ${({theme}) => theme.palette.text.disabled};
        opacity: .7;
        font-size: 14px;
        content: attr(data-placeholder);
        transition: all .3s ease-in-out;
    }

    div[contenteditable = true]:focus-within {
        .is-editor-empty:first-child::before {
            opacity: 0;
        }
    }
`

export const StyledEditorMenuContainer = styled(Box)`
    background-color: #f2f2f2;
    gap: 4px;
    padding: 4px;
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

export const StyledMenuButton = styled(Button)`
    margin-right: ${({theme}) => theme.spacing(1)};

    &.MuiButtonBase-root {
        border: none;
        padding: 2px 6px;
        text-transform: none;
        min-width: 100px;
        max-width: 100px;
        width: 100px;
        justify-content: space-between;
        overflow: hidden;
        border-radius: 4px;
        position: relative;

        & label {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            text-align: left;
            display: block;
            padding-right: 16px;
            padding-left: 2px;
        }

        span {
            position: absolute;
            right: 6px;
        }
    }
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

export const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({theme}) => ({
    '&': {transform: 'translateY(-6px)'},
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        'hr': {
            height: 1,
            backgroundColor: theme.palette.divider,
            border: 'none'
        },
        '& .MuiMenuItem-root': {
            fontSize: 14,
            '& .no-icon': {
                width: 16,
                marginRight: theme.spacing(1.5),
            },
            '& .MuiSvgIcon-root': {
                fontSize: 16,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));