import { useState } from "react";
import styled from "styled-components";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { SubTittle } from "../../uiComponents/SubTittle";
import { SubTittleNumber } from "../../uiComponents/SubTittleNumber";
import { Capsule } from "./Capsule";
import { Spaceport } from "./Spaceport";
import { Vehicle } from "./Vehicle";
import imgBackgroundDesktop from "../../../assets/technology/background-technology-desktop.jpg";
import imgBackgroundTablet from "../../../assets/technology/background-technology-tablet.jpg";
import imgBackgroundMobile from "../../../assets/technology/background-technology-mobile.jpg";

type RoundedButtonProps = {
  number: number;
  state: number;
};

const SubTittleContainer = styled.div`
  display: flex;
  margin-top: 212px;
  @media (max-width: 1000px) {
    margin: 0;
    padding-top: 136px;
    padding-left: 38.5px;
  }
`;

const ConteudoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1440px) {
    padding-top: 137px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    padding: 0;
    position: relative;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  margin-bottom: -32px;
  @media (max-width: 1000px) {
    flex-direction: row;
    margin: 0;
    padding-top: 426px;
    width: 210px;
    justify-content: space-between;
  }
`;

const NumberButton = styled.span`
  font-family: "Bellefair";
  font-size: 32px;
  line-height: 37px;
  letter-spacing: 2px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 1440px) {
    margin-left: 0;
    padding-left: 165px;
  }
  @media (max-width: 1000px) {
    padding: 0;
    width: 100%;
  }
`;

const RoundedButton = styled.button<RoundedButtonProps>`
  width: 80px;
  height: 80px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 100%;
  background-color: ${({ number, state }) =>
    number === state ? "#FFFFFF" : "transparent"};
  color: ${({ number, state }) =>
    number === state ? "rgba(11, 13, 23, 1)" : "#FFFFFF"};
  margin-bottom: 32px;
  padding-left: 11px;
  padding-top: 3px;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }
  @media (max-width: 1000px){
    height: 60px;
    width: 60px;
  }
`;

const SubTittleNumberTech = styled(SubTittleNumber)`
  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.38px;
    margin-right: 16px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`;

const SubTittleTech = styled(SubTittle)`
  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.38px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`;

export function Technology() {
  const [state, setState] = useState(1);

  function handleClick(id: number) {
    setState(id);
  }

  function render() {
    if (state === 1) return <Vehicle />;
    if (state === 2) return <Spaceport />;
    if (state === 3) return <Capsule />;
  }

  return (
    <ContainerBackgroundImage
      url={imgBackgroundDesktop}
      urlTablet={imgBackgroundTablet}
      urlMobile={imgBackgroundMobile}
    >
      <MainContainer>
        <SubTittleContainer>
          <SubTittleNumberTech
            fontSize={28}
            lineHeight={33.6}
            letterSpacing={4.72}
          >
            03
          </SubTittleNumberTech>
          <SubTittleTech fontSize={28} lineHeight={33.6} letterSpacing={4.72}>
            SPACE LAUNCH 101
          </SubTittleTech>
        </SubTittleContainer>
        <ConteudoContainer>
          <ButtonContainer>
            <RoundedButton
              number={1}
              state={state}
              onClick={() => handleClick(1)}
            >
              <NumberButton>1</NumberButton>
            </RoundedButton>
            <RoundedButton
              number={2}
              state={state}
              onClick={() => handleClick(2)}
            >
              <NumberButton>2</NumberButton>
            </RoundedButton>
            <RoundedButton
              number={3}
              state={state}
              onClick={() => handleClick(3)}
            >
              <NumberButton>3</NumberButton>
            </RoundedButton>
          </ButtonContainer>
          {render()}
        </ConteudoContainer>
      </MainContainer>
    </ContainerBackgroundImage>
  );
}
