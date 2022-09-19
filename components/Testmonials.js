import React from 'react'
import testStyles from '../styles/Testmonials.module.css'
import Image from 'next/image'
import colon from '../public/graduands.jpeg'

const Testmonials = () => {
  return (
    <div className={testStyles.row}>
        <div className={testStyles.images}>
            <Image src={''} alt='Image2'></Image>
            <Image src={''} alt='Colon'></Image>
         </div>
         <div className={testStyles.text}>
            <h3>Dr Ngumi</h3>
            <h4>DVC</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                 Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
            </p>

         </div>
    </div>
  )
}

export default Testmonials