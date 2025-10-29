import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"
function Header(){


    return(

        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-7xl">
                       Casos de estudio
                </h1>
                <p className="mt-6 text-2xl leading-8 text-white">
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