import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Desarrollo a medida',
    description:
      'Creamos aplicaciones web, móviles y de escritorio adaptadas exactamente a las necesidades de tu negocio.',
  },
  {
    name: 'Integración de microservicios',
    description:
      'Conectamos sistemas internos y externos mediante APIs y microservicios eficientes y escalables.',
  },
  {
    name: 'Automatización de procesos',
    description:
      'Optimiza tareas repetitivas mediante soluciones digitales que ahorran tiempo y reducen errores.',
  },
  {
    name: 'Mantenimiento y soporte',
    description:
      'Brindamos soporte técnico constante para asegurar que tus aplicaciones siempre funcionen correctamente.',
  },
  {
    name: 'Seguridad de datos',
    description:
      'Implementamos medidas de seguridad avanzadas para proteger la información sensible de tu empresa.',
  },
  {
    name: 'Análisis y reportes',
    description:
      'Generamos dashboards y reportes personalizados para la toma de decisiones basada en datos.',
  },
  {
    name: 'Consultoría tecnológica',
    description:
      'Asesoramos sobre las mejores tecnologías y arquitecturas para tu proyecto o empresa.',
  },
  {
    name: 'Desarrollo multiplataforma',
    description:
      'Creamos soluciones que funcionan en web, Android y iOS, ofreciendo experiencias consistentes.',
  },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-indigo-600">Servicios de Zona Software</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Todo lo que necesitas para tu proyecto</p>
          <p className="mt-4 text-lg text-gray-500">
            Ofrecemos soluciones tecnológicas integrales: desde el desarrollo de software a medida hasta la optimización de procesos empresariales.
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
