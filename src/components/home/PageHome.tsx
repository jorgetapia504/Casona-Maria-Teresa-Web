import Galery from "../ui/Galery";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";
import Block5 from "./Block5";
import Block6 from "./Block6";
import Reviews from "./Reviews";

export default function PageHome () {
  return (
    <div className="">
      <main className="flex flex-col bg-white text-black">
        <Block1 />
        <Block2 />
        <Block3 />
        <Block6 />
        <Galery />
        <Block4 />
        <Reviews />
        <Block5 />
      </main>
    </div>
  )
}