import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home/home"

import Navbar from "./components/Navbar/navbar"
import Contact from './routes/Contact-us/Contact';
import Rooms from "./routes/Rooms/Rooms";
import Facilities from './routes/Facilities/Facilities';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/facilities" element={<Facilities/>} />
      </Routes>
    </>
  )
}

export default App
