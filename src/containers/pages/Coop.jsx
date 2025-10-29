import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Coop(){
    return(
        <Layout>
            <NavBar/>
            <div className='pt-28' >
             Coop   
            </div>
            <Footer/>
        </Layout>
    )
}

export default Coop