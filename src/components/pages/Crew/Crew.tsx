import { useEffect, useState } from "react";
import styled from "styled-components";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { SubTittle } from "../../uiComponents/SubTittle";
import { SubTittleNumber } from "../../uiComponents/SubTittleNumber";
import { Anousheh } from "./Anousheh";
import { Douglas } from "./Douglas";
import { Mark } from "./Mark";
import { Victor } from "./Victor";

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
`;
const SubTittleContainer = styled.div``;

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
`;

const ButtonContainer = styled.div`
  width: 132px;
  height: 15px;
  display: flex;
  justify-content: space-between;
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
    <ContainerBackgroundImage url="/crew/background-crew-desktop.jpg">
      <NavContainer>
        <SubTittleContainer>
          <SubTittleNumber fontSize={28} lineHeight={33.6} letterSpacing={4.72}>
            02
          </SubTittleNumber>
          <SubTittle fontSize={28} lineHeight={33.6} letterSpacing={4.72}>
            MEET YOUR CREW
          </SubTittle>
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
