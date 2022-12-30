import * as React from 'react';

import { useHallsMapQuery } from '@graphql';
import { HallsMap } from '@components/site/HallsMap';

export const HallsMapContainer: React.FC = (
  () => {
    const { loading, data } = useHallsMapQuery();

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <HallsMap
        halls={data.halls}
        activeHallId={0}
        onHallClick={() => {}}
      />
    );
  }
);