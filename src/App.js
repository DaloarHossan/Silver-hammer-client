import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/SharedComponent/Navbar';
import Home from './Pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './component/PrivetRoute/RequireAuth';
AOS.init();

function App() {
  return (
    <div>
      <Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/checkout/:id' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
      </Routes>
      </Navbar>
      <ToastContainer/>
    </div>
  );
}

export default App;
