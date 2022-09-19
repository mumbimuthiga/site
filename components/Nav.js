import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import Image from 'next/image'
import logo from '../public/logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import { useState } from 'react';
import Nav2 from './Nav2';



const Nav = () => {
    const [open,setOpen]=useState(false)
  return (
    <>
   
    <div className={navStyles.nav}>
        <div className={navStyles.image}>
        <Image src={logo} alt="Logo" width={200} height={50}></Image>
        </div>
   
    <div className={navStyles.links}>
        <ul >
             <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/academics'>Admissions</Link></li>
            <li><Link href='/about'>Media</Link></li>
            <li><Link href='/programs'>Contact</Link></li>
            <li><Link href='https://careers.zetech.ac.ke/'>Careers</Link></li>
            <div className={navStyles.icon}>
            <IconButton>
                <MenuIcon
                 onClick={()=>{
                   setOpen(!open)
                 }}
                ></MenuIcon>
                {open && <Nav2></Nav2>}
            </IconButton>
          
          

        </div>
         </ul>
       
        
        </div>
    </div>
    </>
  )
}

export default Nav