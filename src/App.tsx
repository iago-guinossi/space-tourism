import styled from 'styled-components'
import { NavBar } from './components/NavBar/NavBar'

const Container = styled.div`
  width: 1440px;
  height: 900px;
  background-color:black;
  display:flex;
`

function App() {

  return (
    <Container>
      <NavBar/>
    </Container>
    )
}

export default App
