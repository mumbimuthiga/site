
import { Carousel } from 'react-responsive-carousel';
import React, { Component } from 'react';
import Students from '../public/university.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import about from '../public/university.jpg'
import site from '../public/site.jpeg'
import uni from '../public/uni.jpeg'
import school from '../public/school.jpeg'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={headerStyles.header}>
       
       <p classname={headerStyles.tag}>`Here`</p>   
        
    </div>
  )
}

export default Header