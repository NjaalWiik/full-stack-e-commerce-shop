import React, { useState } from 'react';

import SHOP_DATA from './Shop.data';

const Shop = () => {
  const [collection, setCollection] = useState(SHOP_DATA);

  return (
    <div>
      <p>{SHOP_DATA[0].title}</p>
    </div>
  );
};

export default Shop;
