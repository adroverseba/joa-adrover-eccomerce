import { Header, Footer } from "./components";
import { Container } from "react-bootstrap";
import { CartScreen, HomeScreen, ProductScreen } from "./screens";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-4">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
