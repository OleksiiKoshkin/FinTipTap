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

export const StyledEditorContainer = styled('div')`
    display: flex;
    max-width: 1100px;
    width: 100vw;
    min-height: 400px;
    border: 1px solid ${({theme}) => theme.palette.divider};
    background-color: #fff;
    border-radius: 8px;
    flex-flow: row wrap;
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
    p:has(img) {
        width: 100%;
        float: none;
        display: block;
    }

    p:has(img) > img {
        float: none;
        display: flex;
    }
`

export const StyledMainMenu = styled('div')`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    margin-bottom: 4em;
    align-content: center;
    align-items: center;
    justify-content: center;

    a {
        margin: 0 4px;
        display: flex;
        text-decoration: none;
        text-transform: uppercase;
        color: #059dde;
        font-size: 12px;
        transition: 0.3s all ease-in-out;

        &:before, &:after {
            content: '-';
            display: inline;
            color: transparent;
            height: 0 !important;
        }

        &:hover {
            color: #00668f;
        }

        &.active {
            color: #ffa600;
            text-decoration: underline;
            text-decoration-thickness: 4px;
            text-underline-offset: 4px;
        }
    }
`