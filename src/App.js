import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'

import './App.css'

const App = () => {
  return (
    <div>
        <Box width="400px">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />}/>
                {/* this id is dynamic */}
                <Route path="/exercise/:id" element={<ExerciseDetail />}/>
            </Routes>
        </Box>
    </div>
  )
}

export default App