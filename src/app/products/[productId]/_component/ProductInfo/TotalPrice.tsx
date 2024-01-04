interface Props {
  sale: number;
  count: number;
}

export default function TotalPrice({ sale, count }: Props) {
  return (
    <div className="flex justify-between items-end">
      <span className="text-lg">총 상품 금액</span>
      <div className="text-orange-700">
        <span className="font-bold text-3xl">
          {(sale * count >= 50000 ? sale * count : sale * count + 3500).toLocaleString('ko-KR')}
        </span>
        <span className="text-xl">원</span>
      </div>
    </div>
  );
}
