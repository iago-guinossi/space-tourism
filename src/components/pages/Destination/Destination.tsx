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

const NavContainer = styled.div`
  width: 304.5px;
  height: 34px;
  align-self: flex-end;
`;

const ButtonPlanet = styled(Button)`
  margin: 0 18px 0 0;
  height: 34px; ;
`;

const DestinationContainer = styled.div`
display: flex;
flex-direction: row;
`

export function Destination() {
  return (
    <ContainerBackgroundImage
      url={"/public/destination/background-destination-desktop.jpg"}
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
        <Outlet/>
      </Container>
    </ContainerBackgroundImage>
  );
}
