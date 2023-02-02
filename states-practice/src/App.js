import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './css/landing.css'
import {Routes, Route, Link} from 'react-router.dom'
import About from './pages/About'
import Projects from './pages/Projects'


function App() {
  return(
    <>
      <Header></Header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        
        <Header/>
        <Routes>
          <Route path="/" element ={<Main/>}/>
          <Route path="/about" element ={<About/>}/>
          <Route path="/projects" element ={<Projects/>}/>
        </Routes>
        <Footer/>

    </>
  )
}

export default App;