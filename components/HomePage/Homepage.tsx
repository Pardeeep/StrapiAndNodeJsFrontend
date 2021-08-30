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
    rgba(250,196,0, 0.8),
    rgba(243,51,252)
  );
`;

const k = keyframes`
0%   {padding-top: 6px;}
25%  {padding-top: 12px;}
50%  {padding-top: 16px;}
100% {padding-top: 20px;}
`;

const IconStyle = styled.div`
  font-size: 1rem;
  cursor: pointer;
  height: 30px;
  .icons {
    height: 100px;
    font-size: .75rem;
    animation-name: ${k};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;

const InnerText = styled.div`
  padding: 18vh 16vw;
  height: 100%;
  flex-direction: column;
  @media (max-width: 900px) {
    padding: 22vh 15px;
  }
  @media (max-width: 768px) {
    padding: 30vh 15px;
  }
`;

const Description = styled.p`
  max-width: 36em;
  font-size: 13px;
`;
const Heading = styled.p`
  font-size: 10vw;
  font-weight: 900;
  margin: 0;
  padding: 0;
  line-height: 1;
  letter-spacing: 2px;
  @media (max-width: 768px){
    font-size: 14vw;
  }
`;
const Hello = styled.p`
  margin: 0;
  padding-bottom: 10px;
  font-size: .75rem;
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
