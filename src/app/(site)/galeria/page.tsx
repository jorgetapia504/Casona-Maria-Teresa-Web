import Page from "@/components/galeria/Page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria de imagenes y videos | Casona Maria Teresa",
};

export default function Galeria () {
  return (
    <main className="bg-white text-black"><Page /></main>
  )
}