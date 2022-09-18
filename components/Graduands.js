import React from 'react'
import Link from 'next/link'
import gradStyles from '../styles/Graduans.module.css'

const Graduands = () => {
  return (
    <div className={gradStyles.rowbelow}>
        <div className={gradStyles.facts}>
    <h3>60,000</h3>
    <h4>GRADUANDS SINCE INCEPTION</h4>

    <h3>5,000</h3>
    <h4>CURRENT POPULATION</h4>
    </div>
<div className={gradStyles.columnbelow}>
<h3>60,000</h3>
    <h4>GRADUANDS SINCE INCEPTION</h4>

    <h3>5,000</h3>
    <h3>CURRENT POPULATION</h3>  

</div>

    </div>
  )
}

export default Graduands