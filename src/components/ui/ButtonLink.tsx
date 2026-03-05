import Link from "next/link";

export default function ButtonLink ({ children, url, config, style }: { children: React.ReactNode, url: string, config?: string, style?: string }) {
  return (
    <Link href={url} className={`${config} ${style ? style === 'secondary' ? 'bg-transparent outline hover:bg-black/10' : 'bg-black text-white hover:bg-neutral-800' : 'bg-black text-white hover:bg-neutral-800'} px-8 py-2 w-fit rounded-md transition-colors duration-200`}>{children}</Link>
  )
}