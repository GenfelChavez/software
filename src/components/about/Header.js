import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"
function Header(){


    return(

        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-32 xl:pb-40 lg:pt-40 lg:pb-40 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-8 sm:text-7xl">
                       Sobre Nosotros
                </h1>
                <p className="mt-6 text-2xl leading-10 text-white max-w-5xl">
                  En nuestra empresa creamos soluciones tecnológicas innovadoras que impulsan a las organizaciones hacia la transformación digital.
Nos especializamos en el desarrollo de software con un enfoque en calidad, eficiencia y escalabilidad, ofreciendo productos que generan un impacto real y contribuyen al crecimiento de cada proyecto.
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