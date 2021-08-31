import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import LogoImage from '../Assets/logo.png'
import '../index.css'

const Body = styled.div`
    display: flex;
    margin-top: 8rem;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    font-family: 'Cinzel', serif;
`
const MiddleContainer = styled.div`
    display: flex;
    gap: 10rem;
    justify-content: center;
    @media (max-width: 946px){
        gap: 7rem;
    }

`

const SupplyContainer = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    justify-content: center;
`
const Supply = styled.p`
    font-size: 1rem;
    font-weight: bold;
`
const Divider = styled.div`
    width: 130%;
    margin-top: -1rem;
    border-top: 2.2px solid black;

`
const Logo = styled.img`
    width: 300px;
    height: 300px;

    @media (max-width: 946px){
        width: 250px;
        height: 250px;
    }
`
const HeadingContainer = styled.div``
const Heading = styled.h1`
    font-size: 2.4rem;
    font-weight: 600;
`
const Info = styled.p`
    text-align: center;
    margin-top: 1rem;
    font-weight: 600;
`
const Button = styled.button`
    background-color: khaki;
    padding: 0.8rem 2.5rem;
    border-radius: 100px;
    border: none;
    color: black;
    font-weight: bold;
    background-color: rgba(255,255,231, 0.4);

    &:hover{
      transition: all 0.3s;
      transform: scale(1.04) !important;
    }
`


function Tokenomics() {
  return (
    <Body id="tokenomics">
        <HeadingContainer>
            <Heading>TOKENOMICS</Heading>
            <Info>lorem ispum is a demo text</Info>
        </HeadingContainer>
        <MiddleContainer>
            <SupplyContainer>
                <Divider></Divider>
                <Supply>TOTAL SUPPLY:</Supply>
                <Divider></Divider>
                <Supply>TOTAL SUPPLY:</Supply>
                <Divider></Divider>
                <Supply>TOTAL SUPPLY:</Supply>
                <Divider></Divider>
                <Supply>TOTAL SUPPLY:</Supply>
                <Divider></Divider>
            </SupplyContainer>
            <Logo src={LogoImage}></Logo>
            <SupplyContainer>
                <Divider></Divider>
                <Supply>TOTAL SUPPLY:</Supply>
                <Divider></Divider>
                <Supply>TOTAL SUPPLY:</Supply>
                <Divider></Divider>
                <Supply>TOTAL SUPPLY:</Supply>
                <Divider></Divider>
                <Supply>TOTAL SUPPLY:</Supply>
                <Divider></Divider>
            </SupplyContainer>
        </MiddleContainer>

        <Button>SMART CONTRACT</Button>

    </Body>
  );
}

export default Tokenomics;
