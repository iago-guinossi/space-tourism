import styled from "styled-components";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { SubTittle } from "../../uiComponents/SubTittle";
import { SubTittleNumber } from "../../uiComponents/SubTittleNumber";

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`

const SubTittleContainer = styled.div`
    margin-top: 212px;
    margin-left: 166.5px;
`
const PlanetImg = styled.img`
width: 445px;
height: 445px;
margin-left: 230px;
margin-top: 97px;
`

export function Destination(){
    return <ContainerBackgroundImage url={"src/assets/destination/background-destination-desktop.jpg"}>
        <Container>
             <SubTittleContainer>
              <SubTittleNumber>01</SubTittleNumber>
             <SubTittle>PICK YOUR DESTINATION</SubTittle>
             </SubTittleContainer>
            <PlanetImg src="src/assets/destination/image-moon.png"/>
        </Container>
    </ContainerBackgroundImage>
}