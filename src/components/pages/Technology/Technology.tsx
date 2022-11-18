import { useState } from "react";
import styled from "styled-components";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { SubTittle } from "../../uiComponents/SubTittle";
import { SubTittleNumber } from "../../uiComponents/SubTittleNumber";
import { Capsule } from "./Capsule";
import { Spaceport } from "./Spaceport";
import { Vehicle } from "./Vehicle";

type RoundedButtonProps = {
    number: number;
    state: number;
}

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
  `;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  `;

  const RoundedButton = styled.button<RoundedButtonProps>`
    width: 80px;
    height: 80px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 100%;
    background-color: ${({number, state})=> number === state ? '#FFFFFF' : 'transparent'};
    color: ${({number, state})=> number === state ? 'rgba(11, 13, 23, 1)' : '#FFFFFF'};
    margin-bottom: 32px;
    padding-left: 11px;
    padding-top: 3px;
    &:hover{
        border: 1px solid rgba(255, 255, 255, 1)
    }
  `;

export function Technology() {
  const [state, setState] = useState(1);

  function handleClick(id: number) {
    setState(id);
  }
  
  function render(){
    if(state === 1) return <Vehicle/>
    if(state === 2) return <Spaceport/>
    if(state === 3) return <Capsule/>
  }

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
            SPACE LAUNCH 101
          </SubTittle>
        </SubTittleContainer>
        <ConteudoContainer>
          <ButtonContainer>
            <RoundedButton number={1} state={state} onClick={() => handleClick(1)}>
              <NumberButton>1</NumberButton>
            </RoundedButton>
            <RoundedButton number={2} state={state} onClick={() => handleClick(2)}>
              <NumberButton>2</NumberButton>
            </RoundedButton>
            <RoundedButton number={3} state={state} onClick={() => handleClick(3)}>
              <NumberButton>3</NumberButton>
            </RoundedButton>
          </ButtonContainer>
          {render()}
        </ConteudoContainer>
      </MainContainer>
    </ContainerBackgroundImage>
  );
}
