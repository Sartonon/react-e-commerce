import React, { FC } from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import { IShopItem } from '../../pages/ShopPage/collections';

import './CollectionPreview.scss';

const CollectionPreview: FC<ICollectionPreviewProps> = ({
  title,
  items,
}): JSX.Element => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items.filter(showOnly(5)).map(({ id, ...itemProps }) => (
        <CollectionItem key={id} {...itemProps} />
      ))}
    </div>
  </div>
);

const showOnly = (amount: number) => (_: IShopItem, idx: number): boolean =>
  idx < amount - 1;

interface ICollectionPreviewProps {
  title: string;
  items: IShopItem[];
}

export default CollectionPreview;
