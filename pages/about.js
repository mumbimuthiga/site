import React from 'react'
import Head from 'next/head'
import Main from '../components/Main'

const about = () => {
  return (
    <>
    <div>
        <Head>
            <title>About Us</title>
            <meta name='keywords' 
        content='university, innovation, zetech university' />

        </Head>
     
    </div>
      <Main></Main>
    </>
  )
}

export default about