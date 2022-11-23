import styled from "styled-components";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Destination } from "./components/pages/Destination";
import { Moon } from "./components/pages/Destination/Moon";
import { Mars } from "./components/pages/Destination/Mars";
import { Europa } from "./components/pages/Destination/Europa";
import { Titan } from "./components/pages/Destination/Titan";
import { Technology } from "./components/pages/Technology";
import { Crew } from "./components/pages/Crew";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: block;
  position: relative;
  box-sizing: border-box;
`;

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/space-tourism/" element={<Home />} />
        <Route path="/space-tourism/destination" element={<Destination />}>
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="/space-tourism/crew" element={<Crew />} />
        <Route path="/space-tourism/technology" element={<Technology />} />
      </Routes>
    </Container>
  );
}

export default App;
