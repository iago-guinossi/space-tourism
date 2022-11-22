import styled from "styled-components";
import { SubTittle } from "../../../uiComponents/SubTittle";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";

const ConteudoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PlanetImg = styled.img`
  width: 445px;
  height: 445px;
  margin-left: 230px;
  margin-right: 157px;
`;

const PlanetContainer = styled.div`
  width: 445px;
  height: 472px;
  display: flex;
  flex-direction: column;
`;

const Rectangle = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  opacity: 0.25;
  margin-top: 54px;
`;

const MiscText = styled.div`
  display: flex;
  flex-direction: column;
  width: 156px;
  height: 61px;
  justify-content: space-between;
  margin-right: 65px;
`;

const MiscContainer = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: row;
`;

export function Europa() {
  return (
    <ConteudoContainer>
      <PlanetImg src="/public/destination/image-europa.png" />
      <PlanetContainer>
        <Tittle fontSize={100} lineHeight={114.6} marginTop={37}>
          EUROPA
        </Tittle>
        <Text marginTop={14}>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </Text>
        <Rectangle />
        <MiscContainer>
          <MiscText>
            <SubTittle fontSize={14} lineHeight={16.8} letterSpacing={2.36}>
              AVG. DISTANCE
            </SubTittle>
            <Tittle fontSize={28} lineHeight={32.09} marginTop={0}>
              628 MIL. KM
            </Tittle>
          </MiscText>
          <MiscText>
            <SubTittle fontSize={14} lineHeight={16.8} letterSpacing={2.36}>
              EST. TRAVEL TIME
            </SubTittle>
            <Tittle fontSize={28} lineHeight={32.09} marginTop={0}>
              3 YEARS
            </Tittle>
          </MiscText>
        </MiscContainer>
      </PlanetContainer>
    </ConteudoContainer>
  );
}
