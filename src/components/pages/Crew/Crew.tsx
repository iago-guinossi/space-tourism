import styled from "styled-components";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { SubTittle } from "../../uiComponents/SubTittle";
import { SubTittleNumber } from "../../uiComponents/SubTittleNumber";

const NavContainer = styled.div`
  width: 1107px;
  height: 594px;
  display: flex;
  flex-direction: column;
  margin: 212px auto 0 auto;
  justify-content: space-between;
`;
const SubTittleContainer = styled.div``;

const RoundedButton = styled.button`
width: 15px;
height: 15px;
border-radius: 100%;
border: none;
background: rgba(255, 255, 255, 0.17);`

const ButtonContainer = styled.div`
    width: 132px;
    height: 15px;
    display: flex;
    justify-content: space-between;
`


export function Crew() {
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
        <ButtonContainer>
            <RoundedButton/>
            <RoundedButton/>
            <RoundedButton/>
            <RoundedButton/>
        </ButtonContainer>
      </NavContainer>
    </ContainerBackgroundImage>
  );
}
