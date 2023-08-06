
import './App.css';
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Cards from "./Components/Cards/Cards";
import {Routes, Route} from "react-router-dom";
import NewProduct from "./Components/Cards/Product/NewProduct/NewProduct";




function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route exact path="/products" element={<Cards/>}/>
          <Route exact path="product/:id" element={<NewProduct />}/>
      </Routes>
    </div>
  );
}

export default App;
