import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16.5vw;
  margin: 0;
  z-index: 100;
  @media screen and (max-width: 900px) {
    padding: 18px 10px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    background: #000;
    align-items: flex-start;
    padding: 5px 0px;
    .show {
      display: flex;
    }
  }
`;

const Logo = styled.p`
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
const Links = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  justify-content: center;
  list-style-type: none;
  font-size: 14px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 40px;
    width: 100%;
    display: none;
  }
`;
const Lis = styled.li`
  margin: 0;
  margin-left: 1.75rem;
  cursor: pointer;
  &:hover {
    color: rgb(250, 210, 0);
  }
  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;
const Span = styled.span`
  color: rgb(250, 210, 0);
`;

const Bars = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 5px;
  display: none;
  font-size: 0.8rem;
  letter-spacing: 3px;
  word-spacing: 5px;
  color: #808080;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Div = styled.div`
  .show {
    background: white;
    color: black;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  @media screen and (max-width: 768px) {
    .Active {
      flex-direction: column;
      align-items: flex-start;
      padding: 8px 0px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: white;
      color: black;
    }
  }
  .Active {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    color: black;
    border-bottom: 1px solid black;
`;

function Navbar() {
  const [show, setShow] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const listenScrollEvent = () => {
    if (window.scrollY > 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <Div>
      <NavBar data-aos="fade-down" className={navbar ? "Active" : "none"}>
        <Logo>
          Read<Span>it</Span>.
        </Logo>
        <Bars onClick={() => setShow(!show)}>
          <FaBars />
          Menu
        </Bars>
        <Links className={show ? "show" : "none"}>
          <Lis>Home</Lis>
          <Lis>Articles</Lis>
          <Lis>Team</Lis>
          <Lis>Contact</Lis>
        </Links>
      </NavBar>
    </Div>
  );
}

export default Navbar;
