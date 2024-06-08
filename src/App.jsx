import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
const StyledApp = styled.div`
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">hello world</Heading>
            <div>
              <Heading as="h2">hello world</Heading>
              <Button variations="danger" size="medium">
                check In
              </Button>

              <Button variations="secondary" size="medium">
                check out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <form>
              <Heading as="h3">hello world</Heading>
              <Input type="number" placeholder="Number Of Guests"></Input>
              <Input type="number" placeholder="Number Of Guests"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}
export default App;
