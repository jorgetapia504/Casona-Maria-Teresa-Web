export default function Button ({ children, config, click, type }: { children: React.ReactNode, config?: string, click?: any, type?: any }) {
  return (
    <button type={type ? type : 'button'} onClick={click} className={`${config} cursor-pointer bg-black px-8 py-2 w-fit rounded-md text-white transition-colors duration-200 hover:bg-neutral-800`}>{children}</button>
  )
}