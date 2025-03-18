import React, { Profiler } from "react";

interface IProps {
    count: number;
}

interface IState {
    inputValue: string;
}

// Пример мемоизации для классового компонента
// class ChildFourthClass extends React.Component<IProps> {
class ChildFourthClass extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            inputValue: '',
        }
    }

    // Условия ререндера, можно настроить и тут
    // shouldComponentUpdate(_nextProps: Readonly<IProps>, _nextState: Readonly<IState>): boolean {
    //     return true;
    // }

    handleOnChangeInput(
        _attr_1: string,
        _attr_2: string,
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        // console.log(event.target.value);
        // console.log(attr_1);
        // console.log(attr_2);

        this.setState({
            inputValue: event.target.value,
        })
    }

    heandlerOnRender = (
        id: any,
        phase: any,
        actualDuration: any,
        baseDuration: any,
        startTime: any,
        commitTime: any
    ) => {
        console.log('id', id);
        console.log('phase', phase);
        console.log('actualDuration', actualDuration);
        console.log('baseDuration', baseDuration);
        console.log('startTime', startTime);
        console.log('commitTime', commitTime);
    }

    render() {
        console.log('ReRender - ChildFourthClass page!');

        return (
            <Profiler id='ChildFourthClass' onRender={this.heandlerOnRender.bind(this)}>
                <div className='page-child-fourth-rerender'>
                    <h5>{`ChildFourthClass content! Value count: ${this.props.count}`}</h5>
                    <input
                        onChange={this.handleOnChangeInput.bind(this, 'aaaa', 'bbbb')}
                        value={this.state.inputValue}
                    />
                </div>
            </Profiler>
        )
    }
}

export default ChildFourthClass;
