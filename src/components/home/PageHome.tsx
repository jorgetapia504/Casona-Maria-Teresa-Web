import Link from "next/link";
import ButtonLink from "../ui/ButtonLink";
import Galery from "../ui/Galery";
import Cotizar from "../ui/Cotizar";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";
import Block5 from "./Block5";

export default function PageHome () {
  return (
    <div className="">
      <main className="flex flex-col bg-white text-black">
        <Block1 />
        <Block2 />
        <Block3 />
        <Galery />
        <Block4 />
        <Block5 />
      </main>
    </div>
  )
}