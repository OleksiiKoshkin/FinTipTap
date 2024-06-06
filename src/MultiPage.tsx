import './App.css'
import React from "react";
import {MainMenu} from "./MainMenu.tsx";
import {ReplaceableEditor} from "./ReplaceableEditorComponent.tsx";
import {Typography} from "@mui/material";
import {StyledMultiContainer1, StyledMultiContainer2, StyledMultiContainer3} from "./App.styled.tsx";


export const MultiPage: React.FC = () => {
    return (
        <>
            <MainMenu/>

            <StyledMultiContainer1>
                <ReplaceableEditor/>
                <ReplaceableEditor/>
            </StyledMultiContainer1>

            <StyledMultiContainer2>
                <ReplaceableEditor/>
                <ReplaceableEditor/>
            </StyledMultiContainer2>

            <StyledMultiContainer3>
                <ReplaceableEditor/>
                <ReplaceableEditor/>
                <ReplaceableEditor/>
            </StyledMultiContainer3>

            <Typography variant="body2" color="textSecondary">
                Click to text container to start editing. Click outside to stop editing.
            </Typography>
        </>
    )
}
