import React from "react";
import Image from "next/image";

import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import AOS from 'aos'

const ImageStyle = styled.div`
    position : relative;
    width:45vw;
    height: 300px;
    margin-right: 2rem;
    @media (max-width: 768px) {
        width: 18em;
        height: 300px;
    }
`;

const Para = styled.p`
  color: #cccccc;
  font-size: 0.75rem;
  margin: 0;
`;
const Describe = styled.h1`
  width: 9em;
`;

const Icon = styled.div``;

const Deta = styled.p`
    color: #707070;
`

const Flex = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
  color: black;

  justify-content: space-between;
  max-width: 768px;
  cursor: pointer;
  &:hover .description {
    color: #909090;
  }
  &:hover .date {
    color: #000;
  }
  @media (max-width: 768px){
    flex-wrap: wrap;
    justify-content:center;
  }
`;
const Flex1 = styled.div``

function Card(props: { image: StaticImageData, alt: string , Description: string}) {
  console.log(props.image)
  const myLoader=()=>{
    return `https://intense-journey-63176.herokuapp.com${props.image}`;
  }
  return (
    <Flex>
      <ImageStyle>
        <Image loader={myLoader} src={`https://intense-journey-63176.herokuapp.com${props.image}`} alt={props.alt} layout="fill" />
      </ImageStyle>
      <Flex1>
        <Para>{props.alt}</Para>
        <Describe className="description">
          Build a website in minutes with Adobe Templates
        </Describe>
        <Icon>
          <FaTwitter className={styles.icon} />
          <FaFacebook className={styles.icon} />
          <FaInstagram className={styles.icon} />
        </Icon>
        <Deta className="date">27/08/2021 | 1 hour read</Deta>
      </Flex1>
    </Flex>
  );
}

export default Card;
