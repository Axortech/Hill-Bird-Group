import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./component/nav";
import Home from "./pages/home";
import ContactUs from "./pages/contactus";
import Footer from "./component/footer";

function App() {
  return (
    <div className="min-h-100">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
