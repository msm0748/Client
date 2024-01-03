export interface Product {
  id: number;
  image: string;
  href: string;
  price: number;
  title: string;
  rating: number;
  reviewCount: number;
  sale?: string;
}
