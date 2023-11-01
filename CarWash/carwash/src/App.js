
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './HOME/Home';
import Takeme from './Take_Me/Takeme';
import Button from './BUTTON/Button';
import Homemain from './HOME_NAVBAR/Homemain';
import Pricing from './PRICING/Pricing';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/Price' element={<Pricing></Pricing>}/>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/Takeme' element={<Takeme></Takeme>}/>
    <Route path= '/button' element={<Button></Button>}/>
    <Route path='/homemain' element={<Homemain></Homemain>}/>
   




    </Routes>




    </BrowserRouter>
    
  );
}

export default App;
