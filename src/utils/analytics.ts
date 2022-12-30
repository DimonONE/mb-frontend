const sendGAEvent = ({
  eventCategory,
  eventAction,
  eventLabel,
  eventValue
}) => {
  try {
    ga(
      'send',
      'event',
      eventCategory,
      eventAction,
      eventLabel,
      eventValue
    );
  } catch (e) {
    // Happy lint
    /* tslint:disable:no-console */
    console.log(
      eventCategory,
      eventAction,
      eventLabel,
      eventValue,
      e
    );
  }
};

export const sendTrialLessonBannerEvent = (bannerTiming: number) => sendGAEvent({
  eventCategory: 'Trial Lesson Subscription',
  eventAction: 'Sent Phone Number',
  eventLabel: 'Sent from banner',
  eventValue: bannerTiming
});

export const safeFbq = (...args) => {
  try {
    fbq(...args);
  } catch (e) {
    console.error(args, e);
  }
};