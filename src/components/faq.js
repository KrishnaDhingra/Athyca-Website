import React, {useState} from 'react'
import styled from 'styled-components'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
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
  gap: 2.5rem;
  font-family: 'Cinzel', serif;
  /* border: 2px solid red; */

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
  /* border: 2px solid red; */
`
const ItemContainer = styled.div`
  /* border: 2px solid red; */
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
  /* border: 2px solid red; */
`
const Button = styled.button`
    background-color: khaki;
    padding: 0.8rem 5rem;
    border-radius: 100px;
    border: none;
    color: black;
    font-weight: bold;

    &:hover{
      transition: all 0.4s;
      transform: scale(1.05)
    }
`
const Text = styled.p`
  text-align: left;
  /* display: none; */
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

      
      <Body>
          <Heading>FREQUENTLY ASKED QUESTIONS</Heading>
          <Button>Lorem Ipsum Dor sit Amet is a simple? </Button>

          <Accordion>
            {data.map((item, index) =>{
              return(
                <>
                <Divider></Divider>
                <ItemContainer>
                  <HeadingContainer  onClick={() => toggle(index)} key={index}>
                    <AccordionHeading>{item.heading}</AccordionHeading>
                    <span>{clicked === index ? <IoIosArrowUp  className="down_arrow"/> : <IoIosArrowDown  className="down_arrow"/>}</span>
                    {/* <IoIosArrowUp className="down_arrow"></IoIosArrowUp> */}
                  </HeadingContainer>
                  {clicked === index ? (
                    <p>{item.text}</p>
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
// return (
  
//   <Body>
//     <Heading>FREQUENTLY ASKED QUESTIONS</Heading>
//     <Button>Lorem Ipsum Dor sit Amet is a simple? </Button>

//     <Accordion>

//     {data.map((item, index) => {
//           return (
//             <>
//               <Divider></Divider>
//               <ItemContainer>

//                 <HeadingContainer onClick={() => toggle(index)} key={index}>
//                 <AccordionHeading>{item.heading}</ AccordionHeading>
//                 <IoIosArrowUp className="down_arrow" onClick={() => toggle(index)} key={index}></IoIosArrowUp>
//                 </HeadingContainer>

//                 {clicked === index ? (
//                   <Text>
//                     <p>{item.text}</p>
//                   </Text>
//                 ) : null}
//               <ItemContainer/>

//             {/* </> */}
//           );
//       })}

//     </Accordion>
//   </Body>
