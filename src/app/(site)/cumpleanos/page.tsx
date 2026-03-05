import ButtonLink from "@/components/ui/ButtonLink";
import Cotizar from "@/components/ui/Cotizar";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Salón de Fiestas y Cumpleaños en Santiago | Casona Maria Teresa",
  description:
    "Salón para cumpleaños en Santiago y Maipú. Local para fiestas privadas y cumpleaños para adultos con espacio elegante y moderno.",
};

export default function SalonCumpleanos() {
  return (
    <main className="flex flex-col">

      {/* HERO SEO CUMPLEAÑOS */}
      <section
        className="relative w-full h-100 lg:h-150 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Cumpleaños.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl px-4 text-center text-white flex flex-col gap-6">
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight">
            Salón de Fiestas y Cumpleaños en Santiago
          </h1>
          <p className="text-md lg:text-xl md:text-xl">
            Local elegante en Maipú ideal para cumpleaños para adultos,
            fiestas privadas y celebraciones especiales en Santiago.
          </p>
          <ButtonLink
            url="/cotizar"
            config="m-auto"
          >
            Cotizar Salón para Cumpleaños
          </ButtonLink>
        </div>
      </section>

      {/* INTRO SEO */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-8 text-center">
        <h2 className="text-2xl lg:text-4xl font-semibold">
          Salón para Cumpleaños en Santiago y Maipú
        </h2>

        <p className="text-md lg:text-xl max-w-4xl mx-auto">
          Si estás buscando un salón de cumpleaños en Santiago o un local
          para fiestas privadas en Maipú, nuestro centro de eventos es la
          alternativa ideal para celebrar en un ambiente moderno, elegante y seguro.
        </p>

        <p className="text-md lg:text-xl max-w-4xl mx-auto">
          Somos una excelente opción si necesitas un salón de fiestas para adultos,
          un local para celebrar cumpleaños o un espacio privado para organizar
          una fiesta inolvidable en Santiago.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
          <h2 className="text-2xl lg:text-4xl font-semibold text-center">
            ¿Por qué elegir nuestro Salón de Fiestas en Santiago?
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-md lg:text-xl">
            <li>✔ Salón privado exclusivo por evento</li>
            <li>✔ Espacio ideal para cumpleaños para adultos</li>
            <li>✔ Ambiente moderno y elegante</li>
            <li>✔ Pista de baile y espacio para DJ</li>
            <li>✔ Capacidad adaptable según invitados</li>
            <li>✔ Ubicación estratégica en Maipú</li>
            <li>✔ Alternativa destacada entre salones de fiestas en Santiago</li>
            <li>✔ Opción de catering o arriendo solo del local</li>
          </ul>
        </div>
      </section>

      {/* TIPOS DE CUMPLEAÑOS */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-12">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">
          Nuestro Local para Cumpleaños es Ideal Para:
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <article className="flex flex-col gap-4 text-center">
            <Image
              src="/Cumpleaños.jpg"
              alt="Salón para cumpleaños para adultos en Santiago"
              width={600}
              height={600}
              className="rounded-lg object-cover h-80 w-full"
            />
            <h3 className="text-lg lg:text-2xl font-medium">Cumpleaños para Adultos</h3>
            <p className="text-md lg:text-xl">
              Espacio elegante ideal para celebraciones nocturnas y fiestas privadas.
            </p>
          </article>

          <article className="flex flex-col gap-4 text-center">
            <Image
              src="/Evento 4.jpg"
              alt="Local para fiesta privada en Santiago"
              width={600}
              height={600}
              className="rounded-lg object-cover h-80 w-full"
            />
            <h3 className="text-lg lg:text-2xl font-medium">Fiestas Privadas</h3>
            <p className="text-md lg:text-xl">
              Local privado para celebrar con amigos y familia en un ambiente exclusivo.
            </p>
          </article>

          <article className="flex flex-col gap-4 text-center">
            <Image
              src="/Evento 5.jpg"
              alt="Salón de fiestas moderno en Maipú"
              width={600}
              height={600}
              className="rounded-lg object-cover h-80 w-full"
            />
            <h3 className="text-lg lg:text-2xl font-medium">Celebraciones Especiales</h3>
            <p className="text-md lg:text-xl">
              Espacio versátil para aniversarios, fiestas temáticas y eventos sociales.
            </p>
          </article>

        </div>
      </section>

      {/* GEOSEO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Salón de Cumpleaños en Maipú, Santiago
          </h2>

          <p className="text-md lg:text-xl max-w-4xl mx-auto">
            Nuestro salón de fiestas se encuentra en Maipú, dentro de la
            Región Metropolitana, lo que nos convierte en una excelente
            alternativa para quienes buscan un local para cumpleaños en Santiago
            con buena conectividad.
          </p>

          <iframe
            className="rounded-xl w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.4301440241469!2d-70.76791723040972!3d-33.512247980165114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dd2a336e90cd%3A0xee5ef08870a3fb77!2sRepublica%201890%2C%209274519%20Maip%C3%BA%2C%20Regi%C3%B3n%20Metropolitana!5e1!3m2!1ses-419!2scl!4v1771123310073!5m2!1ses-419!2scl"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-10">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">
          Preguntas Frecuentes sobre Salones para Cumpleaños en Santiago
        </h2>

        <div className="flex flex-col gap-6 text-md lg:text-xl">
          <div>
            <h3 className="text-lg lg:text-2xl font-semibold">¿Es solo para adultos?</h3>
            <p>
              Nuestro salón es ideal para cumpleaños para adultos y fiestas privadas,
              aunque puede adaptarse a distintos tipos de celebraciones.
            </p>
          </div>

          <div>
            <h3 className="text-lg lg:text-2xl font-semibold">¿Se puede arrendar solo el local?</h3>
            <p>
              Sí, ofrecemos arriendo del local para cumpleaños o la opción con catering incluido.
            </p>
          </div>

          <div>
            <h3 className="text-lg lg:text-2xl font-semibold">¿Se puede usar música y DJ?</h3>
            <p>
              Sí, el salón cuenta con espacio ideal para pista de baile y música.
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