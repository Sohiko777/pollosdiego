const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-bold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

const variants = {
  // Rojo sólido (acción principal)
  primary: 'bg-brand text-white hover:bg-brand-dark',
  // Oscuro con borde rojo (sobre fondos negros)
  dark: 'border border-brand/70 bg-white/5 text-white hover:bg-white/10',
  // Contorno rojo (sobre fondos claros)
  outline: 'border border-brand bg-transparent text-brand hover:bg-brand hover:text-white',
}

/** Botón / enlace con estilos de marca. Usa `as="a"` para renderizar un enlace. */
export default function Button({ as: Tag = 'button', variant = 'primary', className = '', children, ...props }) {
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
