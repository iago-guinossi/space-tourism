import styled from "styled-components";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";
import imgDouglas from "../../../../assets/crew/image-douglas-hurley.png";
import { useWindowSize } from "../../../../hooks/useWindowSize";

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    height: 282px;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 450px) {
    flex-direction: column-reverse;
    position: absolute;
    height: 467px;
  }
`;

const TextContainer = styled.div`
  width: 570px;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-shrink: 0;
  @media (max-width: 1107px) {
    width: 47.48%;
  }
  @media (max-width: 1000px) {
    width: 458px;
    height: 182px;
  }
  @media (max-width: 460px) {
    align-items: center;
    width: 450px;
  }
  @media (max-width: 450px){
    max-width: 327px;
  }
`;

const TittleCrew = styled(Tittle)`
  opacity: 0.5;
  @media (max-width: 1000px) {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-top: 60px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
    line-height: 18px;
    margin-top: 74px;
  }
`;

const CrewText = styled(Text)`
  max-width: 444px;
  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    margin-top: 16px;
  }
  @media (max-width: 450px) {
    max-width: 327px;
    font-size: 15px;
    line-height: 25px;
  }
`;

const ImgContainer = styled.div`
  width: 605px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 1243px) {
    flex-shrink: 1;
  }
  @media (max-width: 1000px) {
    flex-shrink: 0;
    width: 0;
    height: 0;
  }
  @media (max-width: 450px) {
    width: 327px;
    height: 223px;
    position: relative;
  }
`;

const CrewImg = styled.img<{ size: any }>`
  position: absolute;
  bottom: 0;
  @media (max-width: 1243px) {
    width: 41.3%;
  }
  @media (max-width: 1000px) {
    max-height: 52%;
    width: auto;
    @media (max-height: 941px) {
      max-height: ${({ size }) => size.height - 452}px;
    }
  }
  @media (max-width: 450px) {
    position: relative;
    height: 100%;
  }
`;

const TittleName = styled(Tittle)`
  @media (max-width: 1000px) {
    font-size: 40px;
    line-height: 46px;
    text-align: center;
    margin-top: 6px;
  }
  @media (max-width: 450px) {
    font-size: 24px;
    line-height: 28px;
    margin-top: 8px;
  }
`;

const Rectangle = styled.div`
  @media (max-width: 450px) {
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: #383b4b;
  }
`;

export function Douglas() {
  const size = useWindowSize();
  return (
    <ContentContainer>
      <TextContainer>
        <TittleCrew fontSize={32} lineHeight={36.67} marginTop={154}>
          COMANDER
        </TittleCrew>
        <TittleName fontSize={56} lineHeight={64.18} marginTop={15}>
          DOUGLAS HURLEY
        </TittleName>
        <CrewText marginTop={27}>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </CrewText>
      </TextContainer>
      <ImgContainer>
        <CrewImg src={imgDouglas} size={size} />
        <Rectangle />
      </ImgContainer>
    </ContentContainer>
  );
}
