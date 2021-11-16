import React from 'react'
import logo from '../Img/logo.svg'
import { Navbar, Nav, Container } from 'react-bootstrap'
import StickyBox from 'react-sticky-box/dist/esnext'
import '../Css/Header.css';

const Header = () => {
    return (
    
    <StickyBox>
      <Navbar collapseOnSelect expand="lg"  variant="light" style={{padding: 0, backgroundColor: "#0da5fd"}} className="NavBarStyle" >
        <Container className="ContainerStyle">
        <Navbar.Brand href="/home"><img style={{height:"40px"}} className="img-responsive" src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/factchecker">Fact Checking</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/status">Status</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StickyBox>
    )
}

export default Header
