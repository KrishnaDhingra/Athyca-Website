import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import { logRoles } from '@testing-library/react';
import RoadmapImage from '../Assets/roadmap_timeline_illustration.svg'

const Body = styled.div`
    font-family: 'Cinzel', serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8.6rem;
    gap: 4rem;

    img {
      image-rendering: auto;
      image-rendering: crisp-edges;
      image-rendering: pixelated;
    }
    img {
      image-rendering: pixelated;
    }

    .roadmap_image{
      width: 65vw;
    }
`
const Heading = styled.h1`
    font-size: 2.2rem;
    font-weight: 600;
`

function Roadmap() {
  return (
    <Body>
      <Heading>ROADMAP</Heading>
      <img className="roadmap_image" src={RoadmapImage} alt=""/>
    </Body>
  );
}

export default Roadmap;
