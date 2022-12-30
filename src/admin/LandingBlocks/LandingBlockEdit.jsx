import * as React from 'react';

import { MainBlockEdit } from './MainBlock';
import { AboutUsBlockEdit } from './AboutUsBlock';
import { PricesBlockEdit } from './PricesBlock';
import { GalleryBlockEdit } from './GalleryBlock';

export const LandingBlockEdit = (props) => {
  const { id } = props;

  switch (id) {
    case 'main_block':
      return <MainBlockEdit {...props} />;
    case 'about_us':
      return <AboutUsBlockEdit {...props} />;
    case 'prices':
      return <PricesBlockEdit {...props} />;
    case 'gallery':
      return <GalleryBlockEdit {...props} />;
    default:
      return <MainBlockEdit {...props} />;
  }
};