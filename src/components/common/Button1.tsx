const variantStyles = {
  primary: {
    default: 'bg-conic-red-30 text-white',
    hover: 'bg-conic-red-30 hover:bg-conic-red-40 text-white',
    click: 'bg-conic-red-30 active:bg-conic-red-50 text-white',
    disabled: 'bg-gray-20 text-gray-40 cursor-not-allowed',
  },
  secondary: {
    default: 'bg-conic-orange-30 text-white',
    hover: 'bg-conic-orange-30 hover:bg-conic-orange-40 text-white',
    click: 'bg-conic-orange-30 active:bg-conic-orange-50 text-white',
    disabled: 'bg-gray-20 text-gray-40 cursor-not-allowed',
  },
  outline: {
    default: 'bg-white border border-gray-20 text-gray-50',
    hover: 'bg-white border border-gray-20 hover:border-gray-40 text-gray-50',
    click: 'bg-white border border-gray-50 hover:border-gray-50 text-gray-50',
    disabled: 'bg-white border border-gray-20 text-gray-30 cursor-not-allowed',
  },
  outline2: {
    default: 'bg-white border border-gray-20 text-gray-50',
    hover: 'bg-white border-conic-orange-20 hover:border-conic-orange-20 text-gray-50',
    click: 'bg-conic-orange-10 border border-conic-orange-30 text-conic-orange-30',
    disabled: 'bg-white border border-gray-20 text-gray-30 cursor-not-allowed',
  },
  ghost: {
    default: 'bg-transparent text-gray-50',
    hover: 'hover:bg-gray-20 text-gray-50',
    click: 'active:bg-gray-40 text-gray-50',
    disabled: 'bg-transparent text-gray-30 cursor-not-allowed',
  },
}
const sizeStyles = {
  lg: 'button-lg p-2xs',
  md: 'button-lg py-3xs px-2xs',
  sm: 'button-sm py-3xs px-2xs',
}

export interface Button1Props {
  type?: 'primary' | 'secondary' | 'outline' | 'outline2' | 'ghost'
  status?: 'default' | 'hover' | 'click' | 'disabled'
  size?: 'lg' | 'md' | 'sm'
  label: string
}

const Button1 = ({ type = 'outline2', status = 'default', size = 'md', label }: Button1Props) => {
  const base = 'rounded '
  const variantClass = variantStyles[type][status]
  const sizeClass = sizeStyles[size]
  const className = [base, variantClass, sizeClass].join(' ')

  return <button className={className}>{label}</button>
}

export default Button1
