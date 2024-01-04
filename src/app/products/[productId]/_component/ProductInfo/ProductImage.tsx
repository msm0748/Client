import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

export default function ProductImage({ src, alt }: Props) {
  return (
    <div className="relative w-full pt-[103%]">
      <Image fill priority sizes="(max-width: 480px) 480px, 600px" src={src} alt={alt} style={{ objectFit: 'cover' }} />
    </div>
  );
}
