import styled from "styled-components";
import { SubTittle } from "../../../uiComponents/SubTittle";
import { Tittle } from "../../../uiComponents/Tittle";
import { Text } from "../../../uiComponents/Text";
import imgVehicle from "../../../../assets/technology/image-launch-vehicle-portrait.jpg";
import imgVehicleLandscape from "../../../../assets/technology/image-launch-vehicle-landscape.jpg";
import { useWindowSize } from "../../../../hooks/useWindowSize";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
  margin-right: 130px;
  @media (max-width: 1000px) {
    width: 458px;
    height: 237px;
    margin: 0;
    text-align: center;
  }
  @media (max-width: 460px) {
    width: 450px;
  }
  @media (max-width: 450px) {
    width: 327px;
    height: 220px;
  }
`;

const SubTextContainer = styled.div`
  margin-top: 17px;
  width: 444px;
  @media (max-width: 450px) {
    width: 327px;
    margin: 0;
  }
`;

const Img = styled.img<{ size: any }>`
  max-width: 515px;
  max-height: 527px;
  margin-right: -164px;
  @media (max-width: 1440px) {
    margin: 0;
    position: absolute;
    right: 0;
  }
  @media (max-width: 1307px) {
    width: ${({ size }) => size.width - 795}px;
  }
  @media (max-width: 1000px) {
    max-width: 100%;
    width: 100%;
    height: 310px;
    top: 60px;
  }
  @media (max-width: 450px) {
    height: 170px;
    top: 32px;
  }
`;

const TittleTech = styled(Tittle)`
  @media (max-width: 1000px) {
    font-size: 40px;
    line-height: 46px;
    margin-top: 16px;
  }
  @media (max-width: 450px) {
    font-size: 24px;
    line-height: 28px;
    margin-top: 9px;
  }
`;

const TextTech = styled(Text)`
  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 28px;
    margin-top: 16px;
  }
  @media (max-width: 450px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

const SubTittleTech = styled(SubTittle)`
  @media (max-width: 450px) {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2.3625px;
  }
`;

export function Vehicle() {
  const size = useWindowSize();
  return (
    <>
      <TextContainer>
        <SubTittleTech fontSize={16} lineHeight={19.2} letterSpacing={2.7}>
          THE TERMINOLOGY…
        </SubTittleTech>
        <TittleTech fontSize={56} lineHeight={64.18} marginTop={11}>
          LAUNCH VEHICLE
        </TittleTech>
        <SubTextContainer>
          <TextTech marginTop={0}>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an aweinspiring
            sight on the launch pad!
          </TextTech>
        </SubTextContainer>
      </TextContainer>
      <Img
        src={size.width < 1001 ? imgVehicleLandscape : imgVehicle}
        size={size}
      />
    </>
  );
}
