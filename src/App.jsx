
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/slidebar/Sidebar'
import Home from './pages/home/Home'
import { BrowserRouter,Route, Router, Routes } from "react-router-dom";
import UserList from './pages/userlist/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productlist/productList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {

  return (

    <BrowserRouter>
     <Navbar /> 
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/users' element={ <UserList />}/>
          <Route path='/user/:userId' element={ <User />}/>
          <Route path='/newUser' element={ <NewUser />}/>
          <Route path='/products' element={ <ProductList />}/>
          <Route path='/product/:productId' element={ <Product />}/>
          <Route path='/newproducts' element={ <NewProduct />}/>
        </Routes>
      </div>

    </BrowserRouter>
    
  )
}


export default App
