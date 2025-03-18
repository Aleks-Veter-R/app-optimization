import { useCallback, useMemo } from 'react';
import ChildThird from './ChildThird';
import ChildThirdMemo from './ChildThirdMemo';
import ChildFourth from './ChildFourth';
import ChildFourthClass from './ChildFourthClass';
import ChildFourthMemo from './ChildFourthMemo';

interface IProps {
    count: number;
}

// Если функция heandleChildThirdFn не использует React елементы (props, state, vars)
// компонента, то можно её вынести за пределы компонента и этого будет достаточно
const heandleChildThirdFn = () => {
    console.log(111);
}

const ChildSecond = (props: IProps) => {
    console.log('ReRender - ChildSecond page!');

    const thirdCount = props.count <= 7 ? 7 : props.count;

    // const heandleChildThirdFn = () => {
    //     console.log(111);
    // }

    const thirdCountMemo = props.count <= 8 ? 8 : props.count;

    const fourthCount = props.count <= 7 ? 7 : props.count;
    const fourthCountMemo = props.count <= 8 ? 8 : props.count;
    const fourthCountClass = props.count <= 9 ? 9 : props.count;

    const fn = (val: string) => console.log(val);

    return (
        <div className='page-child-second-rerender'>
            <h3>{`ChildSecond content! Value count: ${props.count}`}</h3>

            <ChildThird
                count={thirdCount}
                fn={() => heandleChildThirdFn()}
            />

            <ChildThirdMemo
                count={thirdCount}

                // Если пропс объект, то для мемоизации его необходимо
                // обернуть в useMemo, так как в React.memo идёт поверхностное сравнение
                count1={
                    useMemo(
                        () => ({
                            a: thirdCount
                        }),
                        [thirdCount]
                    )
                }

                // Каждый раз при перерисовке React будет создавать новую функцию
                // Поэтому этот пропс будет всегда считаться новым
                // Для оптимизации его необходимо обернуть в useCallback
                // fn={() => heandleChildThirdFn()}

                // Более хороший вариант
                // Если функция heandleChildThirdFn не использует React елементы (props, state, vars)
                // компонента, то можно её вынести за пределы компонента и этого будет достаточно
                // fn={heandleChildThirdFn}

                // Вариант, если нужно передать аргументы
                // fn={useCallback((a) => heandleChildThirdFn(a), [])}

                fn={useCallback(heandleChildThirdFn.bind(this), [])}
            />

            {useMemo(() => (
                <ChildThirdMemo
                    count={thirdCountMemo}
                    count1={{
                        a: thirdCount
                    }}
                    fn={() => heandleChildThirdFn()}
                />
            ), [thirdCountMemo])}

            { /* Мемоизация с помощью useMemo */ }
            {useMemo(() => <ChildFourth count={fourthCount} />, [fourthCount])}

            { /* Мемоизация с помощью PureComponent */ }
            <ChildFourthClass count={fourthCountClass} />

            { /* Мемоизация с помощью React.memo, если свойство не примитив применить к нему useMemo, useCallback */ }
            <ChildFourthMemo
                count={fourthCountMemo}
                countObj={useMemo(() => {
                    return {count: fourthCountMemo}}, [fourthCountMemo])}
                countCallBack={useCallback(fn, [fourthCountMemo])}
            />
        </div>
    );
};

export default ChildSecond;
