"use client"
import { useEffect, useRef, useState } from "react"

export default function Block4 () {

const [title, setTitle] = useState('opacity-0')
const [text, setText] = useState('opacity-0')
  const [map, setMap] = useState('opacity-0')

  const ref = useRef(null)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setTitle('opacity-100')
          setTimeout(() => {
            setText('opacity-100')
            setTimeout(() => {
              setMap('opacity-100')
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
    <div ref={ref} className="flex flex-col gap-6 w-full max-w-7xl m-auto px-2 py-20">
              <h2 className={`${title} transition-opacity duration-200 text-2xl lg:text-4xl font-semibold text-center`}>Donde nos ubicamos</h2>
              <p className={`${text} transition-opacity duration-200 text-center text-lg lg:text-xl`}>Estamos ubicados a pasos del metro Plaza de Maipú, al lado del templo de Maipú.</p>
              <div className="w-full h-100">
                <iframe className={`${map} transition-opacity duration-200 rounded-xl`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.4301440241469!2d-70.76791723040972!3d-33.512247980165114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dd2a336e90cd%3A0xee5ef08870a3fb77!2sRepublica%201890%2C%209274519%20Maip%C3%BA%2C%20Regi%C3%B3n%20Metropolitana!5e1!3m2!1ses-419!2scl!4v1771123310073!5m2!1ses-419!2scl" style={{ width: '100%' }} width="2000" height="450" loading="lazy"></iframe>
              </div>
            </div>
  )
}