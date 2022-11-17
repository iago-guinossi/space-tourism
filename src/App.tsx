import styled from "styled-components";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Destination } from "./components/pages/Destination";
const Container = styled.div`
  width: 1440px;
  height: 900px;
  display: block;
  position: relative;
`;

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </Container>
  );
}

export default App;
