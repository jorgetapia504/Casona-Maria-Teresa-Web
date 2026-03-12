"use client"
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Block4 () {

const [title, setTitle] = useState('opacity-0')
  const [image, setImage] = useState('opacity-0')
  const [image2, setImage2] = useState('opacity-0')
  const [image3, setImage3] = useState('opacity-0')

  const ref = useRef(null)
  
    useEffect(() => {
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting){
            setTitle('opacity-100')
            setTimeout(() => {
              setImage('opacity-100')
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
    <section ref={ref} className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-12">
        <h2 className={`${title} transition-opacity duration-200 text-2xl lg:text-4xl font-semibold text-center`}>
          Nuestro Local para Cumpleaños es Ideal Para:
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <article className={`${image} transition-opacity duration-200 flex flex-col gap-4 text-center`}>
            <Image
              src="/Cumpleaños.jpg"
              alt="Salón para cumpleaños para adultos en Santiago"
              width={600}
              height={600}
              className="rounded-lg object-cover h-80 w-full"
            />
            <h3 className="text-lg lg:text-2xl font-medium">Cumpleaños para Adultos</h3>
            <p className="text-md lg:text-xl">
              Espacio elegante ideal para celebraciones nocturnas y fiestas privadas.
            </p>
          </article>

          <article className={`${image2} transition-opacity duration-200 flex flex-col gap-4 text-center`}>
            <Image
              src="/Evento 4.jpg"
              alt="Local para fiesta privada en Santiago"
              width={600}
              height={600}
              className="rounded-lg object-cover h-80 w-full"
            />
            <h3 className="text-lg lg:text-2xl font-medium">Fiestas Privadas</h3>
            <p className="text-md lg:text-xl">
              Local privado para celebrar con amigos y familia en un ambiente exclusivo.
            </p>
          </article>

          <article className={`${image3} transition-opacity duration-200 flex flex-col gap-4 text-center`}>
            <Image
              src="/Evento 5.jpg"
              alt="Salón de fiestas moderno en Maipú"
              width={600}
              height={600}
              className="rounded-lg object-cover h-80 w-full"
            />
            <h3 className="text-lg lg:text-2xl font-medium">Celebraciones Especiales</h3>
            <p className="text-md lg:text-xl">
              Espacio versátil para aniversarios, fiestas temáticas y eventos sociales.
            </p>
          </article>

        </div>
      </section>
  )
}