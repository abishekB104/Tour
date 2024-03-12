import React,{useState}from 'react'
import './navbar.scss'
import { SiYourtraveldottv } from "react-icons/si";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import {Link} from "react-router-dom"
const Navbar=()=>{
    const[active, setActive]=useState('navBar')

    const showNav=()=>{
        setActive('navBar activeNavbar')
    }
    const removeNavbar=()=>{
        setActive('navBar')
    }
 

    return(
        <section className='navBarSection'>
            <header className="header flex">

                <div className='logoDiv'>
                    <Link to="#" className='logo flex'>
                        <h1><SiYourtraveldottv
                        className="icon"/>Travel Haus</h1>
                    </Link>
                </div>
                <div className={active}>
                    <ul className='navLists flex'>

                        <li className='navItem'>
                            <Link to="/" className="navLink">Home</Link>
                        </li>

                        <li className='navItem'>
                            <Link to="/tour" className="navLink">Tour Packages</Link>
                        </li>

                        <li className='navItem'>
                            <Link to="/cruise" className="navLink">Cruise</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/seven" className="navLink">7 wonders</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/about" className="navLink">AboutUs</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/blog" className="navLink">Blog</Link>
                        </li>
                        
                        <li className='navItem'>
                            <Link to="/signup" className="navLink">SignUp</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/feedback" className="navLink">Feedback</Link>
                        </li>

                        <button className='btn flex'>
                            <Link to='/book' className="navLink">BOOK NOW</Link>
                        </button>

                    </ul>
                    <div onClick={removeNavbar}
                     className='closeNavbar'>
                        <IoMdCloseCircle className='icon' />
 
                    </div>
                </div>
                <div onClick = {showNav}
                className='toggleNavbar'>
                    <TbGridDots className='icon'/>
                </div>
            </header>
        </section>
    )
}
export default Navbar