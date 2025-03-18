import ChildSecond from "./ChildSecond";

interface IProps {
    count: number;
}

const ChildFirst = (props: IProps) => {
    console.log('ReRender - ChildFirst page!');

    return (
        <div className='page-child-first-rerender'>
            <h2>{`ChildFirst content! Value count: ${props.count}`}</h2>
            <ChildSecond count={props.count} />
        </div>
    );
};

export default ChildFirst;
