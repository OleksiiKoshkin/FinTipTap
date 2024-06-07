import './App.css'
import React, {useCallback, useState} from "react";
import {content} from "./content.ts";
import {StyledMultiContainer} from "./App.styled.tsx";
import {TextEditor} from "./components/text-editor/Editor.tsx";
import {ClickAwayListener} from '@mui/base/ClickAwayListener';


export const ReplaceableEditor: React.FC = () => {
    const [text, setText] = useState(content);
    const [editing, setEditing] = useState(false);

    const updateText = useCallback((text: string) => {
        setText(text)
    }, [setText])

    return (
        <>
            <ClickAwayListener
                onClickAway={() => setEditing(false)}>
                <StyledMultiContainer onClick={() => setEditing(true)}>
                    {editing && <TextEditor
                        text={text}
                        mode={'overlay'}
                        setText={updateText}/>}
                    {!editing && <div className={'div-html'} dangerouslySetInnerHTML={{__html: text}}/>}
                </StyledMultiContainer>
            </ClickAwayListener>
        </>
    )
}
