"use client"
import { useEffect, useRef, useState } from "react";
import Cotizar from "../ui/Cotizar";

export default function Block5 () {

const [title, setTitle] = useState('opacity-0')
  const [form, setForm] = useState('opacity-0')

  const ref = useRef(null)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setTitle('opacity-100')
          setTimeout(() => {
            setForm('opacity-100')
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
    <div ref={ref} className="flex flex-col gap-6 w-full max-w-7xl m-auto px-2 py-20">
          <h2 className={`${title} transition-opacity duration-200 text-2xl lg:text-4xl font-semibold text-center`}>Cotiza tu evento con nosotros</h2>
          <Cotizar config={`${form} transition-opacity duration-200`} />
        </div>
  )
}