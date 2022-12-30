import * as React from 'react';

import { useNavProfileQuery } from '@graphql';
import NavProfile from '@components/teacher/NavProfile';

type NavProfileContainerProps = {
  className?: string
};

export const NavProfileContainer: React.FC<NavProfileContainerProps> = () => {
  const { data, loading, error } = useNavProfileQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    throw error;
  }

  if (data) {
    const { firstName, avatarUrl } = data.viewer;

    return (
      <NavProfile
        firstName={firstName}
        avatarUrl={avatarUrl}
      />
    );
  }

  throw new Error('Empty render');
};