import { Route, Routes } from "react-router-dom";
import { routesConfig } from "./config/routesConfig";
import NavBar from "./components/NavBar";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        {routesConfig.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
