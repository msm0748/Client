import { Product } from '@/types/Product';
import Image from 'next/image';
import Rating from './Rating';
import Link from 'next/link';
import calculateDiscountRate from '@/lib/calculateDiscountRate';

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  return (
    <Link key={product.id} href={`/products/${product.id}`} className="group">
      <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 xl:h-56 h-40">
        <Image
          width={500}
          height={500}
          priority
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-2 truncate">
        <span className="text-sm text-gray-700 ">{product.name}</span>
      </div>
      <p className="mt-1">
        {product.price !== product.sale && (
          <span className="font-medium mr-1 text-red-600">{calculateDiscountRate(product.price, product.sale)}%</span>
        )}
        <span className="font-medium text-gray-900">{product.sale.toLocaleString('ko-KR')}</span>
        <span className="text-sm ml-[2px]">원</span>
      </p>
      <Rating product={product} />
    </Link>
  );
}
