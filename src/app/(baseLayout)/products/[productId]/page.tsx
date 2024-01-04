import Rating from '@/components/common/Rating';
import { allData } from '@/data/dummy/product';

import Image from 'next/image';

interface Props {
  params: {
    productId: string;
  };
}

export default function ProductDetailPage({ params }: Props) {
  const { productId } = params;
  const product = allData.find((product) => product.id === Number(productId));

  if (!product) return <div>해당 상품이 없습니다.</div>;
  return (
    <main className="container">
      <div className="flex">
        <div className="w-6/12">
          <div className="mr-14">
            <div className="relative w-full pt-[103%]">
              <Image
                fill
                priority
                sizes="(max-width: 480px) 480px, 600px"
                src={product.image}
                alt={product.name}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mt-2">
            <h2 className="text-2xl font-medium">{product.name}</h2>
            <div className="mt-1">
              <a href="#rating">
                <Rating product={product} />
              </a>
            </div>
            <div className="mt-2">
              <span className="text-3xl font-semibold">
                {product.price.toLocaleString('ko-KR')}
              </span>
              <span className="text-xl">원</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
