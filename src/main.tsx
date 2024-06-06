import React from 'react'
import ReactDOM from 'react-dom/client'
import {HomePage} from './HomePage.tsx'
import './index.css'
import {createTheme, ThemeProvider, Typography} from "@mui/material";

import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import {ErrorPage} from "./ErrorPage.tsx";
import {MultiPage} from "./MultiPage.tsx";
import {ReplacePage} from "./ReplacePage.tsx";

const router = createBrowserRouter([
    {
        path: "",
        element: <HomePage/>,
        index: true,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "FinTipTap",
        element: <HomePage/>,
    },
    {
        path: "FinTipTap/dist",
        element: <HomePage/>,
    },
    {
        path: "FinTipTap/dist/",
        element: <HomePage/>,
    },
    {
        path: "FinTipTap/dist/home",
        element: <HomePage/>,
    },
    {
        path: "/FinTipTap",
        element: <HomePage/>,
    },
    {
        path: "/FinTipTap/",
        element: <HomePage/>,
    },
    {
        path: "/FinTipTap/home",
        element: <HomePage/>,
    },
    {
        path: "/home",
        element: <HomePage/>,
    },
    {
        path: "/replace",
        element: <ReplacePage/>,
    },
    {
        path: "/multi",
        element: <MultiPage/>,
    },
], {basename: 'https://oleksiikoshkin.github.io/FinTipTap/dist/'});

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffb600'
        }
    }
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
document.getElementById('bad-init').remove()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Typography variant="h2" gutterBottom>
                FinTipTap Editor Demo
            </Typography>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>,
)
