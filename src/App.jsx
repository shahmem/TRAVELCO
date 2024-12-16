import React from 'react'
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Services from './assets/pages/Services'
import Packages from './assets/pages/Packages'
import Destination from './assets/pages/Destination'
import Booking from './assets/pages/Booking'
import TravelGuide from './assets/pages/TravelGuide'
import Contact from './assets/pages/Contact'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path='/' element={<Home />}  />
          <Route  path='/about' element={<About />}  />
          <Route  path='/services' element={<Services />}  />
          <Route  path='/packages' element={<Packages />}  />
          <Route  path='/destination' element={<Destination />}  />
          <Route  path='/booking' element={<Booking />}  />
          <Route  path='/travelguide' element={<TravelGuide />}  />
          <Route  path='/contact' element={<Contact />}  />
        </Routes>
      </Router>
    </>
  )
}

export default App