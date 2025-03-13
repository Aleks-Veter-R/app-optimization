import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import Root from './components/Root';
import { Main } from './components/Main';
import { Second } from './components/Second';

import './styles/App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Root />}>
                    <Route index element={<Main />} />
                    <Route
                        path='second-page'
                        element={
                            <Suspense fallback='Загрузка страницы...'>
                                <Second />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
