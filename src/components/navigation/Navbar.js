import { connect } from "react-redux";
import {useState} from 'react';
import { NavLink,Link } from "react-router-dom";
import logo_ping from 'assets/img/ping.png';
import logindots from 'assets/img/puntos.gif';
import  DotLoader from "react-spinners/DotLoader";


function Navbar() {

  const [loading,setLoading]=useState(true)
    window.onscroll= function () {scrollFunction()}

    function scrollFunction(){
            if(document.getElementById('navbar')){
                //console.log((document.body.scrollTop))
                if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
                  document.getElementById('navbar').classList.add('shadow-navbar');
                  document.getElementById('navbar').classList.add('big-white');
                }
                else{
                  document.getElementById('navbar').classList.remove('shadow-navbar');
                  document.getElementById('navbar').classList.remove('big-white');
                }
            }
    }

  return (
    <nav id='navbar' className="w-full py-2 top-0 bg-black shadow-xl transition duration-300 ease-in-out  z-40 fixed">
      <div className=" px-4 sm:px-6 ">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to='/' className="ml-4 mt-2">
            <img 
               src={logo_ping}
               width={80}
               height={70}
               className=""/>
         
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
              <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-white  border-b-2 border-white hover:border-green-button transition duration-300 ease-in-out  mx-8"> Casos </NavLink>
              <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-white  border-b-2 border-white hover:border-green-button transition duration-300 ease-in-out  mx-8"> Servicios </NavLink>
              <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-white border-b-2 border-white hover:border-green-button transition duration-300 ease-in-out   mx-8"> Nosotros </NavLink>
              <NavLink to='/Cooperativa' className="text-lg inline-flex font-medium leading-6 text-white border-b-2 border-white hover:border-green-button transition duration-300 ease-in-out   mx-8"> Cooperativas </NavLink>
              <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-white border-b-2 border-white hover:border-green-button transition duration-300 ease-in-out   mx-8"> Blog </NavLink>
              <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-white border-b-2 border-white hover:border-green-button transition duration-300 ease-in-out   mx-8"> Contacto </NavLink>


   

       <Link
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-green-button px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
         Trabaja con nosotros 
        <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#000000" />
      </Link>


          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Navbar);
