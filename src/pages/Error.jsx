import { Link } from 'react-router-dom'

import Header from '../layout/Header'

import '../css/style.css'

const Error = () => {
    const errMsg = "Oups! La page que vous demandez n'existe pas"
    const errLinkMsg = "Retourner sur la page d'accueil"

    return (
        <div className="container">
            <Header />
            <main>
                <div className="error">
                    <h1 className="error__title">404</h1>
                    <h2 className="error__subtitle">{errMsg}</h2>
                    <Link to="/" className="error__homeBtn">{errLinkMsg}</Link>
                </div>
            </main>
        </div>
    )
}

export default Error
