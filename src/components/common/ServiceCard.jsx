import Image from 'next/image';
import Link from 'next/link';

export default function ServiceCard({ title, description, href, icon, imageSrc }) {
  return (
    <Link 
      href={href}
      className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-center gap-x-2">
          <div className="rounded-lg bg-white/10 p-2 backdrop-blur-sm">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-gray-100 line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}