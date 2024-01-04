import { toy } from '@/data/dummy/product/toy';
import ProductList from '../_component/ui/ProductList';

export default function ToyPage() {
  return <ProductList products={toy} />;
}
