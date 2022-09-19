import React from 'react'
import Link from 'next/link'
import gradStyles from '../styles/Graduans.module.css'
import Image from 'next/image'
import about from '../public/graduands.jpeg'


const Graduands = () => {
  return (
    <div className={gradStyles.rowbelow}>
            <div className={gradStyles.facts}>
                <div>
                    <Image src={''} width={100}></Image>
                </div>
                <div className={gradStyles.facts1}>
                    <h3>60,000</h3>
                    <h4>GRADUANDS SINCE INCEPTION</h4>
                </div>
               
                <div className={gradStyles.facts2}>
                    <h3>5,000</h3>
                    <h4>CURRENT POPULATION</h4>
                </div>

               
        </div>
        <div className={gradStyles.columnbelow}>
                 <div>
                     <Image src={''} width={100}></Image>
                    </div>
            <div>
                <h3>4</h3>
                <h4>Campuses</h4>
            </div>
           
            <div>
                <h3>50</h3>
                 <h3>Running Programs</h3>  
            </div>
            

        </div>

    </div>
  )
}

export default Graduands