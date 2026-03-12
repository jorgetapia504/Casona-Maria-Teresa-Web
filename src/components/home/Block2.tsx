"use client"
import Link from "next/link";
import Image from 'next/image'
import { useEffect, useRef, useState } from "react";

export default function Block2 () {

  const [title, setTitle] = useState('opacity-0')
  const [image1, setImage1] = useState('opacity-0')
  const [image2, setImage2] = useState('opacity-0')
  const [image3, setImage3] = useState('opacity-0')

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
    <div ref={ref} className="w-full max-w-7xl m-auto px-2 py-20 text-center flex flex-col gap-6">
          <h2 className={`${title} transition-opacity duration-200 text-2xl lg:text-4xl font-semibold`}>Un espacio ideal para cada tipo de celebración</h2>
          <div className="flex gap-8 m-auto flex-wrap justify-between">
            <Link href='/matrimonios' className={`${image1} flex flex-col gap-2 m-auto transition-all duration-200 hover:scale-105`}>
              <Image src={"/Matrimonio.jpg"} alt={""} width={500} height={500} className={`w-80 h-120 object-cover rounded-lg`} />
              <p className="text-lg -mt-18 bg-black text-white w-fit m-auto py-2 px-8">Matrimonios</p>
            </Link>
            <Link href='/cumpleanos' className={`${image2} flex flex-col gap-2 m-auto transition-all duration-200 hover:scale-105`}>
              <Image src={"/Cumpleaños.jpg"} alt={""} width={500} height={500} className={`w-80 h-120 object-cover rounded-lg`} />
              <p className="text-lg -mt-18 bg-black text-white w-fit m-auto py-2 px-8">Cumpleaños</p>
            </Link>
            <Link href='/empresa' className={`${image3} flex flex-col gap-2 m-auto transition-all duration-200 hover:scale-105`}>
              <Image src={"/Empresa.jpg"} alt={""} width={500} height={500} className={`w-80 h-120 object-cover rounded-lg`} />
              <p className="text-lg -mt-18 bg-black text-white w-fit m-auto py-2 px-8">Empresas</p>
            </Link>
          </div>
        </div>
  )
}