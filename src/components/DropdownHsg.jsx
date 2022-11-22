import React, { useState } from 'react'
import chevron from '../assets/vector.svg'

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false) // on vérifie l'état du composant dropdown

    return isOpen ? ( 
        <div className="dropdown-hsg">
            <div
                className="dropdown-hsg__header"
                onClick={() => setIsOpen(false)}
            >
                <h2 className="dropdown-hsg__header__title">{title}</h2>
                <img
                    alt="chevron"
                    src={chevron}
                    className={
                        isOpen
                            ? 'dropdown-hsg__header__chevron dropdown-hsg__header__chevron--isOpen'
                            : 'dropdown-hsg__header__chevron'
                    }
                />
            </div>
        </div>
    ) : (
        <div className="dropdown-hsg">
            <div className="dropdown-hsg__header" onClick={() => setIsOpen(true)}>
                <h2 className="dropdown-hsg__header__title">{title}</h2>
                <img
                    alt="chevron"
                    src={chevron}
                    className={
                        isOpen
                            ? 'dropdown-hsg__header__chevron dropdown-hsg__header__chevron--isOpen'
                            : 'dropdown-hsg__header__chevron'
                    }
                />
            </div>
            <div className="dropdown-hsg__content">
                <div className="dropdown-hsg__content__text">{content}</div>
            </div>
        </div>
    )
}

export default Dropdown
