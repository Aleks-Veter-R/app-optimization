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
            </div>
        </div>
    );
}

export default MainPage;
