const Tags = ({ elements }) => {
    return (
        <ul className="tags">
            {elements.map((element) => (
                <li key={element} className='tags__element'>{element}</li>
            ))}
        </ul>
    )
}

export default Tags
