import { ScheduleType } from '@constants';
import { generatePath } from 'react-router-dom';

// Main Page
export const mainPage = '/';
export const mainHash = '#mainScreen';
export const mainAboutUsHash = '#aboutScreen';
export const mainScheduleHash = '#scheduleScreen';
export const mainPricesHash = '#pricesScreen';
export const mainGalleryHash = '#galleryScreen';
export const mainQAHash = '#questionsScreen';
export const mainNewsHash = '#newsScreen';
export const mainReviewsHash = '#testimonialsScreen';
export const mainContactsHash = '#contactsScreen';
export const mainPromotionsHash = '#promotionsScreen';
export const siteIndex = '/';
export const siteSubscriptionsBase = '/subscriptions';
export const siteSubscriptionsOnline = `${siteSubscriptionsBase}/online`;
export const siteSubscriptionsOffline = `${siteSubscriptionsBase}/offline`;
export const siteSchedule = '/schedule';
export const siteOfflineLanding = '/offline';
export const siteAboutUs = '/about-us';
export const siteStudios = '/studios';
export const siteStudioDetail = `${siteStudios}/:id`;
export const sitePrivacyPolicy = '/privacy-policy';
export const siteGenericPage = '/page/:slug';
export const answersToQuestions= '/answers-to-questions';

// Generic pages
export const siteBalletForAdults = generatePath(siteGenericPage, { slug: 'balet-dlya-doroslykh' });
export const siteBalletForBeginners = generatePath(siteGenericPage, { slug: 'balet-dlya-pochatkivciv' });
export const siteBalletIndividual = generatePath(siteGenericPage, { slug: 'individualni-zanyattya-baletom' });
export const siteBalletGroups = generatePath(siteGenericPage, { slug: 'grupovi-zanyattya-baletom' });
export const siteBalletChoreography = generatePath(siteGenericPage, { slug: 'klasychna-khoreografiya' });
export const siteStretching = generatePath(siteGenericPage, { slug: 'stretching' });
export const sitePointe = generatePath(siteGenericPage, { slug: 'zanyattya-na-puantakh' });
export const siteStretchingForChildren = generatePath(siteGenericPage, { slug: 'stretching-dlya-ditey' });
export const siteBalletInStudio = generatePath(siteGenericPage, { slug: 'zanyattya-v-studii' });

// Teacher Cabinet
export const teacherCabinet = '/teacher';

export const teacherCabinetSchedule = '/teacher/schedule';
export const teacherDaysSchedule = `${teacherCabinetSchedule}/days`;
export const teacherWeeksSchedule = `${teacherCabinetSchedule}/weeks`;
export const teacherMonthsSchedule = `${teacherCabinetSchedule}/months`;

export const teacherLessonDetail = `${teacherCabinet}/lesson/:id(\\d+)`;
export const teacherCurrentLesson = `${teacherCabinet}/lesson/current`;

export const teacherSupport = `${teacherCabinet}/support`;

// Mary Ballet Online
export const onlineLanding = '/online';
export const onlineMainHash = '#main';
export const infoAboutOnlineHash = '#info-about-online';
export const introductionHash = '#introduction';
export const advantagesHash = '#advantages';
export const ourCoachesHash = '#our-coaches';
export const subscriptionTypesHash = '#subscription-types';
export const expectedResultsHash = '#expected-results';
export const contactUsHash = '#contact-us';
export const QAHash = '#QA';
export const reviewsHash = '#reviews';
export const contactsHash = '#contacts';

export const onlineTermsOfService = `${onlineLanding}/terms-of-service`;
export const onlinePrivacyPolicy = `${onlineLanding}/privacy-policy`;
export const onlinePurchaseThanks = `${onlineLanding}/purchase/thanks`;

// News Page
export const newsPage = '/news';

export const newsPageCategory = `${newsPage}/category/:categorySlug`;
export const newsPageArticle = `${newsPageCategory}/:articleId-:articleSlug`;

// Student Page
export const studentPage = '/student';

export const studentPageSchedule = `${studentPage}/schedule`;
export const studentPageMySchedule = `${studentPage}/my-schedule`;
export const studentPageMyScheduleWithParams = `${studentPageMySchedule}/:year/:week`;
export const studentCheckoutThanks = `${studentPage}/checkout/thanks`;
export const studentSchedule = `${studentPageSchedule}/:scheduleType(${Object.values(ScheduleType).join('|')})`;
export const studentScheduleSelectSubscription = `${studentSchedule}/subscription`;
export const studentCheckout = `${studentSchedule}/checkout`;
export const studentPageSubscription = `${studentPage}/subscription`;
export const studentTrialSchedule = `${studentPage}/trial`;
export const studentPageSettings = `${studentPage}/settings`;

// Auth
export const authBase = '/auth';

export const authLogin = `${authBase}/login`;
export const authRegister = `${authBase}/register`;
export const authResetPassword = `${authBase}/reset-password`;

// Global hashes
export const trialLessonModalHash = '#trialLesson';
