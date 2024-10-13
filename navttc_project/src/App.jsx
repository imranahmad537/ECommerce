
import './App.css'
import Login from './Pages/Signup'
import Signup from './Pages/Login';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Category from './Components/Category';
import BestSelling from './Components/BestSelling';
import Enhance from './Components/Enhance';
import Footer from './Components/Footer';
import FeatureProducts from './Components/FeatureProduct';
import Features from './Components/Features';
import NewArrival from './Components/NewArrival';
import About from './Components/About';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar>
    
    </Navbar>
    <main>
      <Outlet/>
    </main>
    {/* <Signup/> */}
    <Home/>
   
     {/* <Login/> */}
    <Category/>
    {/* <BestSelling/>
   
    <Footer/> */}
     <Enhance/>
     <FeatureProducts/>
     <NewArrival/>
     <Features/>
     <Footer/>
     {/* <About/>  */}
    </>
  )
}

export default App
