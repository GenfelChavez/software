import Medidas from '../../assets/img/Medida.png'
import Support from '../../assets/img/Soporte.png'
import Integra from '../../assets/img/Integracion.png'
const incentives = [
  {
    name: 'Desarrollo a medida',
    imageSrc: Medidas,
    description:
      'Creamos aplicaciones web, móviles y de escritorio adaptadas exactamente a las necesidades de tu negocio, sin soluciones genéricas.',
  },
  {
    name: 'Soporte y mantenimiento',
    imageSrc: Support,
    description:
      'Brindamos acompañamiento continuo, actualizaciones y mejoras para que tu sistema siga funcionando de manera óptima a largo plazo.',
  },
  {
    name: 'Integración de tecnologías',
    imageSrc: Integra,
    description:
      'Conectamos tu software con APIs, servicios en la nube y bases de datos para que toda tu infraestructura trabaje en conjunto.',
  },
]

export default function Incentives() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Impulsamos tu negocio con tecnología
            </h2>
            <p className="mt-4 text-gray-500">
              Nuestro enfoque es construir soluciones de software escalables, seguras y fáciles de mantener,
              para que tu empresa crezca sin límites.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-20 w-30" src={incentive.imageSrc} alt={incentive.name} />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
