interface ButtonIconProps {
  name: string
  className?: string
}

export default function ButtonIcon ({ name, className }: ButtonIconProps) {
  try {
    const ImportedIcon = require(`@/assets/svg/icons/${name}.svg`).default
    return (
      <ImportedIcon className={className} />
    )
  } catch (error) {
    console.error(`Icon '${name}' not found.`);
    return null;
  }
}
