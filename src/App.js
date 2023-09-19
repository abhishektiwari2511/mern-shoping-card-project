
import './App.css';
import Nav from './Component/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Component/Footer';
import SingUp from './Component/SingUp';
import PrivateComponent from './Component/PrivateComponent';
import Login from './Component/LogIn';
import AddProduct from './Component/AddProduct';
import ProductList from './Component/ProductList';
import UpdateProduct from './Component/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Nav/>
    <Routes >
      <Route element={<PrivateComponent/>}>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/Add' element={<AddProduct/>}/>
      <Route path='/Update/:id' element={<UpdateProduct/>}/>
      <Route path='/Logout' element={<h1>Log Out</h1>}/>
      <Route path='/Profile' element={<h1>Profile</h1>}/>
      </Route>
      <Route path='/SingUp' element={<SingUp/>} />
      <Route path='Login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
