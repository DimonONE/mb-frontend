import * as React from 'react';

import { useLoginCheckQuery } from '@graphql';
import { NavBar, NavBarProps } from '@components/student/NavBar';

type NavBarContainerProps = Omit<NavBarProps, 'isLoggedIn'>;

export const NavBarContainer: React.FC<NavBarContainerProps> = props => {
  const { data, error } = useLoginCheckQuery();

  if (error) {
    throw error;
  }

  const isLoggedIn = !!data?.viewer?.id;
  return (
    <NavBar
      {...props}
      isLoggedIn={isLoggedIn}
    />
  );
};