import ButtonLink from "@/components/ui/ButtonLink";
import Cotizar from "@/components/ui/Cotizar";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Centro y Salón de Eventos para Matrimonios en Santiago | Casona Maria Teresa",
  description:
    "Centro de eventos para matrimonios en Santiago y Maipú. Salón de bodas elegante, moderno y privado para celebrar tu matrimonio soñado.",
};

export default function SalonMatrimonios() {
  return (
    <main className="flex flex-col">

      {/* HERO SEO MATRIMONIOS */}
      <section
        className="relative w-full h-100 lg:h-150 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Matrimonio.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl px-4 text-center text-white flex flex-col gap-6">
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight">
            Centro y Salón de Eventos para Matrimonios en Santiago
          </h1>
          <p className="text-md lg:text-xl">
            Espacio elegante en Maipú ideal para bodas, casamientos y celebraciones románticas inolvidables.
          </p>
          <ButtonLink
            url="/cotizar"
            config="m-auto"
          >
            Cotizar Salón para Matrimonio
          </ButtonLink>
        </div>
      </section>

      {/* INTRO SEO */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-8 text-center">
        <h2 className="text-2xl lg:text-4xl font-semibold">
          Salón de Eventos para Matrimonios en Santiago y Maipú
        </h2>

        <p className="text-md lg:text-xl max-w-4xl mx-auto">
          Si estás buscando un centro de eventos para matrimonios en Santiago,
          nuestro salón de bodas en Maipú es la opción ideal para celebrar uno de los días más importantes de tu vida.
          Contamos con un espacio elegante, privado y adaptable a distintos estilos de decoración.
        </p>

        <p className="text-md lg:text-xl max-w-4xl mx-auto">
          Somos una excelente alternativa si buscas salones para matrimonios,
          centro de bodas en Santiago o un salón decorado para boda con ambiente romántico y moderno.
        </p>
      </section>

      {/* BENEFICIOS MATRIMONIOS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
          <h2 className="text-2xl lg:text-4xl font-semibold text-center">
            ¿Por qué elegir nuestro Centro de Eventos para tu Matrimonio?
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-md lg:text-xl">
            <li>✔ Salón elegante ideal para bodas y casamientos</li>
            <li>✔ Espacio privado exclusivo por evento</li>
            <li>✔ Ambiente romántico adaptable a tu estilo</li>
            <li>✔ Capacidad flexible según número de invitados</li>
            <li>✔ Opción de catering para matrimonios</li>
            <li>✔ Espacio para pista de baile y música</li>
            <li>✔ Excelente ubicación en Maipú, Santiago</li>
            <li>✔ Alternativa destacada entre salones de boda en Santiago</li>
          </ul>
        </div>
      </section>

      {/* GALERÍA MATRIMONIOS */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-12">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">
          Nuestro Salón de Bodas en Santiago
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Image
            src="/Matrimonio.jpg"
            alt="Salón de eventos para matrimonios en Santiago"
            width={600}
            height={600}
            className="rounded-lg object-cover h-80 w-full"
          />
          <Image
            src="/Evento 2.jpg"
            alt="Salón decorado para boda en Maipú"
            width={600}
            height={600}
            className="rounded-lg object-cover h-80 w-full"
          />
          <Image
            src="/Evento 3.jpg"
            alt="Centro de bodas en Santiago elegante"
            width={600}
            height={600}
            className="rounded-lg object-cover h-80 w-full"
          />
        </div>
      </section>

      {/* UBICACIÓN GEOSEO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Centro de Eventos para Matrimonios en Maipú
          </h2>

          <p className="text-md lg:text-xl max-w-4xl mx-auto">
            Nuestro centro de eventos para matrimonios en Maipú es ideal para
            parejas que buscan un salón de bodas en Santiago con excelente conectividad
            y ubicación estratégica dentro de la Región Metropolitana.
          </p>

          <iframe
            className="rounded-xl w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.4301440241469!2d-70.76791723040972!3d-33.512247980165114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dd2a336e90cd%3A0xee5ef08870a3fb77!2sRepublica%201890%2C%209274519%20Maip%C3%BA%2C%20Regi%C3%B3n%20Metropolitana!5e1!3m2!1ses-419!2scl!4v1771123310073!5m2!1ses-419!2scl"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FAQ MATRIMONIOS */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-10">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">
          Preguntas Frecuentes sobre Salones para Matrimonios en Santiago
        </h2>

        <div className="flex flex-col gap-6 text-md lg:text-xl">
          <div>
            <h3 className="text-lg lg:text-2xl font-semibold">¿Cuál es la capacidad del salón?</h3>
            <p>
              Nuestro salón de eventos para matrimonio puede adaptarse según el número de invitados y tipo de celebración.
            </p>
          </div>

          <div>
            <h3 className="text-lg lg:text-2xl font-semibold">¿Incluye decoración?</h3>
            <p>
              Ofrecemos un salón adaptable a distintos estilos. Puedes personalizar la decoración según tu matrimonio.
            </p>
          </div>

          <div>
            <h3 className="text-lg lg:text-2xl font-semibold">¿Es exclusivo para bodas?</h3>
            <p>
              Sí, el espacio se reserva de manera privada para cada matrimonio o casamiento.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-6 w-full max-w-7xl m-auto px-2 py-20">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">Cotiza tu evento con nosotros</h2>
        <Cotizar />
      </div>

    </main>
  );
}