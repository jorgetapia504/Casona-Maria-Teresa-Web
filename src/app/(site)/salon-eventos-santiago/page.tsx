import ButtonLink from "@/components/ui/ButtonLink";
import Cotizar from "@/components/ui/Cotizar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Centro y Salón de Eventos en Santiago | Casona Maria Teresa",
  description:
    "Salón de eventos en Santiago para matrimonios, fiestas privadas y eventos corporativos. Centro de eventos en Maipú elegante, moderno y completamente equipado.",
};

export default function SalonEventosSantiago() {
  return (
    <main className="flex flex-col">

      {/* HERO SEO */}
      <section className="relative w-full h-100 lg:h-150 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/salon.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl px-4 text-center text-white flex flex-col gap-6">
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight">
            Centro y Salón de Eventos en Santiago para Fiestas y Celebraciones
          </h1>
          <p className="text-md lg:text-xl">
            Espacio elegante y privado en Maipú ideal para matrimonios,
            cumpleaños, galas y eventos corporativos en Santiago.
          </p>
          <ButtonLink
            url="/cotizar"
            config="m-auto"
          >
            Cotizar Salón de Eventos
          </ButtonLink>
        </div>
      </section>

      {/* DESCRIPCIÓN PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-8 text-center">
        <h2 className="text-2xl lg:text-4xl font-semibold">
          Salón de Eventos en Santiago para Todo Tipo de Celebraciones
        </h2>

        <p className="text-md lg:text-xl max-w-4xl mx-auto">
          Nuestro centro de eventos en Santiago está diseñado para quienes
          buscan un espacio moderno, amplio y completamente equipado para
          celebrar momentos especiales. Si necesitas un salón de fiestas en
          Santiago o un local para eventos privados, ofrecemos una alternativa
          elegante y profesional en la comuna de Maipú.
        </p>

        <p className="text-md lg:text-xl max-w-4xl mx-auto">
          Somos una excelente opción para matrimonios, cumpleaños para adultos,
          eventos empresariales, banquetes, galas y celebraciones familiares.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
          <h2 className="text-2xl lg:text-4xl font-semibold text-center">
            ¿Por qué elegir nuestro Centro de Eventos en Santiago?
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-md lg:text-xl">
            <li>✔ Ubicación estratégica en Maipú, Santiago</li>
            <li>✔ Amplio salón para fiestas y celebraciones</li>
            <li>✔ Espacio privado y exclusivo por evento</li>
            <li>✔ Capacidad adaptable según tipo de celebración</li>
            <li>✔ Opción de salón con catering incluido</li>
            <li>✔ Infraestructura para música y pista de baile</li>
            <li>✔ Ideal para fiestas nocturnas y eventos formales</li>
            <li>✔ Excelente alternativa entre salones para eventos en Santiago</li>
          </ul>
        </div>
      </section>

      {/* TIPOS DE EVENTOS */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-12">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">
          Centro de Eventos en Santiago para:
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <article className="flex flex-col gap-4 text-center">
            <Image src="/Matrimonio.jpg" alt="Salón de eventos para matrimonios en Santiago" width={500} height={500} className="rounded-lg object-cover h-64 w-full" />
            <h3 className="text-lg lg:text-2xl font-medium">Matrimonios</h3>
            <p className="text-md lg:text-xl">Salón elegante para bodas y celebraciones románticas en Santiago.</p>
          </article>

          <article className="flex flex-col gap-4 text-center">
            <Image src="/Cumpleaños.jpg" alt="Salón de fiestas para adultos en Santiago" width={500} height={500} className="rounded-lg object-cover h-64 w-full" />
            <h3 className="text-lg lg:text-2xl font-medium">Cumpleaños y Fiestas</h3>
            <p className="text-md lg:text-xl">Local para fiestas privadas y celebraciones para adultos.</p>
          </article>

          <article className="flex flex-col gap-4 text-center">
            <Image src="/Empresa.jpg" alt="Sala de eventos corporativos en Santiago" width={500} height={500} className="rounded-lg object-cover h-64 w-full" />
            <h3 className="text-lg lg:text-2xl font-medium">Eventos Corporativos</h3>
            <p className="text-md lg:text-xl">Sala de eventos en Santiago ideal para empresas y reuniones.</p>
          </article>

          <article className="flex flex-col gap-4 text-center">
            <Image src="/Evento 1.jpg" alt="Salón de gala y banquetes en Santiago" width={500} height={500} className="rounded-lg object-cover h-64 w-full" />
            <h3 className="text-lg lg:text-2xl font-medium">Galas y Banquetes</h3>
            <p className="text-md lg:text-xl">Salón de gala y salón de banquetes para celebraciones formales.</p>
          </article>

        </div>
      </section>

      {/* UBICACIÓN SEO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8">
          <h2 className="text-2xl lg:text-4xl font-semibold text-center">
            Centro de Eventos en Santiago – Ubicación en Maipú
          </h2>

          <p className="text-md lg:text-xl text-center max-w-4xl mx-auto">
            Nuestro salón de eventos se encuentra en la comuna de Maipú,
            Región Metropolitana, lo que nos convierte en una excelente opción
            para quienes buscan un centro de eventos cerca de Santiago o un
            salón de fiestas en Santiago Chile con buena conectividad.
          </p>

          <iframe
            className="rounded-xl w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.4301440241469!2d-70.76791723040972!3d-33.512247980165114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dd2a336e90cd%3A0xee5ef08870a3fb77!2sRepublica%201890%2C%209274519%20Maip%C3%BA%2C%20Regi%C3%B3n%20Metropolitana!5e1!3m2!1ses-419!2scl!4v1771123310073!5m2!1ses-419!2scl"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-10">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">
          Preguntas Frecuentes sobre Salones de Eventos en Santiago
        </h2>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-lg lg:text-2xl font-semibold">¿Cuál es la capacidad del salón?</h3>
            <p className="text-md lg:text-xl">
              Nuestro salón de eventos en Santiago puede adaptarse según el
              tipo de celebración y número de invitados.
            </p>
          </div>

          <div>
            <h3 className="text-lg lg:text-2xl font-semibold">¿Incluye catering?</h3>
            <p className="text-md lg:text-xl">
              Ofrecemos opción de salón con catering incluido o arriendo del
              local para eventos sin servicios adicionales.
            </p>
          </div>

          <div>
            <h3 className="text-lg lg:text-2xl font-semibold">¿Se puede arrendar para fiestas privadas?</h3>
            <p className="text-md lg:text-xl">
              Sí, somos una excelente alternativa como local privado para
              fiestas y celebraciones en Santiago.
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