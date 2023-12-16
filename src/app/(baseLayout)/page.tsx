import Card from '@/components/common/Card';

const products = [
  {
    id: 1,
    title: '[당일발송][크리스마스]감성 불멍 벽난로 무드등+솔방울',
    href: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    price: 5000,
    rating: 80,
    reviewCount: 20,
  },
  {
    id: 2,
    title: '얌얌즈 PVC 파우치( 아미파 amifa)  비닐케이스',
    href: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    price: 5000,
    rating: 70,
    reviewCount: 30,
  },
  {
    id: 3,
    title: '산리오 캐릭터 아크릴 미니 챰 랜덤  헬로키티 한교동 케로피',
    href: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    price: 5000,
    rating: 75,
    reviewCount: 40,
  },
  {
    id: 4,
    title: '마이멜로디 지퍼백 30장 산리오 보관 케이스',
    href: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    price: 5000,
    rating: 68,
    reviewCount: 2,
  },
  {
    id: 5,
    title: '산리오 지퍼백 B6사이즈 8장 마스크 보관 케이스',
    href: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    price: 5000,
    rating: 90,
    reviewCount: 27,
  },
];

export default function Home() {
  return (
    <main className="container">
      <Card products={products} />
    </main>
  );
}
