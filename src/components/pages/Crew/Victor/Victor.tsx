import styled from "styled-components";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const TextContainer = styled.div`
  width: 570px;
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
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const CrewImg = styled.img`
  position: absolute;
  margin-top: 9px;
`;

export function Victor() {
  return (
    <ContentContainer>
      <TextContainer>
        <TittleCrew fontSize={32} lineHeight={36.67} marginTop={154}>
          PILOT
        </TittleCrew>
        <Tittle fontSize={56} lineHeight={64.18} marginTop={15}>
          VICTOR GLOVER
        </Tittle>
        <CrewText marginTop={27}>
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
        </CrewText>
      </TextContainer>
      <ImgContainer>
        <CrewImg src="\crew\image-victor-glover.png" />
      </ImgContainer>
    </ContentContainer>
  );
}
