import Clients from "components/about/Clients"
import Features from "components/about/Features"
import Header from "components/about/Header"
import Images from "components/about/Images"
import TestStats from "components/about/TestStats"
import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import {useEffect} from 'react'
import { Helmet } from "react-helmet-async"
function About(){

 useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <Layout>
             <Helmet>
                     <title>Zona Software S.R.L. | Nosotros</title>
                    <meta name="description" content="Empresa de software. Servicios en el   desarrollo de aplicaciones." />
                    <meta name="keywords" content='Empresa de software, , desarrollo de sistemas' />
                    <meta name="robots" content='all' />
                    <link rel="canonical" href="https://www.ZonaSoftware.com/" />
                    <meta name="author" content='ZonaSoftware' />
                    <meta name="publisher" content='ZonaSoftware' />
            
                    {/* Social Media Tags */}
                    <meta property="og:title" content='ZonaSoftware | Software Agency' />
                    <meta property="og:description" content='Empresa de software. Servicios en el   desarrollo de aplicaciones.' />
                    <meta property="og:url" content="https://www.ZonaSoftware.com/" />
            
                    <meta name="twitter:title" content=' ZonaSoftware | Software Agency' />
                    <meta
                        name="twitter:description"
                        content='Empresa de software. Servicios en el   desarrollo de aplicaciones.'
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                        </Helmet>
            <NavBar/>
            <div className='pt-28' >
             <Header/>  
             <TestStats/> 
             <Images/>
             <Clients/>
         
             <Features/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default About