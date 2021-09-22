import React from 'react'
import styled from 'styled-components'
import { IoLogoTwitch } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../index.css'

const Body = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4.7rem 3rem;
  width: 100%;
  margin: auto;
  gap: 1.4rem;
  background-color: rgba(255,255,231, 0.4);
  font-family: 'Cinzel', serif;
  margin-top: 5rem;
  margin-bottom: -2rem;
  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }
  ul li{
    list-style: none;
  }
  ul li a{
    color: black;
    font-weight: 700;
    font-size: 0.74rem;
    text-decoration: none;
  }
  ul li a::after{
      content: '';
      display: block;
      height: 3px;
      width: 0;
      left: 0;
      top: 0;
      background-color: black;
      transition: all 0.3s
    }
    ul li a:hover::after{
      width: 100%;
    }

  .logos{
    font-size: 1.7rem;
    color: black;
  }
  .logos:hover{
    transition: all 0.2s;
    transform: translateY(-2.5px);
  }


`
const LinksContainer = styled.div``
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin-top: 1rem;
`
const Divider = styled.div`
  width: 50%;
  height: 3px;
  background-color: black;
  margin: auto;
`
const Copyright = styled.p`
  margin: auto;
  font-weight: 700;
  margin-top: 7px;
`

function Footer() {
    return (
        <Body>
            <LinksContainer>
              <ul>
                <li><a href="#">WHITEPAPER</a></li>
                <li><a href="#">USECASE</a></li>
                <li><a href="#">ROADMAP</a></li>
                <li><a href="#">TOKENOMICS</a></li>
                <li><a href="#">WALLET</a></li>
                <li><a href="#">CRYPTO</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </LinksContainer>
            <LogoContainer>

              <IoLogoTwitch className="logos"></IoLogoTwitch>
              <FaTwitter className="logos"></FaTwitter>
              <FaTelegram className="logos"></FaTelegram>
              <FaYoutube className="logos"></FaYoutube>

            </LogoContainer>
            <Divider></Divider>
            <Copyright>©Copyrights 2021 Athyca Pvt Ltd.</Copyright>
          
          </Body>
      );
}

export default Footer;
