import { Spinner } from "@/components/ui/Spinner"
import { Suspense } from "react"

export default async function Cotizaciones ({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  return (
    <div>
      <h1 className="text-2xl font-medium">Cotización</h1>
      <Suspense fallback={<div className="h-100 flex w-full">
                      <div className="w-fit h-fit m-auto">
                          <Spinner />
                      </div>
                   </div>}>
        {params.then(({ slug }) => (
          <Quotes slug={slug} />
        ))}
      </Suspense>
    </div>
  )
}

async function Quotes({ slug }: { slug: string }) {
  const res = await fetch(`/admin/cotizaciones/${slug}`)
  const post = await res.json()
 
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  )
}