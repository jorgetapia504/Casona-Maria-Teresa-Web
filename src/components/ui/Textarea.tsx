export default function Textarea ({ placeholder, config, change, value }: { placeholder?: string, config?: string, change?: any, value?: any }) {
  return (
    <textarea onChange={change} value={value} placeholder={placeholder} className={`${config} border border-neutral-400 p-1.5 rounded-md`} />
  )
}