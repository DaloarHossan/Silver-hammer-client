import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/SharedComponent/Navbar';
import Home from './Pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
AOS.init();

function App() {
  return (
    <div>
      <Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout/:id' element={<Checkout></Checkout>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      </Navbar>
    </div>
  );
}

export default App;
