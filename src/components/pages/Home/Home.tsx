import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("src/assets/home/background-home-desktop.jpg");
  margin-top: -136px;
  box-sizing: border-box;
  padding-bottom: 131px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Tittle = styled.span`
  font-family: "Bellefair", serif;
  font-size: 150px;
  color: #ffffff;
  line-height: 171.9px;
`;

const SubTittle = styled.span`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  color: rgba(208, 214, 249, 1);
  line-height: 33.6px;
  letter-spacing: 4.72px;
`;

const Text = styled.span`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  color:rgba(208, 214, 249, 1);
  line-height: 32px;
;
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
`
const Link = styled.a`
    text-decoration: none;
    font-family: "Bellefair", serif;
    font-size: 32px;
    line-height: 36.67px;
    letter-spacing: 2px;
`

export function Home() {
  return (
    <Container>
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
      <ButtonExplorer><Link>EXPLORE</Link></ButtonExplorer>
    </Container>
  );
}
