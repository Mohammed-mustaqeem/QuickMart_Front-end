
import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import Navigationbr from './components/Home/Navigationbar';
import HomePage from './pages/HomePage';
import { Routes, Route, useLocation} from 'react-router-dom'
import Products from './components/Products/Products';
import Navigationbr from './components/Home/Navigationbar';
import ProductInfo from './pages/ProductInfo';
import Cart from './components/ProductDetails/Cart';
import "react-toastify/ReactToastify.css"
import Login from './components/Register_user/Login';
import SignUp from './components/Register_user/SignUp';

function App() {
  
 const location = useLocation()
 let currentPath = location.pathname;

 
  return (
    <>
    {currentPath == "/user/login" || currentPath == "/user/signup" ? (
      ""
    ) : (
      <Navigationbr/>
    )}
    
   
    <Routes>

      <Route path='/' Component={HomePage}/>
      <Route path='/products' Component={Products} />
      <Route path='/ProductDetail/:id' Component={ProductInfo} />
      <Route path='/cart' Component={Cart} />
      <Route path='/user/signup' Component={SignUp}/>
      <Route path='/user/login' Component={Login} />
    </Routes>
    
     
    
    </>
  )
}

export default App
