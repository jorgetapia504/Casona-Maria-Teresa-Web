import Block1 from "@/components/cumpleaños/Block1";
import Block2 from "@/components/cumpleaños/Block2";
import Block3 from "@/components/cumpleaños/Block3";
import Block4 from "@/components/cumpleaños/Block4";
import Block4Home from "@/components/home/Block4";
import Block5Home from "@/components/home/Block5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salón de Fiestas y Cumpleaños en Santiago | Casona Maria Teresa",
  description:
    "Salón para cumpleaños en Santiago y Maipú. Local para fiestas privadas y cumpleaños para adultos con espacio elegante y moderno.",
};

export default function SalonCumpleanos() {
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