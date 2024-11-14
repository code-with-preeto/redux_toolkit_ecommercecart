import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import toast, { Toaster } from 'react-hot-toast';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Headers/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/cart' element={<CartDetails/>}/>
     </Routes>
     <Toaster />
    </div>
  );
}

export default App;
