import Home from './pages/home' ;
import './App.css';
import { Route, Routes} from "react-router-dom";
import Services from './pages/services';
function App() {
  return (
    // <Home />
    // <div className="App">
      
    // </div>
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="services" element={ <Services/> } />
    
  </Routes>
  );
}

export default App;
