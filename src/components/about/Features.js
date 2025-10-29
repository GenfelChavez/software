import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Colabora con tu equipo',
    description: 'Invita a tus compañeros y trabaja de forma conjunta en proyectos desde una sola plataforma.',
  },
  {
    name: 'Vista organizada',
    description: 'Gestiona tus tareas, clientes o proyectos con una interfaz clara y adaptable a tus necesidades.',
  },
  {
    name: 'Atajos de productividad',
    description: 'Ahorra tiempo con comandos rápidos que agilizan tu flujo de trabajo diario.',
  },
  {
    name: 'Calendarios integrados',
    description: 'Sincroniza tus actividades, reuniones y entregas importantes en un mismo lugar.',
  },
  {
    name: 'Notificaciones inteligentes',
    description: 'Recibe alertas personalizadas para mantenerte al tanto de lo que realmente importa.',
  },
  {
    name: 'Paneles dinámicos',
    description: 'Visualiza métricas, avances y resultados con paneles personalizables y fáciles de usar.',
  },
  {
    name: 'Reportes automáticos',
    description: 'Genera informes detallados y toma decisiones basadas en datos en tiempo real.',
  },
  {
    name: 'Aplicación móvil',
    description: 'Accede a tus proyectos y colabora con tu equipo desde cualquier dispositivo.',
  },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-full py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-indigo-600">Todo lo que necesitas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Una plataforma integral</p>
          <p className="mt-4 text-lg text-gray-500">
            Diseñada para optimizar la colaboración, automatizar procesos y potenciar la eficiencia de tu equipo. 
            Con nuestras herramientas, podrás gestionar todo tu flujo de trabajo desde un solo lugar.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
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
    </div>
  )
}
