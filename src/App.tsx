import "./App.css";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToHashElement from "./utils/ScrollToHashElement";

function AppContent() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
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
      {/* <Route path="/freelance/:slug" element={<ProjectDetail />} /> */}
    </Routes>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToHashElement />
        <Navbar />

        <AppContent />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
