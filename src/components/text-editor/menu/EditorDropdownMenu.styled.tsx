import {alpha, Button, Menu, MenuProps, styled} from "@mui/material";

function getButtonSize(iconOnly?: boolean, short?: boolean): string {
    return iconOnly
        ? '40px'
        : short
            ? '50px'
            : '100px'
}

export const StyledMenuButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "iconOnly" && prop !== "short"
})<{ iconOnly?: boolean, short?: boolean }>`
    margin-right: ${({theme}) => theme.spacing(.5)};

    &.MuiButtonBase-root {
        border: none;
        padding: 2px 0;
        text-transform: none;
        min-width: ${({iconOnly, short}) => getButtonSize(iconOnly, short)};
        max-width: ${({iconOnly, short}) => getButtonSize(iconOnly, short)};
        width: ${({iconOnly, short}) => getButtonSize(iconOnly, short)};
        overflow: hidden;
        border-radius: 4px;
        position: relative;

        & label {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            display: block;
            padding-right: 16px;
            padding-left: 6px;
            text-align: center;
        }

        & > svg {
            margin-left: ${({iconOnly}) => iconOnly ? '-10px' : '0'};
        }

        span {
            position: absolute;
            right: 6px;
        }
    }
`

export const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
))`
    transform: translateY(-6px);

    .MuiPaper-root {
        border-radius: 6px;
        margin-top: ${({theme}) => theme.spacing(1)};
        color: ${({theme}) => theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300]};
        box-shadow: rgb(255, 255, 255) 0 0 0 0, rgba(0, 0, 0, 0.05) 0 0 0 1px, rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

        .MuiMenu-list {
            padding: 4px 0;
        }

        hr {
            height: 1px;
            background-color: ${({theme}) => theme.palette.divider};
            border: none;
            margin: ${({theme}) => theme.spacing(0.25)};
        }

        .MuiMenuItem-root {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            height: 30px;
            font-size: 13px;

            label {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                width: 100%;
                height: 100%;
            }

            .no-icon {
                width: 16px;
                margin-right: ${({theme}) => theme.spacing(1.5)};
            }

            .MuiSvgIcon-root {
                font-size: 16px;
                color: ${({theme}) => theme.palette.text.secondary};
                margin-right: ${({theme}) => theme.spacing(1.5)};
            }

            &:active {
                background-color: ${({theme}) => alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                )};
            }
        }
`