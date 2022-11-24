import styled from "styled-components";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";
import imgMark from "../../../../assets/crew/image-mark-shuttleworth.png";
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
  width: 614px;
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
  @media (max-width: 450px) {
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
  width: 444px;
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
  margin-left: 33.5px;
  box-sizing: border-box;
  @media (max-width: 1398px){
    margin-left: 0;
  }
  @media (max-width: 1331px) {
    flex-shrink: 1;
  }
  @media (max-width: 1049px){
    width: 500px;
  }
  @media (max-width: 1000px) {
    flex-shrink: 0;
    width: 0;
    height: 0;
    display: flex;
    justify-content: center;
    margin-left: 0;
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
  @media (max-width: 1398px){
    right: 172px;
  }
  @media (max-width: 1331px) {
    max-height: 640px;
    width: 32.5%;
  }
  @media (max-width: 1000px) {
    right: auto;
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

export function Mark() {
  const size = useWindowSize();
  return (
    <ContentContainer>
      <TextContainer>
        <TittleCrew fontSize={32} lineHeight={36.67} marginTop={154}>
          MISSION SPECIALIST
        </TittleCrew>
        <TittleName fontSize={56} lineHeight={64.18} marginTop={15}>
          MARK SHUTTLEWORTH
        </TittleName>
        <CrewText marginTop={27}>
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </CrewText>
      </TextContainer>
      <ImgContainer>
        <CrewImg src={imgMark} size={size} />
        <Rectangle />
      </ImgContainer>
    </ContentContainer>
  );
}
