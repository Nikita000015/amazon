import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import PageNot from "./PageNot"

function Routing()
{
    return(
        <div>
            <BrowserRouter>
            <Link to="/">Home</Link><br></br>
            <Link to="/About">About</Link><br></br>
            <Link to="/Contact">Contact</Link><br></br>
            <Link to="/Service">Service</Link><br></br>
            <Link to="/*"></Link><br></br>
            <Routes>
                <Route path="/"Component={Home}></Route>
                <Route path="/about"Component={About}></Route>
                <Route path="/service"Component={Service}></Route>
                <Route path="/contact"Component={Contact}></Route>
                <Route path="/*"Component={PageNot}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routing