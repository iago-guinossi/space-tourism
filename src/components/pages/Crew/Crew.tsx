import { useEffect, useState } from "react";
import styled from "styled-components";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { SubTittle } from "../../uiComponents/SubTittle";
import { SubTittleNumber } from "../../uiComponents/SubTittleNumber";
import { Anousheh } from "./Anousheh";
import { Douglas } from "./Douglas";
import { Mark } from "./Mark";
import { Victor } from "./Victor";
import imgBackgroundDesktop from "../../../assets/crew/background-crew-desktop.jpg";
import imgBackgroundTablet from "../../../assets/crew/background-crew-tablet.jpg";
import imgBackgroundMobile from "../../../assets/crew/background-crew-mobile.jpg";

type RoundedButtonProps = {
  number: number;
  state: number;
};

const NavContainer = styled.div`
  width: 1107px;
  height: 594px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
  justify-content: space-between;
  padding-top: 212px;
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: flex-start;
    padding-top: 136px;
    width: 100%;
    height: 316px;
  }
  @media (max-width: 450px){
    height: 518px;
    padding-top: 88px;
  }
`;
const SubTittleContainer = styled.div`
  @media (max-width: 1000px) {
    align-self: flex-start;
    padding-left: 38.5px;
  }
  @media (max-width: 450px) {
    align-self: center;
    padding: 0;
  }
`;

const RoundedButton = styled.button<RoundedButtonProps>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  border: none;
  background-color: ${({ number, state }) =>
    number === state ? "#FFFFFF" : "rgba(255, 255, 255, 0.17)"};
  &:hover {
    background-color: #ffffff;
    opacity: 0.5;
  }
  @media (max-width: 1000px) {
    width: 10px;
    height: 10px;
  }
`;

const ButtonContainer = styled.div`
  width: 132px;
  height: 15px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 88px;
    height: 10px;
    z-index: 1;
  }
  @media (max-width: 450px){
    padding-top: 287px;
  }
`;

const SubTittleNumberCrew = styled(SubTittleNumber)`
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

const SubTittleCrew = styled(SubTittle)`
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

export function Crew() {
  const [state, setState] = useState(1);

  function handleClick(id: number) {
    setState(id);
  }

  function render() {
    if (state === 1) return <Douglas />;
    if (state === 2) return <Mark />;
    if (state === 3) return <Victor />;
    if (state === 4) return <Anousheh />;
  }

  return (
    <ContainerBackgroundImage
      url={imgBackgroundDesktop}
      urlTablet={imgBackgroundTablet}
      urlMobile={imgBackgroundMobile}
    >
      <NavContainer>
        <SubTittleContainer>
          <SubTittleNumberCrew
            fontSize={28}
            lineHeight={33.6}
            letterSpacing={4.72}
          >
            02
          </SubTittleNumberCrew>
          <SubTittleCrew fontSize={28} lineHeight={33.6} letterSpacing={4.72}>
            MEET YOUR CREW
          </SubTittleCrew>
        </SubTittleContainer>
        {render()}
        <ButtonContainer>
          <RoundedButton
            number={1}
            state={state}
            onClick={() => handleClick(1)}
          />
          <RoundedButton
            number={2}
            state={state}
            onClick={() => handleClick(2)}
          />
          <RoundedButton
            number={3}
            state={state}
            onClick={() => handleClick(3)}
          />
          <RoundedButton
            number={4}
            state={state}
            onClick={() => handleClick(4)}
          />
        </ButtonContainer>
      </NavContainer>
    </ContainerBackgroundImage>
  );
}
