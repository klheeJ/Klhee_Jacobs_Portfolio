import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navbar, Hero, Footer } from './components'
import Home from './pages/Home';
import './styles/main.scss';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='*' element={<Home/>} />
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
