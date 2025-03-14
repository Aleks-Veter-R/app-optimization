import ChildThird from "./ChildThird";

interface IProps {
    count: number;
}

const ChildSecond = (props: IProps) => {
    console.log('ReRender - ChildSecond page!');

    return (
        <div className='page-child-second-rerender'>
            <h3>{`ChildSecond content! Value count: ${props.count}`}</h3>
            <ChildThird count={props.count} />
        </div>
    );
};

export default ChildSecond;
