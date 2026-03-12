"use client"
import { useEffect, useRef, useState } from "react"

export default function Block2 () {

const [title, setTitle] = useState('opacity-0')
  const [text, setText] = useState('opacity-0')
  const [text2, setText2] = useState('opacity-0')

  const ref = useRef(null)
  
    useEffect(() => {
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting){
            setTitle('opacity-100')
            setTimeout(() => {
              setText('opacity-100')
              setTimeout(() => {
                setText2('opacity-100')
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
    <section ref={ref} className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-8 text-center">
        <h2 className={`${title} transition-opacity duration-200 text-2xl lg:text-4xl font-semibold`}>
          Centro de Eventos para Empresas en Santiago y Maipú
        </h2>

        <p className={`${text} transition-opacity duration-200 text-md lg:text-xl max-w-4xl mx-auto`}>
          Si estás buscando un centro de eventos corporativos en Santiago,
          nuestro salón para eventos empresariales ofrece el espacio ideal
          para organizar reuniones, capacitaciones, lanzamientos de productos,
          aniversarios de empresa y celebraciones internas.
        </p>

        <p className={`${text2} transition-opacity duration-200 text-md lg:text-xl max-w-4xl mx-auto`}>
          Somos una excelente alternativa entre los lugares para eventos
          corporativos en Santiago, con infraestructura profesional,
          ubicación estratégica y un ambiente elegante y funcional.
        </p>
      </section>
  )
}