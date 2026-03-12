"use client"
import { useEffect, useRef, useState } from "react"

export default function Block3 () {

  const [title, setTitle] = useState('opacity-0')
      const [text, setText] = useState('opacity-0')
    
      const ref = useRef(null)
      
        useEffect(() => {
      
          const observer = new IntersectionObserver(
            ([entry]) => {
              if(entry.isIntersecting){
                setTitle('opacity-100')
                setTimeout(() => {
                  setText('opacity-100')
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
    <section ref={ref} className="py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
              <h2 className={`${title} transition-opacity duration-200 text-2xl lg:text-4xl font-semibold text-center`}>
                ¿Por qué elegir nuestro Salón de Fiestas en Santiago?
              </h2>
    
              <ul className={`${text} transition-opacity duration-200 grid md:grid-cols-2 gap-6 text-md lg:text-xl`}>
                <li>✔ Salón privado exclusivo por evento</li>
                <li>✔ Espacio ideal para cumpleaños para adultos</li>
                <li>✔ Ambiente moderno y elegante</li>
                <li>✔ Pista de baile y espacio para DJ</li>
                <li>✔ Capacidad adaptable según invitados</li>
                <li>✔ Ubicación estratégica en Maipú</li>
                <li>✔ Alternativa destacada entre salones de fiestas en Santiago</li>
                <li>✔ Opción de catering o arriendo solo del local</li>
              </ul>
            </div>
          </section>
  )
}