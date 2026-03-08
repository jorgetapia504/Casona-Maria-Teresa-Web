"use client"
import { useEffect, useRef, useState } from "react";
import ButtonLink from "../ui/ButtonLink";
import Image from 'next/image'

export default function Block3 () {

  const [title, setTitle] = useState('opacity-0')
  const [text, setText] = useState('opacity-0')
  const [button, setButton] = useState('opacity-0')
  const [image1, setImage1] = useState('opacity-0')
  const [image2, setImage2] = useState('opacity-0')

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
                setTimeout(() => {
                  setImage1('opacity-100')
                  setTimeout(() => {
                    setImage2('opacity-100')
                  }, 150);
                }, 150);
              }, 150);
            }, 150);
          }
        },
        {
          threshold: 0.4
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
    <div ref={ref} className="w-full max-w-7xl m-auto px-2 py-20 text-center grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6 my-auto">
                <h2 className={`${title} transition-opacity duration-200 text-2xl text-center md:text-left lg:text-4xl font-semibold`}>Una experiencia de alto nivel</h2>
                <p className={`${text} transition-opacity duration-200 text-md text-center md:text-left lg:text-xl`}>Ubicados en Maipú, te ayudamos a que tu evento sea una experiencia perfecta y sin estres que deslumbre a tus invitados.</p>
                <ButtonLink url={"/cotizar"} config={`${button} transition-opacity duration-200 m-auto md:m-0`}>Cotizar evento</ButtonLink>
              </div>
              <div className="m-auto">
                <Image src={"/Evento 1.jpg"} alt={""} width={700} height={700} className={`${image1} transition-opacity duration-200 w-60 h-60 sm:w-96 sm:h-96 object-cover rounded-xl`} />
                <Image src={"/Evento 2.jpg"} alt={""} width={700} height={700} className={`${image2} transition-opacity duration-200 w-60 h-60 sm:w-96 sm:h-96 ml-20 -mt-40 xl:ml-40 object-cover rounded-xl`} />
              </div>
            </div>
  )
}