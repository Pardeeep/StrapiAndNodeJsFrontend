import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import styles from "../../styles/Home.module.css";
import styled from "styled-components";
import Image from "next/dist/client/image";
import life2 from "../../public/life2.jpg";

const Icon = styled.div``;

const Flex = styled.div`
  display: flex;
  background: #222831;
  justify-content: space-around;
  padding: 0 50px;
  padding-top: 40px;

  height: 50vh;
  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;

  }
`;

const First = styled.div`
  .li1 {
    margin-top: 2rem;
  }
  .li2 {
    margin-top: 2rem;
    font-size: 0.8rem;
    color: #d5d5d5;
  }
`;

const List = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
`;
const Para = styled.p`
  width: 15em;
  font-size: 0.75rem;
  color: #e5e5e5;
`;

const Icons = styled.p`
  width: 15em;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const P = styled.p`
  text-align: center;
  fontsize: 0.75rem;
  color: #e5e5e5;
  margin: 0;
  padding: 40px;
  background: #222831;
`;

const ImageStyle = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  margin-right: 1.5rem;
  top: 20px;
`;

const Describe = styled.p`
  width: 10em;
  font-size: 0.8rem;
`;

const Deta = styled.p`
  color: #707070;
  font-size: .6rem;
`;

const Flex3 = styled.div`
  display: flex;
  cursor: pointer;
  color: #e5e5e5;
  &:hover .description {
    color: rgb(250, 210, 0);
  }

`;

const Flexi = styled.div`
  display: flex;
  flex-direction: column;
`;
const Flex1 = styled.div``;

function Footer() {
  return (
    <>
      <Flex>
        <First>
          <h2>
            Read<span style={{ color: "rgb(250,210,0)" }}>it</span>.
          </h2>
          <Para>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Para>
          <Icon>
            <FaTwitter className={styles.icons} />
            <FaFacebook className={styles.icons} />
            <FaInstagram className={styles.icons} />
          </Icon>
        </First>

        <Flexi>
          <Flex3>
            <ImageStyle>
              <Image src={life2} alt="lgkldg" layout="fill" />
            </ImageStyle>
            <Flex1>
              <Describe className="description">
                Even the all-powerful Pointing has no control about
              </Describe>
              <Deta className="date">28 Aug 21 | Admin 19</Deta>
            </Flex1>
          </Flex3>
          <Flex3>
            <ImageStyle>
              <Image src={life2} alt="lgkldg" layout="fill" />
            </ImageStyle>
            <Flex1>
              <Describe className="description">
                Even the all-powerful Pointing has no control about
              </Describe>
              <Deta className="date">28 Aug 21 | Admin 19</Deta>
            </Flex1>
          </Flex3>
        </Flexi>

        <First>
          <p>Information</p>
          <List className="li1">&gt; Home</List>
          <List>&gt; Articles</List>
          <List>&gt; Contact</List>
          <List>&gt; About</List>
        </First>
        <First>
          <p>Have a Question</p>
          <Icons className="li2">
            <FaMapMarkerAlt /> 203 Fake St. Mountain View, San Francisco,
            California, USA
          </Icons>
          <Icons>
            <FaPhoneAlt /> +2 392 3929 210
          </Icons>
          <Icons>
            <FaEnvelope /> info@yourdomail.com
          </Icons>
        </First>
      </Flex>
      <P>
        {" "}
        Copyright ©2021 All rights are reserved | This template is made with
        love by Colorib
      </P>
    </>
  );
}

export default Footer;
