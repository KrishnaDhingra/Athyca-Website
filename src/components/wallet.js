import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import LogoImage from '../Assets/logo.png'
import { logRoles } from '@testing-library/react';
import '../index.css'

const Body = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Cinzel', serif;
    margin-top: 11rem;

    
`
const Heading = styled.h1`
    font-size: 2.2rem;
    font-weight: 600;
`
const CardsContainer = styled.div`
    display: grid;
    min-height: 400px;
    height: auto;
    padding: 2rem 2rem;
    max-width: 1200px;
    grid-gap: 3.5rem;
    margin-top: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    @media (max-width: 1250px) {
        width: 80%;
  }
    @media (max-width: 945px) {
        width: 450px;
    }
    @media (max-width: 460px) {
        width: 100%;
    }
`
const Cards = styled.div`
    display: flex;
    /* position: absolute; */
    flex-direction: column;
    padding: 0rem 1rem;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 1rem;
    background-color: rgba(255,255,231, 0.4);
    max-width: 25rem;
    height: 23rem;

    :hover{
        transition: all 0.3s;
        transform: scale(1.04)
    }
`
const Logo = styled.img`
    width: 100px;
    height: 100px;
`
const Text = styled.p`
    text-align: justify;
    font-size: 0.95rem;
`

function Wallet() {
  return (
    <Body id="wallet">
        <Heading>WALLET DISCLOSURE</Heading>
        <CardsContainer>
            <Cards>
                <Logo src={LogoImage}></Logo>
                <Text className="text">consectetur adipiscing elit. Integer
nec odio. Praesent libero. Sed cursus
ante dapibus diam. Sed nisi. Nulla
quis sem at nibh elementum mperdiet.
Duis sagittis ipsum. Praesent mauris.
Fusce nec tellus sed augue semper porta.</Text>
            </Cards>
            <Cards>
                <Logo src={LogoImage}></Logo>
                <Text className="text">consectetur adipiscing elit. Integer
nec odio. Praesent libero. Sed cursus
ante dapibus diam. Sed nisi. Nulla
quis sem at nibh elementum mperdiet.
Duis sagittis ipsum. Praesent mauris.
Fusce nec tellus sed augue semper porta.</Text>
            </Cards>
            <Cards>
                <Logo src={LogoImage}></Logo>
                <Text className="text">consectetur adipiscing elit. Integer
nec odio. Praesent libero. Sed cursus
ante dapibus diam. Sed nisi. Nulla
quis sem at nibh elementum mperdiet.
Duis sagittis ipsum. Praesent mauris.
Fusce nec tellus sed augue semper porta.</Text>
            </Cards>
            <Cards>
                <Logo src={LogoImage}></Logo>
                <Text className="text">consectetur adipiscing elit. Integer
nec odio. Praesent libero. Sed cursus
ante dapibus diam. Sed nisi. Nulla
quis sem at nibh elementum mperdiet.
Duis sagittis ipsum. Praesent mauris.
Fusce nec tellus sed augue semper porta.</Text>
            </Cards>
            <Cards>
                <Logo src={LogoImage}></Logo>
                <Text className="text">consectetur adipiscing elit. Integer
nec odio. Praesent libero. Sed cursus
ante dapibus diam. Sed nisi. Nulla
quis sem at nibh elementum mperdiet.
Duis sagittis ipsum. Praesent mauris.
Fusce nec tellus sed augue semper porta.</Text>
            </Cards>
            <Cards>
                <Logo src={LogoImage}></Logo>
                <Text className="text">consectetur adipiscing elit. Integer
nec odio. Praesent libero. Sed cursus
ante dapibus diam. Sed nisi. Nulla
quis sem at nibh elementum mperdiet.
Duis sagittis ipsum. Praesent mauris.
Fusce nec tellus sed augue semper porta.</Text>
            </Cards>

        </CardsContainer>
    </Body>
  );
}

export default Wallet;
