import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Invitar miembros',
    description: 'Agrega fácilmente a los miembros de la cooperativa y gestiona su participación desde un solo lugar.',
  },
  {
    name: 'Notificaciones',
    description: 'Recibe alertas importantes sobre actividades, reuniones o tareas pendientes de forma automática.',
  },
  {
    name: 'Vista en lista',
    description: 'Organiza y visualiza todas las actividades de la cooperativa de manera clara y eficiente.',
  },
  {
    name: 'Tableros',
    description: 'Crea tableros personalizados para proyectos, seguimiento de tareas y coordinación entre equipos.',
  },
  {
    name: 'Atajos de teclado',
    description: 'Optimiza tu trabajo diario usando accesos rápidos para navegar y gestionar tareas rápidamente.',
  },
  {
    name: 'Reportes',
    description: 'Genera informes detallados sobre la actividad de la cooperativa para tomar decisiones informadas.',
  },
  {
    name: 'Calendarios',
    description: 'Planifica reuniones, eventos y fechas importantes con un calendario integrado y sincronizado.',
  },
  {
    name: 'Aplicación móvil',
    description: 'Accede y gestiona todo desde cualquier dispositivo, en cualquier momento, sin complicaciones.',
  },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-12 max-w-full py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-12 max-w-full">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Plataforma integral</h2>
          <p className="mt-4 text-lg text-gray-500">
            Nuestra plataforma permite gestionar todos los procesos de la cooperativa desde un solo lugar, optimizando la colaboración, la comunicación y la eficiencia.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
