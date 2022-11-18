import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../uiComponents/Button";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { Link } from "../../uiComponents/Link";
import { SubTittle } from "../../uiComponents/SubTittle";
import { SubTittleNumber } from "../../uiComponents/SubTittleNumber";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const SubTittleContainer = styled.div`
  margin-top: 212px;
  margin-left: 166.5px;
  margin-bottom: 97px;
  margin-right: 283.5px;
`;

const PlanetImg = styled.img`
  width: 445px;
  height: 445px;
  margin-left: 230px;
  margin-right: 157px;
`;

const NavContainer = styled.div`
  width: 304.5px;
  height: 34px;
  align-self: flex-end;
`;

const ButtonPlanet = styled(Button)`
  margin: 0 18px 0 0;
  height: 34px; ;
`;

const PlanetContainer = styled.div`
  width: 445px;
  height: 472px;
  display: flex;
  flex-direction: column;
`;

const ConteudoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Rectangle = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  opacity: 0.25;
  margin-top:54px;
`;

const MiscText = styled.div`
display: flex;
flex-direction: column;
width: 143px;
height: 61px;
justify-content: space-between;
margin-right: 79px;
`

const MiscContainer = styled.div`
margin-top: 28px;
display: flex;
flex-direction: row;
`

const DestinationContainer = styled.div`
display: flex;
flex-direction: row;
`

export function Destination() {
  return (
    <ContainerBackgroundImage
      url={"/destination/background-destination-desktop.jpg"}
    >
      <Container>
        <DestinationContainer>
        <SubTittleContainer>
          <SubTittleNumber fontSize={28} lineHeight={33.6} letterSpacing={4.72}>01</SubTittleNumber>
          <SubTittle fontSize={28} lineHeight={33.6} letterSpacing={4.72}>PICK YOUR DESTINATION</SubTittle>
        </SubTittleContainer>
            <NavContainer>
              <ButtonPlanet>
                <Link to={"moon"}>MOON </Link>
              </ButtonPlanet>
              <ButtonPlanet>
                <Link to={"/destination"}>MARS</Link>
              </ButtonPlanet>
              <ButtonPlanet>
                <Link to={"/destination"}>EUROPA</Link>
              </ButtonPlanet>
              <ButtonPlanet>
                <Link to={"/destination"}>TITAN</Link>
              </ButtonPlanet>
            </NavContainer>

        </DestinationContainer>
        <Outlet/>
      </Container>
    </ContainerBackgroundImage>
  );
}
