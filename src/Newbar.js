
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import PageNot from "./PageNot";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Newbar()
{
    return(
        <div>
        <BrowserRouter>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Service">Service</Nav.Link>
          </Nav>
        </Container>
        
        </Navbar>

            <Routes>
                <Route path="/"Component={Home}></Route>
                <Route path="/About"Component={About}></Route>
                <Route path="/Service"Component={Service}></Route>   
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Newbar