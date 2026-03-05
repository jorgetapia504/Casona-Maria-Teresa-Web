export default function Input ({ type, placeholder, config, change, value }: { type?: string, placeholder?: string, config?: string, change?: any, value?: any }) {
  return (
    <input type={type} placeholder={placeholder} onChange={change} value={value} className={`${config} border border-neutral-400 p-1.5 rounded-md`} />
  )
}