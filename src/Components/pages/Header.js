import React from 'react'
import { Routes, Route, NavLink  } from "react-router";
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import Aboutus from "./About"
import "./Header.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceDetail from './ServiceDetail';
import Error from './Error';

const Header = () => {
  return (
    <>  

        <Container className='header'>
          <Row className="align-items-center menu px-10"> 
            <Col md="auto" className='logo'>
              <NavLink to="/" end>
                <img src="../img/logo2.png" alt="Logo" height="100px" />
              </NavLink>
            </Col>
            <Col>
              <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Services">Services</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
              </nav>
            </Col>
          </Row>
        </Container>
      
        <Routes>
            <Route index element={<Home />} />
            <Route path="/About" element={<Aboutus />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </>
  )
}

export default Header;