import * as React from 'react';
import { useRef } from 'react';
import * as classNames from 'classnames';

import { useScrollBottomEffect } from '@utils/common';
import ArrowToBottom from '@svg/arrowToBottom.svg';

import * as s from './ScheduleInfiniteScroll.sss';

type ScheduleDaysProps = {
  onRequestLoadMore: () => void
  // TODO: remove optional
  onRequestLoadMorePrevious?: () => void
  canLoadMorePrevious: boolean
  isLoadingMore: boolean
  className?: string
};

export const ScheduleInfiniteScroll: React.FC<ScheduleDaysProps> = ({
  onRequestLoadMore,
  onRequestLoadMorePrevious,
  canLoadMorePrevious,
  isLoadingMore,
  className,
  children,
}) => {
  const rootRef = useRef(null);

  useScrollBottomEffect({
    ref: rootRef,
    callback: async () => {
      if (!isLoadingMore) {
        await onRequestLoadMore();
      }
    },
    rangeToBottom: 1000
  });

  return (
    <div
      ref={rootRef}
      className={classNames(s.root, className)}
    >
      <div className={s.head}>
        {
          canLoadMorePrevious &&
            <ArrowToBottom
              className={s.loadPreviousButton}
              onClick={onRequestLoadMorePrevious}
            />
        }
      </div>

      {children}
    </div>
  );
};
