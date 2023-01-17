import react from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MakeCard from './MakeCard'

const Testing = () => {
    return (

        <>
         <Router>
            <h1>This is just a simple Testing Page</h1>
           

                <Routes>

                    <Route exact path='/' element={<MakeCard/>}></Route>
                </Routes>
            </Router>

        </>


    )
}

export default Testing