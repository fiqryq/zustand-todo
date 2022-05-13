import { Card, Header, Fab } from "./components";
import { Background } from "./layout/Background";
import { Container } from "./layout/Container";

function App() {
  return (
    <Background>
      <Container>
        <Header />
        <div className="space-y-2 p-3 py-16">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Fab />
      </Container>
    </Background>
  );
}

export default App;
