import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div >
      <div className=" bg-slate-900 ">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
