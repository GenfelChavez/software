import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Services(){
    return(
        <Layout>
            <NavBar/>
            <div className='pt-28' >
             Services   
            </div>
            <Footer/>
        </Layout>
    )
}

export default Services