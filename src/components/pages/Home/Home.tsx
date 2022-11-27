import styled from "styled-components";
import { ContainerBackgroundImage } from "../../uiComponents/ContainerBackgroundImage";
import { Link } from "../../uiComponents/Link";
import { SubTittle } from "../../uiComponents/SubTittle";
import { Text } from "../../uiComponents/Text";
import { Tittle } from "../../uiComponents/Tittle";
import backgrounddesktophome from "../../../assets/home/background-home-desktop.jpg";
import backgroundTablethome from "../../../assets/home/background-home-tablet.jpg";
import backgroundMobilehome from "../../../assets/home/background-home-mobile.jpg";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: 382px;
  margin-left: 165px;
  padding-top: 387px;
  @media (max-width: 1000px) {
    margin-left: 0;
    padding-top: 202px;
    flex-shrink: 0;
    height: 334px;
    align-items: center;
    align-self: center;
  }
  @media (max-width: 450px) {
    padding-top: 112px;
    width: 327px;
    height: 276px;
  }
`;

const ButtonExplorer = styled.button`
  height: 274px;
  width: 274px;
  background-color: #ffffff;
  border-radius: 100%;
  margin-bottom: 131px;
  align-self: flex-end;
  flex-shrink: 0;
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
  @media (max-width: 1000px) {
    margin-left: 0;
    align-self: center;
    margin-top: 156px;
    flex-shrink: 0;
    height: 242px;
    width: 242px;
    margin-bottom: 0;
  }
  @media (max-width: 450px) {
    width: 150px;
    height: 150px;
    margin-top: 81px;
  }
`;
const LinkExplore = styled(Link)`
  font-family: "Bellefair", serif;
  font-size: 32px;
  line-height: 36.67px;
  letter-spacing: 2px;
  color: rgba(11, 13, 23, 1);
  text-align: center;
  height: 274px;
  width: 274px;
  background-color: #ffffff;
  border-radius: 100%;
  margin-bottom: 131px;
  align-self: flex-end;
  flex-shrink: 0;
  box-sizing: border-box;
  padding-top: 121px;
  &:hover {
    background-color: #ffffff;
  }
  &:hover:before {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width: 450px;
    height: 450px;
    background-color: #ffffff;
    opacity: 0.1;
  }
  @media (max-width: 450px) {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 1.25px;
    padding-left: 22px;
  }
`;

const SubTittleHome = styled(SubTittle)`
  @media (max-width: 1000px) {
    font-size: 20px;
    color: rgba(208, 214, 249, 1);
    letter-spacing: 3.375px;
    line-height: 24px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`;

const TittleHome = styled(Tittle)`
  @media (max-width: 1000px) {
    line-height: 150px;
  }
  @media (max-width: 450px) {
    font-size: 80px;
    line-height: 100px;
    margin-top: 16px;
  }
`;

const Nav = styled.div`
  width: 1110px;
  height: 100%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;
  }
`;

export function Home() {
  return (
    <ContainerBackgroundImage
      url={backgrounddesktophome}
      urlTablet={backgroundTablethome}
      urlMobile={backgroundMobilehome}
    >
      <Nav>
        <ContentContainer>
          <TextContainer>
            <SubTittleHome fontSize={28} lineHeight={33.6} letterSpacing={4.72}>
              SO, YOU WANT TO TRAVEL TO
            </SubTittleHome>
            <TittleHome fontSize={150} lineHeight={171.9} marginTop={24}>
              SPACE
            </TittleHome>
            <Text marginTop={24}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Text>
          </TextContainer>
          <LinkExplore to={"/space-tourism/destination/moon"}>
            EXPLORE
          </LinkExplore>
        </ContentContainer>
      </Nav>
    </ContainerBackgroundImage>
  );
}
