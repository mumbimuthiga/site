import React from 'react'
import footerStyles from '../styles/Footer.module.css'
import Image from 'next/image'
import { Button } from '@material-ui/core'
import { Facebook } from '@material-ui/icons'
import { Instagram } from '@material-ui/icons'
import { Twitter } from '@material-ui/icons'
import { YouTube } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
    <div className={footerStyles.icons}>
        <Button
        variant='outlined'
        startIcon={<Facebook/>}
        >

        </Button>
        <Button
        variant='outlined'
        startIcon={<Instagram/>}
        >

        </Button>
        <Button
        variant='outlined'
        startIcon={<Twitter/>}
        >

        </Button>
        <Button
        variant='outlined'
        startIcon={<YouTube/>}
        >

        </Button>
        <Button
        variant='outlined'
        color='#fff'
        startIcon={<LinkedIn/>}
        >

        </Button>
        
    
      
       
       
      

    </div>
    <div className={footerStyles.main}>
        <p>&copy; Zetech university,All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer