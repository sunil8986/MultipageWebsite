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

const Header = () => {
  return (
    <>  

        <Container fluid className='header'>
          <Row className="align-items-center menu px-10"> 
            <Col md="auto">
              <NavLink to="/" end>
                <img src="./img/logo.png" alt="Logo" />
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
        </Routes>
    </>
  )
}

export default Header;