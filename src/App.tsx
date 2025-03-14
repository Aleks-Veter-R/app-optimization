import { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import Root from './components/Root';
import { Main } from './components/Main';
import { First } from './components/First';
import { Second } from './components/Second';
import { Third } from './components/Third';

import './styles/App.scss';

const App = () => {
    // Изменение пропсов для страницы Third
    let [value, setValue] = useState(1);

    const setValuePage = (val: number) => {
        setValue(val);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Root />}>
                    <Route index element={<Main />} />
                    <Route
                        path='first-page'
                        element={<First />}
                    />
                    <Route
                        path='second-page'
                        element={
                            <Suspense fallback='Загрузка страницы...'>
                                <Second />
                            </Suspense>
                        }
                    />
                    <Route
                        path='third-page'
                        element={
                            <Third
                                value={value}
                                setValue={setValuePage}
                            />
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
