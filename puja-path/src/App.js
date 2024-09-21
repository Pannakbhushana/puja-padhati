import './App.css';
import Navbar from './Routers/Navbar';
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
     <Footer/>
    </div>
  );
}

export default App;
