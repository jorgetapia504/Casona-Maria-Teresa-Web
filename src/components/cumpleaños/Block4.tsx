"use client"
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Block4 () {

  const [title, setTitle] = useState('opacity-0')
  const [image, setImage] = useState('opacity-0')
  const [image2, setImage2] = useState('opacity-0')
  const [image3, setImage3] = useState('opacity-0')
  const [image4, setImage4] = useState('opacity-0')
  const [image5, setImage5] = useState('opacity-0')
  const [image6, setImage6] = useState('opacity-0')

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
                setTimeout(() => {
                  setImage4('opacity-100')
                  setTimeout(() => {
                    setImage5('opacity-100')
                    setTimeout(() => {
                      setImage6('opacity-100')
                    }, 150);
                  }, 150);
                }, 150);
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
        Galeria de imagenes
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <Image
          src="/Foto 1.jpg"
          alt="Salón de eventos para matrimonios en Santiago"
          width={600}
          height={600}
          className={`${image} transition-opacity duration-200 rounded-lg object-cover h-80 w-full`}
        />
        <Image
          src="/Fiesta cumpleaños.jpg"
          alt="Salón de eventos para matrimonios en Santiago"
          width={600}
          height={600}
          className={`${image2} transition-opacity duration-200 rounded-lg object-cover h-80 w-full`}
        />
        <Image
          src="/Fiesta cumpleaños 2.jpg"
          alt="Salón decorado para boda en Maipú"
          width={600}
          height={600}
          className={`${image3} transition-opacity duration-200 rounded-lg object-cover h-80 w-full`}
        />
        <Image
          src="/Foto 3.jpg"
          alt="Centro de bodas en Santiago elegante"
          width={600}
          height={600}
          className={`${image4} transition-opacity duration-200 rounded-lg object-cover h-80 w-full`}
        />
        <Image
          src="/Salon.jpg"
          alt="Centro de bodas en Santiago elegante"
          width={600}
          height={600}
          className={`${image5} transition-opacity duration-200 rounded-lg object-cover h-80 w-full`}
        />
        <Image
          src="/Foto 2.jpg"
          alt="Centro de bodas en Santiago elegante"
          width={600}
          height={600}
          className={`${image6} transition-opacity duration-200 rounded-lg object-cover h-80 w-full`}
        />
      </div>
    </section>
  )
}