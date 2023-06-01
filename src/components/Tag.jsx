import './Tag.css';

const Tag = (props) => {
    const name = props.name;
    console.log(props)
    return (
        <>
            <span>{name}</span>
        </>
    )
}

export default Tag;