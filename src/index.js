import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from './App';

import { PublicClientApplication } from '@azure/msal-browser';

const pca = new PublicClientApplication({
    auth: {
        clientId: '0e188131-7628-48a9-aede-ee0ced19c163',
        authority: 'https://login.microsoftonline.com/0a1d7995-b734-4d29-8b90-ba9a075bdd6d',
        redirectUri: '/',
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App msalInstance={pca}/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
