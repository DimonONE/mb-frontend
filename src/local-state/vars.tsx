import { makeVar } from '@apollo/client';

export const selectedGroupVar = makeVar({});

export const individualScheduleVar = makeVar([]);

export const trialLessonVar = makeVar({});

export const selectedSubscriptionVar = makeVar<number | undefined>(undefined);