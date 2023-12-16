import { Product } from '@/types/product';
import Image from 'next/image';

interface Props {
  products: Product[];
}

export default function Card({ products }: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
      {products.map((product) => (
        <a key={product.id} href={product.href} className="group">
          <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image
              width={500}
              height={500}
              // loading="lazy"
              priority
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div className="mt-2 truncate">
            <span className="text-sm text-gray-700 ">{product.title}</span>
          </div>
          <p className="mt-1">
            <span className="font-medium text-gray-900">
              {product.price.toLocaleString('ko-KR')}
            </span>
            <span className="text-sm ml-[2px]">원</span>
          </p>
          <div className="mt-1 flex items-center gap-2">
            <span
              style={{
                backgroundImage: `url('/rating.png')`,
                backgroundSize: '70px',
              }}
              className="bg-no-repeat inline-block w-[70px] h-4 relative"
            >
              <span
                style={{
                  backgroundImage: `url('/rating.png')`,
                  backgroundSize: '70px',
                  backgroundPositionY: '-17px',
                  width: `${product.rating}%`,
                }}
                className={`bg-no-repeat inline-block h-4 absolute`}
              ></span>
            </span>
            <span className="text-xs text-slate-400">
              ({product.reviewCount})
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
