import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import styled from 'styled-components'
import { FaTelegram } from "react-icons/fa";
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
      width: 90% !important;
      margin: auto;
      margin-top: 1rem;
    }
    .d-flex{
      gap: 2rem ;
    }
    .nav_links{
      color: black !important;
      font-size: 0.9rem;
      letter-spacing: 1px;
    }
    .underline:after{
      content: '';
      display: block;
      /* position: absolute; */
      height: 3px;
      width: 0;
      left: 0;
      top: 0;
      background-color: black;
      transition: all 0.3s
    }
    .underline:hover::after{
      width: 100%;
    }
    .nav-button{
      margin-top: -0.5rem;
      background-color: rgba(255,255,231, 0.5);
    }
    .logo{
      font-size: 1.5rem;
      margin: 0px 0.4rem;
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
const Navbar_Logo = styled.img`
      width: '90px';
      height: 100%;
`
function Navbar1() {

  const [navbar, setNavbar] = useState(false)

  let backgroundColor = () =>{
    if(window.scrollY >=50){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  
  window.addEventListener('scroll', backgroundColor);

  return (
    <Body className={navbar ? 'sticky-top active' : 'sticky-top'}>


      <Navbar className="navbar d-flex align-items-md-start align-items-sm-start"bg="light" expand="xl">
        <Container fluid>
          <Navbar.Brand href="#home" className="nav_logo"><Navbar_Logo className="nav_image" src="https://media.discordapp.net/attachments/849562896504455238/877131323150581790/logo_stamp.png?width=70&height=90"/></Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-start">
              <Nav.Link className="nav_links underline" href="#home">WHITEPAPER</Nav.Link>
              <Nav.Link className="nav_links underline" href="#link">USECASE</Nav.Link>
              <Nav.Link className="nav_links underline" href="#home">ROADMAP</Nav.Link>
              <Nav.Link className="nav_links underline" href="#tokenomics">TOKENOMICS</Nav.Link>
              <Nav.Link className="nav_links underline" href="#wallet">WALLET</Nav.Link>
              <Nav.Link className="nav_links underline" href="#link">CRYPTO</Nav.Link>
              <Nav.Link className="nav_links underline" href="#faq">FAQ</Nav.Link>
              <Nav.Link className="nav_links rounded-pill px-5 py-3 nav-button" href="#home">JOIN US <FaTelegram className="logo"></FaTelegram></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      </Body>
  );
}

export default Navbar1;
