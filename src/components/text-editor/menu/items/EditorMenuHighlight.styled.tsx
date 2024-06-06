import {Box, styled} from "@mui/material";

export const StyledHighlightDropdown = styled(Box)`
    display: flex;
    flex-flow: row wrap;
    gap: 6px;
    padding: 6px;
    width: 160px;
    justify-content: center;
`

export const StyledHLItem = styled('span', {
    shouldForwardProp: (prop) => prop !== "highlight" && prop !== "active"
})<{ active: boolean, highlight: string }>`
    width: 22px;
    height: 22px;
    background-color: ${({highlight}) => highlight};
    transition: all .1s ease-in-out;

    transform-origin: center center;
    cursor: ${({active}) => active ? 'default' : 'pointer'};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: ${({active}) => active ? 'none' : 'scale(1.1)'};
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    }

    svg {
        width: 12px;
        height: 12px;
    }
`