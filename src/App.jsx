import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"	  
export default function App() {
  return (
   <>
     <Navbar/>
     <Home/>
     <Projects/>
     <Contact/>
     <Footer/>
   </>
  )
}
