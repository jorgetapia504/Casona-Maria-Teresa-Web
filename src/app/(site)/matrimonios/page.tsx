import Block1 from "@/components/matrimonios/Block1";
import Block2 from "@/components/matrimonios/Block2";
import Block3 from "@/components/matrimonios/Block3";
import Block4 from "@/components/matrimonios/Block4";
import Block4Home from '@/components/home/Block4'
import Cotizar from "@/components/ui/Cotizar";
import { Metadata } from "next";
import Block5Home from "@/components/home/Block5";

export const metadata: Metadata = {
  title: "Centro y Salón de Eventos para Matrimonios en Santiago | Casona Maria Teresa",
  description:
    "Centro de eventos para matrimonios en Santiago y Maipú. Salón de bodas elegante, moderno y privado para celebrar tu matrimonio soñado.",
};

export default function SalonMatrimonios() {
  return (
    <main className="flex flex-col bg-white text-black">
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block4Home />
      <Block5Home />
    </main>
  );
}