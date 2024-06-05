import './App.css'
import {Typography} from "@mui/material";
import {TextEditor} from "./components/text-editor/Editor.tsx";
import {useCallback, useState} from "react";
import {StyledCode, StyledExample, StyledTab, StyledTabList, StyledTabPanel} from "./App.styled.tsx";
import {content} from "./content.ts";
import TabContext from '@mui/lab/TabContext';


function App() {
    const [text, setText] = useState(content);

    const updateText = useCallback((text: string) => {
        setText(text)
    }, [setText])

    const [value, setValue] = useState('1');

    const handleChange = useCallback((_: unknown, newValue: string) => {
        setValue(() => newValue);
    }, [setValue]);

    return (
        <>
            <Typography variant="h3" gutterBottom>
                FinTipTap Editor Demo
            </Typography>

            <TextEditor text={text} setText={updateText}/>

            <TabContext value={value}>
                <StyledTabList onChange={handleChange} centered>
                    <StyledTab label="HTML" value="1"/>
                    <StyledTab label="Source" value="2"/>
                </StyledTabList>

                <StyledTabPanel value="1">
                    <StyledExample>
                        <div dangerouslySetInnerHTML={{__html: text}}/>
                    </StyledExample>
                </StyledTabPanel>

                <StyledTabPanel value="2">
                    <StyledCode>
                        <pre style={{whiteSpace: 'pre-wrap', maxWidth: '100%'}}>{text}</pre>
                    </StyledCode>
                </StyledTabPanel>
            </TabContext>

        </>
    )
}

export default App
