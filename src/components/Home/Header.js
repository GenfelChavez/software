import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"
function Header(){


    return(

        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl xl:pt-40 xl:pb-64 lg:pt-56 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-55 sm:text-center sm:text-6xl">
                  Zona Software donde <span> </span>
                  <div className='' style={{color:'#caff32',fontWeight:'bold'}}>
                  <Typewriter
                      words={['Creamos','Mejoramos','Apoyamos','Transformamos Ideas!']}
                      loop={0}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaSpeed={1000}
                      />
                      </div>
                </h1>
                <br></br>
                <ul className='flex gap-8 items-center justify-center py-12' >
                   <li className='inline-flex transition duration-300 ease-in-out  border-b-2 border-transparent hover:border-green-button'>
                    <Link to='/servicios/algoaqui' className="mt-6 text-lg font-medium leading-8 text-white-700 sm:text-center" >
                          Web
                      </Link>
                   </li>
                   <li className='inline-flex transition duration-300 ease-in-out  border-b-2 border-transparent hover:border-green-button'>
                           <Link to='/servicios/algoaqui' className="mt-6 text-lg fond-medium leading-8 text-white-700 sm:text-center" >
                          Consultorias
                      </Link>
                   </li>
                   <li className='inline-flex transition duration-300 ease-in-out  border-b-2 border-transparent hover:border-green-button'>
                           <Link to='/servicios/algoaqui' className="mt-6 text-lg fond-medium leading-8 text-white-700 sm:text-center" >
                          Cooperativas
                      </Link>
                   </li>
                   <li className='inline-flex transition duration-300 ease-in-out  border-b-2 border-transparent hover:border-green-button'>
                           <Link to='/servicios/algoaqui' className="mt-6 text-lg fond-medium leading-8 text-white-700 sm:text-center" >
                          Apps
                      </Link>
                   </li>
                   <li className='inline-flex transition duration-300 ease-in-out  border-b-2 border-transparent hover:border-green-button'>
                           <Link to='/servicios/algoaqui' className="mt-6 text-lg fond-medium leading-8 text-white-700 sm:text-center" >
                          Desarrollo
                      </Link>
                   </li>
                </ul>
                <p className="mt-6 text-lg leading-8 text-white-600 sm:text-center">
                  Creamos soluciones tecnológicas innovadoras que impulsan a las empresas hacia la transformación digital. Nuestro enfoque en desarrollo de software combina calidad, 
                  eficiencia y escalabilidad para ofrecer productos que generan impacto real en cada proyecto.
                </p>
          
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">

              </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )

}

export default Header