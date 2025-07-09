
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Correct: relative to src/
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";  // Correct: relative to src/
// FIX: Corrected import path for StoreProvider
import { StoreProvider } from './hooks/useGlobalReducer';

const Main = () => {
    return (
        <React.StrictMode>
            <StoreProvider>
                <RouterProvider router={router}>
                </RouterProvider>
            </StoreProvider>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);