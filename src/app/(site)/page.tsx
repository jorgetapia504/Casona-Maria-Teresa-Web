import ButtonLink from "@/components/ui/ButtonLink";
import Cotizar from "@/components/ui/Cotizar";
import Galery from "@/components/ui/Galery";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Casona Maria Teresa | Espacio para Celebraciones en Santiago',
  description: '...',
}

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col">
        <div className="relative w-full h-100 lg:h-150 p-2 bg-cover bg-center flex" style={{ backgroundImage: 'url("/salon.jpg")' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="m-auto relative w-full max-w-7xl flex flex-col gap-6 text-white">
            <h1 className="text-4xl lg:text-6xl font-semibold text-center">Celebra Momentos Inolvidables en un Espacio Único en Maipú</h1>
            <p className="text-center text-md lg:text-xl">Un lugar elegante y completamente equipado para celebraciones privadas, matrimonios, cumpleaños, bautizos y eventos corporativos.</p>
            <ButtonLink url={"/cotizar"} config="m-auto">Cotizar evento</ButtonLink>
          </div>
        </div>
        <div className="w-full max-w-7xl m-auto px-2 py-20 text-center flex flex-col gap-6">
          <h2 className="text-2xl lg:text-4xl font-semibold">Un espacio ideal para cada tipo de celebración</h2>
          <div className="flex gap-4 m-auto flex-wrap justify-between">
            <Link href='/matrimonio' className="flex flex-col gap-2 m-auto transition-transform duration-200 hover:scale-105">
              <Image src={"/Matrimonio.jpg"} alt={""} width={500} height={500} className="w-72 h-72 object-cover rounded-lg" />
              <p className="text-lg">Matrimonios</p>
            </Link>
            <Link href='/cumpleanos' className="flex flex-col gap-2 m-auto transition-transform duration-200 hover:scale-105">
              <Image src={"/Cumpleaños.jpg"} alt={""} width={500} height={500} className="w-72 h-72 object-cover rounded-lg" />
              <p className="text-lg">Cumpleaños</p>
            </Link>
            <Link href='/empresa' className="flex flex-col gap-2 m-auto transition-transform duration-200 hover:scale-105">
              <Image src={"/Empresa.jpg"} alt={""} width={500} height={500} className="w-72 h-72 object-cover rounded-lg" />
              <p className="text-lg">Empresas</p>
            </Link>
          </div>
        </div>
        <Galery />
        <div className="flex flex-col gap-6 w-full max-w-7xl m-auto px-2 py-20">
          <h2 className="text-2xl lg:text-4xl font-semibold text-center">Donde nos ubicamos</h2>
          <div className="w-full h-100">
            <iframe className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.4301440241469!2d-70.76791723040972!3d-33.512247980165114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dd2a336e90cd%3A0xee5ef08870a3fb77!2sRepublica%201890%2C%209274519%20Maip%C3%BA%2C%20Regi%C3%B3n%20Metropolitana!5e1!3m2!1ses-419!2scl!4v1771123310073!5m2!1ses-419!2scl" style={{ width: '100%' }} width="2000" height="450" loading="lazy"></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full max-w-7xl m-auto px-2 py-20">
          <h2 className="text-2xl lg:text-4xl font-semibold text-center">Cotiza tu evento con nosotros</h2>
          <Cotizar />
        </div>
      </main>
    </div>
  );
}
