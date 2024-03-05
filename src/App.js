import Header from "./components/header";
import TeamDirectory from "./screens/TeamDirectory";
import { Container } from "@mui/material";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Container
          sx={{ marginTop: { md: "10%", sm: "10%", xs: "20%", lg: "8%" } }}
        >
          <TeamDirectory />
        </Container>
      </header>
    </div>
  );
}

export default App;
