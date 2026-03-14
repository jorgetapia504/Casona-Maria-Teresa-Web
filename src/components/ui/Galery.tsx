"use client"
import Image from 'next/image'
import ButtonLink from './ButtonLink'
import { useEffect, useRef, useState } from 'react'

export default function Galery () {

  const [title, setTitle] = useState('opacity-0')
  const [image1, setImage1] = useState('opacity-0')
  const [image2, setImage2] = useState('opacity-0')
  const [image3, setImage3] = useState('opacity-0')
  const [image4, setImage4] = useState('opacity-0')
  const [image5, setImage5] = useState('opacity-0')
  const [image6, setImage6] = useState('opacity-0')
  const [image7, setImage7] = useState('opacity-0')
  const [image8, setImage8] = useState('opacity-0')
  const [image9, setImage9] = useState('opacity-0')
  const [image10, setImage10] = useState('opacity-0')
  const [image11, setImage11] = useState('opacity-0')
  const [image12, setImage12] = useState('opacity-0')

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
                  setTimeout(() => {
                    setImage4('opacity-100')
                    setTimeout(() => {
                      setImage5('opacity-100')
                      setTimeout(() => {
                        setImage6('opacity-100')
                        setTimeout(() => {
                          setImage7('opacity-100')
                          setTimeout(() => {
                            setImage8('opacity-100')
                            setTimeout(() => {
                              setImage9('opacity-100')
                              setTimeout(() => {
                                setImage10('opacity-100')
                                setTimeout(() => {
                                  setImage11('opacity-100')
                                  setTimeout(() => {
                                    setImage12('opacity-100')
                                  }, 150);
                                }, 150);
                              }, 150);
                            }, 150);
                          }, 150);
                        }, 150);
                      }, 150);
                    }, 150);
                  }, 150);
                }, 150);
              }, 150);
            }, 150);
          }
        },
        {
          threshold: 0.1
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
    <div ref={ref} className="flex flex-col gap-6 w-full max-w-7xl m-auto px-2 py-20">
      <h2 className={`${title} transition-opacity duration-200 text-2xl lg:text-4xl font-semibold text-center`}>Galeria de imagenes</h2>
      <div className="flex gap-8 justify-around flex-wrap">
        <Image src={"/Fiesta cumpleaños.jpg"} alt={""} width={700} height={700} className={`${image1} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Fiesta cumpleaños 2.jpg"} alt={""} width={700} height={700} className={`${image2} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Fiesta.jpg"} alt={""} width={700} height={700} className={`${image3} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Evento 1.jpg"} alt={""} width={700} height={700} className={`${image4} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Evento 2.jpg"} alt={""} width={700} height={700} className={`${image5} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Evento 3.jpg"} alt={""} width={700} height={700} className={`${image6} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Evento 4.jpg"} alt={""} width={700} height={700} className={`${image7} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Evento 5.jpg"} alt={""} width={700} height={700} className={`${image8} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Evento 6.jpg"} alt={""} width={700} height={700} className={`${image9} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Foto 1.jpg"} alt={""} width={700} height={700} className={`${image10} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Foto 2.jpg"} alt={""} width={700} height={700} className={`${image11} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
        <Image src={"/Foto 3.jpg"} alt={""} width={700} height={700} className={`${image12} transition-opacity duration-200 w-96 h-96 object-cover rounded-xl`} />
      </div>
      <ButtonLink url={"/galeria"} config="m-auto">Ver más</ButtonLink>
    </div>
  )
}