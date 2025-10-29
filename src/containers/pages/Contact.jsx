import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import {useEffect} from 'react'
import { Helmet } from "react-helmet-async"
function Contact(){

 useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <Layout>
             <Helmet>
                     <title>Zona Software S.R.L. | Contacto</title>
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
             Contact   
            </div>
            <Footer/>
        </Layout>
    )
}

export default Contact