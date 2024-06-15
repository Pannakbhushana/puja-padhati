import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import { ParticlesContainer } from './Components/ParticlesContainer';
import {useContext} from "react";
import { ThemeContext } from "./ContextApi/ThemeContext";
import Footer from './Components/Footer';

function App() {
  const {isDark}=useContext(ThemeContext);

  return (
    <div className={isDark ? "coloredTheme" : "darkTheme"}>
     <Navbar/>
     <AllRoutes/>
     <ParticlesContainer/>
     <Footer/>
    </div>
  );
}

export default App;
