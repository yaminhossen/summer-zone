import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Pages/Shared/Header';
import Home from './components/Pages/Home/Home';
import Footer from './components/Pages/Shared/Footer';
import Login from './components/Pages/Registration/Login';
import SignUp from './components/Pages/Registration/SignUp';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import AllItems from './components/Pages/Home/AllItems';
import ScrollToTop from './components/Pages/Home/ScrollToTop';
import RequirAuth from './components/Pages/RequirAuth/RequirAuth';
import ExpertDetails from './components/Pages/Home/ExpertDetails';

function App() {
  return (
    <div className="">
      <Header></Header>
      <ScrollToTop />
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
        <Route path='/expertdetails' element={<ExpertDetails></ExpertDetails>}></Route>
        <Route path='/dashboard' element={
          <RequirAuth>
            <Dashboard></Dashboard>
          </RequirAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
