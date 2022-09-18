import Nav from './Nav'
import Header from './Header'
import  Footer  from './Footer'
import Links from './Links'
import styles from  '../styles/Layout.module.css'
import Content from './Content'
import Graduands from './Graduands'
import Programs from './Programs'
import Testmonials from './Testmonials'

const Layout = ({children}) => {
  return (
    <>
   <Nav />
    <div className={styles.container}>
        
        
        <main className={styles.main}>
            <Header></Header>
         <Content></Content>
        {children}
      
      
        </main>
        <Graduands></Graduands>
        <Programs></Programs>
        <Testmonials></Testmonials>
        <Links></Links>
        </div>
        <Footer />
        </>
  )
}

export default Layout