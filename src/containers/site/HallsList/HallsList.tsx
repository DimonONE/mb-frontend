import * as React from 'react';
import { generatePath, Redirect } from 'react-router-dom';

import { HallsList } from '@components/site/HallsList';
import { siteStudioDetail } from '@urls';
import { useHallsListQuery } from '@graphql';

type HallsListContainerProps = {
  activeHallId?: number
  className?: string
}

export const HallsListContainer: React.FC<HallsListContainerProps> = ({
  activeHallId,
  className
}) => {
  const { data } = useHallsListQuery();

  if (!data) {
    return null;
  }

  if (!activeHallId) {
    return <Redirect to={generatePath(siteStudioDetail, { id: data.halls[0].id })} />
  }

  return (
    <HallsList
      className={className}
      activeHallId={activeHallId}
      halls={data.halls}
    />
  )
}