import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import { logRoles } from '@testing-library/react';

const Body = styled.div`
    font-family: 'Cinzel', serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;
    gap: 7rem;

    .roadmap_image{
      width: 70vw;
    }
`
const Heading = styled.h1`
    font-size: 2.4rem;
    font-weight: 600;
`

function Roadmap() {
  return (
    <Body>
      <Heading>ROADMAP</Heading>
      <img className="roadmap_image" src="https://media.discordapp.net/attachments/849562896504455238/885136810026631168/roadmap_timeline_illustration_final.png?width=604&height=616" alt=""/>
    </Body>
  );
}

export default Roadmap;
