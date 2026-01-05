import "./App.css";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />

        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/freelance/:slug" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
