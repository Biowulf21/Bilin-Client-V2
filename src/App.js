import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar/navbar.tsx";
import { About } from "./screens/guest/About/index.tsx";
import { FAQ } from "./screens/guest/FAQ/index.tsx";
import { Footer } from "./components/Footer/footer.tsx";
import { Get_Involved } from "./screens/guest/Get-Involved/index.tsx";
import { Home } from "./screens/guest/Home/index.tsx";
import { Knowledge_Hub } from "./screens/guest/Knowledge-Hub/index.tsx";
import { Terms_And_Conditions } from "./screens/guest/Terms-And-Conditions/index.tsx";
import { Privacy_Policy } from "./screens/guest/Privacy-Policy/index.tsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/get-involved" element={<Get_Involved />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/knowledge-hub" element={<Knowledge_Hub />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/terms-and-conditions"
          element={<Terms_And_Conditions />}
        />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
