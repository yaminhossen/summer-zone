import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Pages/Shared/Header';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
