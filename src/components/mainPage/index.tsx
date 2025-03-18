import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>App - Main page</h1>
            <div>
                <p>
                    <Link to='/first-page'>
                        First - оптимизация сложных вычислений с помощью WebWorkers многопоточность
                    </Link>
                </p>
                <p>
                    <Link to='/second-page'>
                        Second - lazy-загрузка, отложенная загрузка компонента до первого рендера
                    </Link>
                </p>
                <p>
                    <Link to='/third-page'>
                        Third - React Memo. Исключение перерисовки компонента, если свойства props остались неизменны
                    </Link>
                </p>
                <p>
                    <Link to='/fourth-page'>
                        Fourth - UseMemo(), UseCallback(). Хуки для мемоизации данных и функций
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default MainPage;
