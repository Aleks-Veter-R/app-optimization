import { useState } from 'react';
import ChildFirst from './components/ChildFirst';
import './styles.scss';

const FourthPage = () => {
    let [count, setCount] = useState(0);

    // Обработчик события, если нужно перерисовать
    // всю страницу при изменении state
    const heandleButtonOnClick = () => {
        setCount(count + 1);
    }

    console.log('Fourth - reRender FourthPage page!');

    return (
        <div>
            <h1>App - Fourth page</h1>
            <div className='rerender-control-block'>
                <button
                    onClick={heandleButtonOnClick}
                >
                    Start Rerender!
                </button>
            </div>
            <ChildFirst count={count} />
        </div>
    );
}

export default FourthPage;
