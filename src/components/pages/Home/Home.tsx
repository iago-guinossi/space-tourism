import styled from "styled-components";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { Link } from "../../uiComponents/Link";
import { SubTittle } from "../../uiComponents/SubTittle";
import { Text } from "../../uiComponents/Text";
import { Tittle } from "../../uiComponents/Tittle";
import backgrounddesktophome from '../../../assets/home/background-home-desktop.jpg'
import backgroundTablethome from '../../../assets/home/background-home-Tablet.jpg'

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: 382px;
  margin-left: 165px;
  padding-top: 387px;
  @media(max-width: 768px){
    margin-left: 0;
    padding-top: 202px;
    align-items: center;
    flex-shrink: 0;
    justify-content: flex-start;
    height: 334px;
  }
`;

const ButtonExplorer = styled.button`
  height: 274px;
  width: 274px;
  background-color: #ffffff;
  border-radius: 100%;
  margin-left: 386px;
  margin-bottom: 131px;;
  align-self: flex-end;
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
  @media(max-width: 768px){
    margin-left: 0;
    align-self: center;
    margin-top: 156px;
    flex-shrink: 0;
    height: 242px;
    width: 242px;
    margin-bottom: 0;
  }
`;
const LinkExplore = styled(Link)`
  font-family: "Bellefair", serif;
  font-size: 32px;
  line-height: 36.67px;
  letter-spacing: 2px;
  color: rgba(11, 13, 23, 1);
`;

const SubTittleHome = styled(SubTittle)`
  @media (max-width: 768px){
    font-size: 20px;
    color: rgba(208, 214, 249, 1);
    letter-spacing: 3.375px;
    line-height: 24px;
  }
`

const TittleHome = styled(Tittle)`
  @media (max-width: 768px){
    line-height: 150px;
  }
`

export function Home() {
  return (
    <ContainerBackgroundImage
      url={backgrounddesktophome}
      urlTablet={backgroundTablethome}
    >
      <TextContainer>
        <SubTittleHome fontSize={28} lineHeight={33.6} letterSpacing={4.72}>SO, YOU WANT TO TRAVEL TO</SubTittleHome>
        <TittleHome fontSize={150} lineHeight={171.9} marginTop={24}>
          SPACE
        </TittleHome>
        <Text marginTop={24}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Text>
      </TextContainer>
      <ButtonExplorer>
        <LinkExplore to={"/space-tourism/destination/moon"}>EXPLORE</LinkExplore>
      </ButtonExplorer>
    </ContainerBackgroundImage>
  );
}
