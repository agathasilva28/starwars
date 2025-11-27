import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Container from "./components/Container";
import Header from "./components/Header";
import People from "./pages/People";
import Movie from "./pages/Movie";

function App() {
  return (
    <>
      <Header />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/person/:id" element={<People />} />
            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;