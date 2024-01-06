'use client';

import { useState } from 'react';
import { Link } from 'react-scroll';

const tabs = ['상품정보', '리뷰', '문의', '배송/교환/반품'];

export default function Tabs() {
  const [tab, setTab] = useState('tab1');

  const selectTab = (selectedTab: string) => {
    setTab(selectedTab);
  };

  return (
    <div className="sticky md:top-24 top-[60px] mt-14 bg-white">
      <nav>
        <ul className="flex text-xl font-bold justify-between text-center">
          {tabs.map((item, i) => {
            const index = i + 1;
            return (
              <li key={index} className="flex-1">
                <Link
                  activeClass="active"
                  to={`tab${index}`}
                  spy={true}
                  smooth={true}
                  offset={-180}
                  duration={0}
                  className={`block pb-5 pt-3 border-b-[4px] ${tab === `tab${index}` ? 'border-black' : ''}`}
                  onSetActive={to => setTab(to)}
                  onClick={() => selectTab(`tab${index}`)}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
