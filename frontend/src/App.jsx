import { Header, Footer } from "./components";
import { Container } from "react-bootstrap";
import { CartScreen, HomeScreen, ProductScreen } from "./screens";
import { Route, Routes } from "react-router-dom";
import { LoginScreen } from "./screens/LoginScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-4">
        <Container>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
