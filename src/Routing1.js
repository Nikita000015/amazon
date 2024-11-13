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



function Routing1()
{
   return(
    <>
    <div>
        <BrowserRouter>
        
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Service">Service</Nav.Link>
            <Nav.Link href="/*"></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/"Component={Home}></Route>
        <Route path="/About"Component={About}></Route>
        <Route path="/Contact"Component={Contact}></Route>
        <Route path="/Service"Component={Service}></Route>
        <Route path="/*"Component={PageNot}></Route>
      </Routes>
        </BrowserRouter>
    </div>
     <div
     className="modal show"
     style={{ display: 'block', position: 'initial' }}
   >
     <Modal.Dialog>
       <Modal.Header >
         <Modal.Title>form tittle</Modal.Title>
       </Modal.Header>

       <Modal.Body>
         <p>plz check your form again</p>
       </Modal.Body>

       <Modal.Footer>
         <Button variant="primary">Close</Button>
         <Button variant="secondary">Save changes</Button>
       </Modal.Footer>
     </Modal.Dialog>
   </div>
   </>
   )
}
export default Routing1