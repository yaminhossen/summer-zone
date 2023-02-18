import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Pages/Shared/Header';
import Home from './components/Pages/Home/Home';
import Footer from './components/Pages/Shared/Footer';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
