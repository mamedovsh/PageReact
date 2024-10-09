
import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import{ BrowserRouter, Route, NavLink, Routes } from 'react-router-dom'; 
const App = () => {
  return (
    <div className="content" >
        <BrowserRouter>
          <nav>
          <NavLink className='navlink' to="/">Главная</NavLink>
          <NavLink className='navlink' to="/about">О нас</NavLink>
          </nav>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
