import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Blog from '../Blog/Blog';
import Home from '../Home/Home';
import Aboutus from '../Footer/About';
import Signup from '../Signup/Signup';
import Main from '../Main/Main';
import Seven from'../Seven/Seven';
import Feedback from '../Feedback/Feedback';
import Booking from '../Booking/Booking';
import Cruise from '../Cruise/Cruise';
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/tour' element={<Main/>}/>
        <Route path='/seven' element={<Seven/>}/>
        <Route path='/feedback'element={<Feedback/>}/>
        <Route path='/cruise' element={<Cruise/>}/>
        <Route path='/book' element={<Booking/>}/>
      </Routes>
    </div>
  );
}

export default Routers;
