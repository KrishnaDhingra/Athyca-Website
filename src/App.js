import './index.css';
import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.js'
import Home_Page from './components/home_page.js'
import Roadmap from './components/roadmap.js'
import Footer from './components/footer.js'
import Wallet from './components/wallet.js'
import Tokenomics from './components/tokenomics.js'
import Crypto from './components/crypto.js'
import Faq from './components/faq.js'
import Background from './Assets/background.jpg'

const Body = styled.div`
  padding: 2rem 0rem;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

function App() {
  return (
    <Body id="home">

      <Navbar></Navbar>
      <Home_Page></Home_Page>
      <Roadmap></Roadmap>
      <Tokenomics></Tokenomics>
      <Wallet></Wallet>
      <Crypto></Crypto>
      <Faq></Faq>
      <Footer></Footer>


    </Body>
  );
}

export default App;
