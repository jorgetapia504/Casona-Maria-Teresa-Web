export default function Select ({ children, config, change, value }: { children: React.ReactNode, config?: string, change?: any, value?: any }) {
  return (
    <select onChange={change} value={value} className={`${config} border border-neutral-400 p-1.5 rounded-md`}>
      {children}
    </select>
  )
}