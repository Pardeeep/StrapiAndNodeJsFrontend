import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Active = styled.nav`
  display: none;
  justify-content: space-between;
  padding: 1.25rem 15rem;

  @media (max-width: 768px) {
    flex-direction: column;
    background: #fff;
    padding: 0 1.25rem;

  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 15vw;
  margin: 0;
  z-index: 100;
  @media (max-width: 768px) {
    flex-direction: column;
    background: #000;
    padding: 0;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
  }
`;

const Logo = styled.p`
  font-size: 2rem;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  @media (max-width: 786px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
  }
`;
const Lis = styled.li`
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    color:  rgb(250, 210, 0);
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
  top: 15px;
  right: 15vw;
  display: none;
@media (max-width: 768px){
  display: block
}
`;

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = useState(true);
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <NavBar>
        <Logo>
          Read<Span>it</Span>.
        </Logo>
        <Bars onClick={() => setShow(!show)}>
          <FaBars />
          Menu
        </Bars>
        <Links style={{ display: show ? "flex" : "none" }}>
          <Lis>Home</Lis>
          <Lis>Articles</Lis>
          <Lis>Team</Lis>
          <Lis>Contact</Lis>
        </Links>
      </NavBar>
    </>
  );
}

export default Navbar;
