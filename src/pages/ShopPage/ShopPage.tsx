import React, { useState, FC } from 'react';

import SHOP_DATA, { IShopCollection } from './collections';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage: FC = (): JSX.Element => {
  const [collections] = useState<IShopCollection[]>(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
