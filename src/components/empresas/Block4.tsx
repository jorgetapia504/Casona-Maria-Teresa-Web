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
          Nuestro Centro de Eventos Corporativos es Ideal Para:
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <article className={`${image} transition-opacity duration-200 flex flex-col gap-4 text-center`}>
            <Image
              src="/Empresa.jpg"
              alt="Centro de eventos para empresas en Santiago"
              width={600}
              height={600}
              className="rounded-lg object-cover h-80 w-full"
            />
            <h3 className="text-lg lg:text-2xl font-medium">Reuniones y Capacitaciones</h3>
            <p className="text-md lg:text-xl">
              Espacio cómodo y profesional para reuniones de trabajo y formaciones internas.
            </p>
          </article>

          <article className={`${image2} transition-opacity duration-200 flex flex-col gap-4 text-center`}>
            <Image
              src="/Evento 1.jpg"
              alt="Lugar para eventos empresariales en Santiago"
              width={600}
              height={600}
              className="rounded-lg object-cover h-80 w-full"
            />
            <h3 className="text-lg lg:text-2xl font-medium">Lanzamientos de Productos</h3>
            <p className="text-md lg:text-xl">
              Salón ideal para presentaciones corporativas y eventos de marca.
            </p>
          </article>

          <article className={`${image3} transition-opacity duration-200 flex flex-col gap-4 text-center`}>
            <Image
              src="/Evento 6.jpg"
              alt="Salón para eventos corporativos en Maipú"
              width={600}
              height={600}
              className="rounded-lg object-cover h-80 w-full"
            />
            <h3 className="text-lg lg:text-2xl font-medium">Celebraciones Empresariales</h3>
            <p className="text-md lg:text-xl">
              Local para eventos corporativos como aniversarios y fiestas de empresa.
            </p>
          </article>

        </div>
      </section>
  )
}