import React, { Suspense, StrictMode, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store'
import './language/i18n';
import Loading from 'components/Loading';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
const App = lazy(() => import('./App'))
const About = lazy(() => import('views/About'))

root.render(
    <StrictMode>
        <Suspense fallback={<Loading />}>
            <Provider store={store}>
                <App />
            </Provider>
        </Suspense>
    </StrictMode>
);
reportWebVitals();
