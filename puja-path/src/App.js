import './App.css';
import Navbar from './Routers/Navbar';
import { ParticlesContainer } from './Components/ParticlesContainer';
import {useContext} from "react";
import { ThemeContext } from "./ContextApi/ThemeContext";
import Footer from './Routers/Footer';
import AllRoutes from './Routers/AllRoutes';

function App() {
  const {isDark}=useContext(ThemeContext);

  return (
    <div className={isDark ? "coloredTheme" : "darkTheme"} >
     <Navbar/>
     <AllRoutes/>
     <ParticlesContainer/>
     <Footer/>
    </div>
  );
}

export default App;
