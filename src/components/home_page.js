import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { IoLogoTwitch } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import '../index.css'
import { getByDisplayValue } from '@testing-library/react';

const Body = styled.div`

    display: flex;
    flex-direction: column;
    gap: 5rem;
    font-family: 'Cinzel', sans-serif;
    padding: 0rem 3rem;
    width: 90%;
    margin: auto;
    margin-top: 5rem;

    @media (max-width: 940px){
        margin-top: 4rem;
    }

    @media (max-width: 500px){
        padding: 0rem 1rem;
      
    }
    .home1-inner, .home2-inner{
        display: flex;
        flex-direction: column;
        gap: -1rem;
    }
    .button-container{
        display: flex;
        gap: 2rem;
    }
    .text{
        font-weight: 600;
        text-transform: lowercase;
        line-height: 1.5rem;
        font-size: 0.9rem;
    }
    .heading{
        font-weight: 600;
        font-size: 1.8rem;
    }
    .rounded-pill{
        background-color: khaki;
        padding: 0.6rem 2.5rem !important;
        border: none !important;
        background-color: rgba(255,255,231, 0.4) !important;
        color: black;
        font-weight: bold;
    }
    .rounded-pill:hover{
      transition: all 0.3s;
      transform: scale(1.04) !important;
      background-color: black!important;
      color: white;
      
    }
    .home_logo{
        font-size: 1.7rem;
    }
    .home_logo:hover{
        transition: all 0.4s;
        transform: translateX(3px);
    }
    .home_left_logo_container .home_logo:hover{
        transform: translateX(-3px);
    }
    @media only screen and (max-width: 940px) {
        .home1, .home2{
            flex-direction: column !important;
        }
    }
    @media (max-width: 500px){
        .text{
            text-align: justify !important;
        }
      
    }
    @media (max-width: 440px){
        .button-container{
            flex-direction: column !important;
        }
      
        .rounded-pill{
            width: 250px;

        }
    }
`
const Home_Logo_Container = styled.div`
        display: ${props => props.show ? 'none' : 'flex'};
        flex-direction: column;
        gap: 0.7rem;
        transform: translate(-4.5rem, 11rem);
        position: fixed;
`
const Home_Left_Logo_Container = styled.div`
        display: ${props => props.show ? 'none' : 'flex'};
        flex-direction: column;
        gap: 0.7rem;
        transform: translate(86vw, 11rem);
        position: fixed;
`

function Home_Page() {

    const [display, setDisplay] = useState(false)

    let changeDisplay = () => {
        if(window.scrollY >=3000){
            setDisplay(true)
        }else{
            setDisplay(false)
        }
    }
    window.addEventListener('scroll', changeDisplay)

    return (
        <>
        <Body id="home">

            <div class="home1 d-flex bd-highlight mb-6">
                <div className="home1-inner w-100">
                    <h2 className="p-2 bd-highlight heading font-weight-bold">Lorem ispum dolor sit</h2>
                    <div className="text p-2 bd-highlight text font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                        nibh elementum mperdiet. Duis sagittis ipsum. Praesent mauris.
                        Fusce nec tellus sed augue semper porta.</div>
                    <div class="p-2 bd-highlight d-flex mt-2 button-container">
                        <Button className="rounded-pill px-5 py-2">Learn more</Button>
                        <Button className="rounded-pill px-5 py-2">Private sale</Button>
                    </div>
                </div>

                <div className="w-100">
                    <h2 class="p-2 bd-highlight"></h2>
                    <div class="p-2 bd-highlight"></div>
                    <div class="p-2 bd-highlight d-flex">
                    </div>
                </div>
            </div>


            <div class="home2 d-flex bd-highlight mb-6 flex-row-reverse">
                <div className="home2-inner w-100">
                    <h2 class="p-2 bd-highlight heading">Lorem ispum dolor sit</h2>
                    <div class="text p-2 bd-highlight text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                        nibh elementum mperdiet. Duis sagittis ipsum. Praesent mauris.
                        Fusce nec tellus sed augue semper porta.
</div>
                </div>

                <div className="w-100">
                    <h2 class="p-2 bd-highlight"></h2>
                    <div class="p-2 bd-highlight"></div>
                    <div class="p-2 bd-highlight d-flex">
                    </div>
                </div>
            </div>

            <Home_Logo_Container show={display}                     className="home_logo_container">
                <FaTwitter className="home_logo"></FaTwitter>
                <IoLogoTwitch className="home_logo"></IoLogoTwitch>
                <FaYoutube className="home_logo"></FaYoutube>
            </Home_Logo_Container>

            <Home_Left_Logo_Container show={display} className="home_left_logo_container">
                <FaDiscord className="home_logo"></FaDiscord>
                <FaTelegram className="home_logo"></FaTelegram>
            </Home_Left_Logo_Container>
        </Body>
        </>
    )
}
export default Home_Page