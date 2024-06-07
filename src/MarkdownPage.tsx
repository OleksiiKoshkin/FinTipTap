import './App.css'
import React, {useCallback, useEffect, useState} from "react";
import {markdown1, markdown2} from "./content.ts";
import {MainMenu} from "./MainMenu.tsx";
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {StyledCode, StyledExample, StyledReplaceContainer} from "./App.styled.tsx";
import {TextEditor} from "./components/text-editor/Editor.tsx";
import {ClickAwayListener} from '@mui/base/ClickAwayListener';

import * as showdown from 'showdown';

export const MarkdownPage: React.FC = () => {
    const [maybeMarkdown, setMaybeMarkdown] = useState(markdown1);
    const [text, setText] = useState('');
    const [editing, setEditing] = useState(false);

    const [currentMarkdown, setCurrentMarkdown] = React.useState('text1');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMarkdown((event.target as HTMLInputElement).value);
    };

    const updateText = useCallback((text: string) => {
        setText(text)
    }, [setText])

    useEffect(() => {
        const converter = new showdown.Converter();
        const md = currentMarkdown === 'text1' ? markdown1 : markdown2
        // for empty lines
        const md2 = md.replace(/\n{2,}/g, m => m.replace(/\n/g, "<br/>"));
        // also
        // https://github.com/showdownjs/showdown/issues/247

        setText(() => converter.makeHtml(md2))
        setMaybeMarkdown(() => md)
    }, [currentMarkdown])

    return (
        <>
            <MainMenu/>
            <p>

            </p>

            <ClickAwayListener
                onClickAway={() => setEditing(false)}>
                <StyledReplaceContainer onClick={() => setEditing(true)}>
                    {editing && <TextEditor
                        text={text}
                        mode={'overlay'}
                        setText={updateText}/>}
                    {!editing && <div className={'div-html'} dangerouslySetInnerHTML={{__html: text}}/>}
                </StyledReplaceContainer>
            </ClickAwayListener>

            <Typography variant="body2" color="textSecondary" mt={4}>
                Auto-convert existing markdown
            </Typography>

            <FormControl>
                <RadioGroup
                    row
                    defaultValue="text1"
                    name="radio-buttons-group"
                    value={currentMarkdown}
                    onChange={handleChange}
                >
                    <FormControlLabel value="text1" control={<Radio size={'small'}/>} label="Text 1"/>
                    <FormControlLabel value="text2" control={<Radio size={'small'}/>} label="Text 2"/>
                </RadioGroup>
            </FormControl>

            <StyledCode>
                <pre style={{whiteSpace: 'pre-wrap', maxWidth: '700px'}}>{maybeMarkdown}</pre>
            </StyledCode>

            <Typography variant="body2" color="textSecondary" mt={4}>
                Preview
            </Typography>

            <StyledExample>
                <div className={'div-html'} dangerouslySetInnerHTML={{__html: text}}/>
            </StyledExample>
        </>
    )
}
