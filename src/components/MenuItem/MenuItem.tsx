import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem: FC<IMenuItemProps> = ({
  title,
  imageUrl,
  size,
  history,
  match,
  linkUrl,
}): JSX.Element => (
  <div
    className={`${size ? size : ''} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

interface IMenuItemProps extends RouteComponentProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}
