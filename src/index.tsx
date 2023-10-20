import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store'
import './language/i18n';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
reportWebVitals();