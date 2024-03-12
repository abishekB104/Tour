import React, { useEffect } from 'react'
import './home.scss'
import './home.css'
import './demo.css'
import './style.css'
import video from '../../Assets/video.mp4'
import Back from '../../Assets/Back.png'
import {GrLocation} from 'react-icons/gr'
import { IoFilterSharp } from "react-icons/io5";
import { SiYourtraveldottv } from "react-icons/si";
import {FiChevronRight, FiSend} from 'react-icons/fi'
import {FiFacebook}from 'react-icons/fi'
import {AiFillYoutube, AiOutlineInstagram}from 'react-icons/ai'
import {SiTripadvisor}from 'react-icons/si'
import { FaXTwitter } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home=()=>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <>
       <section className='home'>
        <div className="overlay"></div>
        <video autoPlay muted loop>
        <source src={video} type="video/mp4"/></video>


        <div className='homeContent Container'>
            <div className='textDiv'>

                <span data-aos="fade-up"
                className='smallText'>
                    Our Packages
                </span>
                <h2 data-aos="fade-up"
                 className='homeTitle'>
                    Search your Holiday
                </h2>
            </div>
            <div className='cardDiv grid'>
                
                
                <div className='destinationInput'>
                    <label htmlFor='city'>Search your
                    destination:</label>
                    <div className='input flex'>
                        <input type='text' placeholder='Enter 
                        place here...'/>
                        <GrLocation className="icon "/>
                    </div>
                </div>


                <div className='dataInput'>
                    <label htmlFor='city'>Enter your 
                    date:</label>
                    <div className='input flex'>
                        <input type="date"/> 
                    </div>
                </div>


                <div className='priceInput'>
                    <div className='label_total flex'>  
                    <label htmlFor='price'>Max price:</label>
                    <h3 className='total'>Rs:550000</h3>
                    </div>
                    <div className='input flex'>
                        <input type="range" max="550000"
                        min="10000"/>
                    </div>
                </div>

                <div className='searchOptions flex'>
                    <IoFilterSharp className="icon"/>
                    <button>MORE FILTERS</button>
                </div>
            </div>

            
        </div>
       
      </section>
      <section className='footer'>
        <div className="overlay"></div>
        <img src={Back} type="image/png" alt='back'/>
        <div className='secContent container'>
            <div data-aos="fade-up"
            className='contactDiv grid'>
                <h3>Life’s better with a backpack </h3>
                <h2>Travel With Us</h2>
            </div>

            <div data-aos="fade-up"
             className='inputDiv flex'>
                <input type="text" placeholder='Enter Email Address'/>
                <button className='btn flex' type='submit'>
                    SEND <FiSend className='icon'/>
                </button>
            </div>

            <div data-aos="fade-up"
            className='footerCard flex'>
                <div className='footerIntro flex'>
                    <div className='logoDiv'>
                        <div className='logo flex'>
                        <SiYourtraveldottv
                        className='icon'/>Travel Haus
                        </div>
                    </div>

                    
                </div>
                <div data-aos="fade-up"
                 className='footerSocials flex'>
                <FiFacebook className="icon"/>
                <AiOutlineInstagram className="icon"/>
                <SiTripadvisor className="icon"/>
                <FaXTwitter className="icon"/>
                <AiFillYoutube className="icon"/>

                </div>
               <div data-aos="fade-up"
               className='footerLinks grid'>
                <div className='linkGroup'>
                    <span className='groupTitle'>
                        OUR AGENCY
                    </span>

                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Services
                    </li>
                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Insurance
                    </li>
                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Agency
                    </li>
                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Tourism
                    </li>
                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Payment
                    </li>
                </div>
                <div className='linkGroup'>
                    <span className='groupTitle'>
                         PARTNERS
                    </span>

                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        TAJ RESORTS
                    </li>
                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        KOMBAN TRANSPORT
                    </li>
                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        STAR INDIA
                    </li>
                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        CORDELIA SHIPS
                    </li>
                </div>
           
                <div className='footerDiv flex'>
                    <h1>BEST TRAVEL AGENCY</h1>
                    <bold>COPYRIGHTS RESERVED 2023</bold>
                </div>



               </div>
            
                </div>
        </div>
       </section>
      
    </>
    );
    
};
export default Home