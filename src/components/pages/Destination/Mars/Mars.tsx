import styled from "styled-components";
import { SubTittle } from "../../../uiComponents/SubTittle";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";
import imgMars from "../../../../assets/destination/image-mars.png";

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
  width: 216px;
  height: 61px;
  justify-content: space-between;
  margin-right: 66px;
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

export function Mars() {
  return (
    <ConteudoContainer>
      <PlanetImg src={imgMars} />
      <PlanetContainer>
        <TittleDest fontSize={100} lineHeight={114.6} marginTop={37}>
          MARS
        </TittleDest>
        <TextDest marginTop={14}>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </TextDest>
        <Rectangle />
        <MiscContainer>
          <MiscText>
            <SubTittle fontSize={14} lineHeight={16.8} letterSpacing={2.36}>
              AVG. DISTANCE
            </SubTittle>
            <Tittle fontSize={28} lineHeight={32.09} marginTop={0}>
              225 MIL. KM
            </Tittle>
          </MiscText>
          <MiscText>
            <SubTittle fontSize={14} lineHeight={16.8} letterSpacing={2.36}>
              EST. TRAVEL TIME
            </SubTittle>
            <Tittle fontSize={28} lineHeight={32.09} marginTop={0}>
              9 MONTHS
            </Tittle>
          </MiscText>
        </MiscContainer>
      </PlanetContainer>
    </ConteudoContainer>
  );
}
