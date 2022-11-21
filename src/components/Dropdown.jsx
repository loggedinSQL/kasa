import React, { useState } from 'react'
import chevron from '../assets/vector.svg'

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="dropdown">
            <div className="dropdown__header" onClick={() => setIsOpen(false)}>
                <h2 className="dropdown__header__title">{title}</h2>
                <img
                    alt="chevron"
                    src={chevron}
                    className={
                        isOpen
                            ? 'dropdown__header__chevron dropdown__header__chevron--isOpen'
                            : 'dropdown__header__chevron'
                    }
                />
            </div>
            <div className="dropdown__content">
                <div className="dropdown__content__text">{content}</div>
            </div>
        </div>
    ) : (
        <div className="dropdown">
            <div className="dropdown__header" onClick={() => setIsOpen(true)}>
                <h2 className="dropdown__header__title">{title}</h2>
                <img
                    alt="chevron"
                    src={chevron}
                    className={
                        isOpen
                            ? 'dropdown__header__chevron dropdown__header__chevron--isOpen'
                            : 'dropdown__header__chevron'
                    }
                />
            </div>
        </div>
    )
}

export default Dropdown
