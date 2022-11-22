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
  margin-top: 52px;
`;

export function Anousheh() {
  return (
    <ContentContainer>
      <TextContainer>
        <TittleCrew fontSize={32} lineHeight={36.67} marginTop={154}>
          FLIGHT ENGINEER
        </TittleCrew>
        <Tittle fontSize={56} lineHeight={64.18} marginTop={15}>
          ANOUSHEH ANSARI
        </Tittle>
        <CrewText marginTop={27}>
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </CrewText>
      </TextContainer>
      <ImgContainer>
        <CrewImg src="\crew\image-anousheh-ansari.png" />
      </ImgContainer>
    </ContentContainer>
  );
}
