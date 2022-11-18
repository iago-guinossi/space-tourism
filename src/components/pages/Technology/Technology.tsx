import styled from "styled-components";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { SubTittle } from "../../uiComponents/SubTittle";
import { SubTittleNumber } from "../../uiComponents/SubTittleNumber";
import { Text } from "../../uiComponents/Text";
import { Tittle } from "../../uiComponents/Tittle";
import { Vehicle } from "./Vehicle";

const SubTittleContainer = styled.div`
  display: flex;
  margin-top: 212px;
`;

const ConteudoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const RoundedButton = styled.button`
  width: 80px;
  height: 80px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 100%;
  background-color: transparent;
  margin-bottom: 32px;
  `;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  margin-bottom: -32px;
`;

const NumberButton = styled.span`
  font-family: "Bellefair";
  font-size: 32px;
  line-height: 37px;
  letter-spacing: 2px;
  color: #ffffff;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;  
  margin-right: 130px;
`;

const SubTextContainer = styled.div`
margin-top: 17px;
width: 444px;
`

const Img = styled.img`
width:515px;
height: 527px;
margin-right: -164px;
`

export function Technology() {
  return (
    <ContainerBackgroundImage
      url={"/technology/background-technology-desktop.jpg"}
    >
      <MainContainer>
        <SubTittleContainer>
          <SubTittleNumber fontSize={28} lineHeight={33.6} letterSpacing={4.72}>
            03
          </SubTittleNumber>
          <SubTittle fontSize={28} lineHeight={33.6} letterSpacing={4.72}>
            SPACE LAUNCH 01
          </SubTittle>
        </SubTittleContainer>
        <ConteudoContainer>
          <ButtonContainer>
            <RoundedButton>
              <NumberButton>1</NumberButton>
            </RoundedButton>
            <RoundedButton>
              <NumberButton>2</NumberButton>
            </RoundedButton>
            <RoundedButton>
              <NumberButton>3</NumberButton>
            </RoundedButton>
          </ButtonContainer>
            <Vehicle/>
        </ConteudoContainer>
      </MainContainer>
    </ContainerBackgroundImage>
  );
}
