import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About Us</Link></li>
            <li><Link href='/admissions'>Admissions</Link></li>
            <li><Link href='/academics'>Academics</Link></li>
            <li><Link href='/programs'>Programs</Link></li>
            <li><Link href='/research'>Research</Link></li>
            <li><Link href='/library'>Library</Link></li>
          
          

        </ul>
    </nav>
  )
}

export default Nav