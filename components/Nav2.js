import React from 'react'
import Link from 'next/link'
import navStyles from '../styles/Navbar.module.css'
import { Button } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'

const Nav2 = () => {
  return (
    <div className={navStyles.header}>
            <h3><Link href='/admissions'>Admissions</Link></h3>
            <h3><Link href='https://sajili.zetech.ac.ke/'>Apply Online</Link></h3>
            <h3>
                Programs
              
              
            </h3>
            <h3>Academics</h3>
            <h3><Link href='https://sajili.zetech.ac.ke/'>Library</Link></h3>
            <h3>Portals</h3>
            <h3>Research</h3>
        </div>
  )
}

export default Nav2