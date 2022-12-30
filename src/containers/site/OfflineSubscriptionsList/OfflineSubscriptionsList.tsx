import * as React from 'react';

import { useOfflineSubscriptionsListQuery } from '@graphql';
import { OfflineSubscriptionsList, OfflineSubscriptionsListProps, SubscriptionCardType } from '@components/site/OfflineSubscriptionsList';

import MusicNotes1x from '@static/img/illustrations-120/music-notes-1x-min.jpg';
import MusicNotes2x from '@static/img/illustrations-120/music-notes-2x-min.jpg';
import { balletSubscriptionsImages, pointeSubscriptionsImages } from '@components/site/OnlineSubscriptions/constants';

type Props = {
  theme?: OfflineSubscriptionsListProps['theme']
  className?: string
};

export const OfflineSubscriptionsListContainer: React.FC<Props> = ({
  theme,
  className
}) => {
  const { data } = useOfflineSubscriptionsListQuery();

  if (!data) {
    return null;
  }

  const getImageData = (id: number, type: 'pointe' | 'ballet') => {
    let images 
    if ( type === 'pointe') {
      images = pointeSubscriptionsImages.filter(ballet => ballet.id === id)[0]?.image
    } else if (type === 'ballet') {
      images = balletSubscriptionsImages.filter(ballet => ballet.id === id)[0]?.image
    }

    if (!images) {
      images = {
          x1: MusicNotes1x,
          x2: MusicNotes2x
      }
    }

    return images
  }

  const newData = React.useMemo(() => {
    const ballet: SubscriptionCardType[] = data.ballet.map((ball) => ({
        ...ball,
        title: ball.name,
        priceNumber: ball.price,
        subscription: [],
        monthsCount: 1,
        benefits: [],
        image: getImageData(ball.id, 'ballet')
      })
    )

    const pointe: SubscriptionCardType[] = data.pointe.map((ball) => ({
        ...ball,
        title: ball.name,
        priceNumber: ball.price,
        subscription: [],
        monthsCount: ball.movesCount,
        benefits: [],
        image: getImageData(ball.id, 'pointe')
    }))
    return {
      ballet,
      pointe
    }
  }, [data])
  
  return (
    <OfflineSubscriptionsList
      className={className}
      theme={theme}
      balletSubscriptions={newData.ballet}
      pointeSubscriptions={newData.pointe}
    />
  );
};