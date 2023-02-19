import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Pages/Shared/Header';
import Home from './components/Pages/Home/Home';
import Footer from './components/Pages/Shared/Footer';
import Login from './components/Pages/Registration/Login';
import SignUp from './components/Pages/Registration/SignUp';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import AllItems from './components/Pages/Home/AllItems';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allItem' element={<AllItems></AllItems>}></Route>
        <Route path='/men' element={<AllItems></AllItems>}></Route>
        <Route path='/women' element={<AllItems></AllItems>}></Route>
        <Route path='/kids' element={<AllItems></AllItems>}></Route>
        <Route path='/sports' element={<AllItems></AllItems>}></Route>
        <Route path='/beauty' element={<AllItems></AllItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
