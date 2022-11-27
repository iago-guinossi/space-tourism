import { NavLink, Outlet } from "react-router-dom";
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
width: 303.5px;
align-self: flex-end;
z-index: 1;
padding-top: 310px;
@media (max-width: 1440px) {
  padding-right: 303.5px;
}
@media (max-width: 1288px) {
  padding-right: 0;
  @media (max-width: 1000px){
    width: 285.5px;
    align-self: center;
    padding-top: 413px;
  }
  @media (max-width: 450px) {
    padding-top: 228px;
  }
}
`

const SubNavContainer = styled.div`
  width: 285.5px;
  height: 34px;
  display: flex;
  @media (max-width: 1000px) {
    width: 285.5px;
    display: flex;
    justify-content: space-between;
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

const LinkDest = styled(NavLink)<{ activeclassname: any }>`
  display: flex;
  align-items: center;
  margin: 0 18px 0 0;
  height: 100%;
  text-decoration: none;
  color: #ffffff;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  &:hover {
    border-bottom: solid 3px rgba(255, 255, 255, 0.5);
    border-top: solid 3px transparent;
  }
  &.${(props) => props.activeclassname} {
    border-bottom: solid 3px #ffffff;
    border-top: solid 3px transparent;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    margin: 0;
  }
  @media (max-width: 450px) {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    padding: 0;
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
          <SubNavContainer>
            <LinkDest activeclassname="active" to={"moon"}>
              MOON{" "}
            </LinkDest>
            <LinkDest activeclassname="active" to={"mars"}>
              MARS
            </LinkDest>
            <LinkDest activeclassname="active" to={"europa"}>
              EUROPA
            </LinkDest>
            <LinkDest activeclassname="active" to={"titan"}>
              TITAN
            </LinkDest>
          </SubNavContainer>
          </NavContainer>
        </DestinationContainer>
        <Outlet />
      </Container>
    </ContainerBackgroundImage>
  );
}
