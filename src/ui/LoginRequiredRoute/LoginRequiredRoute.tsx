import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useLoginCheckQuery } from '@graphql';
import { authLogin } from '@urls';

export const LoginRequiredRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { data, loading, error } = useLoginCheckQuery();

  if (loading) {
    return null;
  }

  if (error) {
    throw error;
  }

  const { id } = data.viewer || {};

  return (
    <Route
      {...rest}
      render={props =>
        !!id ? (
          <Component {...props}/>
        ) : (
          <Redirect
            to={{
              pathname: authLogin
            }}
          />
        )
      }
    />
  );
};