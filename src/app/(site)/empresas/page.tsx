import ButtonLink from "@/components/ui/ButtonLink";
import Cotizar from "@/components/ui/Cotizar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Centro y Salón de Eventos Corporativos en Santiago | Casona Maria Teresa",
  description:
    "Centro de eventos corporativos en Santiago y Maipú. Salón para eventos empresariales, reuniones, lanzamientos y celebraciones de empresa.",
};

export default function EventosCorporativos() {
  return (
    <main className="flex flex-col">

      {/* HERO CORPORATIVO */}
      <section
        className="relative w-full h-100 lg:h-150 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Empresa.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl px-4 text-center text-white flex flex-col gap-6">
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight">
            Centro y Salón de Eventos Corporativos en Santiago
          </h1>
          <p className="text-md lg:text-xl">
            Espacio profesional en Maipú ideal para reuniones, lanzamientos,
            capacitaciones y celebraciones empresariales.
          </p>
          <ButtonLink
            url="/cotizar"
            config="m-auto"
          >
            Cotizar Evento Corporativo
          </ButtonLink>
        </div>
      </section>

      {/* INTRO SEO */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-8 text-center">
        <h2 className="text-2xl lg:text-4xl font-semibold">
          Centro de Eventos para Empresas en Santiago y Maipú
        </h2>

        <p className="text-md lg:text-xl max-w-4xl mx-auto">
          Si estás buscando un centro de eventos corporativos en Santiago,
          nuestro salón para eventos empresariales ofrece el espacio ideal
          para organizar reuniones, capacitaciones, lanzamientos de productos,
          aniversarios de empresa y celebraciones internas.
        </p>

        <p className="text-md lg:text-xl max-w-4xl mx-auto">
          Somos una excelente alternativa entre los lugares para eventos
          corporativos en Santiago, con infraestructura profesional,
          ubicación estratégica y un ambiente elegante y funcional.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
          <h2 className="text-2xl lg:text-4xl font-semibold text-center">
            ¿Por qué elegir nuestro Salón para Eventos Empresariales?
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-md lg:text-xl">
            <li>✔ Espacio privado exclusivo para cada empresa</li>
            <li>✔ Ambiente profesional y elegante</li>
            <li>✔ Ideal para reuniones y capacitaciones</li>
            <li>✔ Capacidad adaptable según asistentes</li>
            <li>✔ Espacio para presentaciones y proyecciones</li>
            <li>✔ Opción de catering corporativo</li>
            <li>✔ Excelente ubicación en Maipú, Santiago</li>
            <li>✔ Alternativa destacada entre salones para eventos corporativos</li>
          </ul>
        </div>
      </section>

      {/* TIPOS DE EVENTOS CORPORATIVOS */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-12">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">
          Nuestro Centro de Eventos Corporativos es Ideal Para:
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <article className="flex flex-col gap-4 text-center">
            <Image
              src="/Empresa.jpg"
              alt="Centro de eventos para empresas en Santiago"
              width={600}
              height={600}
              className="rounded-lg object-cover h-80 w-full"
            />
            <h3 className="text-lg lg:text-2xl font-medium">Reuniones y Capacitaciones</h3>
            <p className="text-md lg:text-xl">
              Espacio cómodo y profesional para reuniones de trabajo y formaciones internas.
            </p>
          </article>

          <article className="flex flex-col gap-4 text-center">
            <Image
              src="/Evento 1.jpg"
              alt="Lugar para eventos empresariales en Santiago"
              width={600}
              height={600}
              className="rounded-lg object-cover h-80 w-full"
            />
            <h3 className="text-lg lg:text-2xl font-medium">Lanzamientos de Productos</h3>
            <p className="text-md lg:text-xl">
              Salón ideal para presentaciones corporativas y eventos de marca.
            </p>
          </article>

          <article className="flex flex-col gap-4 text-center">
            <Image
              src="/Evento 6.jpg"
              alt="Salón para eventos corporativos en Maipú"
              width={600}
              height={600}
              className="rounded-lg object-cover h-80 w-full"
            />
            <h3 className="text-lg lg:text-2xl font-medium">Celebraciones Empresariales</h3>
            <p className="text-md lg:text-xl">
              Local para eventos corporativos como aniversarios y fiestas de empresa.
            </p>
          </article>

        </div>
      </section>

      {/* GEOSEO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Centro de Eventos Corporativos en Maipú, Santiago
          </h2>

          <p className="text-md lg:text-xl max-w-4xl mx-auto">
            Nuestro local para eventos corporativos está ubicado en Maipú,
            dentro de la Región Metropolitana, convirtiéndose en una excelente
            alternativa entre los lugares para eventos empresariales en Santiago.
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
          Preguntas Frecuentes sobre Eventos Corporativos en Santiago
        </h2>

        <div className="flex flex-col gap-6 text-md lg:text-xl">
          <div>
            <h3 className="text-lg lg:text-2xl font-semibold">¿El salón incluye equipamiento audiovisual?</h3>
            <p>
              El espacio puede adaptarse para presentaciones, proyecciones y reuniones empresariales.
            </p>
          </div>

          <div>
            <h3 className="text-lg lg:text-2xl font-semibold">¿Se puede contratar catering corporativo?</h3>
            <p>
              Sí, ofrecemos opción de catering o arriendo del salón para eventos empresariales.
            </p>
          </div>

          <div>
            <h3 className="text-lg lg:text-2xl font-semibold">¿Es exclusivo por empresa?</h3>
            <p>
              Sí, cada evento corporativo se realiza de manera privada.
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