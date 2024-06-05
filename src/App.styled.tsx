import {styled} from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";

export const StyledTabList = styled(TabList)`
    margin-top: 32px;

    &.MuiTabs-root {
        height: 24px;
        min-height: 24px;
        padding: 0;

        .MuiTabs-flexContainer {
            button.MuiButtonBase-root.MuiTab-root {
                min-height: 24px;
                max-height: 24px;
                height: 24px;

                span {
                    padding: 0;
                    height: 24px;
                    min-height: 24px;
                    max-height: 24px;
                }
            }
        }
    }
`

export const StyledTab = styled(Tab)`
    padding: 0;
`

export const StyledTabPanel = styled(TabPanel)`
    padding: 0;
    min-width: 700px;
    max-width: 700px;
    width: 700px;
`

export const StyledCode = styled('div')`
    text-align: left;
    width: 100%;
    overflow: auto;

    pre {
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        border-radius: 0 0 8px 8px;
    }
`

export const StyledExample = styled('div')`
    width: 100%;
    text-align: left;
    display: block;
    float: none;
    position: relative;

    p {
        white-space: pre;
    }

    p > img {
        float: none;
        display: flex;
    }
`