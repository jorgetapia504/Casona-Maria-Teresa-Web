"use client"
import { useEffect, useRef, useState } from "react";
import ButtonLink from "../ui/ButtonLink";

export default function Block6 () {

const [title, setTitle] = useState('opacity-0')
  const [text, setText] = useState('opacity-0')
  const [button, setButton] = useState('opacity-0')

  const ref = useRef(null)
  
    useEffect(() => {
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting){
            setTitle('opacity-100')
            setTimeout(() => {
              setText('opacity-100')
              setTimeout(() => {
                setButton('opacity-100')
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
    <div ref={ref} className="relative w-full text-white m-auto px-2 py-24 text-center flex flex-col gap-6 bg-cover bg-center" style={{ backgroundImage: 'url("/Foto 2.jpg")' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="m-auto relative w-full max-w-7xl flex flex-col gap-6 text-white">
            <h2 className={`${title} transition-opacity duration-200 text-2xl text-center lg:text-4xl font-semibold`}>Ten un evento con todo incluido</h2>
          <p className={`${text} transition-opacity duration-200 text-md text-center lg:text-xl`}>Haz tu evento sin estres teniendo todo lo que necesitas en un solo lugar, bar libre toda la fiesta, comida variada con cocktail, bocadillos, entrada, plato de fondo y postres, musica a tu gusto y mucho más.</p>
          <ButtonLink url={"/cotizar"} config={`${button} transition-opacity duration-200 m-auto`}>Cotizar evento</ButtonLink>
          </div>
        </div>
  )
}