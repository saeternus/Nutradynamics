import "./App.css";
import * as Components from "./Components/index";
import * as Pages from "./Pages/index";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Components.Navbar /> <Components.Footer />
              </>
            }
          >
            <Route index element={<Pages.Home />} />
            <Route path="/Product" element={<Pages.Product />} />
            <Route path="/AboutUs" element={<Pages.Aboutus />} />
            <Route path="/Contact" element={<Pages.Contact />} />
            <Route path="/Catalog" element={<Pages.Catalog />} />
            <Route path="/Testimonial" element={<Pages.Testimonial />} />
            <Route path="/Gallery" element={<Pages.Gallery />} />
            <Route path="/Login" element={<Pages.Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
