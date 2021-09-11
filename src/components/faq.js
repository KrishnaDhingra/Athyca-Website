import React, {useState} from 'react'
import styled from 'styled-components'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import '../index.css'
import { data } from './data.js'

const Body = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0rem;
  font-family: 'Cinzel', serif;

  .search_icons{
    font-size: 1.5rem;

  }

`
const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
`
const AccordionHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`
const Divider = styled.div`
  width: 100%;
  border-top: 2.8px solid black;
`
const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: auto;
  margin-top: 5rem;
`
const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`
const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: bold;
  padding-right: 4rem;
`

const Text = styled.p`
  text-align: left;
`

function Faq() {

  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

     
    return (

      
      <Body id="faq">
          <Heading>FREQUENTLY ASKED QUESTIONS</Heading>

          <Accordion>
            {data.map((item, index) =>{
              return(
                <>
                <Divider></Divider>
                <ItemContainer>
                  <HeadingContainer className="text" onClick={() => toggle(index)} key={index}>
                    <AccordionHeading>{item.heading}</AccordionHeading>
                    <span>{clicked === index ? <IoIosArrowUp  className="down_arrow"/> : <IoIosArrowDown  className="down_arrow"/>}</span>
                  </HeadingContainer>
                  {clicked === index ? (
                    <p className="text">{item.text}</p>
                    ) : null}
                </ItemContainer>
              </>
              )

            })}
            <Divider></Divider>
          </Accordion>

      </Body>


    );
  }

export default Faq