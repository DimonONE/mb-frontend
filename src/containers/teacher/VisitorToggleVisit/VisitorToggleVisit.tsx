import * as React from 'react';

import { VisitorToggleActionButton } from '@components/teacher/VisitorToggleActionButton';
import { useVisitorToggleVisitMutation } from '@graphql';
import Check from '@svg/check.svg';
import Close from '@svg/close.svg';

import * as s from './VisitorToggleVisit.sss';

type VisitorToggleVisitProps = {
  visitorId: number
  isVisited: boolean
  disabled: boolean
  className?: string
};

export const VisitorToggleVisit: React.FC<VisitorToggleVisitProps> = ({
  visitorId,
  isVisited,
  disabled,
  className,
}) => {
  const [toggleVisit] = useVisitorToggleVisitMutation({
    variables: { visitorId, isVisited: !isVisited },
  });

  return (
    <VisitorToggleActionButton
      className={className}
      active={isVisited}
      onClick={toggleVisit}
      disabled={disabled}
    >
      {
        isVisited
        ? (
          <Check className={s.checkIcon} />
        )
        : (
          <Close className={s.closeIcon} />
        )
      }
    </VisitorToggleActionButton>
  );
};