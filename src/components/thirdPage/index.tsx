import React from 'react';
import ChildFirst from './components/ChildFirst';
import './styles.scss';

interface IProps {
    value: number;
    setValue: (val: number) => void;
}

interface IState {
    count: number;
}

class ThirdPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    // Обработчик события, если нужно перерисовать
    // всю страницу при изменении props
    heandleReRenderPage = () => {
        this.props.setValue(this.props.value + 1);
    }

    // Обработчик события, если нужно перерисовать
    // всю страницу при изменении state
    heandleButtonOnClick = () => {
        this.setState((prevState: Readonly<IState>) => {
            const count = prevState.count
            return {
                count: count + 1,
            }
        })
    }

    // Для классового компонента
    // Условия ререндера, можно настроить и тут
    // Вернуть false, если перерисовка не нужна
    // shouldComponentUpdate(_nextProps: Readonly<IProps>, _nextState: Readonly<IState>): boolean {
    //     return true;
    // }

    render() {
        console.log('ReRender - reRender page!');

        return (
            <>
                <h1>ReRender page!</h1>
                <div className='rerender-control-block'>
                    <button
                        onClick={this.heandleButtonOnClick}
                    >
                        Start Rerender!
                    </button>
                    <button
                        onClick={this.heandleReRenderPage}
                    >
                        Перерисовать всю страницу
                    </button>
                </div>
                <ChildFirst count={this.state.count} />
            </>
        );
    }
};

export default ThirdPage;
