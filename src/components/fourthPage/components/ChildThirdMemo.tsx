import React from 'react';

interface IProps {
    count: number;
    count1: {
        a: number
    };
    fn: () => void;
}

const ChildThirdMemo = React.memo((props: IProps) => {
    console.log('ReRender - ChildThirdMemo page!');

    return (
        <div className='page-child-third-rerender'>
            <h5>{`ChildThirdMemo content! Value count: ${props.count}`}</h5>
            <p>
                Компонент с мемоизацией...
            </p>
        </div>
    );
});

export default ChildThirdMemo;
