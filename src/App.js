import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import HomeProperties from './pages/Homeproperties/HomeProperties'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/property/:id' element={<HomeProperties/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
