import './App.css'
import {TextEditor} from "./components/text-editor/Editor.tsx";
import React, {useCallback, useState} from "react";
import {
    StyledCode,
    StyledEditorContainer,
    StyledExample,
    StyledTab,
    StyledTabList,
    StyledTabPanel
} from "./App.styled.tsx";
import {content1} from "./content.ts";
import TabContext from '@mui/lab/TabContext';
import {MainMenu} from "./MainMenu.tsx";

export const HomePage: React.FC = () => {
    const [text, setText] = useState(content1);

    const updateText = useCallback((text: string) => {
        setText(text)
    }, [setText])

    const [value, setValue] = useState('1');

    const handleChange = useCallback((_: unknown, newValue: string) => {
        setValue(() => newValue);
    }, [setValue]);

    return (
        <>
            <MainMenu/>

            <StyledEditorContainer>
                <TextEditor text={text} setText={updateText}/>
            </StyledEditorContainer>

            <TabContext value={value}>
                <StyledTabList onChange={handleChange} centered>
                    <StyledTab label="HTML" value="1"/>
                    <StyledTab label="Source" value="2"/>
                </StyledTabList>

                <StyledTabPanel value="1">
                    <StyledExample>
                        <div className={'div-html'} dangerouslySetInnerHTML={{__html: text}}/>
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
