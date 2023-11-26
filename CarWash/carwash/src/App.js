
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './HOME/Home';
import Takeme from './Take_Me/Takeme';
import Button from './BUTTON/Button';
import Homemain from './HOME_NAVBAR/Homemain';
import Pricing from './PRICING/Pricing';
import Review from './REVIEW/Review';
import Footer from './FOOTER/Footer';
import Login from './LOGIN/Login';
import Register from './REGISTER/Register';
import Booking from './BOOKING/Booking';
import View from './VIEW/View';
import Bookingview from './VIEW/Bookingview';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/Price' element={<Pricing></Pricing>}/>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/Takeme' element={<Takeme></Takeme>}/>
    <Route path= '/button' element={<Button></Button>}/>
    <Route path='/homemain' element={<Homemain></Homemain>}/>
    <Route path='/review'  element={<Review></Review>}/>
    <Route path='/footer' element={<Footer></Footer>}/>
    <Route path='/login' element={<Login></Login>}/>
    <Route path='/Register' element={<Register></Register>}/>
    <Route path='/Booking' element={<Booking></Booking>}/>
    <Route path='/View' element={<View></View>}/>
    <Route path={`/Bookingview/:id`} element={<Bookingview />} />
   




    </Routes>




    </BrowserRouter>
    
  );
}

export default App;
