import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ContextProvider from "./context/AuthProvider";
import './index.css';

createRoot(
        document.getElementById('root')
).render(
        <Router>
                <ContextProvider>
                        <App />
                </ContextProvider>
        </Router>
)