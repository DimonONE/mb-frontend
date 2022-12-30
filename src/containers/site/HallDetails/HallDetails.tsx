import * as React from 'react';
import { generatePath, Redirect } from 'react-router-dom';

import { HallDetails } from '@components/site/HallDetails';
import { siteStudioDetail } from '@urls';
import { useHallDetailsQuery } from '@graphql';
import { hallsMeta } from '@containers/site/HallDetails/constants';

type HallDetailsContainerProps = {
  hallId?: number
  className?: string
}

export const HallDetailsContainer: React.FC<HallDetailsContainerProps> = ({
  hallId,
  className
}) => {
  const { data } = useHallDetailsQuery();

  if (!data) {
    return null;
  }

  if (!hallId) {
    return <Redirect to={generatePath(siteStudioDetail, { id: data.halls[0].id })} />;
  }

  const hall = data.halls.find(({ id }) => id === hallId)!;
  const meta = hallsMeta[hallId];
  const hallWithMeta = {
    ...hall,
    about: meta?.about || '',
    howToFind: meta?.howToFind || '',
  };

  return (
    <HallDetails
      className={className}
      hall={hallWithMeta}
    />
  )
}