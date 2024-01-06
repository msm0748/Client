'use client';

import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Tabs() {
  const [tab, setTab] = useState('tab1');

  const selectTab = (selectedTab: string) => {
    setTab(selectedTab);
    scroll.scrollTo(0, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className="sticky top-24 mt-14 bg-white">
      <nav>
        <ul className="flex text-xl font-bold justify-between text-center">
          <li className="flex-1">
            <Link
              activeClass="active"
              to="tab1"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
              className={`block pb-5 border-b-[4px] ${tab === 'tab1' ? 'border-black' : ''}`}
              onSetActive={to => console.log(to)}
              onClick={() => selectTab('tab1')}
            >
              상품정보
            </Link>
          </li>
          <li className="flex-1">
            <Link
              activeClass="active"
              to="tab2"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
              className={`block pb-5 border-b-[4px] ${tab === 'tab2' ? 'border-black' : ''}`}
              onSetActive={to => console.log(to)}
              onClick={() => selectTab('tab2')}
            >
              리뷰
            </Link>
          </li>
          <li className="flex-1">
            <Link
              activeClass="active"
              to="tab3"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
              className={`block pb-5 border-b-[4px] ${tab === 'tab3' ? 'border-black' : ''}`}
              onClick={() => selectTab('tab3')}
            >
              문의
            </Link>
          </li>
          <li className="flex-1">
            <Link
              activeClass="active"
              to="tab4"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
              className={`block pb-5 border-b-[4px] ${tab === 'tab4' ? 'border-black' : ''}`}
              onClick={() => selectTab('tab4')}
            >
              배송/교환/반품
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
