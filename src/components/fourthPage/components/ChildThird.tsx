interface IProps {
    count: number;
    fn: () => void;
}

const ChildThird = (props: IProps) => {
    console.log('ReRender - ChildThird page!');

    return (
        <div className='page-child-third-rerender'>
            <h5>{`ChildThird content! Value count: ${props.count}`}</h5>
            <p>
                Компонент без применения каких либо методов оптимизации!
                Перерисовка происходит после каждой перерисовки родителя...
            </p>
        </div>
    );
};

export default ChildThird;
