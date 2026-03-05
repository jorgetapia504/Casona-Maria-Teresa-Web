import Cotizar from "@/components/ui/Cotizar";

export default function Page () {
  return (
    <main className="flex px-2 py-8">
      <div className="m-auto w-full max-w-7xl flex flex-col gap-6">
        <h1 className="text-4xl font-semibold text-center">Cotiza tu evento con nosotros</h1>
        <Cotizar />
      </div>
    </main>
  )
}