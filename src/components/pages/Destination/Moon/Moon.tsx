import styled from "styled-components";
import { SubTittle } from "../../../uiComponents/SubTittle";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";
import imgMoon from "../../../../assets/destination/image-moon.png";

const ConteudoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  @media (max-width: 1440px) {
    justify-content: space-between;
  }
  @media (max-width: 1288px) {
    justify-content: center;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: -387px;
  }
  @media (max-width: 450px) {
    margin-top: -224px;
  }
`;

const PlanetImg = styled.img`
  width: 445px;
  height: 445px;
  margin-right: 157px;
  margin-left: 67px;
  @media (max-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
    padding-left: 230px;
  }
  @media (max-width: 1288px) {
    padding-left: 75px;
  }
  @media (max-width: 1000px) {
    width: 300px;
    height: 300px;
    padding: 0;
  }
  @media (max-width: 450px) {
    height: 170px;
    width: 170px;
  }
`;

const PlanetContainer = styled.div`
  width: 445px;
  height: 472px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1440px) {
    padding-right: 163px;
  }
  @media (max-width: 1288px) {
    padding-right: 0;
  }
  @media (max-width: 1000px) {
    max-width: 573px;
    width: 100%;
  }
  @media (max-width: 450px) {
    max-width: 327px;
  }
`;

const Rectangle = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  opacity: 0.25;
  margin-top: 54px;
  flex-shrink: 0;
  @media (max-width: 450px) {
    margin-top: 32px;
  }
`;

const MiscText = styled.div`
  display: flex;
  flex-direction: column;
  width: 143px;
  height: 61px;
  justify-content: space-between;
  margin-right: 80px;
  @media (max-width: 1000px) {
    margin: 0;
    text-align: center;
  }
  @media (max-width: 450px) {
    margin-top: 32px;
  }
`;

const MiscContainer = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    justify-content: space-around;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`;

const TittleDest = styled(Tittle)`
  @media (max-width: 1000px) {
    font-size: 80px;
    line-height: 92px;
    text-align: center;
    padding-top: 119px;
    margin: 0;
  }
  @media (max-width: 450px) {
    font-size: 56px;
    line-height: 64px;
    padding-top: 74px;
  }
`;

const TextDest = styled(Text)`
  @media (max-width: 450px) {
    margin-top: 0;
  }
`;

export function Moon() {
  return (
    <ConteudoContainer>
      <PlanetImg src={imgMoon} />
      <PlanetContainer>
        <TittleDest fontSize={100} lineHeight={114.6} marginTop={37}>
          MOON
        </TittleDest>
        <TextDest marginTop={14}>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </TextDest>
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
