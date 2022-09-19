import React from 'react'
import Image from 'next/image'
import contentStyles from '../styles/Content.module.css'
import about from '../public/university.jpg'



const Content = () => {
  return (
    <>
    <div className={contentStyles.row}>
        <div className={contentStyles.column}>

        <div className={contentStyles.img}>
         
              
         
                <Image src={about} 
                    alt="GFG logo imported from public directory" />
            </div>
        </div>
        <div className={contentStyles.column}>
            <div className={contentStyles.headings}>
            <h4>Welcome to Zetech</h4>
        <h2>23 Years Experience</h2>
            </div>
        
        <p>
        Zetech traces its roots back to 1999 when it was founded by Eng.
         Ken Mbiuki as a Centre providing ICT training. Established from the direct incorporation
          of the words Zenith and Technologies, it rose to a College offering additional tertiary courses. 
          The word Zenith is of Greek origin and is used to characterize the concept of being 
        ‘At the Very Top’..
        </p>
        <br></br>
        <p>

        
    The University, which has a current population of 5000 students,
 is committed to scaling the heights of education in the world with a mission 
 to provide holistic higher education through promoting excellence in research, integrating innovation and technology in learning and developing well rounded citizens to impact the social, political and economic world. 
        </p>
        <button>Learn More</button>
        </div>
    </div>
   
    </>
  )
}

export default Content