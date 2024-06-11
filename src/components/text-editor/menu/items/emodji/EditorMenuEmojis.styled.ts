import {Box, styled} from "@mui/material";

export const StyleEmojisDropdown = styled(Box)`
    display: flex;
    flex-flow: row wrap;
    padding: 6px;

    emoji-picker {
        --num-columns: 10;
        --emoji-size: 20px;
        --border-size: 0;
    }
`