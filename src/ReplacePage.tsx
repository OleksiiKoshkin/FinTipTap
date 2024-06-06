import './App.css'
import {TextEditor} from "./components/text-editor/Editor.tsx";
import React, {useCallback, useState} from "react";
import {content} from "./content.ts";
import {MainMenu} from "./MainMenu.tsx";


export const ReplacePage: React.FC = () => {
    const [text, setText] = useState(content);

    const updateText = useCallback((text: string) => {
        setText(text)
    }, [setText])

    return (
        <>
            <MainMenu/>

            <TextEditor text={text} setText={updateText}/>
        </>
    )
}
