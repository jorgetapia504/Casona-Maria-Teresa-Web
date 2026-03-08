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
    <div className="relative w-full h-100 lg:h-150 p-2 bg-cover bg-center flex" style={{ backgroundImage: 'url("/salon.jpg")' }}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="m-auto relative w-full max-w-7xl flex flex-col gap-6 text-white">
            <h1 className={`${title} transition-opacity duration-200 text-4xl lg:text-6xl font-semibold text-center`}>Centro y Salón de Eventos en Santiago para Fiestas y Celebraciones</h1>
            <p className={`${text} transition-opacity duration-200 text-center text-md lg:text-xl`}>Un lugar elegante y completamente equipado para celebraciones privadas, matrimonios, cumpleaños, bautizos y eventos corporativos.</p>
            <ButtonLink url={"/cotizar"} config={`${button} transition-opacity duration-200 m-auto`}>Cotizar evento</ButtonLink>
          </div>
        </div>
  )
}