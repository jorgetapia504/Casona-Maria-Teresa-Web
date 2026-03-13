"use client"
import { useEffect, useRef, useState } from "react"

export default function Reviews () {

  const [title, setTitle] = useState('opacity-0')
  const [image1, setImage1] = useState('opacity-0')
  const [image2, setImage2] = useState('opacity-0')
  const [image3, setImage3] = useState('opacity-0')

  const ref = useRef(null)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setTitle('opacity-100')
          setTimeout(() => {
            setImage1('opacity-100')
            setTimeout(() => {
              setImage2('opacity-100')
              setTimeout(() => {
                setImage3('opacity-100')
              }, 150);
            }, 150);
          }, 150);
        }
      },
      {
        threshold: 0.2
      }
    )

    if(ref.current){
      observer.observe(ref.current)
    }

    return () => {
      if(ref.current){
        observer.unobserve(ref.current)
      }
    }

  }, [])

  return (
    <div ref={ref} className="w-full max-w-7xl m-auto px-2 py-20 text-center flex flex-col gap-6">
          <h2 className={`${title} transition-opacity duration-200 text-2xl lg:text-4xl font-semibold`}>Que opinan nuestros clientes</h2>
          <div className="flex gap-4 justify-between flex-wrap">
            <div className={`${image1} transition-opacity duration-200 flex flex-col gap-2 w-96 my-auto p-6 shadow-lg border border-neutral-50 rounded-lg`}>
              <p className="text-center text-lg lg:text-xl">Bonito y Grato Ambiente, totalmente Recomendable, seguro, gran estacionamiento, muy preocupado de todo, excelente DJ. El bar siempre disponible. Todo de primera. Gracias por todo, quedamos contentos.</p>
              <p className="font-medium text-left text-lg lg:text-xl">Macarena y Freddy</p>
            </div>
            <div className={`${image2} transition-opacity duration-200 flex flex-col gap-2 w-96 my-auto p-6 shadow-lg border border-neutral-50 rounded-lg`}>
              <p className="text-center text-lg lg:text-xl">Gracias a Lorena la Meitre y su equipo, a Don Esteban que nos saco unas fotos maravillosas, mis invitados quedaron contentos con el servicio y el Local, superaron todo lo comprometido.</p>
              <p className="font-medium text-left text-lg lg:text-xl">Romina y Patricio</p>
            </div>
            <div className={`${image3} transition-opacity duration-200 flex flex-col gap-2 w-96 my-auto p-6 shadow-lg border border-neutral-50 rounded-lg`}>
              <p className="text-center text-lg lg:text-xl">Nuestro Matrimonio fue soñado, gracias al equipo de eventos de la Casona María Teresa. Se dio cumplimiento a todo lo acordado en el contrato y más. Mis familiares nosotros y amigos lo pasamos muy bien. 100 % recomendable. De hecho uno de mis invitados harán un cumpleaños de adulto el próximo año, nos volveremos a ver 👏👏👏</p>
              <p className="font-medium text-left text-lg lg:text-xl">Alberto Octavio y Leo</p>
            </div>
          </div>
        </div>
  )
}