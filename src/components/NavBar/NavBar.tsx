import styled from "styled-components";
import { Button } from "../uiComponents/Button";
import { Link } from "../uiComponents/Link";
import imgLogo from "../../assets/logo.svg";
import imgMenu from "../../assets/icon-hamburger.svg";
import imgClose from "../../assets/icon-close.svg";
import { useState } from "react";

const SubContainerNavegation = styled.div`
  max-width: 1385px;
  height: 96px;
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
  padding-top: 40px;
  @media (max-width: 1000px) {
    width: 100%;
    padding-top: 0;
    padding-left: 39px;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 450px) {
    position: absolute;
    margin-top: 24px;
    padding-right: 24px;
    height: 40px;
  }
`;

const ContainerTransparentNavegation = styled.div`
  margin-left: auto;
  width: 830px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(40.7742px);
  @media (max-width: 1000px) {
    max-width: 450px;
    justify-content: space-between;
    padding: 0 48px;
    box-sizing: border-box;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  @media (max-width: 450px){
    height: 40px;
    width: 40px;
  }
`;

const Rectangle = styled.div`
  position: absolute;
  width: 473px;
  height: 1px;
  margin-left: 111px;
  background-color: #ffffff;
  opacity: 0.25;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const NumberButton = styled.b`
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 450px) {
    display: block;
    margin-right: 12px;
  }
`;

const ButtonMenu = styled.div`
  display: none;
  @media (max-width: 450px) {
    display: block;
    height: 21px;
    width: 24px;
    background-image: url(${imgMenu});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;

const SideBar = styled.div`
  width: 254px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  right: 0px;
  top: -24px;
`;

const ButtonClose = styled.div`
  width: 19px;
  height: 19px;
  background-image: url(${imgClose});
  background-size: 100%;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: 26.5px;
  margin-top: 33.95px;
  margin-bottom: 64.95px;
  flex-shrink: 0;
`;

export function NavBar() {
  const [state, setState] = useState(false);

  function handleClick() {
    setState(!state);
  }

  return (
    <SubContainerNavegation>
      <Logo src={imgLogo} />
      {state ? (
        <SideBar>
          <ButtonClose onClick={() => handleClick()}/>
          <Button onClick={() => handleClick()}>
            <Link to={"/space-tourism/"}>
              <NumberButton>00</NumberButton> HOME
            </Link>
          </Button>
          <Button onClick={() => handleClick()}>
            <Link to={"/space-tourism/destination/moon"}>
              <NumberButton>01</NumberButton> DESTINATION
            </Link>
          </Button>
          <Button onClick={() => handleClick()}>
            <Link to={"/space-tourism/crew"}>
              <NumberButton>02</NumberButton> CREW
            </Link>
          </Button>
          <Button onClick={() => handleClick()}>
            <Link to={"/space-tourism/technology"}>
              <NumberButton>03</NumberButton> TECHNOLOGY
            </Link>
          </Button>
        </SideBar>
      ) : <ButtonMenu onClick={() => handleClick()}/>}
      <ContainerTransparentNavegation>
        <Button>
          <Link to={"/space-tourism/"}>
            <NumberButton>00</NumberButton> HOME
          </Link>
        </Button>
        <Button>
          <Link to={"/space-tourism/destination/moon"}>
            <NumberButton>01</NumberButton> DESTINATION
          </Link>
        </Button>
        <Button>
          <Link to={"/space-tourism/crew"}>
            <NumberButton>02</NumberButton> CREW
          </Link>
        </Button>
        <Button>
          <Link to={"/space-tourism/technology"}>
            <NumberButton>03</NumberButton> TECHNOLOGY
          </Link>
        </Button>
      </ContainerTransparentNavegation>
      <Rectangle />
    </SubContainerNavegation>
  );
}
