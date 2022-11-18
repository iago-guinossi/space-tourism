import styled from "styled-components";
import { SubTittle } from "../../../uiComponents/SubTittle";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
  height: 303px;
  margin-right: 130px;
`;

const SubTextContainer = styled.div`
  margin-top: 17px;
  width: 444px;
`;

const Img = styled.img`
  width: 515px;
  height: 527px;
  margin-right: -164px;
`;

export function Capsule() {
  return (
    <>
      <TextContainer>
        <SubTittle fontSize={16} lineHeight={19.2} letterSpacing={2.7}>
          THE TERMINOLOGY…
        </SubTittle>
        <Tittle fontSize={56} lineHeight={64.18} marginTop={11}>
          SPACE CAPSULE
        </Tittle>
        <SubTextContainer>
          <Text marginTop={0}>
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </Text>
        </SubTextContainer>
      </TextContainer>
      <Img src="\technology\image-space-capsule-portrait.jpg" />
    </>
  );
}
