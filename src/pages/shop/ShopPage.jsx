import React from 'react';

//components
import CollectionOverview from '../../components/collection-overview/CollectionOverview';

import './ShopPage.styles.scss';

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
