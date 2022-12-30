import { useApolloClient, useReactiveVar } from '@apollo/client';

import {
  selectedGroupVar,
  selectedSubscriptionVar
} from '@local-state/vars';

import {
  GroupsScheduleDataFragmentDoc,
  GroupsScheduleDataFragment,
  IndividualScheduleDataFragment,
  IndividualScheduleDataFragmentDoc,
  LessonSubscriptionDataFragment,
  LessonSubscriptionDataFragmentDoc,
} from '@graphql';

const groupObjectTypeName: GroupsScheduleDataFragment['__typename'] = 'Group';
const lessonTemplateObjectTypeName: IndividualScheduleDataFragment['__typename'] = 'LessonTemplate';
const subscriptionObjectTypeName: LessonSubscriptionDataFragment['__typename'] = 'LessonSubscription';

type UseStudentCheckoutDataReturn = {
  group: GroupsScheduleDataFragment | null
  lessonTemplates: IndividualScheduleDataFragment[] | null
  subscription: LessonSubscriptionDataFragment | null
};

const useStudentCheckoutData = (): UseStudentCheckoutDataReturn => {
  const client = useApolloClient();

  // Group info
  const selectedGroupId = useReactiveVar(selectedGroupVar);
  const selectedGroup = client.readFragment<GroupsScheduleDataFragment>({
    id: `${groupObjectTypeName}:${selectedGroupId}`,
    fragment: GroupsScheduleDataFragmentDoc,
  });

  // Individual schedule info
  // TODO (d.sahan): add useReactiveVar here
  const selectedIndividualTemplatesIds = ([] as number[]);
  let selectedIndividualTemplates = selectedIndividualTemplatesIds.map(
    lessonTemplateId => (
      client.readFragment<IndividualScheduleDataFragment>({
        id: `${lessonTemplateObjectTypeName}:${lessonTemplateId}`,
        fragment: IndividualScheduleDataFragmentDoc
      })
    )
  );
  if (selectedIndividualTemplatesIds.includes(null)) {
    // tslint:disable:no-console
    console.error(
      `Missed lesson in cache. ` +
      `Selected templates: ${selectedIndividualTemplatesIds}. ` +
      `Found lessons in cache: ${selectedIndividualTemplates}.`
    );
    selectedIndividualTemplates = [];
  }

  // Subscription
  const selectedSubscriptionId = selectedSubscriptionVar();
  const selectedSubscription = client.readFragment<LessonSubscriptionDataFragment>({
    id: `${subscriptionObjectTypeName}:${selectedSubscriptionId}`,
    fragment: LessonSubscriptionDataFragmentDoc,
  });

  return {
    group: selectedGroup,
    lessonTemplates: selectedIndividualTemplates,
    subscription: selectedSubscription,
  };
};

export default useStudentCheckoutData;