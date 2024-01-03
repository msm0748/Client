import { toy } from '@/data/dummy';
import ProductList from '../_component/ui/ProductList';

export default function ToyPage() {
  return <ProductList products={toy} />;
}
