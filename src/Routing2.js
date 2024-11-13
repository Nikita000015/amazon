import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import PageNot from "./PageNot";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Geetdata from "./Geetdata";


function Routing2()
{
   return(
    <>
    <div>
        <BrowserRouter>
        
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Electronics">Electronics</Nav.Link>
            <Nav.Link href="/Jewellary">Jewellary</Nav.Link>
            <Nav.Link href="/women">Service</Nav.Link>
            <Nav.Link href="/*"></Nav.Link>
            <Button variant="primary" size="lg" active>
        Primary button
      </Button>{' '}
      <Button variant="secondary" size="lg" active>
        Button
      </Button>
      <Button variant="primary" size="lg" active>
        Primary button
      </Button>{' '}
      <Button variant="secondary" size="lg" active>
        Button
      </Button>

      </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/"Component={Geetdata}></Route>
        <Route path="/Electranics"Component={Electranics}></Route>
      </Routes>
        </BrowserRouter>
    </div>
     
   </>
   )
}
export default Routing2