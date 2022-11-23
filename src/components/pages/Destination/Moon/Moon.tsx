import styled from "styled-components";
import { SubTittle } from "../../../uiComponents/SubTittle";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";
import imgMoon from "../../../../assets/destination/image-moon.png";

const ConteudoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PlanetImg = styled.img`
  width: 445px;
  height: 445px;
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
  width: 143px;
  height: 61px;
  justify-content: space-between;
  margin-right: 78px;
`;

const MiscContainer = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: row;
`;

export function Moon() {
  return (
    <ConteudoContainer>
      <PlanetImg src={imgMoon} />
      <PlanetContainer>
        <Tittle fontSize={100} lineHeight={114.6} marginTop={37}>
          MOON
        </Tittle>
        <Text marginTop={14}>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </Text>
        <Rectangle />
        <MiscContainer>
          <MiscText>
            <SubTittle fontSize={14} lineHeight={16.8} letterSpacing={2.36}>
              AVG. DISTANCE
            </SubTittle>
            <Tittle fontSize={28} lineHeight={32.09} marginTop={0}>
              384,400 KM
            </Tittle>
          </MiscText>
          <MiscText>
            <SubTittle fontSize={14} lineHeight={16.8} letterSpacing={2.36}>
              EST. TRAVEL TIME
            </SubTittle>
            <Tittle fontSize={28} lineHeight={32.09} marginTop={0}>
              3 DAYS
            </Tittle>
          </MiscText>
        </MiscContainer>
      </PlanetContainer>
    </ConteudoContainer>
  );
}
