import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {

  return (
    <>
   <BrowserRouter>
    <Navbar />
    <Homepage />
  
    
    
    
   </BrowserRouter>
    </>
  );
}

export default App;
