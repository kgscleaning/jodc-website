import Link from 'next/link';

const variantStyles = {
  'solid': 'bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary',
  'solid-white': 'bg-white text-primary hover:bg-gray-100 focus-visible:outline-white',
  'outline': 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-primary'
};

export default function Button({
  variant = 'solid',
  className = '',
  href,
  children,
  ...props
}) {
  className = `${variantStyles[variant]} inline-flex items-center gap-2 justify-center rounded-md px-4 py-2 text-sm font-semibold outline-2 outline-offset-2 transition-all active:scale-95 ${className}`;

  return href ? (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  ) : (
    <button className={className} {...props}>
      {children}
    </button>
  );
}