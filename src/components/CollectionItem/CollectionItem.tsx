import React, { FC } from 'react';

import './CollectionItem.scss';

const CollectionItem: FC<ICollectionItemProps> = ({
  name,
  price,
  imageUrl,
}) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

interface ICollectionItemProps {
  name: string;
  imageUrl: string;
  price: number;
}

export default CollectionItem;
