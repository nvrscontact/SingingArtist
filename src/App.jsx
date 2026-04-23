import {Routes, Route} from 'react-router-dom';
import './App.css'
import Albums from './pages/Albums'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound';
import Store from './pages/Store';
import Information from './pages/Information';
import Support from './pages/Support';
import Layout from './layouts/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import Platforms from './pages/Platforms';

function App() {

  return (
    <>  
    <Routes>
        <Route element={<Layout/>}> 
          <Route path="/" element={<HomePage/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/albums" element={<Albums/>}/>
          <Route path="/information" element={<Information/>}/>
          <Route path="/support" element={<Support/>}/>  
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>} ></Route>
          <Route path="/platforms" element={<Platforms/>} ></Route>
          <Route path='*' element={<NotFound/>}/>
        </Route>
    </Routes>
    </>
  )
}



export default App
