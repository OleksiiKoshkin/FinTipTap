import {useRouteError} from "react-router-dom";
import {Alert, AlertTitle, Typography} from "@mui/material";
import React from "react";
import {MainMenu} from "./MainMenu.tsx";

export const ErrorPage: React.FC = () => {
    const error: any = useRouteError();
    console.error(error);

    return (
        <>
            <Alert variant="filled" severity="error" sx={{textAlign: 'left'}}>
                <AlertTitle>Oops</AlertTitle>
                <Typography>Sorry, an unexpected error has occurred.</Typography>
                <div>
                    <i>{error.statusText || error.message}</i>
                </div>
            </Alert>

            <MainMenu/>
        </>
    );
}