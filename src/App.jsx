import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navigation'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'



const app = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<About/>}/> 
          <Route path="/Experience" exact element={<Experience/>}/>
          <Route path="/Projects" exact element={<Projects/>}/>
          <Route path="/Contact" exact element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default app