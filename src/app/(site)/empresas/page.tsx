import Block1 from "@/components/empresas/Block1";
import Block2 from "@/components/empresas/Block2";
import Block3 from "@/components/empresas/Block3";
import Block4 from "@/components/empresas/Block4";
import Block4Home from "@/components/home/Block4";
import Block5Home from "@/components/home/Block5";
import Reviews from "@/components/home/Reviews";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Centro y Salón de Eventos Corporativos en Santiago | Casona Maria Teresa",
  description:
    "Centro de eventos corporativos en Santiago y Maipú. Salón para eventos empresariales, reuniones, lanzamientos y celebraciones de empresa.",
};

export default function EventosCorporativos() {
  return (
    <main className="flex flex-col bg-white text-black">
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block4Home />
      <Reviews />
      <Block5Home />
    </main>
  );
}