import styled from "styled-components";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { Link } from "../../uiComponents/Link";
import { SubTittle } from "../../uiComponents/SubTittle";
import { Text } from "../../uiComponents/Text";
import { Tittle } from "../../uiComponents/Tittle";

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
  background-color: #ffffff;
  border-radius: 100%;
  margin-right: 165px;
  &:hover {
    background-color: #ffffff;
  }
  &:hover::before {
    position: absolute;
    width: 450px;
    height: 450px;
    background-color: #ffffff;
    opacity: 0.1;
  }
`;
const LinkExplore = styled(Link)`
  font-family: "Bellefair", serif;
  font-size: 32px;
  line-height: 36.67px;
  letter-spacing: 2px;
  color: rgba(11, 13, 23, 1);
`;

export function Home() {
  return (
    <ContainerBackgroundImage
      url={"/home/background-home-desktop.jpg"}
    >
      <TextContainer>
        <SubTittle fontSize={28} lineHeight={33.6} letterSpacing={4.72}>SO, YOU WANT TO TRAVEL TO</SubTittle>
        <Tittle fontSize={150} lineHeight={171.9} marginTop={24}>
          SPACE
        </Tittle>
        <Text marginTop={24}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Text>
      </TextContainer>
      <ButtonExplorer>
        <LinkExplore to={"destination/moon"}>EXPLORE</LinkExplore>
      </ButtonExplorer>
    </ContainerBackgroundImage>
  );
}
