import styled from "styled-components";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Destination } from "./components/pages/Destination";
import { Moon } from "./components/pages/Destination/Moon";
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
        <Route path="destination" element={<Destination />}>
          <Route path="moon" element={<Moon />}></Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
