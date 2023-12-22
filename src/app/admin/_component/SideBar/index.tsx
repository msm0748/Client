'use client';
import Link from 'next/link';
import Item from './Item';
import { BsGrid } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { AiOutlineUser } from 'react-icons/ai';
import { TfiStatsUp } from 'react-icons/tfi';

export default function SideBar() {
  return (
    <div className="fixed z-50 left-0 top-0 bottom-0 w-56 shadow-[0_8px_12px_0_rgba(0,0,0,0.1)]">
      <div>
        <div>
          <h1 className="p-5 text-xl font-bold">
            <Link href={'/admin'}>koharu</Link>
          </h1>
        </div>
        <div>
          <Item icon={<BsGrid />} text="대시보드" href="/admin" segment={null} />
          <Item icon={<HiOutlineShoppingBag />} text="쇼핑" href="/admin/shopping" segment={'shopping'} />
          <Item icon={<AiOutlineUser />} text="고객 관리" href="/admin/customer" segment={'customer'} />
          <Item icon={<TfiStatsUp />} text="통계" href="/admin/stats" segment={'stats'} />
        </div>
      </div>
    </div>
  );
}
