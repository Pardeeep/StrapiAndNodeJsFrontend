import React from "react";
import styled, { keyframes } from "styled-components";
import styles from "../../styles/Home.module.css";
import Navbar from "../Navbar/Navbar";
import { FaLongArrowAltDown } from "react-icons/fa";

const Home = styled.section`
  overflow: hidden;
`;

const InnerHome = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: linear-gradient(
    to bottom left,
    rgba(250, 193, 99, 0.9),
    rgba(239, 46, 243, 0.9)
  );
`;

const k = keyframes`
0%   {padding-top: 6px;}
25%  {padding-top: 12px;}
50%  {padding-top: 16px;}
100% {padding-top: 20px;}
`;

const IconStyle = styled.div`
  font-size: 2rem;
  cursor: pointer;
  height: 30px;
  .icons {
    height: 100px;
    font-size: 1rem;
    animation-name: ${k};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;

const InnerText = styled.div`
  padding: 6vw 15vw;

  height: 100%;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 35vh 1vw;
  }
`;

const Description = styled.p`
  max-width: 23em;
`;
const Heading = styled.h1`
  font-size: 10vw;
  font-weight: bold;
  margin: 0;
  padding: 0;
  line-height: 1.2;
`;
const Hello = styled.p`
  margin: 0;
  padding: 0;
`;

function Homepage() {
  return (
    <Home className={styles.home}>
      <InnerHome>
        <Navbar />
        <InnerText>
          <Hello>Hello! Welcome to</Hello>
          <Heading>Readit blog</Heading>
          <Description>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </Description>
          <IconStyle>
            <FaLongArrowAltDown className="icons"/>
          </IconStyle>
        </InnerText>
      </InnerHome>
    </Home>
  );
}

export default Homepage;
