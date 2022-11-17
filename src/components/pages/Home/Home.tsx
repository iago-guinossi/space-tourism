import styled from "styled-components";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { Link } from "../../uiComponents/Link";
import { SubTittle } from "../../uiComponents/SubTittle";
import { Text } from "../../uiComponents/Text";

const Tittle = styled.span`
  font-family: "Bellefair", serif;
  font-size: 150px;
  color: #ffffff;
  line-height: 171.9px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: 382px;
  margin-left: 165px;
`;

const ButtonExplorer = styled.button`
    height: 274px;
    width: 274px;
    background-color: #FFFFFF;
    border-radius: 100%;
    margin-right: 165px;
    &:hover{
        background-color: #FFFFFF;
    };
    &:hover::before{
        position: absolute;
        width:450px;
        height:450px;
        background-color: #FFFFFF;
        opacity:0.1;
    }
`
const LinkExplore = styled(Link)`
    font-family: "Bellefair", serif;
    font-size: 32px;
    line-height: 36.67px;
    letter-spacing: 2px;
    color:rgba(11, 13, 23, 1);
`

export function Home() {
  return (
    <ContainerBackgroundImage url={"src/assets/home/background-home-desktop.jpg"}>
      <TextContainer>
        <SubTittle>SO, YOU WANT TO TRAVEL TO</SubTittle>
        <Tittle>SPACE</Tittle>
        <Text>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Text>
      </TextContainer>
      <ButtonExplorer><LinkExplore>EXPLORE</LinkExplore></ButtonExplorer>
    </ContainerBackgroundImage>
  );
}
