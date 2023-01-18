import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Products from './components/products/products';
import Product from './components/Product/product';
import Order from './components/Orders/Order';
import Address from './components/Address/Address';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Products/:id' element={<Product />}/>
          <Route path='/Products/:id/Orders' element={<Order />}/>
          <Route path='/Products/:id/Address' element={<Address />}/>
        </Routes>
      </Router>
  );
}

export default App;
