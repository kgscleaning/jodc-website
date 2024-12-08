import Image from 'next/image';

export default function ServiceGallery({ images }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <Image
            src={image.src}
            alt={image.alt || 'Service image'}
            fill
            className="object-cover"
          />
          {image.caption && (
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
              <p className="p-4 text-white text-sm">
                {image.caption}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}