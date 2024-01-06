import { allData } from '@/data/dummy/product';
import ProductInfo from './_component/ProductInfo';
import Tabs from './_component/common/Tabs';
import ProductDetail from './_component/ProductDetail';

interface Props {
  params: {
    productId: string;
  };
}

export default function ProductDetailPage({ params }: Props) {
  const { productId } = params;
  const product = allData.find(product => product.id === Number(productId));

  if (!product) return <div>해당 상품이 없습니다.</div>;
  return (
    <main className="container pb-20">
      <ProductInfo product={product} />
      <Tabs />
      <ProductDetail />
    </main>
  );
}
