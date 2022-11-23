import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../uiComponents/Button";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { Link } from "../../uiComponents/Link";
import { SubTittle } from "../../uiComponents/SubTittle";
import { SubTittleNumber } from "../../uiComponents/SubTittleNumber";
import imgDestinationDesktop from "../../../assets/destination/background-destination-desktop.jpg";
import imgDestinationTablet from "../../../assets/destination/background-destination-tablet.jpg";
import imgDestinationMobile from "../../../assets/destination/background-destination-mobile.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const SubTittleContainer = styled.div`
  padding-top: 212px;
  padding-right: 283px;
  margin-left: -136px;
  @media (max-width: 1440px) {
    margin-left: 0;
    padding-right: 0;
    padding-left: 166.5px;
  }
  @media (max-width: 1288px) {
    padding-left: 0;
    margin-left: -136px;
    margin-right: 130.5px;
  }
  @media (max-width: 1000px) {
    margin: 0;
    padding-left: 38.5px;
    padding-top: 0;
  }
  @media (max-width: 450px) {
    padding: 0;
  }
`;

const NavContainer = styled.div`
  width: 304.5px;
  height: 34px;
  padding-top: 310px;
  align-self: flex-end;
  z-index: 1;
  @media (max-width: 1440px) {
    padding-right: 303.5px;
  }
  @media (max-width: 1288px) {
    padding-right: 0;
  }
  @media (max-width: 1000px) {
    align-self: center;
    padding-top: 413px;
    width: 285.5px;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 450px) {
    padding-top: 228px;
  }
`;

const ButtonPlanet = styled(Button)`
  margin: 0 18px 0 0;
  height: 34px;
  @media (max-width: 1000px) {
    margin: 0;
  }
  @media (max-width: 450px) {
    padding: 0;
  }
`;

const DestinationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  @media (max-width: 1440px) {
    justify-content: space-between;
  }
  @media (max-width: 1288px) {
    justify-content: center;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 136px;
  }
  @media (max-width: 450px) {
    align-items: center;
    padding-top: 88px;
  }
`;

const SubtittleNumberDest = styled(SubTittleNumber)`
  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.375px;
    margin-right: 19px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`;

const SubtittleDest = styled(SubTittle)`
  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.375px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`;

const LinkDest = styled(Link)`
  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
  }
`;

export function Destination() {
  return (
    <ContainerBackgroundImage
      url={imgDestinationDesktop}
      urlTablet={imgDestinationTablet}
      urlMobile={imgDestinationMobile}
    >
      <Container>
        <DestinationContainer>
          <SubTittleContainer>
            <SubtittleNumberDest
              fontSize={28}
              lineHeight={33.6}
              letterSpacing={4.72}
            >
              01
            </SubtittleNumberDest>
            <SubtittleDest fontSize={28} lineHeight={33.6} letterSpacing={4.72}>
              PICK YOUR DESTINATION
            </SubtittleDest>
          </SubTittleContainer>
          <NavContainer>
            <ButtonPlanet>
              <LinkDest to={"moon"}>MOON </LinkDest>
            </ButtonPlanet>
            <ButtonPlanet>
              <Link to={"mars"}>MARS</Link>
            </ButtonPlanet>
            <ButtonPlanet>
              <Link to={"europa"}>EUROPA</Link>
            </ButtonPlanet>
            <ButtonPlanet>
              <Link to={"titan"}>TITAN</Link>
            </ButtonPlanet>
          </NavContainer>
        </DestinationContainer>
        <Outlet />
      </Container>
    </ContainerBackgroundImage>
  );
}
