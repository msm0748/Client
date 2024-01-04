import { Product } from '@/types/Product';

interface Props {
  product: Product;
}

export default function Rating({ product }: Props) {
  return (
    <div className="mt-1 inline-flex items-center gap-2">
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
      <span className="text-xs text-slate-400">({product.reviewCount})</span>
    </div>
  );
}
