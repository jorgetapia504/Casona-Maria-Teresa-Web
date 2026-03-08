"use client"
import Link from "next/link";
import ButtonLink from "./ButtonLink";
import { useState } from "react";
import Image from 'next/image'

export default function Header () {

  const [view, setView] = useState(false)
  const [menu, setMenu] = useState('-ml-80')

  return(
    <header className="w-full flex flex-col z-10 fixed border-neutral-200">
      <div className="flex bg-black">
        <div className="flex w-full max-w-7xl m-auto text-white px-2 py-1.5">
          <div className="flex gap-2 ml-auto">
            <Link href={""}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" width="25px" height="25px" viewBox="0 0 32 32" id="Camada_1" version="1.1" xmlSpace="preserve"><g><path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"/><path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8   c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"/><path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8   c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"/></g></svg></Link>
            <Link href={""}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" width="25px" height="25px" viewBox="0 0 32 32" id="Camada_1" version="1.1" xmlSpace="preserve"><style type="text/css"></style><path d="M12.6,16.1v11.6c0,0.2,0.1,0.3,0.3,0.3h4.6c0.2,0,0.3-0.1,0.3-0.3V15.9h3.4c0.2,0,0.3-0.1,0.3-0.3l0.3-3.6  c0-0.2-0.1-0.3-0.3-0.3h-3.7V9.2c0-0.6,0.5-1.1,1.2-1.1h2.6C21.9,8.1,22,8,22,7.8V4.3C22,4.1,21.9,4,21.7,4h-4.4  c-2.6,0-4.7,1.9-4.7,4.3v3.4h-2.3c-0.2,0-0.3,0.1-0.3,0.3v3.6c0,0.2,0.1,0.3,0.3,0.3h2.3V16.1z"/></svg></Link>
          </div>
        </div>
      </div>
      <div className="m-auto p-2 w-full border-b bg-white text-black border-neutral-200 hidden gap-4 justify-between md:flex">
        <div className="w-full max-w-7xl flex justify-between m-auto">
          <Link href='/' className="w-fit text-5xl font-bold"><Image src='/Logo.png' className="w-30" alt="Logo Casona Maria Teresa" width={500} height={300} /></Link>
          <nav className="flex gap-4 my-auto">
            <Link href='/matrimonios' className="my-auto">Matrimonios</Link>
            <Link href='/cumpleanos' className="my-auto">Cumpleaños</Link>
            <Link href='/empresas' className="my-auto">Empresas</Link>
            <Link href='/galeria' className="my-auto">Galeria</Link>
            <ButtonLink url={"/cotizar"} config="my-auto">Cotizar</ButtonLink>
          </nav>
        </div>
      </div>
      <div className="m-auto h-22 p-2 w-full border-b bg-white border-neutral-200 max-w-7xl flex gap-4 justify-between md:hidden relative">
        <button className="cursor-pointer" onClick={() => {
          if (menu === '-ml-80') {
            setView(true)
            setTimeout(() => {
              setMenu('')
            }, 10);
          } else {
            setMenu('-ml-80')
            setTimeout(() => {
              setView(false)
            }, 300);
          }
        }}>{menu === '-ml-80' ? <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> </g></svg> : <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path> </g></svg>}</button>
        <Link href='/' className="w-fit text-4xl font-bold absolute left-1/2 -translate-x-1/2"><Image src='/Logo.png' alt="Logo Casona Maria Teresa" width={500} height={300} className="w-30" /></Link>
        <ButtonLink url={"/cotizar"} config="h-fit my-auto">Cotizar</ButtonLink>
      </div>
      <div className={`${view ? 'flex' : 'hidden'}`}>
        <div className={`${menu} transition-all duration-400 min-w-80 w-80 border-b border-r p-3 border-neutral-200 bg-white h-[calc(100dvh-94px)] md:hidden`}>
          <nav className="flex flex-col gap-4 my-auto text-black">
            <Link href='/salon-eventos-santiago' onClick={() => {
              setMenu('-ml-80')
              setTimeout(() => {
                setView(false)
              }, 300);
            }} className="my-auto flex justify-between border-b border-neutral-200 pb-1"><p className="my-auto">Salon de eventos</p><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="#0F0F0F"></path> </g></svg></Link>
            <Link href='/matrimonios' onClick={() => {
              setMenu('-ml-80')
              setTimeout(() => {
                setView(false)
              }, 300);
            }} className="my-auto flex justify-between border-b border-neutral-200 pb-1"><p className="my-auto">Matrimonios</p><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="#0F0F0F"></path> </g></svg></Link>
            <Link href='/cumpleanos' onClick={() => {
              setMenu('-ml-80')
              setTimeout(() => {
                setView(false)
              }, 300);
            }} className="my-auto flex justify-between border-b border-neutral-200 pb-1"><p className="my-auto">Cumpleaños</p><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="#0F0F0F"></path> </g></svg></Link>
            <Link href='/empresas' onClick={() => {
              setMenu('-ml-80')
              setTimeout(() => {
                setView(false)
              }, 300);
            }} className="my-auto flex justify-between border-b border-neutral-200 pb-1"><p className="my-auto">Empresas</p><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="#0F0F0F"></path> </g></svg></Link>
            <Link href='/galeria' onClick={() => {
              setMenu('-ml-80')
              setTimeout(() => {
                setView(false)
              }, 300);
            }} className="my-auto flex justify-between border-b border-neutral-200 pb-1"><p className="my-auto">Galeria</p><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="#0F0F0F"></path> </g></svg></Link>
          </nav>
        </div>
        <button className="w-[calc(100dvh-320px)]" onClick={() => {
            setMenu('-ml-80')
            setTimeout(() => {
              setView(false)
            }, 300);
        }}></button>
      </div>
    </header>
  )
}