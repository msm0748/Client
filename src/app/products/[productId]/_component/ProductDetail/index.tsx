'use client';

import { Element } from 'react-scroll';

export default function ProductDetail() {
  return (
    <div>
      <Element name="tab1">
        <h2>Tab 1 Content</h2>
        <p>Content for Tab 1...</p>
      </Element>
      <div className="h-[1600px]"></div>
      <Element name="tab2">
        <h2>Tab 2 Content</h2>
        <p>Content for Tab 2...</p>
      </Element>
      <div className="h-[1600px]"></div>
    </div>
  );
}
