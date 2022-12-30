import * as React from 'react';
import { FORM_ERROR } from 'final-form';
import {
  useEffect,
  useLayoutEffect,
  useState
} from 'react';
import { useLocation } from 'react-router-dom';

export const isPhoneNumberValid = (phoneNumber: string) => {
  const normalizedPhoneNumber = phoneNumber.replace(
    /\s/g,
    ''
  );

  if (normalizedPhoneNumber.length) {
    const isNumber = +normalizedPhoneNumber;

    return (
      isNumber &&
      (
        normalizedPhoneNumber.startsWith('+380') && normalizedPhoneNumber.length === 13 ||
        normalizedPhoneNumber.startsWith('380') && normalizedPhoneNumber.length === 12 ||
        normalizedPhoneNumber.startsWith('80') && normalizedPhoneNumber.length === 11 ||
        normalizedPhoneNumber.startsWith('0') && normalizedPhoneNumber.length === 10
      )
    );
  }

  return false;
};

// Returns random number in range [start, end)
export const getRandomInt = (start: number, end: number) => (
  Math.floor(Math.random() * (end - start) + start)
);

export const normalizePhoneNumber = (phoneNumber: string) => {
  const numberWithoutSpaces = phoneNumber.replace(
    /\s/g,
    ''
  );

  if (numberWithoutSpaces.startsWith('+') && isPhoneNumberValid(numberWithoutSpaces)) {
    return numberWithoutSpaces.slice(1);
  }

  if (!isNaN(+numberWithoutSpaces)) {
    const length = numberWithoutSpaces.length;

    if (numberWithoutSpaces.startsWith('380') && length === 12) {
      return numberWithoutSpaces;
    }
    if (numberWithoutSpaces.startsWith('80') && length === 11) {
      return '3' + numberWithoutSpaces;
    }
    if (numberWithoutSpaces.startsWith('0') && length === 10) {
      return '38' + numberWithoutSpaces;
    }
  }

  throw new Error(`${phoneNumber} - is not a valid phone number.`);
};

export const formatTime = (time: Date) => {
  let hour = `${time.getHours()}`;
  let minute = `${time.getMinutes()}`;

  if (hour.length === 1) {
    hour = `0${hour}`;
  }
  if (minute.length === 1) {
    minute = `0${minute}`;
  }

  return `${hour}:${minute}`;
};

type UseScrollBottomEffectArgs = {
  callback: () => void
  ref: React.RefObject<HTMLBaseElement>
  rangeToBottom: number
};
type UseScrollBottomEffect = (arg: UseScrollBottomEffectArgs) => void;
export const useScrollBottomEffect: UseScrollBottomEffect = ({
  callback,
  ref,
  rangeToBottom,
}) => {
  useLayoutEffect(
    () => {
      const windowScrollHandler = async () => {
        const windowScrollElement = document.scrollingElement || document.documentElement;
        const windowScrollOffset = window.innerHeight + windowScrollElement.scrollTop;
        const componentBottomScrollOffset = ref.current.offsetTop + ref.current.clientHeight;

        if (windowScrollOffset > componentBottomScrollOffset - rangeToBottom) {
          await callback();
        }
      };
      window.addEventListener(
        'scroll',
        windowScrollHandler,
        { passive: true }
      );
      return () => window.removeEventListener(
        'scroll',
        windowScrollHandler,
      );
    },
    [callback, rangeToBottom],
  );
};

export const useSearchParams = () => {
  const getSearchParams = () => new URLSearchParams(location.search);

  const location = useLocation();
  const [searchParams, setSearchParams] = useState<URLSearchParams>(getSearchParams);

  useEffect(
    () => setSearchParams(getSearchParams),
    [location]
  );

  return searchParams;
};

export const capitalize = (s: string) => (
  s.charAt(0).toUpperCase() + s.slice(1)
);

export const googleMapsUrl =
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyAGvadG6rYjdr86rF_1j7sVEZXXlORMdto';
export const initMapFunctionName = 'initMapFunction';
export const initMapDataKey = 'initMapData';

export function loadGoogleMaps() {
  return new Promise<void>(
    resolve => {
      if (!window[initMapDataKey]?.state) {
        window[initMapDataKey] = {
          state: 'loading',
          queue: [resolve],
        };
        const scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.src = `${googleMapsUrl}&callback=${initMapFunctionName}`;
        window[initMapFunctionName] = () => {
          window[initMapDataKey].state = 'loaded';
          window[initMapDataKey].queue.forEach(callback => callback());
          window[initMapDataKey].queue = undefined;
        };
        document.body.appendChild(scriptElement);
      } else if (window[initMapDataKey].state === 'loading') {
        window[initMapDataKey].queue.push(resolve);
      } else if (window[initMapDataKey].state === 'loaded') {
        resolve();
      } else {
        throw new Error(`Unknown state ${this.state}`);
      }
    }
  )
}

// This hook can be used to safely determine whether
// render is going on server or client. On client it
// cause component rerender
export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(
    () => setIsClient(true),
    [],
  );

  return isClient;
};

type ErrorMessage = {
  message: string
  code?: string
};
type Error = {
  field: string
  errors: ErrorMessage[]
};
export const getFieldsSingleError = (errors: Error[]) => (
  errors.reduce(
    (fieldsSingleError, { field, errors: fieldErrors }) => {
      // Specific logic for all form error
      if (field === '__all__') {
        fieldsSingleError[FORM_ERROR] = fieldErrors[0].message;
        return fieldsSingleError;
      }

      // Convert dot notation to object
      // Example:
      // { 'a.b.c': 0 } => { a: { b: { c: 0 } } }
      let currentLevel = fieldsSingleError;
      const levels = field.split('.');
      levels.forEach(
        (level, index) => {
          if (index === levels.length - 1) {
            currentLevel[level] = fieldErrors[0].message;
          } else if (currentLevel[level]) {
            currentLevel = currentLevel[level];
          } else {
            currentLevel[level] = {};
            currentLevel = currentLevel[level];
          }
        }
      );

      return fieldsSingleError;
    },
    // tslint:disable:no-any
    {} as any
  )
);

export const paymentDataToFormInputs = (paymentData: object) => {
  const inputs = [];
  for (const [field, value] of Object.entries(paymentData)) {
    if (Array.isArray(value)) {
      for (const arrayValue of value) {
        inputs.push(
          <input
            type="hidden"
            key={`${field} ${arrayValue}`}
            name={field}
            value={arrayValue}
          />
        );
      }
    } else {
      inputs.push(
        <input
          type="hidden"
          key={`${field}`}
          name={field}
          value={value}
        />
      );
    }
  }

  return inputs;
};