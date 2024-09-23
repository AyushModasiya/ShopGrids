import './App.css';
import Header from './Common/header';
import Footer from './Common/footer';
import Home from './Pages/Home';
import ShopGrid from './Pages/ShopGrid';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ShopSingle from './Pages/shopSingle';
import { Categoty } from './Pages/Category';
import AboutUs from './Pages/aboutUs';
import Faq from './Pages/faq';
import Login from './Pages/login';
import Register from './Pages/register';
import Error from './Pages/404Eror';
import Conatct from './Pages/conatct';
import SearchResult from './Pages/SearchResult';

function Base(){
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Base/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/ShopGrid' element={<ShopGrid/>}/>
      <Route path='/shopSingle/:id' element={<ShopSingle/>}/>
      <Route path='/SearchResult' element={<SearchResult/>}/>
      <Route path='/Category/:name' element={<Categoty/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>
      <Route path='/contact' element={<Conatct/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/404Eror' element={<Error/>}/>
      </Route>
     </Routes>
    </BrowserRouter>

  );
}

export default App;
