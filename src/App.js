import './App.css';
import * as Components from './Components/index'
import * as Pages from './Pages/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Components.Navbar />}>
        <Route index element={<Pages.Home />} />
        <Route path="/Product" element={<Pages.Product />} />
        <Route path="/AboutUs" element={<Pages.Aboutus />} />
        <Route path="/Contact" element={<Pages.Contact />} />
        <Route path="/Catalog" element={<Pages.Catalog />} />
        <Route path="/Testimonial" element={<Pages.Testimonial />} />
        <Route path="/Gallery" element={<Pages.Gallery />} />
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
