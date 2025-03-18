import React, { useEffect } from "react";

interface IProps {
    count: number;
    countObj: {
        count: number;
    };
    countCallBack: (value: string) => void;
}

const ChildFourthMemo = React.memo((props: IProps) => {
    console.log('ReRender - ChildFourthMemo page!');

    useEffect(() => {
            props.countCallBack(`${props.count}`)
        },
        [props.count]
    )

    return (
        <div className='page-child-fourth-rerender'>
            <h5>{`ChildFourthMemo content! Value count: ${props.count}`}</h5>
        </div>
    );
});

export default ChildFourthMemo;
