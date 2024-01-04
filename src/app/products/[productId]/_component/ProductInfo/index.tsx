import { Product } from '@/types/Product';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import PurchaseInfo from './PurchaseInfo';

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  return (
    <div className="md:flex">
      <div className="md:w-6/12">
        <div className="md:mr-14">
          <ProductImage src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="md:flex-1 md:mt-0 mt-5">
        <div className="mt-2">
          <ProductDetails product={product} />
        </div>
        <div className="mt-4">
          <PurchaseInfo product={product} />
        </div>
      </div>
    </div>
  );
}
