import React,{useEffect}from 'react'
import './about.scss'
import { SiYourtraveldottv } from "react-icons/si";
import {FiChevronRight, FiSend} from 'react-icons/fi'
import travel from '../../Assets/travel.mp4';
import {FiFacebook}from 'react-icons/fi'
import {AiFillYoutube, AiOutlineInstagram}from 'react-icons/ai'
import {SiTripadvisor}from 'react-icons/si'
import { FaXTwitter } from "react-icons/fa6";

import Aos from 'aos';
import 'aos/dist/aos.css'
const Aboutus=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]) 


    return(
       <section className='footer'>
        <div className="overlay"></div>
        <video autoPlay muted loop>
        <source src={travel} type="video/mp4"/></video>
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

                    <div data-aos="fade-up"
                     className='footerParagraph'>
                    Travel for the purpose of tourism is reported 
                    to have started around this time when people began 
                    to travel for fun as 
                    travel was no longer a hard and challenging task.
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
                <div className='linkGroup'>
                    <span className='groupTitle'>
                        OUR Branches
                    </span>

                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Coimbatore
                    </li>
                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Chennai
                    </li>
                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Madurai
                    </li>
                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Theni
                    </li>
                    <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Cochin
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
    )
}
export default Aboutus