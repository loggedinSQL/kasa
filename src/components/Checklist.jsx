const Checklist = ({ elements }) => {
    return (
        <ul className="cheklist">
            {elements.map((element) => (
                <li key={element} className='checklist__element'>{element}</li>
            ))}
        </ul>
    )
}

export default Checklist