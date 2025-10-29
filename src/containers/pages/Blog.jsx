import Footer from "components/navigation/Footer"
import NavBar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Blog(){
    return(
        <Layout>
            <NavBar/>
            <div className='pt-28' >
             Blog   
            </div>
            <Footer/>
        </Layout>
    )
}

export default Blog