import { useCallback, useMemo } from 'react';
import ChildFourth from './ChildFourth';
import ChildFourthClass from './ChildFourthClass';
import ChildFourthMemo from './ChildFourthMemo';

interface IProps {
    count: number;
}

const ChildThird = (props: IProps) => {
    console.log('ReRender - ChildThird page!');

    const fourthCount = props.count <= 7 ? 7 : props.count;
    const fourthCountMemo = props.count <= 8 ? 8 : props.count;
    const fourthCountClass = props.count <= 9 ? 9 : props.count;

    const fn = (val: string) => console.log(val);

    return (
        <div className='page-child-third-rerender'>
            <h4>{`ChildThird content! Value count: ${props.count}`}</h4>

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

export default ChildThird;
