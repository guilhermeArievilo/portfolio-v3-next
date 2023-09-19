interface ButtonLabelProps {
  label: string,
  className?:string
}

export default function ButtonLabel ({ label, className }: ButtonLabelProps) {
  return (
    <span className={className}>{ label }</span>
  )
}
