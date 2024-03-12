import React,{useEffect} from 'react'
import './cruise.scss'
import img from '../../Assets/cruise1.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import img2 from '../../Assets/Laksha.jpeg'
import img3 from '../../Assets/singa.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
const data=[
    {
        id:1,
        imgSrc:img,
        destTitle:'Colombo',
        location:'Sri Lanka',
        days:'4nights,5days',
        fees:'Rs:1,40,000',
        description:' Parisian landmark that is also a technological masterpiece in building-construction history. When the French government was organizing the International Exposition of 1889 to celebrate the centenary of the French Revolution, a competition was held for designs for a suitable monument.'
    },
   {
    id:2,
    imgSrc:img2,
    destTitle:'Kavarati',
    location:'Lakshadweep',
    days:'3nights,4days',
    fees:'Rs:1,30,000',
    description:'If a fabulous Abu Dhabi holiday package is what you are looking for, call us. At Travel Haus, we can curate a customized itinerary that includes everything you need for a memorable vacation'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle:'Penang',
        location:'Singapore',
        days:'4nights,5days',
        fees:'Rs:1,40,000',
        description:'Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge.'
    },

]
const Cruise=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
      <section className='main container section'>
        <div className='secTitle'>
            <h3 data-aos="fade-right" className='title'>
                Cruise Packages
            </h3>
        </div>
        <div className='secContent grid'>
            {

            }
            {
                data.map(({id,imgSrc,destTitle,days,location,fees,description})=>{
                    return(

                        <div key={id}
                        data-aos="fade-up"
                         className='singleDestination'>
                            {

                            }
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle}/>
                            </div>

                            <div className='cardInfo'>
                                <h4 className='destTitle'>{destTitle}</h4>
                                <span className='continent.flex'>
                                    <HiOutlineLocationMarker className='icon'/>
                                    <span className='name'>{location}</span>
                                    </span>

                                        <div className='price'>
                                            <h5>{fees}</h5>
                                        </div>

                                    </div>
                                    <div className='day'>
                                        <h5>{days}</h5>
                                        </div>

                                    <div className='desc'>
                                        <span>{description}</span>
                                    </div>
                                    
                                    <button className='btn '>
                                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                                    </button>

                            </div>
                        
                   

                    )

                })
            }

        </div>
      </section>
    )
}
export default Cruise