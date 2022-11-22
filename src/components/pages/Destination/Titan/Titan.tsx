import styled from "styled-components";
import { SubTittle } from "../../../uiComponents/SubTittle";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";
import imgTitan from '../../../../assets/destination/image-titan.png'

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
  width: 136px;
  height: 61px;
  justify-content: space-between;
  margin-right: 85px;
`;

const MiscContainer = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: row;
`;

export function Titan() {
  return (
    <ConteudoContainer>
      <PlanetImg src={imgTitan} />
      <PlanetContainer>
        <Tittle fontSize={100} lineHeight={114.6} marginTop={37}>
          TITAN
        </Tittle>
        <Text marginTop={14}>
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </Text>
        <Rectangle />
        <MiscContainer>
          <MiscText>
            <SubTittle fontSize={14} lineHeight={16.8} letterSpacing={2.36}>
              AVG. DISTANCE
            </SubTittle>
            <Tittle fontSize={28} lineHeight={32.09} marginTop={0}>
              1.6 BIL. KM
            </Tittle>
          </MiscText>
          <MiscText>
            <SubTittle fontSize={14} lineHeight={16.8} letterSpacing={2.36}>
              EST. TRAVEL TIME
            </SubTittle>
            <Tittle fontSize={28} lineHeight={32.09} marginTop={0}>
              7 YEARS
            </Tittle>
          </MiscText>
        </MiscContainer>
      </PlanetContainer>
    </ConteudoContainer>
  );
}
