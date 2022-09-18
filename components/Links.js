import Link from 'next/link'
import React from 'react'
import linksStyles from '../styles/Links.module.css'

const Links = () => {
  return (
    <div className={linksStyles.row}>
        <div className={linksStyles.row_main}>
            <h3>Zetech Experience</h3>
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About Us</Link></li>
            <li><Link href='/admissions'>Admissions</Link></li>
            <li><Link href='/academics'>Academics</Link></li>
            <li><Link href='/programs'>Programs</Link></li>
            <li><Link href='/research'>Research</Link></li>
            <li><Link href='/library'>Library</Link></li>
          </ul>

        </div>

        <div className={linksStyles.row_main}>
            <h3>Quick Links</h3>
        <ul>
           
            <li><Link href='/library'>Library</Link></li>
            <li><Link href='/admissions'>E-Learning</Link></li>
            <li><Link href='/academics'>Sports & Recreation </Link></li>
            <li><Link href='/programs'>Our Partners</Link></li>
           
        
          </ul>

        </div>

        <div className={linksStyles.row_main}>
            <h3>Schools & Departments </h3>
        <ul>
           
            <li><Link href='/about'>School Of Business & Economics</Link></li>
            <li><Link href='/admissions'>School of ICT, Media and Engineering</Link></li>
            <li><Link href='/academics'>School of Education, Arts & Social Sciences</Link></li>
         
          </ul>

        </div>

        <div className={linksStyles.row_main}>
            <h3>Office Contact</h3>
        <ul>
         
            <li><Link href='/about'>Main Campus Off Thika Rd, Ruiru</Link></li>
            <li><Link href='/admissions'>+254 719 034500</Link></li>
            <li><Link href='/academics'>info@zetech.ac.ke</Link></li>
          
          </ul>

        </div>
    </div>
  )
}

export default Links