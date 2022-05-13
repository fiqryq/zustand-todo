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
          {state.todo.map((item, idx) => {
            return <Card key={idx} todo={item} />;
          })}
        </div>
        <Fab />
      </Container>
    </Background>
  );
}

export default App;
