import React from 'react'
import styled from 'styled-components'
import Logo from '../Assets/logo.png'

const Container = styled.div`
    width: 100%;
    font-family: 'Cinzel', serif;
    background-color: transparent;
    padding-top: 8rem;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    
    .logo_container{
        width: 70%;
        margin: 0rem auto;
        place-items: center;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 4rem;
    }
    .logo{
        width: 120px;
    }
    `
const Heading = styled.div`
  font-size: 2.2rem;
  text-align: center;
  font-weight: 600;
`

function Crypto(){
    return(
        <Container id="crypto">
            <Heading>CRYPTO</Heading>
            <div className="logo_container">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(element =>{
                    return(
                        <img src={Logo} alt="" className="logo" />
                    )
                })}
            </div>
        </Container>
    )
}
export default Crypto