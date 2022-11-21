const Host = ({ host }) => {
    return (
        <ul className="host">
            <li className="host__name">{host.name}</li>
            <li className="host__img">
                <img
                    src={host.picture}
                    alt="the host"
                    className="host__img__element"
                />
            </li>
        </ul>
    )
}

export default Host
