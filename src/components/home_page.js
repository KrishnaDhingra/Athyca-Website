import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import '../index.css'

const Body = styled.div`

    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 0rem 3rem;
    font-family: 'Cinzel', serif;

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
        line-height: 1.7rem;
    }
    .heading{
        font-weight: 600;
        font-size: 2.1rem;
    }
    .rounded-pill{
        background-color: khaki;
        padding: 0.6rem 2.5rem !important;
        border: none !important;
        color: black;
        font-weight: bold;
    }
    .rounded-pill:hover{
      transition: all 0.3s;
      transform: scale(1.04) !important;
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

function Home_Page() {
    return (
        <Body>

            <div class="home1 d-flex bd-highlight mb-6">
                <div className="home1-inner w-100">
                    <h2 className="p-2 bd-highlight heading font-weight-bold">Lorem ispum dolor sit</h2>
                    <div className="p-2 bd-highlight text font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
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
                    <div class="p-2 bd-highlight text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
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
        </Body>
    )
}
export default Home_Page