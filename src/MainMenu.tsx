import {NavLink} from "react-router-dom";
import React from "react";
import {StyledMainMenu} from "./App.styled.tsx";

export const MainMenu: React.FC = () => {
    return <StyledMainMenu>
        <NavLink to={'/home'}>Standalone</NavLink>
        <NavLink to={'/replace'}>Replace</NavLink>
        <NavLink to={'/multi'}>Multiple</NavLink>
    </StyledMainMenu>
}