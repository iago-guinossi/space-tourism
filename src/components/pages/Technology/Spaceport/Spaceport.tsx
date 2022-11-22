import styled from "styled-components";
import { SubTittle } from "../../../uiComponents/SubTittle";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";
import imgSpaceport from "../../../../assets/technology/image-spaceport-portrait.jpg";

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

export function Spaceport() {
  return (
    <>
      <TextContainer>
        <SubTittle fontSize={16} lineHeight={19.2} letterSpacing={2.7}>
          THE TERMINOLOGY…
        </SubTittle>
        <Tittle fontSize={56} lineHeight={64.18} marginTop={11}>
          SPACEPORT
        </Tittle>
        <SubTextContainer>
          <Text marginTop={0}>
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </Text>
        </SubTextContainer>
      </TextContainer>
      <Img src={imgSpaceport} />
    </>
  );
}
