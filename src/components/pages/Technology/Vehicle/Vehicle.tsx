import styled from "styled-components";
import { SubTittle } from "../../../uiComponents/SubTittle";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";
import imgVehicle from "../../../../assets/technology/image-launch-vehicle-portrait.jpg";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
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

export function Vehicle() {
  return (
    <>
      <TextContainer>
        <SubTittle fontSize={16} lineHeight={19.2} letterSpacing={2.7}>
          THE TERMINOLOGY…
        </SubTittle>
        <Tittle fontSize={56} lineHeight={64.18} marginTop={11}>
          LAUNCH VEHICLE
        </Tittle>
        <SubTextContainer>
          <Text marginTop={0}>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </Text>
        </SubTextContainer>
      </TextContainer>
      <Img src={imgVehicle} />
    </>
  );
}
