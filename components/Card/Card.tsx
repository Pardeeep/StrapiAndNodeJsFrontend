import React,{ useEffect} from "react";
import Image from "next/image";

import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";


const ImageStyle = styled.div`
  position: relative;
  width: 590px;
  height: 300px;
  margin-right: 3rem;
  @media (max-width: 1050px){
    width: 530px;
  }
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 768px) {
    width: 18em;
    margin-left: 30px;
  }

`;

const Para = styled.p`
  color: #cccccc;
  font-size: 0.6rem;
  margin-top: 8px;
`;
const Describe = styled.p`
  width: 8.7em;
  font-size: 1.5rem;
  font-weight: bolder;
  margin: 0;
  padding-bottom: 10px;
`;

const Icon = styled.div` opacity: 0;
  @media( max-width: 768px){
    opacity: 1;
  }
`;

const Deta = styled.p`
  color: #a5a5a5;
  margin: 0;
  padding-top: 10px;
  font-size: .5rem;
`;

const Flex = styled.div`
  display: flex;
  color: black;
  margin-bottom: 2rem;
  justify-content: space-between;
  padding-right: 6rem;
  cursor: pointer;
  &:hover .description {
    color: #909090;
  }
  &:hover .date {
    color: #000;
  }
  &:hover .icons {
    opacity: 1;
  }
  @media (max-width: 900px) {
    padding: 0 10px;
    .image {
      width: 300px;
    }
    .description {
      width: 9em;
    }
  }
  @media (max-width: 768px) {
    padding: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const Flex1 = styled.div` `;

function Card(props: {
  image: StaticImageData;
  alt: string;
  Description: string;
}) {
  console.log(props.image);
  const myLoader = () => {
    return `https://intense-journey-63176.herokuapp.com${props.image}`;
  };

  useEffect(()=>{

  },[])
  return (
    <Flex>
      <ImageStyle className="image">
        <Image
          loader={myLoader}
          src={`https://intense-journey-63176.herokuapp.com${props.image}`}
          alt={props.alt}
          layout="fill"
        />
      </ImageStyle>
      <Flex1>
        <Para>{props.alt}</Para>
        <Describe className="description">
          Build a website in minutes with Adobe Templates
        </Describe>
        <Icon className ="icons">
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
