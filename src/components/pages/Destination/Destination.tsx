import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("src/assets/destination/background-destination-desktop.jpg");
  margin-top: -136px;
  box-sizing: border-box;
  padding-bottom: 131px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export function Destination(){
    return <Container><div>a</div></Container>
}