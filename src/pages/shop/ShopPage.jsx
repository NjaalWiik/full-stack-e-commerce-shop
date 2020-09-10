import React, { useState } from 'react';

//components
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

// Styles
import SHOP_DATA from './ShopPage.data';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
