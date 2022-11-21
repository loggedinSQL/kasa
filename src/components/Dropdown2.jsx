import React, { useState } from 'react'
import chevron from '../assets/vector.svg'

const Dropdown2 = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="dropdown-2">
            <div
                className="dropdown-2__header"
                onClick={() => setIsOpen(false)}
            >
                <h2 className="dropdown-2__header__title">{title}</h2>
                <img
                    alt="chevron"
                    src={chevron}
                    className={
                        isOpen
                            ? 'dropdown-2__header__chevron dropdown-2__header__chevron--isOpen'
                            : 'dropdown-2__header__chevron'
                    }
                />
            </div>
        </div>
    ) : (
        <div className="dropdown-2">
            <div className="dropdown-2__header" onClick={() => setIsOpen(true)}>
                <h2 className="dropdown-2__header__title">{title}</h2>
                <img
                    alt="chevron"
                    src={chevron}
                    className={
                        isOpen
                            ? 'dropdown-2__header__chevron dropdown-2__header__chevron--isOpen'
                            : 'dropdown-2__header__chevron'
                    }
                />
            </div>
            <div className="dropdown-2__content">
                <div className="dropdown-2__content__text">{content}</div>
            </div>
        </div>
    )
}

export default Dropdown2
