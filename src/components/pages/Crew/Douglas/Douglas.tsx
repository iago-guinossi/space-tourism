import styled from "styled-components";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";
import imgDouglas from "../../../../assets/crew/image-douglas-hurley.png";

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
  bottom: 0;
`;

export function Douglas() {
  return (
    <ContentContainer>
      <TextContainer>
        <TittleCrew fontSize={32} lineHeight={36.67} marginTop={154}>
          COMANDER
        </TittleCrew>
        <Tittle fontSize={56} lineHeight={64.18} marginTop={15}>
          DOUGLAS HURLEY
        </Tittle>
        <CrewText marginTop={27}>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </CrewText>
      </TextContainer>
      <ImgContainer>
        <CrewImg src={imgDouglas} />
      </ImgContainer>
    </ContentContainer>
  );
}
