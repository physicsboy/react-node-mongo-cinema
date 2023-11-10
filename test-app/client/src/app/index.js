import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/movies/list" Component={MoviesList} />
                <Route path="/movies/create" Component={MoviesInsert} />
                <Route
                    path="/movies/update/:id"
                    Component={MoviesUpdate}
                />
            </Routes>
        </Router>
    )
}

export default App
