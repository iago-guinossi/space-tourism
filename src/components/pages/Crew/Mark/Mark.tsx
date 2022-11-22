import styled from "styled-components";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const TextContainer = styled.div`
  width: 614px;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-shrink: 0;
`;

const TittleCrew = styled(Tittle)`
  opacity: 0.5;
`;

const CrewText = styled(Text)`
  width: 444px;
`;

const ImgContainer = styled.div`
  width: 605px;
  flex-shrink: 0;
  margin-left: 33.5px;
  box-sizing: border-box;
`;

const CrewImg = styled.img`
  position: absolute;
  margin-top: 14px;
`;

export function Mark() {
  return (
    <ContentContainer>
      <TextContainer>
        <TittleCrew fontSize={32} lineHeight={36.67} marginTop={154}>
          MISSION SPECIALIST
        </TittleCrew>
        <Tittle fontSize={56} lineHeight={64.18} marginTop={15}>
          MARK SHUTTLEWORTH
        </Tittle>
        <CrewText marginTop={27}>
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </CrewText>
      </TextContainer>
      <ImgContainer>
        <CrewImg src="\crew\image-mark-shuttleworth.png" />
      </ImgContainer>
    </ContentContainer>
  );
}
