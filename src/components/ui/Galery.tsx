import Image from 'next/image'
import ButtonLink from './ButtonLink'

export default function Galery () {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl m-auto px-2 py-20">
              <h2 className="text-2xl lg:text-4xl font-semibold text-center">Galeria de imagenes</h2>
              <div className="flex gap-8 justify-around flex-wrap">
                <Image src={"/Evento 1.jpg"} alt={""} width={700} height={700} className="w-96 h-96 object-cover rounded-xl" />
                <Image src={"/Evento 2.jpg"} alt={""} width={700} height={700} className="w-96 h-96 object-cover rounded-xl" />
                <Image src={"/Evento 3.jpg"} alt={""} width={700} height={700} className="w-96 h-96 object-cover rounded-xl" />
                <Image src={"/Evento 4.jpg"} alt={""} width={700} height={700} className="w-96 h-96 object-cover rounded-xl" />
                <Image src={"/Evento 5.jpg"} alt={""} width={700} height={700} className="w-96 h-96 object-cover rounded-xl" />
                <Image src={"/Evento 6.jpg"} alt={""} width={700} height={700} className="w-96 h-96 object-cover rounded-xl" />
              </div>
              <ButtonLink url={"/galeria"} config="m-auto">Ver más</ButtonLink>
            </div>
  )
}