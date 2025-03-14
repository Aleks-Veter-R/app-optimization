interface IProps {
    count: number;
}

const ChildFourth = (props: IProps) => {
    console.log('ReRender - ChildFourth page!');

    return (
        <div className='page-child-fourth-rerender'>
            <h5>{`ChildFourth content! Value count: ${props.count}`}</h5>
        </div>
    );
};

export default ChildFourth;
