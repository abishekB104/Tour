import React,{useEffect} from 'react'
import './main.scss'
import img from '../../Assets/par1.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import img2 from '../../Assets/du1.jpg'
import img3 from '../../Assets/swi1.jpg'
import img4 from '../../Assets/ic.jpg'
import img5 from '../../Assets/gr2.jpg'
import img6 from '../../Assets/geo.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
const data=[
    {
        id:1,
        imgSrc:img,
        destTitle:'Eiffel Tower',
        location:'Paris',
        days:'4nights,5days',
        fees:'Rs:1,40,000',
        description:' Parisian landmark that is also a technological masterpiece in building-construction history. When the French government was organizing the International Exposition of 1889 to celebrate the centenary of the French Revolution, a competition was held for designs for a suitable monument.'
    },
   {
    id:2,
    imgSrc:img2,
    destTitle:'Discover Dubai',
    location:'Dubai',
    days:'3nights,4days',
    fees:'Rs:50,000',
    description:'If a fabulous Abu Dhabi holiday package is what you are looking for, call us. At Travel Haus, we can curate a customized itinerary that includes everything you need for a memorable vacation'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle:'Zurich',
        location:'Switzerland',
        days:'4nights,5days',
        fees:'Rs:1,15,000',
        description:'Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge.'
    },
    {
        id:4,
        imgSrc:img4,
        destTitle:'Jökulsárlón',
        location:'Iceland',
        days:'3nights,4days',
        fees:'Rs:1,50,000',
        description:'Jökulsárlón (literally "glacial river lagoon") is a large glacial lake in southern part of Vatnajökull National Park, Iceland. Situated at the head of the Breiðamerkurjökull glacier, it developed into a lake after the glacier started receding from the edge of the Atlantic Ocean.'
    },
    {
        id:5,
        imgSrc:img5,
        destTitle:'Kangerlussuaq',
        location:'GreenLand ',
        days:'3nights,4days',
        fees:'Rs:1,30,000',
        description:'The Kangerlussuaq area is also home to Greenland most diverse terrestrial fauna, including muskoxen, caribou, and gyrfalcons. The settlement economy and population of 508[1] is almost entirely reliant on the airport and tourist industry.'
    },
    {
        id:6,
        imgSrc:img6,
        destTitle:'Gergeti Trinity Church',
        location:'Georgia',
        days:'3nights,4days',
        fees:'Rs:1,75,000',
        description:'Gergeti Trinity Church (Georgian: წმინდა სამება - Tsminda Sameba) is a popular name for Holy Trinity Church near the village of Stepantsminda in Georgia. The church is situated on the right bank of the river Chkheri (the left tributary of the river Terek), at an elevation of 2170 meters (7120 feet), under Mount Kazbek.'
    },

]
const Main=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
      <section className='main container section'>
        <div className='secTitle'>
            <h3 data-aos="fade-right" className='title'>
              Our Packages
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
export default Main