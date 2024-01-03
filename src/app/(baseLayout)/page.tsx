import { home } from '@/data/dummy';
import ProductList from './_component/ui/ProductList';

export default function Home() {
  return <ProductList products={home} />;
}
