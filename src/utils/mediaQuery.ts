import { useMediaQuery } from 'react-responsive';
import type {
  MediaQueryAllQueryable,
  MediaQueryMatchers
} from 'react-responsive';

export type PartialUseMediaQuery = (
  settings?: Partial<MediaQueryAllQueryable & { query?: string }>,
  device?: MediaQueryMatchers,
  callback?: (matches: boolean) => void
) => boolean;

export const useTabletOrWider: PartialUseMediaQuery = (
  settings = {},
  device,
  callback
) => useMediaQuery(
  {
    ...settings,
    minWidth: 768,
  },
  device,
  callback
);

export const useDesktopOrWider: PartialUseMediaQuery = (
  settings = {},
  device,
  callback
) => useMediaQuery(
  {
    ...settings,
    minWidth: 1268,
  },
  device,
  callback
);
