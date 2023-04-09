
import './App.css';
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Cards from "./Components/Cards/Cards";
import Product from "./Components/Product/Product";
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="products" element={<Cards/>}/>
          <Route path="product" element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
