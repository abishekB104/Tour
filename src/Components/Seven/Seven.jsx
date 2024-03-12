import React,{useEffect} from 'react'
import './seven.scss'
import img from '../../Assets/wall.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import img2 from '../../Assets/itza.jpg'
import img3 from '../../Assets/petra.jpg'
import img4 from '../../Assets/christ.jpg'
import img5 from '../../Assets/colosseum.jpg'
import img6 from '../../Assets/taj.jpg'
import img7 from '../../Assets/machu.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css'
const data=[
    {
        id:1,
        imgSrc:img,
        destTitle:'Great Wall Of China',
        location:'China',
        days:'3nights,5days',
        fees:'Rs:1,75,000',
        description:'Great might be an understatement. One of the world’s largest building-construction projects, the Great Wall of China is widely thought to be about 5,500 miles (8,850 km) long; a disputed Chinese study, however, claims the length is 13,170 miles (21,200 km). Work began in the 7th century BCE and continued for two millennia.'
    },
   {
    id:2,
    imgSrc:img2,
    destTitle:'Chichén Itzá',
    location:'Mexico',
    days:'3nights,4days',
    fees:'Rs:50,000',
    description:'Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico, which flourished in the 9th and 10th centuries CE. Under the Mayan tribe Itzá—who were strongly influenced by the Toltecs—a number of important monuments and temples were built.'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle:'Petra',
        location:'Jordan',
        days:'4nights,5days',
        fees:'Rs:1,06,000',
        description:'The ancient city of Petra, Jordan, is located in a remote valley, nestled among sandstone mountains and cliffs. It was purported to be one of the places where Moses struck a rock and water gushed forth.'
    },
    {
        id:4,
        imgSrc:img4,
        destTitle:'Christ the Redeemer',
        location:'Brazil',
        days:'5nights,6days',
        fees:'Rs:1,50,000',
        description:'Christ the Redeemer, a colossal statue of Jesus, stands atop Mount Corcovado in Rio de Janeiro. Its origins date to just after World War I, when some Brazilians feared a “tide of godlessness.” '
    },
    {
        id:5,
        imgSrc:img5,
        destTitle:'Colosseum',
        location:'Rome ',
        days:'3nights,4days',
        fees:'Rs:1,30,000',
        description:'The Colosseum in Rome was built in the first century by order of the Emperor Vespasian. A feat of engineering, the amphitheater measures 620 by 513 feet (189 by 156 meters) and features a complex system of vaults. It was capable of holding 50,000 spectators, who watched a variety of events. '
    },
    {
        id:6,
        imgSrc:img6,
        destTitle:'Taj Mahal',
        location:'India',
        days:'2nights,3days',
        fees:'Rs:40,000',
        description:'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife Mumtāz Maḥal (“Chosen One of the Palace”), who died in 1631 giving birth to their 14th child.'
    },
    {
        id:7,
        imgSrc:img7,
        destTitle:'Machu Picchu',
        location:'Peru',
        days:'3nights,4days',
        fees:'Rs:1,50,000',
        description:'This Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram Bingham, who believed it was Vilcabamba, a secret Incan stronghold used during the 16th-century rebellion against Spanish rule. Although that claim was later disproved, the purpose of Machu Picchu has confounded scholars.'
    },

]
const Main=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
      <section className='main container section'>
        <div className='secTitle'>
            <h3 data-aos="fade-left" className='title'>
                Seven Wonders In The World
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