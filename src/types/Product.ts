export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  sale?: string;
}

export interface ProductDetail {
  id: number;
  name: string;
  description: string;
  count: number;
  price: number;
  sale?: number;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
}
