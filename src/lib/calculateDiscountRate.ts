export default function calculateDiscountRate(price: number, sale: number) {
  return Math.trunc(((price - sale) / price) * 100);
}
