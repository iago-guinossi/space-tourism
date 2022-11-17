import styled from "styled-components";

const SubContainerNavegation = styled.div`
  width: 1385px;
  height: 96px;
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const ContainerTransparentNavegation = styled.div`
  margin-left: auto;
  width: 830px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(40.7742px);
`;

const Button = styled.button`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  background-color: transparent;
  border: none;
  height: 100%;
  margin: 0 24px;
  &:hover {
    box-sizing: border-box;
    border-bottom: solid 5px rgba(255, 255, 255, 0.5);
    border-top: solid 5px transparent;
  }
  &:active {
    box-sizing: border-box;
    border-bottom: solid 5px #ffffff;
    border-top: solid 5px transparent;
  }
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
`;

const Rectangle = styled.div`
  position: absolute;
  width: 473px;
  height: 1px;
  margin-left: 111px;
  background-color: #ffffff;
  opacity: 0.25;
`;

const Link = styled.a`
    text-decoration: none;
    color: #FFFFFF;
`

export function NavBar() {
  return (
    <SubContainerNavegation>
      <Logo src="src/assets/logo.svg" />
      <ContainerTransparentNavegation>
        <Button>
          <Link href="/"><b>00</b> HOME</Link>
        </Button>
        <Button>
          <Link href="/"><b>01</b> DESTINATION</Link>
        </Button>
        <Button>
        <Link href="/"><b>02</b> CREW</Link>
        </Button>
        <Button>
        <Link href="/"><b>03</b> TECHNOLOGY </Link>
        </Button>
      </ContainerTransparentNavegation>
      <Rectangle />
    </SubContainerNavegation>
  );
}
