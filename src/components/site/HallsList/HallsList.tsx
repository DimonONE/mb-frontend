import * as React from 'react';
import { useMemo } from 'react';
import {
  generatePath,
  NavLink,
  useHistory
} from 'react-router-dom';

import { Select } from '@components/student/Select';
import { siteStudioDetail } from '@urls';

import * as s from './HallsList.sss';

type Hall = {
  id: number
  name: string
}

type HallsListProps = {
  halls: Hall[]
  activeHallId: number
  className?: string
}

export const HallsList: React.FC<HallsListProps> = ({
  halls,
  activeHallId,
  className,
}) => {
  const history = useHistory();

  const activeHall = useMemo(
    () => halls.find(({ id }) => id === activeHallId),
    [activeHallId],
  )
  return (
    <div className={className}>
      <div className={s.links}>
        {
          halls.map(
            ({ id, name }) => (
              <NavLink
                key={id}
                className={s.link}
                activeClassName={s.activeLink}
                to={generatePath(siteStudioDetail, { id })}
              >
                {name}
              </NavLink>
            )
          )
        }
      </div>

      <Select
        className={s.select}
        options={
          halls.map(
            ({ id, name }) => ({
              value: id,
              label: name
            })
          )
        }
        values={[{ value: activeHall.id, label: activeHall.name }]}
        onChange={
          ([{ value }]) => history.push(
            generatePath(siteStudioDetail, { id: value })
          )
        }
      />
    </div>
  )
}