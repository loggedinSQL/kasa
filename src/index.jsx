import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import Error from './pages/Error'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />}/>
                <Route path='/housings/:id' element={<Housing />}/>
                <Route exact path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
