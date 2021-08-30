import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import styled from 'styled-components'
import '../index.css'

const Body = styled.div`
    padding: 0rem 3rem;
    font-family: 'Cinzel', serif;
    font-weight: 700;
    
    .nav-button:hover{
      transition: all 0.3s;
      transform: scale(1.04) !important;
    }

    @media (max-width: 500px){
      padding: 0rem 1rem;
    }

    .navbar{
      background-color: transparent !important;
    }
    .d-flex{
      gap: 2rem ;
    }
    .nav_links{
      color: black !important;
      font-size: 0.9rem;
      letter-spacing: 1px;
    }
    .nav-button{
      margin-top: -0.5rem;
    background-color: khaki;
    }

    @media (max-width: 940px) {
    .home1, .home2{
        flex-direction: column !important;
    }
  }
    @media (max-width: 1198px) {
    .ms-auto{
      margin-top: 2rem !important;
    }
    .nav-button{
      margin-left: -1rem !important;

    }

  }

`
function Navbar1() {
  return (
    <Body>


      <Navbar className="navbar d-flex align-items-md-start align-items-sm-start"bg="light" expand="xl">
        <Container fluid>
          <Navbar.Brand href="#home" className="nav_logo"><img src="https://media.discordapp.net/attachments/849562896504455238/877131323150581790/logo_stamp.png?width=70&height=90"/></Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-start">
              <Nav.Link className="nav_links" href="#home">WHITEPAPER</Nav.Link>
              <Nav.Link className="nav_links" href="#link">USECASE</Nav.Link>
              <Nav.Link className="nav_links" href="#home">ROADMAP</Nav.Link>
              <Nav.Link className="nav_links" href="#link">TOKENOMICS</Nav.Link>
              <Nav.Link className="nav_links" href="#home">WALLET</Nav.Link>
              <Nav.Link className="nav_links" href="#link">CRYPTO</Nav.Link>
              <Nav.Link className="nav_links rounded-pill px-5 py-3 nav-button" href="#home">WALLET</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      </Body>
  );
}

export default Navbar1;
