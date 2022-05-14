import { Card, Header, Fab } from "./components";
import { Background } from "./layout/Background";
import { Container } from "./layout/Container";
import useStore from "./hook/useStore";

function App() {
  const state = useStore();
  return (
    <Background>
      <Container>
        <Header />
        <div className="space-y-2 p-3 py-16">
          {state.getTodo().map((item: any, idx: any) => {
            return <Card key={idx} id={idx} todo={item.title} />;
          })}
        </div>
        <Fab />
      </Container>
    </Background>
  );
}

export default App;
