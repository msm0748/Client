'use client';

import { Element } from 'react-scroll';
import Info from './Info';
import Review from './Review';
import Question from './Question';
import Delivery from './Delivery';

export default function ProductDetail() {
  return (
    <div>
      <Element name="tab1" className="h-[1200px]">
        <Info />
      </Element>
      <Element name="tab2" className="h-[1200px]">
        <Review />
      </Element>
      <Element name="tab3" className="h-[1200px]">
        <Question />
      </Element>
      <Element name="tab4" className="h-[1200px]">
        <Delivery />
      </Element>
    </div>
  );
}
