import {Box, styled} from "@mui/material";

export const StyledHighlightDropdown = styled(Box)`
    display: flex;
    flex-flow: row wrap;
    gap: 2px;
    padding: 6px;
    width: 260px;
    justify-content: center;
`

export const StyledHLItem = styled('span', {
    shouldForwardProp: (prop) => prop !== "highlight" && prop !== "active"
})<{ active: boolean, highlight: string }>`
    width: 22px;
    height: 22px;
    background-color: ${({highlight}) => highlight};
    transition: all .1s ease-in-out;
    border-radius: 50%;

    transform-origin: center center;
    cursor: ${({active}) => active ? 'default' : 'pointer'};
    border: 1px solid ${({theme}) => theme.palette.divider};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: ${({active}) => active ? 'none' : 'scale(1.1)'};
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    }

    position: relative;

    &:after {
        content: '✔';
        display: ${({active}) => active ? 'block' : 'none'};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 12px;
        text-shadow: 0 0 2px #ffffff;
        -webkit-text-stroke: 1px #ffffffa0;
        -webkit-text-fill-color: #000;
        -webkit-animation: fill 0.5s infinite alternate;
    }
`


export const StyledColorIconRoot = styled('div')`
    width: 20px;
    height: 20px;
    position: relative;
    margin-left: -8px;
`

export const StyledColorHighlight = styled('div', {
    shouldForwardProp: (prop) => prop !== "highlight"
})<{ highlight: string }>`
    position: absolute;
    border: 1px solid ${({theme}) => theme.palette.divider};
    background-color: ${({highlight}) => highlight || "#fff"};
    display: block;
    bottom: 3px;
    left: 1px;
    right: 1px;
    height: 3px;
`