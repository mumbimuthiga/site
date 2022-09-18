import React from 'react'
import testStyles from '../styles/Testmonials.module.css'

const Testmonials = () => {
  return (
    <div className={testStyles.row}>
        <div className={testStyles.images}>
            <img src='' alt='Image2'></img>
            <img src='' alt='Colon'></img>
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