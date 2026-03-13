"use client"
import { useEffect, useState } from "react";
import ButtonLink from "../ui/ButtonLink";

export default function Block1 () {

  const [title, setTitle] = useState('opacity-0')
    const [text, setText] = useState('opacity-0')
    const [button, setButton] = useState('opacity-0')
  
    useEffect(() => {
      setTimeout(() => {
        setTitle('opacity-100')
        setTimeout(() => {
          setText('opacity-100')
          setTimeout(() => {
            setButton('opacity-100')
          }, 150);
        }, 150);
      }, 150);
    }, [])

  return (
    <section
        className="relative w-full h-100 lg:h-150 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Matrimonio.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl px-4 text-center text-white flex flex-col gap-6">
          <h1 className={`${title} transition-opacity duration-200 text-4xl lg:text-6xl font-semibold leading-tight`}>
            Centro y Salón de Eventos para Matrimonios en Maipú
          </h1>
          <p className={`${text} transition-opacity duration-200 text-md lg:text-xl`}>
            Espacio elegante en Maipú ideal para celebraciones románticas inolvidables, con todo incluido para hacer de tu día especial algo unico.
          </p>
          <ButtonLink
            url="/cotizar"
            config={`${button} transition-opacity duration-200 m-auto`}
          >
            Cotizar Salón para Matrimonio
          </ButtonLink>
        </div>
      </section>
  )
}