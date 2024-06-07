import './App.css'
import React, {useCallback, useState} from "react";
import {content} from "./content.ts";
import {MainMenu} from "./MainMenu.tsx";
import {Typography} from "@mui/material";
import {StyledReplaceContainer} from "./App.styled.tsx";
import {TextEditor} from "./components/text-editor/Editor.tsx";
import {ClickAwayListener} from '@mui/base/ClickAwayListener';


export const ReplacePage: React.FC = () => {
    const [text, setText] = useState(content);
    const [editing, setEditing] = useState(false);

    const updateText = useCallback((text: string) => {
        setText(text)
    }, [setText])

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
                {editing && <>Click outside to stop editing</>}
                {!editing && <>Click to text container to start editing</>}
            </Typography>

        </>
    )
}
