import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `Time` scalar type represents a Time value as
   * specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Time: any;
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  /** Currently authenticated user */
  viewer?: Maybe<User>;
  /** Lesson visitor */
  lessonVisitor: LessonVisitor;
  trialLessons: Array<VirtualLesson>;
  /** Detailed information about lesson */
  lessonDetail?: Maybe<Lesson>;
  lessonTemplates: Array<LessonTemplate>;
  halls: Array<Hall>;
  hall: Hall;
  locations: Array<Location>;
  groupsFilter: Array<GroupFilter>;
  newsCategories?: Maybe<NewsCategoryConnection>;
  newsCategory: NewsCategory;
  /** Returns article or error with code "NOT_FOUND" if article does not exist */
  article: Article;
  articles?: Maybe<ArticleConnection>;
  groupsLessonsSchedule?: Maybe<Array<Group>>;
  individualLessonsSchedule?: Maybe<Array<LessonTemplate>>;
  /** Returns available dates to start subscription. You can provide either group_id (for group subscription) or lesson_templates_ids (for individual subscription). */
  subscriptionStartDates: Array<Scalars['Date']>;
  /** Subscriptions that can be bought by student */
  lessonSubscriptions: Array<LessonSubscription>;
  page?: Maybe<Page>;
};


export type QueryLessonVisitorArgs = {
  id: Scalars['Int'];
};


export type QueryTrialLessonsArgs = {
  startDate: Scalars['Date'];
  endDate: Scalars['Date'];
  locationId?: Maybe<Scalars['Int']>;
  time?: Maybe<LessonTime>;
  days?: Maybe<Array<Scalars['Int']>>;
  skillLevel?: Maybe<SkillLevel>;
  lessonType?: Maybe<LessonType>;
};


export type QueryLessonDetailArgs = {
  lessonId: Scalars['Int'];
};


export type QueryHallArgs = {
  id: Scalars['Int'];
};


export type QueryNewsCategoriesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNewsCategoryArgs = {
  slug: Scalars['String'];
};


export type QueryArticleArgs = {
  id: Scalars['Int'];
};


export type QueryArticlesArgs = {
  categorySlug?: Maybe<Scalars['String']>;
  tagSlug?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGroupsLessonsScheduleArgs = {
  locationId?: Maybe<Scalars['Int']>;
  time?: Maybe<LessonTime>;
  days?: Maybe<Array<Scalars['Int']>>;
  skillLevel?: Maybe<SkillLevel>;
  lessonType?: Maybe<LessonType>;
};


export type QueryIndividualLessonsScheduleArgs = {
  locationId?: Maybe<Scalars['Int']>;
  time?: Maybe<LessonTime>;
  days?: Maybe<Array<Scalars['Int']>>;
  skillLevel?: Maybe<SkillLevel>;
  lessonType?: Maybe<LessonType>;
};


export type QuerySubscriptionStartDatesArgs = {
  groupId?: Maybe<Scalars['Int']>;
  lessonTemplatesIds?: Maybe<Array<Scalars['Int']>>;
};


export type QueryLessonSubscriptionsArgs = {
  forPointe?: Maybe<Scalars['Boolean']>;
};


export type QueryPageArgs = {
  slug: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  /** User first name */
  firstName: Scalars['String'];
  /** User last name */
  lastName: Scalars['String'];
  /** User phone number in format: 380123456789 */
  phoneNumber: Scalars['String'];
  /** Url on user avatar */
  avatarUrl?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['Date']>;
  isCoach: Scalars['Boolean'];
  nearestLesson?: Maybe<Lesson>;
  lessons?: Maybe<LessonConnection>;
  lessonsPeriodAggregation?: Maybe<LessonPeriodAggregationConnection>;
  student: Student;
  /** Comments left by coach of this user */
  coachComments: Array<UserCoachComment>;
};


export type UserLessonsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserLessonsPeriodAggregationArgs = {
  groupBy?: Maybe<LessonAggregationPeriods>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type Lesson = {
  __typename?: 'Lesson';
  id: Scalars['Int'];
  lessonTemplate: LessonTemplate;
  /** Hall where will be lesson */
  hall: Hall;
  skillLevel: SkillLevel;
  type: LessonType;
  bookingPlacesCount: Scalars['Int'];
  trialPlacesCount: Scalars['Int'];
  teacher: User;
  /** Date and time when lesson starts */
  time: Scalars['DateTime'];
  /** Lesson duration in minutes */
  duration: Scalars['Int'];
  visitAnalytics: VisitAnalytics;
  visitors: Array<LessonVisitor>;
  /** Closed lesson can't be edited */
  isClosed: Scalars['Boolean'];
};

export type LessonTemplate = {
  __typename?: 'LessonTemplate';
  id: Scalars['Int'];
  /** Hall where lessons from this template happens */
  hall: Hall;
  /** The day when lessons from this template happens */
  weekday: Scalars['Int'];
  /**
   * Time when lesson from this template starts.
   * (Format: `09:05` `22:45`)
   */
  time: Scalars['String'];
  /** Type of lessons created from this template */
  type: LessonType;
  /** Required skill level to visit lessons created from this template */
  level: SkillLevel;
  /** Lesson duration in minutes */
  duration?: Maybe<Scalars['Int']>;
  teacher?: Maybe<User>;
};

export type Hall = {
  __typename?: 'Hall';
  id: Scalars['Int'];
  /** Verbose name of hall */
  name: Scalars['String'];
  /** City where hall is placed */
  city: Scalars['String'];
  /** Street where hall is placed */
  street: Scalars['String'];
  /** Number of building where hall is placed */
  number: Scalars['String'];
  /** Hall latitude on google map */
  lat: Scalars['Float'];
  /** Hall longitude on google map */
  lng: Scalars['Float'];
  images: Array<Scalars['String']>;
  locations: Array<Location>;
  nearestLessonsTemplates: Array<LessonTemplate>;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['Int'];
  /** Location name */
  name: Scalars['String'];
  /** Color of location */
  color: Scalars['String'];
  /** Location priority */
  priority: Scalars['Int'];
};

/** An enumeration. */
export enum LessonType {
  Primary = 'PRIMARY',
  Stretching = 'STRETCHING',
  Pointe = 'POINTE',
  Parter = 'PARTER'
}

/** An enumeration. */
export enum SkillLevel {
  Low = 'LOW',
  Middle = 'MIDDLE',
  High = 'HIGH'
}


/** Analytics about lesson visiting */
export type VisitAnalytics = {
  __typename?: 'VisitAnalytics';
  /** All people count that subscribed on this lesson */
  inAll?: Maybe<Scalars['Int']>;
  /** How many people should be on lesson */
  shouldPresent: Scalars['Int'];
  /** How many people should pay for this lesson */
  notPaid: Scalars['Int'];
  /** How many people first time here and it's their first triallesson */
  trialLesson: Scalars['Int'];
  /** How many people will be absent because of freeze or movement */
  willAbsent: Scalars['Int'];
};

export type LessonVisitor = {
  __typename?: 'LessonVisitor';
  id: Scalars['Int'];
  user: User;
  /** Is visitor paid for this lesson on lesson */
  paidOnLesson: Scalars['Boolean'];
  /** How much user should pay for this lesson */
  payAmount: Scalars['Int'];
  /** Is visitor paid for this lesson online via website */
  paidOnline: Scalars['Boolean'];
  /** Is it trial lesson for this user */
  isFirstVisit: Scalars['Boolean'];
  /** Is this user was present on lesson */
  visited: Scalars['Boolean'];
};

export type LessonConnection = {
  __typename?: 'LessonConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LessonEdge>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** A Relay edge containing a `Lesson` and its cursor. */
export type LessonEdge = {
  __typename?: 'LessonEdge';
  /** The item at the end of the edge */
  node?: Maybe<Lesson>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type LessonPeriodAggregationConnection = {
  __typename?: 'LessonPeriodAggregationConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LessonPeriodAggregationEdge>>;
};

/** A Relay edge containing a `LessonPeriodAggregation` and its cursor. */
export type LessonPeriodAggregationEdge = {
  __typename?: 'LessonPeriodAggregationEdge';
  /** The item at the end of the edge */
  node?: Maybe<LessonPeriodAggregation>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Type represent aggregated by some periods (days, weeks ...) lessons data */
export type LessonPeriodAggregation = {
  __typename?: 'LessonPeriodAggregation';
  /** How many lessons in this aggregation period */
  lessonsCount: Scalars['Int'];
  /** How many individual lessons in this aggregation period */
  individualLessonsCount: Scalars['Int'];
  /** How many group lessons in this aggregation period */
  groupLessonsCount: Scalars['Int'];
  /** Start date of current aggregation period */
  startDate?: Maybe<Scalars['Date']>;
};

/** An enumeration. */
export enum LessonAggregationPeriods {
  Day = 'DAY',
  Week = 'WEEK'
}

export type Student = {
  __typename?: 'Student';
  balletTrialSubscription?: Maybe<LessonSubscription>;
  pointeTrialSubscription?: Maybe<LessonSubscription>;
  schedule: Array<Lesson>;
  /** Subscriptions that can be bought by student */
  lessonSubscriptions: Array<LessonSubscription>;
  purchasedLessonSubscriptions: Array<PurchasedLessonSubscription>;
};


export type StudentScheduleArgs = {
  year: Scalars['Int'];
  week: Scalars['Int'];
};


export type StudentLessonSubscriptionsArgs = {
  forPointe?: Maybe<Scalars['Boolean']>;
};

export type LessonSubscription = {
  __typename?: 'LessonSubscription';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** Subscription description, may be empty string */
  description: Scalars['String'];
  /** Count of lessons that user can visit with this subscription. */
  lessonsCount: Scalars['Int'];
  /** Count of lesson moves in this subscription. Moves is used automatically when student absent onlesson. */
  movesCount: Scalars['Int'];
  /** Number of days which student can "freeze". When student "freeze" days - all lessons in these days automatically move on next dates. */
  freezeDaysCount: Scalars['Int'];
  /** Subscription price in UAH */
  price: Scalars['Int'];
  /** Whether this subscription available for purchase */
  available: Scalars['Boolean'];
};

export type PurchasedLessonSubscription = {
  __typename?: 'PurchasedLessonSubscription';
  id: Scalars['Int'];
  lessonSubscription: LessonSubscription;
  /** Whether user used lessons freeze */
  freezeUsed: Scalars['Boolean'];
  lessonsUsed: Scalars['Int'];
  movementsUsed: Scalars['Int'];
  schedule: Array<LessonTemplate>;
  /** Date when purchased subscription stop work */
  expireAt: Scalars['Date'];
};

export type UserCoachComment = {
  __typename?: 'UserCoachComment';
  id: Scalars['Int'];
  commentator: User;
  /** User for who comment is written */
  user: User;
  text: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

/**
 * Represents lesson that haven't created yet.
 * As a result it contains generic id.
 */
export type VirtualLesson = {
  __typename?: 'VirtualLesson';
  id?: Maybe<Scalars['ID']>;
  lessonTemplate: LessonTemplate;
  /** Hall where will be lesson */
  hall: Hall;
  skillLevel: SkillLevel;
  type: LessonType;
  bookingPlacesCount: Scalars['Int'];
  trialPlacesCount: Scalars['Int'];
  teacher: User;
  /** Date and time when lesson starts */
  time: Scalars['DateTime'];
  /** Lesson duration in minutes */
  duration: Scalars['Int'];
  visitAnalytics: VisitAnalytics;
  visitors: Array<LessonVisitor>;
  /** Closed lesson can't be edited */
  isClosed: Scalars['Boolean'];
};

/** An enumeration. */
export enum LessonTime {
  Morning = 'MORNING',
  Evening = 'EVENING',
  AllDay = 'ALL_DAY'
}

export type GroupFilter = {
  __typename?: 'GroupFilter';
  name: Scalars['String'];
  value: Array<Scalars['Int']>;
};

export type NewsCategoryConnection = {
  __typename?: 'NewsCategoryConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NewsCategoryEdge>>;
};

/** A Relay edge containing a `NewsCategory` and its cursor. */
export type NewsCategoryEdge = {
  __typename?: 'NewsCategoryEdge';
  /** The item at the end of the edge */
  node?: Maybe<NewsCategory>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type NewsCategory = {
  __typename?: 'NewsCategory';
  id: Scalars['Int'];
  meta: PageMeta;
  slug: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  lastArticles: Array<Article>;
};

export type PageMeta = {
  __typename?: 'PageMeta';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['Int'];
  meta: PageMeta;
  slug: Scalars['String'];
  title: Scalars['String'];
  category: NewsCategory;
  image: Scalars['String'];
  thumbnail: Scalars['String'];
  content: Scalars['String'];
  author: Scalars['String'];
  createdAt: Scalars['DateTime'];
  tags: Array<ArticleTag>;
  similarArticles: Array<Article>;
};

export type ArticleTag = {
  __typename?: 'ArticleTag';
  id: Scalars['Int'];
  slug: Scalars['String'];
  name: Scalars['String'];
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleEdge>>;
};

/** A Relay edge containing a `Article` and its cursor. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  /** The item at the end of the edge */
  node?: Maybe<Article>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['Int'];
  templates: Array<LessonTemplate>;
  /** Group days with lessons. 0 - Sunday, 6 - Saturday */
  days: Array<Scalars['Int']>;
  hall: Hall;
  /**
   * Time when lesson from this template starts.
   * (Format: `09:05` `22:45`)
   */
  time: Scalars['Time'];
  /** Type of lessons created from this template */
  type: LessonType;
  /** Required skill level to visit lessons created from this template */
  level: SkillLevel;
  /** Lesson coach */
  teacher: User;
};


export type Page = {
  __typename?: 'Page';
  id?: Maybe<Scalars['ID']>;
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  authenticate?: Maybe<AuthenticateUser>;
  sendPasswordSms?: Maybe<SendPasswordSms>;
  registerUser?: Maybe<RegisterUser>;
  verifyNumber?: Maybe<VerifyNumber>;
  socialAuthenticateUser?: Maybe<SocialAuthenticateUser>;
  logout?: Maybe<Logout>;
  changePassword?: Maybe<ChangePassword>;
  /**
   * Mutation send sms to user with secret code and save it
   * to redis. Later mutations can use it to verify phone.
   */
  sendPhoneVerificationCode?: Maybe<SendPhoneVerificationCode>;
  updateProfile?: Maybe<UpdateProfile>;
  /**
   * Allows user to change password.
   * First user should receive verification code using SendPhoneVerificationCode
   * mutation. Then using this code user can change password.
   */
  resetPassword?: Maybe<ResetPassword>;
  togglePayment?: Maybe<TogglePayment>;
  toggleVisit?: Maybe<ToggleVisit>;
  createOnlineProgramOrder?: Maybe<CreateOnlineProgramOrder>;
  onlineContactUs?: Maybe<OnlineContactUs>;
  addUserCoachComment?: Maybe<AddUserCoachComment>;
  closeLesson?: Maybe<CloseLesson>;
  createLessonPurchaseOrder?: Maybe<CreateLessonPurchaseOrder>;
  createSubscriptionFreezing?: Maybe<CreateSubscriptionFreezing>;
  sendResume?: Maybe<SendResume>;
};


export type MutationsAuthenticateArgs = {
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationsSendPasswordSmsArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationsRegisterUserArgs = {
  accessToken?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  socialType?: Maybe<SocialAuthProviderEnum>;
};


export type MutationsVerifyNumberArgs = {
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type MutationsSocialAuthenticateUserArgs = {
  accessToken?: Maybe<Scalars['String']>;
  socialType: SocialAuthProviderEnum;
};


export type MutationsChangePasswordArgs = {
  newPassword: Scalars['String'];
};


export type MutationsSendPhoneVerificationCodeArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationsUpdateProfileArgs = {
  birthday?: Maybe<Scalars['Date']>;
  firstName: Scalars['String'];
  instagram?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  verificationCode?: Maybe<Scalars['String']>;
};


export type MutationsResetPasswordArgs = {
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  verificationCode: Scalars['String'];
};


export type MutationsTogglePaymentArgs = {
  isPaid: Scalars['Boolean'];
  visitorId: Scalars['Int'];
};


export type MutationsToggleVisitArgs = {
  isVisited: Scalars['Boolean'];
  visitorId: Scalars['Int'];
};


export type MutationsCreateOnlineProgramOrderArgs = {
  firstName: Scalars['String'];
  instagramUsername?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
  programId: Scalars['Int'];
};


export type MutationsOnlineContactUsArgs = {
  firstName: Scalars['String'];
  instagramUsername?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
};


export type MutationsAddUserCoachCommentArgs = {
  text: Scalars['String'];
  visitorId: Scalars['Int'];
};


export type MutationsCloseLessonArgs = {
  lessonId: Scalars['Int'];
};


export type MutationsCreateLessonPurchaseOrderArgs = {
  groupId?: Maybe<Scalars['Int']>;
  lessonSubscriptionId: Scalars['Int'];
  lessonTemplatesIds?: Maybe<Array<Scalars['Int']>>;
  returnUrl: Scalars['String'];
};


export type MutationsCreateSubscriptionFreezingArgs = {
  durationDays: Scalars['Int'];
  lessonPurchaseId: Scalars['Int'];
  reference?: Maybe<Scalars['Upload']>;
  startDate: Scalars['Date'];
};


export type MutationsSendResumeArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  phoneNumber: Scalars['String'];
  resume: Scalars['Upload'];
};

export type AuthenticateUser = {
  __typename?: 'AuthenticateUser';
  isSuccess: Scalars['Boolean'];
  /** User who have just logged in */
  user?: Maybe<User>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type Error = {
  __typename?: 'Error';
  field: Scalars['String'];
  errors: Array<FieldError>;
};

export type FieldError = {
  __typename?: 'FieldError';
  code: Scalars['String'];
  message: Scalars['String'];
};

export type SendPasswordSms = {
  __typename?: 'SendPasswordSMS';
  isSuccess: Scalars['Boolean'];
  errors?: Maybe<Array<Error>>;
};

export type RegisterUser = {
  __typename?: 'RegisterUser';
  user?: Maybe<User>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

/** An enumeration. */
export enum SocialAuthProviderEnum {
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE'
}

export type VerifyNumber = {
  __typename?: 'VerifyNumber';
  isSuccess: Scalars['Boolean'];
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type SocialAuthenticateUser = {
  __typename?: 'SocialAuthenticateUser';
  /** Token valid, but user not found, registration required */
  registrationRequired?: Maybe<Scalars['Boolean']>;
  isSuccess: Scalars['Boolean'];
  /** User who have just logged in */
  user?: Maybe<User>;
};

export type Logout = {
  __typename?: 'Logout';
  isSuccess: Scalars['Boolean'];
};

export type ChangePassword = {
  __typename?: 'ChangePassword';
  errors?: Maybe<Array<Maybe<Error>>>;
};

/**
 * Mutation send sms to user with secret code and save it
 * to redis. Later mutations can use it to verify phone.
 */
export type SendPhoneVerificationCode = {
  __typename?: 'SendPhoneVerificationCode';
  errors?: Maybe<Array<Error>>;
};

export type UpdateProfile = {
  __typename?: 'UpdateProfile';
  user?: Maybe<User>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

/**
 * Allows user to change password.
 * First user should receive verification code using SendPhoneVerificationCode
 * mutation. Then using this code user can change password.
 */
export type ResetPassword = {
  __typename?: 'ResetPassword';
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type TogglePayment = {
  __typename?: 'TogglePayment';
  lessonVisitor?: Maybe<LessonVisitor>;
  errors?: Maybe<Array<Error>>;
};

export type ToggleVisit = {
  __typename?: 'ToggleVisit';
  lessonVisitor?: Maybe<LessonVisitor>;
  errors?: Maybe<Array<Error>>;
};

export type CreateOnlineProgramOrder = {
  __typename?: 'CreateOnlineProgramOrder';
  /** Data have to be sent to liqpay to start checkout */
  data: Scalars['String'];
  /** Signature have to be sent to liqpay to start checkout */
  signature: Scalars['String'];
};

export type OnlineContactUs = {
  __typename?: 'OnlineContactUs';
  isSuccess: Scalars['Boolean'];
};

export type AddUserCoachComment = {
  __typename?: 'AddUserCoachComment';
  comment: UserCoachComment;
  errors?: Maybe<Array<Error>>;
};

export type CloseLesson = {
  __typename?: 'CloseLesson';
  lesson?: Maybe<Lesson>;
};

export type CreateLessonPurchaseOrder = {
  __typename?: 'CreateLessonPurchaseOrder';
  /** Data have to be sent to wayforpay to start checkout */
  data: Scalars['String'];
};

export type CreateSubscriptionFreezing = {
  __typename?: 'CreateSubscriptionFreezing';
  errors?: Maybe<Array<Error>>;
};


export type SendResume = {
  __typename?: 'SendResume';
  errors?: Maybe<Array<Error>>;
};

export type ScheduleQueryVariables = Exact<{ [key: string]: never; }>;


export type ScheduleQuery = (
  { __typename?: 'Query' }
  & { lessonTemplates: Array<(
    { __typename?: 'LessonTemplate' }
    & Pick<LessonTemplate, 'id' | 'weekday' | 'time' | 'type' | 'level'>
    & { hall: (
      { __typename?: 'Hall' }
      & Pick<Hall, 'id' | 'name' | 'street' | 'number'>
      & { locations: Array<(
        { __typename?: 'Location' }
        & Pick<Location, 'id' | 'name' | 'color' | 'priority'>
      )> }
    ) }
  )> }
);

export type LoginMutationVariables = Exact<{
  login: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutations' }
  & { authenticate?: Maybe<(
    { __typename?: 'AuthenticateUser' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'isCoach'>
    )>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'field'>
      & { errors: Array<(
        { __typename?: 'FieldError' }
        & Pick<FieldError, 'code' | 'message'>
      )> }
    )>>> }
  )> }
);

export type RegisterResultInfoFragment = (
  { __typename?: 'RegisterUser' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'isCoach'>
  )>, errors?: Maybe<Array<Maybe<(
    { __typename?: 'Error' }
    & Pick<Error, 'field'>
    & { errors: Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'code' | 'message'>
    )> }
  )>>> }
);

export type RegisterMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutations' }
  & { registerUser?: Maybe<(
    { __typename?: 'RegisterUser' }
    & RegisterResultInfoFragment
  )> }
);

export type RegisterSocialMutationVariables = Exact<{
  accessToken: Scalars['String'];
  socialType: SocialAuthProviderEnum;
  phoneNumber: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterSocialMutation = (
  { __typename?: 'Mutations' }
  & { registerUser?: Maybe<(
    { __typename?: 'RegisterUser' }
    & RegisterResultInfoFragment
  )> }
);

export type SendPasswordSmsMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
}>;


export type SendPasswordSmsMutation = (
  { __typename?: 'Mutations' }
  & { sendPasswordSms?: Maybe<(
    { __typename?: 'SendPasswordSMS' }
    & Pick<SendPasswordSms, 'isSuccess'>
    & { errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & Pick<Error, 'field'>
      & { errors: Array<(
        { __typename?: 'FieldError' }
        & Pick<FieldError, 'code' | 'message'>
      )> }
    )>> }
  )> }
);

export type SendVerificationCodeMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
}>;


export type SendVerificationCodeMutation = (
  { __typename?: 'Mutations' }
  & { sendPhoneVerificationCode?: Maybe<(
    { __typename?: 'SendPhoneVerificationCode' }
    & { errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & Pick<Error, 'field'>
      & { errors: Array<(
        { __typename?: 'FieldError' }
        & Pick<FieldError, 'code' | 'message'>
      )> }
    )>> }
  )> }
);

export type VerifyCodeMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
  verificationCode: Scalars['String'];
}>;


export type VerifyCodeMutation = (
  { __typename?: 'Mutations' }
  & { verifyNumber?: Maybe<(
    { __typename?: 'VerifyNumber' }
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'field'>
      & { errors: Array<(
        { __typename?: 'FieldError' }
        & Pick<FieldError, 'code' | 'message'>
      )> }
    )>>> }
  )> }
);

export type ResetPasswordMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
  verificationCode: Scalars['String'];
  password: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutations' }
  & { resetPassword?: Maybe<(
    { __typename?: 'ResetPassword' }
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & Pick<Error, 'field'>
      & { errors: Array<(
        { __typename?: 'FieldError' }
        & Pick<FieldError, 'code' | 'message'>
      )> }
    )>>> }
  )> }
);

export type SocialLoginMutationVariables = Exact<{
  accessToken: Scalars['String'];
  socialType: SocialAuthProviderEnum;
}>;


export type SocialLoginMutation = (
  { __typename?: 'Mutations' }
  & { socialAuthenticateUser?: Maybe<(
    { __typename?: 'SocialAuthenticateUser' }
    & Pick<SocialAuthenticateUser, 'registrationRequired'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'isCoach'>
    )> }
  )> }
);

export type NewsArticlePageQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type NewsArticlePageQuery = (
  { __typename?: 'Query' }
  & { article: (
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'slug' | 'title' | 'image' | 'content' | 'author' | 'createdAt'>
    & { tags: Array<(
      { __typename?: 'ArticleTag' }
      & Pick<ArticleTag, 'id' | 'slug' | 'name'>
    )>, similarArticles: Array<(
      { __typename?: 'Article' }
      & Pick<Article, 'id' | 'slug' | 'title' | 'thumbnail' | 'createdAt'>
      & { category: (
        { __typename?: 'NewsCategory' }
        & Pick<NewsCategory, 'slug' | 'id'>
      ) }
    )>, meta: (
      { __typename?: 'PageMeta' }
      & Pick<PageMeta, 'title' | 'description'>
    ) }
  ) }
);

export type NewsCategoryPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type NewsCategoryPageQuery = (
  { __typename?: 'Query' }
  & { newsCategory: (
    { __typename?: 'NewsCategory' }
    & Pick<NewsCategory, 'id' | 'slug' | 'name' | 'description'>
    & { meta: (
      { __typename?: 'PageMeta' }
      & Pick<PageMeta, 'title' | 'description'>
    ) }
  ) }
);

export type NewsCategoryPageArticlesQueryVariables = Exact<{
  slug: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
}>;


export type NewsCategoryPageArticlesQuery = (
  { __typename?: 'Query' }
  & { articles?: Maybe<(
    { __typename?: 'ArticleConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'ArticleEdge' }
      & { node?: Maybe<(
        { __typename?: 'Article' }
        & Pick<Article, 'id' | 'slug' | 'title' | 'thumbnail' | 'createdAt'>
      )> }
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ) }
  )> }
);

export type NewsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsPageQuery = (
  { __typename?: 'Query' }
  & { newsCategories?: Maybe<(
    { __typename?: 'NewsCategoryConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'NewsCategoryEdge' }
      & { node?: Maybe<(
        { __typename?: 'NewsCategory' }
        & Pick<NewsCategory, 'id' | 'slug' | 'name'>
        & { lastArticles: Array<(
          { __typename?: 'Article' }
          & Pick<Article, 'id' | 'slug' | 'thumbnail' | 'createdAt' | 'title'>
        )> }
      )> }
    )>> }
  )> }
);

export type SendResumeMutationVariables = Exact<{
  firstName: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  resume: Scalars['Upload'];
}>;


export type SendResumeMutation = (
  { __typename?: 'Mutations' }
  & { sendResume?: Maybe<(
    { __typename?: 'SendResume' }
    & { errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & Pick<Error, 'field'>
      & { errors: Array<(
        { __typename?: 'FieldError' }
        & Pick<FieldError, 'message' | 'code'>
      )> }
    )>> }
  )> }
);

export type HallDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type HallDetailsQuery = (
  { __typename?: 'Query' }
  & { halls: Array<(
    { __typename?: 'Hall' }
    & HallDetailsFragment
  )> }
);

export type HallsListQueryVariables = Exact<{ [key: string]: never; }>;


export type HallsListQuery = (
  { __typename?: 'Query' }
  & { halls: Array<(
    { __typename?: 'Hall' }
    & HallDetailsFragment
  )> }
);

export type HallsMapQueryVariables = Exact<{ [key: string]: never; }>;


export type HallsMapQuery = (
  { __typename?: 'Query' }
  & { halls: Array<(
    { __typename?: 'Hall' }
    & Pick<Hall, 'id' | 'street' | 'number' | 'lat' | 'lng' | 'images'>
    & { nearestLessonsTemplates: Array<(
      { __typename?: 'LessonTemplate' }
      & Pick<LessonTemplate, 'id' | 'weekday' | 'time' | 'type' | 'level'>
    )> }
  )> }
);

export type OfflineSubscriptionsListQueryVariables = Exact<{ [key: string]: never; }>;


export type OfflineSubscriptionsListQuery = (
  { __typename?: 'Query' }
  & { ballet: Array<(
    { __typename?: 'LessonSubscription' }
    & LessonSubscriptionDataFragment
  )>, pointe: Array<(
    { __typename?: 'LessonSubscription' }
    & LessonSubscriptionDataFragment
  )> }
);

export type ChangePasswordFormMutationVariables = Exact<{
  newPassword: Scalars['String'];
}>;


export type ChangePasswordFormMutation = (
  { __typename?: 'Mutations' }
  & { changePassword?: Maybe<(
    { __typename?: 'ChangePassword' }
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & ErrorsDataFragment
    )>>> }
  )> }
);

export type CheckoutStartDateInputInfoQueryVariables = Exact<{
  groupId?: Maybe<Scalars['Int']>;
  lessonTemplatesIds?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type CheckoutStartDateInputInfoQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'subscriptionStartDates'>
);

export type CreateGroupSubscriptionOrderMutationVariables = Exact<{
  groupId: Scalars['Int'];
  lessonSubscriptionId: Scalars['Int'];
  returnUrl: Scalars['String'];
}>;


export type CreateGroupSubscriptionOrderMutation = (
  { __typename?: 'Mutations' }
  & { createLessonPurchaseOrder?: Maybe<(
    { __typename?: 'CreateLessonPurchaseOrder' }
    & Pick<CreateLessonPurchaseOrder, 'data'>
  )> }
);

export type CreateIndividualSubscriptionOrderMutationVariables = Exact<{
  lessonTemplatesIds: Array<Scalars['Int']> | Scalars['Int'];
  lessonSubscriptionId: Scalars['Int'];
  returnUrl: Scalars['String'];
}>;


export type CreateIndividualSubscriptionOrderMutation = (
  { __typename?: 'Mutations' }
  & { createLessonPurchaseOrder?: Maybe<(
    { __typename?: 'CreateLessonPurchaseOrder' }
    & Pick<CreateLessonPurchaseOrder, 'data'>
  )> }
);

export type ChooseSubscriptionListQueryVariables = Exact<{
  forPointe: Scalars['Boolean'];
}>;


export type ChooseSubscriptionListQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { student: (
      { __typename?: 'Student' }
      & { lessonSubscriptions: Array<(
        { __typename?: 'LessonSubscription' }
        & LessonSubscriptionDataFragment
      )> }
    ) }
  )> }
);

export type CreateSubscriptionFreezingMutationVariables = Exact<{
  lessonPurchaseId: Scalars['Int'];
  startDate: Scalars['Date'];
  durationDays: Scalars['Int'];
  reference?: Maybe<Scalars['Upload']>;
}>;


export type CreateSubscriptionFreezingMutation = (
  { __typename?: 'Mutations' }
  & { createSubscriptionFreezing?: Maybe<(
    { __typename?: 'CreateSubscriptionFreezing' }
    & { errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & Pick<Error, 'field'>
      & { errors: Array<(
        { __typename?: 'FieldError' }
        & Pick<FieldError, 'code' | 'message'>
      )> }
    )>> }
  )> }
);

export type GroupsScheduleDataFragment = (
  { __typename?: 'Group' }
  & Pick<Group, 'id' | 'days' | 'time' | 'type' | 'level'>
  & { hall: (
    { __typename?: 'Hall' }
    & Pick<Hall, 'id' | 'name' | 'city' | 'street' | 'number'>
    & { locations: Array<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'name' | 'color'>
    )> }
  ), teacher: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName'>
  ) }
);

export type GroupsLessonsScheduleQueryVariables = Exact<{
  locationId?: Maybe<Scalars['Int']>;
  time?: Maybe<LessonTime>;
  days?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
  skillLevel?: Maybe<SkillLevel>;
  lessonType?: Maybe<LessonType>;
}>;


export type GroupsLessonsScheduleQuery = (
  { __typename?: 'Query' }
  & { groupsLessonsSchedule?: Maybe<Array<(
    { __typename?: 'Group' }
    & GroupsScheduleDataFragment
  )>> }
);

export type GroupsFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupsFilterQuery = (
  { __typename?: 'Query' }
  & { groupsFilter: Array<(
    { __typename?: 'GroupFilter' }
    & Pick<GroupFilter, 'name' | 'value'>
  )>, locations: Array<(
    { __typename?: 'Location' }
    & Pick<Location, 'id' | 'name'>
  )> }
);

export type IndividualScheduleDataFragment = (
  { __typename?: 'LessonTemplate' }
  & Pick<LessonTemplate, 'id' | 'weekday' | 'time' | 'type' | 'level' | 'duration'>
  & { hall: (
    { __typename?: 'Hall' }
    & Pick<Hall, 'id' | 'name' | 'city' | 'street' | 'number'>
    & { locations: Array<(
      { __typename?: 'Location' }
      & Pick<Location, 'id' | 'name' | 'color'>
    )> }
  ), teacher?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName'>
  )> }
);

export type IndividualLessonsScheduleQueryVariables = Exact<{
  locationId?: Maybe<Scalars['Int']>;
  time?: Maybe<LessonTime>;
  skillLevel?: Maybe<SkillLevel>;
  lessonType?: Maybe<LessonType>;
}>;


export type IndividualLessonsScheduleQuery = (
  { __typename?: 'Query' }
  & { individualLessonsSchedule?: Maybe<Array<(
    { __typename?: 'LessonTemplate' }
    & IndividualScheduleDataFragment
  )>> }
);

export type IndividualFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type IndividualFilterQuery = (
  { __typename?: 'Query' }
  & { locations: Array<(
    { __typename?: 'Location' }
    & Pick<Location, 'id' | 'name'>
  )> }
);

export type MyScheduleQueryVariables = Exact<{
  year: Scalars['Int'];
  week: Scalars['Int'];
}>;


export type MyScheduleQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { student: (
      { __typename?: 'Student' }
      & { schedule: Array<(
        { __typename?: 'Lesson' }
        & Pick<Lesson, 'id' | 'time' | 'type'>
        & { level: Lesson['skillLevel'] }
        & { hall: (
          { __typename?: 'Hall' }
          & Pick<Hall, 'id' | 'name' | 'city' | 'street' | 'number'>
          & { locations: Array<(
            { __typename?: 'Location' }
            & Pick<Location, 'id' | 'name' | 'color'>
          )> }
        ), teacher: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'firstName' | 'lastName'>
        ), lessonTemplate: (
          { __typename?: 'LessonTemplate' }
          & Pick<LessonTemplate, 'id' | 'weekday'>
        ) }
      )> }
    ) }
  )> }
);

export type UpdatePersonalDataMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  birthday?: Maybe<Scalars['Date']>;
  instagram?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  verificationCode?: Maybe<Scalars['String']>;
}>;


export type UpdatePersonalDataMutation = (
  { __typename?: 'Mutations' }
  & { updateProfile?: Maybe<(
    { __typename?: 'UpdateProfile' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'birthday' | 'instagram' | 'phoneNumber' | 'avatarUrl'>
    )>, errors?: Maybe<Array<Maybe<(
      { __typename?: 'Error' }
      & ErrorsDataFragment
    )>>> }
  )> }
);

export type SendPhoneVerificationCodeMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
}>;


export type SendPhoneVerificationCodeMutation = (
  { __typename?: 'Mutations' }
  & { sendPhoneVerificationCode?: Maybe<(
    { __typename?: 'SendPhoneVerificationCode' }
    & { errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorsDataFragment
    )>> }
  )> }
);

export type PersonalDataQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonalDataQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'phoneNumber' | 'avatarUrl' | 'instagram' | 'birthday'>
  )> }
);

export type StudentSubscriptionQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentSubscriptionQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { student: (
      { __typename?: 'Student' }
      & { purchasedLessonSubscriptions: Array<(
        { __typename?: 'PurchasedLessonSubscription' }
        & Pick<PurchasedLessonSubscription, 'id' | 'freezeUsed' | 'lessonsUsed' | 'movementsUsed' | 'expireAt'>
        & { lessonSubscription: (
          { __typename?: 'LessonSubscription' }
          & Pick<LessonSubscription, 'id' | 'name' | 'lessonsCount' | 'movesCount' | 'freezeDaysCount'>
        ), schedule: Array<(
          { __typename?: 'LessonTemplate' }
          & Pick<LessonTemplate, 'id' | 'weekday' | 'time'>
          & { hall: (
            { __typename?: 'Hall' }
            & Pick<Hall, 'id' | 'name' | 'city' | 'street' | 'number'>
          ) }
        )> }
      )> }
    ) }
  )> }
);

export type TrialLessonsQueryVariables = Exact<{
  startDate: Scalars['Date'];
  endDate: Scalars['Date'];
  locationId?: Maybe<Scalars['Int']>;
  time?: Maybe<LessonTime>;
  skillLevel?: Maybe<SkillLevel>;
  lessonType?: Maybe<LessonType>;
}>;


export type TrialLessonsQuery = (
  { __typename?: 'Query' }
  & { trialLessons: Array<(
    { __typename?: 'VirtualLesson' }
    & Pick<VirtualLesson, 'id' | 'time' | 'type'>
    & { level: VirtualLesson['skillLevel'] }
    & { hall: (
      { __typename?: 'Hall' }
      & Pick<Hall, 'id' | 'name' | 'city' | 'street' | 'number'>
      & { locations: Array<(
        { __typename?: 'Location' }
        & Pick<Location, 'id' | 'name' | 'color'>
      )> }
    ), teacher: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName'>
    ), lessonTemplate: (
      { __typename?: 'LessonTemplate' }
      & Pick<LessonTemplate, 'id' | 'weekday'>
    ) }
  )> }
);

export type TrialFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type TrialFilterQuery = (
  { __typename?: 'Query' }
  & { locations: Array<(
    { __typename?: 'Location' }
    & Pick<Location, 'id' | 'name'>
  )> }
);

export type AddCommentOnStudentMutationVariables = Exact<{
  text: Scalars['String'];
  visitorId: Scalars['Int'];
}>;


export type AddCommentOnStudentMutation = (
  { __typename?: 'Mutations' }
  & { addUserCoachComment?: Maybe<(
    { __typename?: 'AddUserCoachComment' }
    & { comment: (
      { __typename?: 'UserCoachComment' }
      & StudentCardCommentFragment
    ), errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorsDataFragment
    )>> }
  )> }
);

export type CloseLessonButtonQueryVariables = Exact<{
  lessonId: Scalars['Int'];
}>;


export type CloseLessonButtonQuery = (
  { __typename?: 'Query' }
  & { lessonDetail?: Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'id' | 'isClosed'>
  )> }
);

export type CloseLessonMutationVariables = Exact<{
  lessonId: Scalars['Int'];
}>;


export type CloseLessonMutation = (
  { __typename?: 'Mutations' }
  & { closeLesson?: Maybe<(
    { __typename?: 'CloseLesson' }
    & { lesson?: Maybe<(
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'id' | 'isClosed'>
    )> }
  )> }
);

export type TeacherCurrentLessonIdQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherCurrentLessonIdQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { nearestLesson?: Maybe<(
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'id'>
    )> }
  )> }
);

export type TeacherCurrentLessonDetailCardQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherCurrentLessonDetailCardQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { nearestLesson?: Maybe<(
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'id' | 'time' | 'duration' | 'skillLevel'>
      & { hall: (
        { __typename?: 'Hall' }
        & Pick<Hall, 'id' | 'street' | 'number'>
      ) }
      & LessonDetailVisitAnalyticsFragment
    )> }
  )> }
);

export type TeacherLessonDetailCardByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type TeacherLessonDetailCardByIdQuery = (
  { __typename?: 'Query' }
  & { lessonDetail?: Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'id' | 'time' | 'duration' | 'skillLevel' | 'isClosed'>
    & { hall: (
      { __typename?: 'Hall' }
      & Pick<Hall, 'id' | 'street' | 'number'>
    ) }
    & LessonDetailVisitAnalyticsFragment
  )> }
);

export type LessonDetailStudentsListQueryVariables = Exact<{
  lessonId: Scalars['Int'];
}>;


export type LessonDetailStudentsListQuery = (
  { __typename?: 'Query' }
  & { lessonDetail?: Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'id' | 'isClosed'>
    & { visitors: Array<(
      { __typename?: 'LessonVisitor' }
      & Pick<LessonVisitor, 'id' | 'visited' | 'isFirstVisit' | 'paidOnline' | 'payAmount' | 'paidOnLesson'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'avatarUrl'>
      ) }
    )> }
    & LessonDetailVisitAnalyticsFragment
  )> }
);

export type NavProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type NavProfileQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'avatarUrl'>
  )> }
);

export type TeacherNextLessonQueryVariables = Exact<{ [key: string]: never; }>;


export type TeacherNextLessonQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { nearestLesson?: Maybe<(
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'id' | 'time' | 'duration' | 'skillLevel'>
      & { hall: (
        { __typename?: 'Hall' }
        & Pick<Hall, 'id' | 'city' | 'street' | 'number'>
      ) }
    )> }
  )> }
);

export type TeacherScheduleAggregationsQueryVariables = Exact<{
  groupBy: LessonAggregationPeriods;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
}>;


export type TeacherScheduleAggregationsQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { lessonsPeriodAggregation?: Maybe<(
      { __typename?: 'LessonPeriodAggregationConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'LessonPeriodAggregationEdge' }
        & Pick<LessonPeriodAggregationEdge, 'cursor'>
        & { node?: Maybe<(
          { __typename?: 'LessonPeriodAggregation' }
          & Pick<LessonPeriodAggregation, 'lessonsCount' | 'individualLessonsCount' | 'groupLessonsCount' | 'startDate'>
        )> }
      )>>, pageInfo: (
        { __typename?: 'PageInfo' }
        & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
      ) }
    )> }
  )> }
);

export type TeacherScheduleDaysQueryVariables = Exact<{
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
}>;


export type TeacherScheduleDaysQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { lessons?: Maybe<(
      { __typename?: 'LessonConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'LessonEdge' }
        & { node?: Maybe<(
          { __typename?: 'Lesson' }
          & Pick<Lesson, 'id' | 'bookingPlacesCount' | 'trialPlacesCount' | 'time'>
          & { visitAnalytics: (
            { __typename?: 'VisitAnalytics' }
            & Pick<VisitAnalytics, 'inAll' | 'shouldPresent' | 'notPaid' | 'trialLesson' | 'willAbsent'>
          ), hall: (
            { __typename?: 'Hall' }
            & Pick<Hall, 'id' | 'street' | 'number'>
          ) }
        )> }
      )>>, pageInfo: (
        { __typename?: 'PageInfo' }
        & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
      ) }
    )> }
  )> }
);

export type StudentCoachCommentQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type StudentCoachCommentQuery = (
  { __typename?: 'Query' }
  & { lessonVisitor: (
    { __typename?: 'LessonVisitor' }
    & Pick<LessonVisitor, 'id'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
      & { coachComments: Array<(
        { __typename?: 'UserCoachComment' }
        & Pick<UserCoachComment, 'id' | 'text'>
        & { commentator: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'firstName' | 'lastName'>
        ) }
      )> }
    ) }
  ) }
);

export type VisitorTogglePaymentMutationVariables = Exact<{
  visitorId: Scalars['Int'];
  isPaid: Scalars['Boolean'];
}>;


export type VisitorTogglePaymentMutation = (
  { __typename?: 'Mutations' }
  & { togglePayment?: Maybe<(
    { __typename?: 'TogglePayment' }
    & { lessonVisitor?: Maybe<(
      { __typename?: 'LessonVisitor' }
      & Pick<LessonVisitor, 'id' | 'paidOnLesson'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorsDataFragment
    )>> }
  )> }
);

export type VisitorToggleVisitMutationVariables = Exact<{
  visitorId: Scalars['Int'];
  isVisited: Scalars['Boolean'];
}>;


export type VisitorToggleVisitMutation = (
  { __typename?: 'Mutations' }
  & { toggleVisit?: Maybe<(
    { __typename?: 'ToggleVisit' }
    & { lessonVisitor?: Maybe<(
      { __typename?: 'LessonVisitor' }
      & Pick<LessonVisitor, 'id' | 'visited'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorsDataFragment
    )>> }
  )> }
);

export type ErrorsDataFragment = (
  { __typename?: 'Error' }
  & Pick<Error, 'field'>
  & { errors: Array<(
    { __typename?: 'FieldError' }
    & Pick<FieldError, 'code' | 'message'>
  )> }
);

export type LessonDetailVisitAnalyticsFragment = (
  { __typename?: 'Lesson' }
  & { visitAnalytics: (
    { __typename?: 'VisitAnalytics' }
    & Pick<VisitAnalytics, 'inAll' | 'shouldPresent' | 'notPaid' | 'trialLesson' | 'willAbsent'>
  ) }
);

export type StudentCardCommentFragment = (
  { __typename?: 'UserCoachComment' }
  & Pick<UserCoachComment, 'id' | 'text'>
  & { commentator: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName'>
  ) }
);

export type LessonSubscriptionDataFragment = (
  { __typename?: 'LessonSubscription' }
  & Pick<LessonSubscription, 'id' | 'name' | 'description' | 'lessonsCount' | 'movesCount' | 'freezeDaysCount' | 'price' | 'available'>
);

export type HallDetailsFragment = (
  { __typename?: 'Hall' }
  & Pick<Hall, 'id' | 'name' | 'city' | 'street' | 'number'>
);

export type GenericPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GenericPageQuery = (
  { __typename?: 'Query' }
  & { page?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'seoTitle' | 'seoDescription' | 'title' | 'subtitle' | 'content'>
  )> }
);

export type LoginCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type LoginCheckQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export const RegisterResultInfoFragmentDoc = gql`
    fragment RegisterResultInfo on RegisterUser {
  user {
    id
    isCoach
  }
  errors {
    field
    errors {
      code
      message
    }
  }
}
    `;
export const GroupsScheduleDataFragmentDoc = gql`
    fragment GroupsScheduleData on Group {
  id
  days
  hall {
    id
    name
    city
    street
    number
    locations {
      id
      name
      color
    }
  }
  time
  type
  level
  teacher {
    id
    firstName
    lastName
  }
}
    `;
export const IndividualScheduleDataFragmentDoc = gql`
    fragment IndividualScheduleData on LessonTemplate {
  id
  hall {
    id
    name
    city
    street
    number
    locations {
      id
      name
      color
    }
  }
  weekday
  time
  type
  level
  duration
  teacher {
    id
    firstName
    lastName
  }
}
    `;
export const ErrorsDataFragmentDoc = gql`
    fragment errorsData on Error {
  field
  errors {
    code
    message
  }
}
    `;
export const LessonDetailVisitAnalyticsFragmentDoc = gql`
    fragment lessonDetailVisitAnalytics on Lesson {
  visitAnalytics {
    inAll
    shouldPresent
    notPaid
    trialLesson
    willAbsent
  }
}
    `;
export const StudentCardCommentFragmentDoc = gql`
    fragment studentCardComment on UserCoachComment {
  id
  commentator {
    id
    firstName
    lastName
  }
  text
}
    `;
export const LessonSubscriptionDataFragmentDoc = gql`
    fragment LessonSubscriptionData on LessonSubscription {
  id
  name
  description
  lessonsCount
  movesCount
  freezeDaysCount
  price
  available
}
    `;
export const HallDetailsFragmentDoc = gql`
    fragment HallDetails on Hall {
  id
  name
  city
  street
  number
}
    `;
export const ScheduleDocument = gql`
    query Schedule {
  lessonTemplates {
    id
    hall {
      id
      name
      street
      number
      locations {
        id
        name
        color
        priority
      }
    }
    weekday
    time
    type
    level
  }
}
    `;

/**
 * __useScheduleQuery__
 *
 * To run a query within a React component, call `useScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScheduleQuery({
 *   variables: {
 *   },
 * });
 */
export function useScheduleQuery(baseOptions?: Apollo.QueryHookOptions<ScheduleQuery, ScheduleQueryVariables>) {
        return Apollo.useQuery<ScheduleQuery, ScheduleQueryVariables>(ScheduleDocument, baseOptions);
      }
export function useScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScheduleQuery, ScheduleQueryVariables>) {
          return Apollo.useLazyQuery<ScheduleQuery, ScheduleQueryVariables>(ScheduleDocument, baseOptions);
        }
export type ScheduleQueryHookResult = ReturnType<typeof useScheduleQuery>;
export type ScheduleLazyQueryHookResult = ReturnType<typeof useScheduleLazyQuery>;
export type ScheduleQueryResult = Apollo.QueryResult<ScheduleQuery, ScheduleQueryVariables>;
export const LoginDocument = gql`
    mutation Login($login: String!, $password: String!) {
  authenticate(login: $login, password: $password) {
    user {
      id
      isCoach
    }
    errors {
      field
      errors {
        code
        message
      }
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      login: // value for 'login'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($firstName: String!, $lastName: String!, $phoneNumber: String!, $password: String!) {
  registerUser(
    firstName: $firstName
    lastName: $lastName
    phoneNumber: $phoneNumber
    password: $password
  ) {
    ...RegisterResultInfo
  }
}
    ${RegisterResultInfoFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      phoneNumber: // value for 'phoneNumber'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RegisterSocialDocument = gql`
    mutation RegisterSocial($accessToken: String!, $socialType: SocialAuthProviderEnum!, $phoneNumber: String!, $password: String!) {
  registerUser(
    accessToken: $accessToken
    socialType: $socialType
    phoneNumber: $phoneNumber
    password: $password
  ) {
    ...RegisterResultInfo
  }
}
    ${RegisterResultInfoFragmentDoc}`;
export type RegisterSocialMutationFn = Apollo.MutationFunction<RegisterSocialMutation, RegisterSocialMutationVariables>;

/**
 * __useRegisterSocialMutation__
 *
 * To run a mutation, you first call `useRegisterSocialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterSocialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerSocialMutation, { data, loading, error }] = useRegisterSocialMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *      socialType: // value for 'socialType'
 *      phoneNumber: // value for 'phoneNumber'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterSocialMutation(baseOptions?: Apollo.MutationHookOptions<RegisterSocialMutation, RegisterSocialMutationVariables>) {
        return Apollo.useMutation<RegisterSocialMutation, RegisterSocialMutationVariables>(RegisterSocialDocument, baseOptions);
      }
export type RegisterSocialMutationHookResult = ReturnType<typeof useRegisterSocialMutation>;
export type RegisterSocialMutationResult = Apollo.MutationResult<RegisterSocialMutation>;
export type RegisterSocialMutationOptions = Apollo.BaseMutationOptions<RegisterSocialMutation, RegisterSocialMutationVariables>;
export const SendPasswordSmsDocument = gql`
    mutation SendPasswordSMS($phoneNumber: String!) {
  sendPasswordSms(phoneNumber: $phoneNumber) {
    isSuccess
    errors {
      field
      errors {
        code
        message
      }
    }
  }
}
    `;
export type SendPasswordSmsMutationFn = Apollo.MutationFunction<SendPasswordSmsMutation, SendPasswordSmsMutationVariables>;

/**
 * __useSendPasswordSmsMutation__
 *
 * To run a mutation, you first call `useSendPasswordSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendPasswordSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendPasswordSmsMutation, { data, loading, error }] = useSendPasswordSmsMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useSendPasswordSmsMutation(baseOptions?: Apollo.MutationHookOptions<SendPasswordSmsMutation, SendPasswordSmsMutationVariables>) {
        return Apollo.useMutation<SendPasswordSmsMutation, SendPasswordSmsMutationVariables>(SendPasswordSmsDocument, baseOptions);
      }
export type SendPasswordSmsMutationHookResult = ReturnType<typeof useSendPasswordSmsMutation>;
export type SendPasswordSmsMutationResult = Apollo.MutationResult<SendPasswordSmsMutation>;
export type SendPasswordSmsMutationOptions = Apollo.BaseMutationOptions<SendPasswordSmsMutation, SendPasswordSmsMutationVariables>;
export const SendVerificationCodeDocument = gql`
    mutation SendVerificationCode($phoneNumber: String!) {
  sendPhoneVerificationCode(phoneNumber: $phoneNumber) {
    errors {
      field
      errors {
        code
        message
      }
    }
  }
}
    `;
export type SendVerificationCodeMutationFn = Apollo.MutationFunction<SendVerificationCodeMutation, SendVerificationCodeMutationVariables>;

/**
 * __useSendVerificationCodeMutation__
 *
 * To run a mutation, you first call `useSendVerificationCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendVerificationCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendVerificationCodeMutation, { data, loading, error }] = useSendVerificationCodeMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useSendVerificationCodeMutation(baseOptions?: Apollo.MutationHookOptions<SendVerificationCodeMutation, SendVerificationCodeMutationVariables>) {
        return Apollo.useMutation<SendVerificationCodeMutation, SendVerificationCodeMutationVariables>(SendVerificationCodeDocument, baseOptions);
      }
export type SendVerificationCodeMutationHookResult = ReturnType<typeof useSendVerificationCodeMutation>;
export type SendVerificationCodeMutationResult = Apollo.MutationResult<SendVerificationCodeMutation>;
export type SendVerificationCodeMutationOptions = Apollo.BaseMutationOptions<SendVerificationCodeMutation, SendVerificationCodeMutationVariables>;
export const VerifyCodeDocument = gql`
    mutation VerifyCode($phoneNumber: String!, $verificationCode: String!) {
  verifyNumber(password: $verificationCode, phoneNumber: $phoneNumber) {
    errors {
      field
      errors {
        code
        message
      }
    }
  }
}
    `;
export type VerifyCodeMutationFn = Apollo.MutationFunction<VerifyCodeMutation, VerifyCodeMutationVariables>;

/**
 * __useVerifyCodeMutation__
 *
 * To run a mutation, you first call `useVerifyCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyCodeMutation, { data, loading, error }] = useVerifyCodeMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *      verificationCode: // value for 'verificationCode'
 *   },
 * });
 */
export function useVerifyCodeMutation(baseOptions?: Apollo.MutationHookOptions<VerifyCodeMutation, VerifyCodeMutationVariables>) {
        return Apollo.useMutation<VerifyCodeMutation, VerifyCodeMutationVariables>(VerifyCodeDocument, baseOptions);
      }
export type VerifyCodeMutationHookResult = ReturnType<typeof useVerifyCodeMutation>;
export type VerifyCodeMutationResult = Apollo.MutationResult<VerifyCodeMutation>;
export type VerifyCodeMutationOptions = Apollo.BaseMutationOptions<VerifyCodeMutation, VerifyCodeMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($phoneNumber: String!, $verificationCode: String!, $password: String!) {
  resetPassword(
    phoneNumber: $phoneNumber
    verificationCode: $verificationCode
    password: $password
  ) {
    errors {
      field
      errors {
        code
        message
      }
    }
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *      verificationCode: // value for 'verificationCode'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SocialLoginDocument = gql`
    mutation SocialLogin($accessToken: String!, $socialType: SocialAuthProviderEnum!) {
  socialAuthenticateUser(accessToken: $accessToken, socialType: $socialType) {
    user {
      id
      isCoach
    }
    registrationRequired
  }
}
    `;
export type SocialLoginMutationFn = Apollo.MutationFunction<SocialLoginMutation, SocialLoginMutationVariables>;

/**
 * __useSocialLoginMutation__
 *
 * To run a mutation, you first call `useSocialLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSocialLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [socialLoginMutation, { data, loading, error }] = useSocialLoginMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *      socialType: // value for 'socialType'
 *   },
 * });
 */
export function useSocialLoginMutation(baseOptions?: Apollo.MutationHookOptions<SocialLoginMutation, SocialLoginMutationVariables>) {
        return Apollo.useMutation<SocialLoginMutation, SocialLoginMutationVariables>(SocialLoginDocument, baseOptions);
      }
export type SocialLoginMutationHookResult = ReturnType<typeof useSocialLoginMutation>;
export type SocialLoginMutationResult = Apollo.MutationResult<SocialLoginMutation>;
export type SocialLoginMutationOptions = Apollo.BaseMutationOptions<SocialLoginMutation, SocialLoginMutationVariables>;
export const NewsArticlePageDocument = gql`
    query NewsArticlePage($id: Int!) {
  article(id: $id) {
    id
    slug
    title
    image
    content
    author
    createdAt
    tags {
      id
      slug
      name
    }
    similarArticles {
      id
      slug
      title
      thumbnail
      createdAt
      category {
        slug
        id
      }
    }
    meta {
      title
      description
    }
  }
}
    `;

/**
 * __useNewsArticlePageQuery__
 *
 * To run a query within a React component, call `useNewsArticlePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsArticlePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsArticlePageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNewsArticlePageQuery(baseOptions: Apollo.QueryHookOptions<NewsArticlePageQuery, NewsArticlePageQueryVariables>) {
        return Apollo.useQuery<NewsArticlePageQuery, NewsArticlePageQueryVariables>(NewsArticlePageDocument, baseOptions);
      }
export function useNewsArticlePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsArticlePageQuery, NewsArticlePageQueryVariables>) {
          return Apollo.useLazyQuery<NewsArticlePageQuery, NewsArticlePageQueryVariables>(NewsArticlePageDocument, baseOptions);
        }
export type NewsArticlePageQueryHookResult = ReturnType<typeof useNewsArticlePageQuery>;
export type NewsArticlePageLazyQueryHookResult = ReturnType<typeof useNewsArticlePageLazyQuery>;
export type NewsArticlePageQueryResult = Apollo.QueryResult<NewsArticlePageQuery, NewsArticlePageQueryVariables>;
export const NewsCategoryPageDocument = gql`
    query NewsCategoryPage($slug: String!) {
  newsCategory(slug: $slug) {
    id
    meta {
      title
      description
    }
    slug
    name
    description
  }
}
    `;

/**
 * __useNewsCategoryPageQuery__
 *
 * To run a query within a React component, call `useNewsCategoryPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsCategoryPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsCategoryPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useNewsCategoryPageQuery(baseOptions: Apollo.QueryHookOptions<NewsCategoryPageQuery, NewsCategoryPageQueryVariables>) {
        return Apollo.useQuery<NewsCategoryPageQuery, NewsCategoryPageQueryVariables>(NewsCategoryPageDocument, baseOptions);
      }
export function useNewsCategoryPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsCategoryPageQuery, NewsCategoryPageQueryVariables>) {
          return Apollo.useLazyQuery<NewsCategoryPageQuery, NewsCategoryPageQueryVariables>(NewsCategoryPageDocument, baseOptions);
        }
export type NewsCategoryPageQueryHookResult = ReturnType<typeof useNewsCategoryPageQuery>;
export type NewsCategoryPageLazyQueryHookResult = ReturnType<typeof useNewsCategoryPageLazyQuery>;
export type NewsCategoryPageQueryResult = Apollo.QueryResult<NewsCategoryPageQuery, NewsCategoryPageQueryVariables>;
export const NewsCategoryPageArticlesDocument = gql`
    query NewsCategoryPageArticles($slug: String!, $first: Int, $after: String) {
  articles(categorySlug: $slug, first: $first, after: $after) {
    edges {
      node {
        id
        slug
        title
        thumbnail
        createdAt
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;

/**
 * __useNewsCategoryPageArticlesQuery__
 *
 * To run a query within a React component, call `useNewsCategoryPageArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsCategoryPageArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsCategoryPageArticlesQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useNewsCategoryPageArticlesQuery(baseOptions: Apollo.QueryHookOptions<NewsCategoryPageArticlesQuery, NewsCategoryPageArticlesQueryVariables>) {
        return Apollo.useQuery<NewsCategoryPageArticlesQuery, NewsCategoryPageArticlesQueryVariables>(NewsCategoryPageArticlesDocument, baseOptions);
      }
export function useNewsCategoryPageArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsCategoryPageArticlesQuery, NewsCategoryPageArticlesQueryVariables>) {
          return Apollo.useLazyQuery<NewsCategoryPageArticlesQuery, NewsCategoryPageArticlesQueryVariables>(NewsCategoryPageArticlesDocument, baseOptions);
        }
export type NewsCategoryPageArticlesQueryHookResult = ReturnType<typeof useNewsCategoryPageArticlesQuery>;
export type NewsCategoryPageArticlesLazyQueryHookResult = ReturnType<typeof useNewsCategoryPageArticlesLazyQuery>;
export type NewsCategoryPageArticlesQueryResult = Apollo.QueryResult<NewsCategoryPageArticlesQuery, NewsCategoryPageArticlesQueryVariables>;
export const NewsPageDocument = gql`
    query NewsPage {
  newsCategories(first: 20) {
    edges {
      node {
        id
        slug
        name
        lastArticles {
          id
          slug
          thumbnail
          createdAt
          title
        }
      }
    }
  }
}
    `;

/**
 * __useNewsPageQuery__
 *
 * To run a query within a React component, call `useNewsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewsPageQuery(baseOptions?: Apollo.QueryHookOptions<NewsPageQuery, NewsPageQueryVariables>) {
        return Apollo.useQuery<NewsPageQuery, NewsPageQueryVariables>(NewsPageDocument, baseOptions);
      }
export function useNewsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsPageQuery, NewsPageQueryVariables>) {
          return Apollo.useLazyQuery<NewsPageQuery, NewsPageQueryVariables>(NewsPageDocument, baseOptions);
        }
export type NewsPageQueryHookResult = ReturnType<typeof useNewsPageQuery>;
export type NewsPageLazyQueryHookResult = ReturnType<typeof useNewsPageLazyQuery>;
export type NewsPageQueryResult = Apollo.QueryResult<NewsPageQuery, NewsPageQueryVariables>;
export const SendResumeDocument = gql`
    mutation SendResume($firstName: String!, $email: String!, $phoneNumber: String!, $resume: Upload!) {
  sendResume(
    firstName: $firstName
    email: $email
    phoneNumber: $phoneNumber
    resume: $resume
  ) {
    errors {
      field
      errors {
        message
        code
      }
    }
  }
}
    `;
export type SendResumeMutationFn = Apollo.MutationFunction<SendResumeMutation, SendResumeMutationVariables>;

/**
 * __useSendResumeMutation__
 *
 * To run a mutation, you first call `useSendResumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendResumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendResumeMutation, { data, loading, error }] = useSendResumeMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      email: // value for 'email'
 *      phoneNumber: // value for 'phoneNumber'
 *      resume: // value for 'resume'
 *   },
 * });
 */
export function useSendResumeMutation(baseOptions?: Apollo.MutationHookOptions<SendResumeMutation, SendResumeMutationVariables>) {
        return Apollo.useMutation<SendResumeMutation, SendResumeMutationVariables>(SendResumeDocument, baseOptions);
      }
export type SendResumeMutationHookResult = ReturnType<typeof useSendResumeMutation>;
export type SendResumeMutationResult = Apollo.MutationResult<SendResumeMutation>;
export type SendResumeMutationOptions = Apollo.BaseMutationOptions<SendResumeMutation, SendResumeMutationVariables>;
export const HallDetailsDocument = gql`
    query HallDetails {
  halls {
    ...HallDetails
  }
}
    ${HallDetailsFragmentDoc}`;

/**
 * __useHallDetailsQuery__
 *
 * To run a query within a React component, call `useHallDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHallDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHallDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHallDetailsQuery(baseOptions?: Apollo.QueryHookOptions<HallDetailsQuery, HallDetailsQueryVariables>) {
        return Apollo.useQuery<HallDetailsQuery, HallDetailsQueryVariables>(HallDetailsDocument, baseOptions);
      }
export function useHallDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HallDetailsQuery, HallDetailsQueryVariables>) {
          return Apollo.useLazyQuery<HallDetailsQuery, HallDetailsQueryVariables>(HallDetailsDocument, baseOptions);
        }
export type HallDetailsQueryHookResult = ReturnType<typeof useHallDetailsQuery>;
export type HallDetailsLazyQueryHookResult = ReturnType<typeof useHallDetailsLazyQuery>;
export type HallDetailsQueryResult = Apollo.QueryResult<HallDetailsQuery, HallDetailsQueryVariables>;
export const HallsListDocument = gql`
    query HallsList {
  halls {
    ...HallDetails
  }
}
    ${HallDetailsFragmentDoc}`;

/**
 * __useHallsListQuery__
 *
 * To run a query within a React component, call `useHallsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useHallsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHallsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useHallsListQuery(baseOptions?: Apollo.QueryHookOptions<HallsListQuery, HallsListQueryVariables>) {
        return Apollo.useQuery<HallsListQuery, HallsListQueryVariables>(HallsListDocument, baseOptions);
      }
export function useHallsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HallsListQuery, HallsListQueryVariables>) {
          return Apollo.useLazyQuery<HallsListQuery, HallsListQueryVariables>(HallsListDocument, baseOptions);
        }
export type HallsListQueryHookResult = ReturnType<typeof useHallsListQuery>;
export type HallsListLazyQueryHookResult = ReturnType<typeof useHallsListLazyQuery>;
export type HallsListQueryResult = Apollo.QueryResult<HallsListQuery, HallsListQueryVariables>;
export const HallsMapDocument = gql`
    query HallsMap {
  halls {
    id
    street
    number
    lat
    lng
    images
    nearestLessonsTemplates {
      id
      weekday
      time
      type
      level
    }
  }
}
    `;

/**
 * __useHallsMapQuery__
 *
 * To run a query within a React component, call `useHallsMapQuery` and pass it any options that fit your needs.
 * When your component renders, `useHallsMapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHallsMapQuery({
 *   variables: {
 *   },
 * });
 */
export function useHallsMapQuery(baseOptions?: Apollo.QueryHookOptions<HallsMapQuery, HallsMapQueryVariables>) {
        return Apollo.useQuery<HallsMapQuery, HallsMapQueryVariables>(HallsMapDocument, baseOptions);
      }
export function useHallsMapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HallsMapQuery, HallsMapQueryVariables>) {
          return Apollo.useLazyQuery<HallsMapQuery, HallsMapQueryVariables>(HallsMapDocument, baseOptions);
        }
export type HallsMapQueryHookResult = ReturnType<typeof useHallsMapQuery>;
export type HallsMapLazyQueryHookResult = ReturnType<typeof useHallsMapLazyQuery>;
export type HallsMapQueryResult = Apollo.QueryResult<HallsMapQuery, HallsMapQueryVariables>;
export const OfflineSubscriptionsListDocument = gql`
    query OfflineSubscriptionsList {
  ballet: lessonSubscriptions(forPointe: false) {
    ...LessonSubscriptionData
  }
  pointe: lessonSubscriptions(forPointe: true) {
    ...LessonSubscriptionData
  }
}
    ${LessonSubscriptionDataFragmentDoc}`;

/**
 * __useOfflineSubscriptionsListQuery__
 *
 * To run a query within a React component, call `useOfflineSubscriptionsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfflineSubscriptionsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfflineSubscriptionsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useOfflineSubscriptionsListQuery(baseOptions?: Apollo.QueryHookOptions<OfflineSubscriptionsListQuery, OfflineSubscriptionsListQueryVariables>) {
        return Apollo.useQuery<OfflineSubscriptionsListQuery, OfflineSubscriptionsListQueryVariables>(OfflineSubscriptionsListDocument, baseOptions);
      }
export function useOfflineSubscriptionsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfflineSubscriptionsListQuery, OfflineSubscriptionsListQueryVariables>) {
          return Apollo.useLazyQuery<OfflineSubscriptionsListQuery, OfflineSubscriptionsListQueryVariables>(OfflineSubscriptionsListDocument, baseOptions);
        }
export type OfflineSubscriptionsListQueryHookResult = ReturnType<typeof useOfflineSubscriptionsListQuery>;
export type OfflineSubscriptionsListLazyQueryHookResult = ReturnType<typeof useOfflineSubscriptionsListLazyQuery>;
export type OfflineSubscriptionsListQueryResult = Apollo.QueryResult<OfflineSubscriptionsListQuery, OfflineSubscriptionsListQueryVariables>;
export const ChangePasswordFormDocument = gql`
    mutation ChangePasswordForm($newPassword: String!) {
  changePassword(newPassword: $newPassword) {
    errors {
      ...errorsData
    }
  }
}
    ${ErrorsDataFragmentDoc}`;
export type ChangePasswordFormMutationFn = Apollo.MutationFunction<ChangePasswordFormMutation, ChangePasswordFormMutationVariables>;

/**
 * __useChangePasswordFormMutation__
 *
 * To run a mutation, you first call `useChangePasswordFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordFormMutation, { data, loading, error }] = useChangePasswordFormMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordFormMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordFormMutation, ChangePasswordFormMutationVariables>) {
        return Apollo.useMutation<ChangePasswordFormMutation, ChangePasswordFormMutationVariables>(ChangePasswordFormDocument, baseOptions);
      }
export type ChangePasswordFormMutationHookResult = ReturnType<typeof useChangePasswordFormMutation>;
export type ChangePasswordFormMutationResult = Apollo.MutationResult<ChangePasswordFormMutation>;
export type ChangePasswordFormMutationOptions = Apollo.BaseMutationOptions<ChangePasswordFormMutation, ChangePasswordFormMutationVariables>;
export const CheckoutStartDateInputInfoDocument = gql`
    query CheckoutStartDateInputInfo($groupId: Int, $lessonTemplatesIds: [Int!]) {
  subscriptionStartDates(
    groupId: $groupId
    lessonTemplatesIds: $lessonTemplatesIds
  )
}
    `;

/**
 * __useCheckoutStartDateInputInfoQuery__
 *
 * To run a query within a React component, call `useCheckoutStartDateInputInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckoutStartDateInputInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckoutStartDateInputInfoQuery({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      lessonTemplatesIds: // value for 'lessonTemplatesIds'
 *   },
 * });
 */
export function useCheckoutStartDateInputInfoQuery(baseOptions?: Apollo.QueryHookOptions<CheckoutStartDateInputInfoQuery, CheckoutStartDateInputInfoQueryVariables>) {
        return Apollo.useQuery<CheckoutStartDateInputInfoQuery, CheckoutStartDateInputInfoQueryVariables>(CheckoutStartDateInputInfoDocument, baseOptions);
      }
export function useCheckoutStartDateInputInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckoutStartDateInputInfoQuery, CheckoutStartDateInputInfoQueryVariables>) {
          return Apollo.useLazyQuery<CheckoutStartDateInputInfoQuery, CheckoutStartDateInputInfoQueryVariables>(CheckoutStartDateInputInfoDocument, baseOptions);
        }
export type CheckoutStartDateInputInfoQueryHookResult = ReturnType<typeof useCheckoutStartDateInputInfoQuery>;
export type CheckoutStartDateInputInfoLazyQueryHookResult = ReturnType<typeof useCheckoutStartDateInputInfoLazyQuery>;
export type CheckoutStartDateInputInfoQueryResult = Apollo.QueryResult<CheckoutStartDateInputInfoQuery, CheckoutStartDateInputInfoQueryVariables>;
export const CreateGroupSubscriptionOrderDocument = gql`
    mutation CreateGroupSubscriptionOrder($groupId: Int!, $lessonSubscriptionId: Int!, $returnUrl: String!) {
  createLessonPurchaseOrder(
    groupId: $groupId
    lessonSubscriptionId: $lessonSubscriptionId
    returnUrl: $returnUrl
  ) {
    data
  }
}
    `;
export type CreateGroupSubscriptionOrderMutationFn = Apollo.MutationFunction<CreateGroupSubscriptionOrderMutation, CreateGroupSubscriptionOrderMutationVariables>;

/**
 * __useCreateGroupSubscriptionOrderMutation__
 *
 * To run a mutation, you first call `useCreateGroupSubscriptionOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupSubscriptionOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupSubscriptionOrderMutation, { data, loading, error }] = useCreateGroupSubscriptionOrderMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      lessonSubscriptionId: // value for 'lessonSubscriptionId'
 *      returnUrl: // value for 'returnUrl'
 *   },
 * });
 */
export function useCreateGroupSubscriptionOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupSubscriptionOrderMutation, CreateGroupSubscriptionOrderMutationVariables>) {
        return Apollo.useMutation<CreateGroupSubscriptionOrderMutation, CreateGroupSubscriptionOrderMutationVariables>(CreateGroupSubscriptionOrderDocument, baseOptions);
      }
export type CreateGroupSubscriptionOrderMutationHookResult = ReturnType<typeof useCreateGroupSubscriptionOrderMutation>;
export type CreateGroupSubscriptionOrderMutationResult = Apollo.MutationResult<CreateGroupSubscriptionOrderMutation>;
export type CreateGroupSubscriptionOrderMutationOptions = Apollo.BaseMutationOptions<CreateGroupSubscriptionOrderMutation, CreateGroupSubscriptionOrderMutationVariables>;
export const CreateIndividualSubscriptionOrderDocument = gql`
    mutation CreateIndividualSubscriptionOrder($lessonTemplatesIds: [Int!]!, $lessonSubscriptionId: Int!, $returnUrl: String!) {
  createLessonPurchaseOrder(
    lessonTemplatesIds: $lessonTemplatesIds
    lessonSubscriptionId: $lessonSubscriptionId
    returnUrl: $returnUrl
  ) {
    data
  }
}
    `;
export type CreateIndividualSubscriptionOrderMutationFn = Apollo.MutationFunction<CreateIndividualSubscriptionOrderMutation, CreateIndividualSubscriptionOrderMutationVariables>;

/**
 * __useCreateIndividualSubscriptionOrderMutation__
 *
 * To run a mutation, you first call `useCreateIndividualSubscriptionOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIndividualSubscriptionOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIndividualSubscriptionOrderMutation, { data, loading, error }] = useCreateIndividualSubscriptionOrderMutation({
 *   variables: {
 *      lessonTemplatesIds: // value for 'lessonTemplatesIds'
 *      lessonSubscriptionId: // value for 'lessonSubscriptionId'
 *      returnUrl: // value for 'returnUrl'
 *   },
 * });
 */
export function useCreateIndividualSubscriptionOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateIndividualSubscriptionOrderMutation, CreateIndividualSubscriptionOrderMutationVariables>) {
        return Apollo.useMutation<CreateIndividualSubscriptionOrderMutation, CreateIndividualSubscriptionOrderMutationVariables>(CreateIndividualSubscriptionOrderDocument, baseOptions);
      }
export type CreateIndividualSubscriptionOrderMutationHookResult = ReturnType<typeof useCreateIndividualSubscriptionOrderMutation>;
export type CreateIndividualSubscriptionOrderMutationResult = Apollo.MutationResult<CreateIndividualSubscriptionOrderMutation>;
export type CreateIndividualSubscriptionOrderMutationOptions = Apollo.BaseMutationOptions<CreateIndividualSubscriptionOrderMutation, CreateIndividualSubscriptionOrderMutationVariables>;
export const ChooseSubscriptionListDocument = gql`
    query ChooseSubscriptionList($forPointe: Boolean!) {
  viewer {
    id
    student {
      lessonSubscriptions(forPointe: $forPointe) {
        ...LessonSubscriptionData
      }
    }
  }
}
    ${LessonSubscriptionDataFragmentDoc}`;

/**
 * __useChooseSubscriptionListQuery__
 *
 * To run a query within a React component, call `useChooseSubscriptionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useChooseSubscriptionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChooseSubscriptionListQuery({
 *   variables: {
 *      forPointe: // value for 'forPointe'
 *   },
 * });
 */
export function useChooseSubscriptionListQuery(baseOptions: Apollo.QueryHookOptions<ChooseSubscriptionListQuery, ChooseSubscriptionListQueryVariables>) {
        return Apollo.useQuery<ChooseSubscriptionListQuery, ChooseSubscriptionListQueryVariables>(ChooseSubscriptionListDocument, baseOptions);
      }
export function useChooseSubscriptionListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChooseSubscriptionListQuery, ChooseSubscriptionListQueryVariables>) {
          return Apollo.useLazyQuery<ChooseSubscriptionListQuery, ChooseSubscriptionListQueryVariables>(ChooseSubscriptionListDocument, baseOptions);
        }
export type ChooseSubscriptionListQueryHookResult = ReturnType<typeof useChooseSubscriptionListQuery>;
export type ChooseSubscriptionListLazyQueryHookResult = ReturnType<typeof useChooseSubscriptionListLazyQuery>;
export type ChooseSubscriptionListQueryResult = Apollo.QueryResult<ChooseSubscriptionListQuery, ChooseSubscriptionListQueryVariables>;
export const CreateSubscriptionFreezingDocument = gql`
    mutation CreateSubscriptionFreezing($lessonPurchaseId: Int!, $startDate: Date!, $durationDays: Int!, $reference: Upload) {
  createSubscriptionFreezing(
    lessonPurchaseId: $lessonPurchaseId
    startDate: $startDate
    durationDays: $durationDays
    reference: $reference
  ) {
    errors {
      field
      errors {
        code
        message
      }
    }
  }
}
    `;
export type CreateSubscriptionFreezingMutationFn = Apollo.MutationFunction<CreateSubscriptionFreezingMutation, CreateSubscriptionFreezingMutationVariables>;

/**
 * __useCreateSubscriptionFreezingMutation__
 *
 * To run a mutation, you first call `useCreateSubscriptionFreezingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubscriptionFreezingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubscriptionFreezingMutation, { data, loading, error }] = useCreateSubscriptionFreezingMutation({
 *   variables: {
 *      lessonPurchaseId: // value for 'lessonPurchaseId'
 *      startDate: // value for 'startDate'
 *      durationDays: // value for 'durationDays'
 *      reference: // value for 'reference'
 *   },
 * });
 */
export function useCreateSubscriptionFreezingMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubscriptionFreezingMutation, CreateSubscriptionFreezingMutationVariables>) {
        return Apollo.useMutation<CreateSubscriptionFreezingMutation, CreateSubscriptionFreezingMutationVariables>(CreateSubscriptionFreezingDocument, baseOptions);
      }
export type CreateSubscriptionFreezingMutationHookResult = ReturnType<typeof useCreateSubscriptionFreezingMutation>;
export type CreateSubscriptionFreezingMutationResult = Apollo.MutationResult<CreateSubscriptionFreezingMutation>;
export type CreateSubscriptionFreezingMutationOptions = Apollo.BaseMutationOptions<CreateSubscriptionFreezingMutation, CreateSubscriptionFreezingMutationVariables>;
export const GroupsLessonsScheduleDocument = gql`
    query GroupsLessonsSchedule($locationId: Int, $time: LessonTime, $days: [Int!], $skillLevel: SkillLevel, $lessonType: LessonType) {
  groupsLessonsSchedule(
    locationId: $locationId
    time: $time
    days: $days
    skillLevel: $skillLevel
    lessonType: $lessonType
  ) {
    ...GroupsScheduleData
  }
}
    ${GroupsScheduleDataFragmentDoc}`;

/**
 * __useGroupsLessonsScheduleQuery__
 *
 * To run a query within a React component, call `useGroupsLessonsScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsLessonsScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsLessonsScheduleQuery({
 *   variables: {
 *      locationId: // value for 'locationId'
 *      time: // value for 'time'
 *      days: // value for 'days'
 *      skillLevel: // value for 'skillLevel'
 *      lessonType: // value for 'lessonType'
 *   },
 * });
 */
export function useGroupsLessonsScheduleQuery(baseOptions?: Apollo.QueryHookOptions<GroupsLessonsScheduleQuery, GroupsLessonsScheduleQueryVariables>) {
        return Apollo.useQuery<GroupsLessonsScheduleQuery, GroupsLessonsScheduleQueryVariables>(GroupsLessonsScheduleDocument, baseOptions);
      }
export function useGroupsLessonsScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupsLessonsScheduleQuery, GroupsLessonsScheduleQueryVariables>) {
          return Apollo.useLazyQuery<GroupsLessonsScheduleQuery, GroupsLessonsScheduleQueryVariables>(GroupsLessonsScheduleDocument, baseOptions);
        }
export type GroupsLessonsScheduleQueryHookResult = ReturnType<typeof useGroupsLessonsScheduleQuery>;
export type GroupsLessonsScheduleLazyQueryHookResult = ReturnType<typeof useGroupsLessonsScheduleLazyQuery>;
export type GroupsLessonsScheduleQueryResult = Apollo.QueryResult<GroupsLessonsScheduleQuery, GroupsLessonsScheduleQueryVariables>;
export const GroupsFilterDocument = gql`
    query GroupsFilter {
  groupsFilter {
    name
    value
  }
  locations {
    id
    name
  }
}
    `;

/**
 * __useGroupsFilterQuery__
 *
 * To run a query within a React component, call `useGroupsFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsFilterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGroupsFilterQuery(baseOptions?: Apollo.QueryHookOptions<GroupsFilterQuery, GroupsFilterQueryVariables>) {
        return Apollo.useQuery<GroupsFilterQuery, GroupsFilterQueryVariables>(GroupsFilterDocument, baseOptions);
      }
export function useGroupsFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupsFilterQuery, GroupsFilterQueryVariables>) {
          return Apollo.useLazyQuery<GroupsFilterQuery, GroupsFilterQueryVariables>(GroupsFilterDocument, baseOptions);
        }
export type GroupsFilterQueryHookResult = ReturnType<typeof useGroupsFilterQuery>;
export type GroupsFilterLazyQueryHookResult = ReturnType<typeof useGroupsFilterLazyQuery>;
export type GroupsFilterQueryResult = Apollo.QueryResult<GroupsFilterQuery, GroupsFilterQueryVariables>;
export const IndividualLessonsScheduleDocument = gql`
    query IndividualLessonsSchedule($locationId: Int, $time: LessonTime, $skillLevel: SkillLevel, $lessonType: LessonType) {
  individualLessonsSchedule(
    locationId: $locationId
    time: $time
    skillLevel: $skillLevel
    lessonType: $lessonType
  ) {
    ...IndividualScheduleData
  }
}
    ${IndividualScheduleDataFragmentDoc}`;

/**
 * __useIndividualLessonsScheduleQuery__
 *
 * To run a query within a React component, call `useIndividualLessonsScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndividualLessonsScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndividualLessonsScheduleQuery({
 *   variables: {
 *      locationId: // value for 'locationId'
 *      time: // value for 'time'
 *      skillLevel: // value for 'skillLevel'
 *      lessonType: // value for 'lessonType'
 *   },
 * });
 */
export function useIndividualLessonsScheduleQuery(baseOptions?: Apollo.QueryHookOptions<IndividualLessonsScheduleQuery, IndividualLessonsScheduleQueryVariables>) {
        return Apollo.useQuery<IndividualLessonsScheduleQuery, IndividualLessonsScheduleQueryVariables>(IndividualLessonsScheduleDocument, baseOptions);
      }
export function useIndividualLessonsScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IndividualLessonsScheduleQuery, IndividualLessonsScheduleQueryVariables>) {
          return Apollo.useLazyQuery<IndividualLessonsScheduleQuery, IndividualLessonsScheduleQueryVariables>(IndividualLessonsScheduleDocument, baseOptions);
        }
export type IndividualLessonsScheduleQueryHookResult = ReturnType<typeof useIndividualLessonsScheduleQuery>;
export type IndividualLessonsScheduleLazyQueryHookResult = ReturnType<typeof useIndividualLessonsScheduleLazyQuery>;
export type IndividualLessonsScheduleQueryResult = Apollo.QueryResult<IndividualLessonsScheduleQuery, IndividualLessonsScheduleQueryVariables>;
export const IndividualFilterDocument = gql`
    query IndividualFilter {
  locations {
    id
    name
  }
}
    `;

/**
 * __useIndividualFilterQuery__
 *
 * To run a query within a React component, call `useIndividualFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndividualFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndividualFilterQuery({
 *   variables: {
 *   },
 * });
 */
export function useIndividualFilterQuery(baseOptions?: Apollo.QueryHookOptions<IndividualFilterQuery, IndividualFilterQueryVariables>) {
        return Apollo.useQuery<IndividualFilterQuery, IndividualFilterQueryVariables>(IndividualFilterDocument, baseOptions);
      }
export function useIndividualFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IndividualFilterQuery, IndividualFilterQueryVariables>) {
          return Apollo.useLazyQuery<IndividualFilterQuery, IndividualFilterQueryVariables>(IndividualFilterDocument, baseOptions);
        }
export type IndividualFilterQueryHookResult = ReturnType<typeof useIndividualFilterQuery>;
export type IndividualFilterLazyQueryHookResult = ReturnType<typeof useIndividualFilterLazyQuery>;
export type IndividualFilterQueryResult = Apollo.QueryResult<IndividualFilterQuery, IndividualFilterQueryVariables>;
export const MyScheduleDocument = gql`
    query MySchedule($year: Int!, $week: Int!) {
  viewer {
    id
    student {
      schedule(year: $year, week: $week) {
        id
        hall {
          id
          name
          city
          street
          number
          locations {
            id
            name
            color
          }
        }
        level: skillLevel
        time
        type
        teacher {
          id
          firstName
          lastName
        }
        lessonTemplate {
          id
          weekday
        }
      }
    }
  }
}
    `;

/**
 * __useMyScheduleQuery__
 *
 * To run a query within a React component, call `useMyScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyScheduleQuery({
 *   variables: {
 *      year: // value for 'year'
 *      week: // value for 'week'
 *   },
 * });
 */
export function useMyScheduleQuery(baseOptions: Apollo.QueryHookOptions<MyScheduleQuery, MyScheduleQueryVariables>) {
        return Apollo.useQuery<MyScheduleQuery, MyScheduleQueryVariables>(MyScheduleDocument, baseOptions);
      }
export function useMyScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyScheduleQuery, MyScheduleQueryVariables>) {
          return Apollo.useLazyQuery<MyScheduleQuery, MyScheduleQueryVariables>(MyScheduleDocument, baseOptions);
        }
export type MyScheduleQueryHookResult = ReturnType<typeof useMyScheduleQuery>;
export type MyScheduleLazyQueryHookResult = ReturnType<typeof useMyScheduleLazyQuery>;
export type MyScheduleQueryResult = Apollo.QueryResult<MyScheduleQuery, MyScheduleQueryVariables>;
export const UpdatePersonalDataDocument = gql`
    mutation UpdatePersonalData($firstName: String!, $lastName: String!, $birthday: Date, $instagram: String, $phoneNumber: String, $verificationCode: String) {
  updateProfile(
    firstName: $firstName
    lastName: $lastName
    birthday: $birthday
    instagram: $instagram
    phoneNumber: $phoneNumber
    verificationCode: $verificationCode
  ) {
    user {
      id
      firstName
      lastName
      birthday
      instagram
      phoneNumber
      avatarUrl
    }
    errors {
      ...errorsData
    }
  }
}
    ${ErrorsDataFragmentDoc}`;
export type UpdatePersonalDataMutationFn = Apollo.MutationFunction<UpdatePersonalDataMutation, UpdatePersonalDataMutationVariables>;

/**
 * __useUpdatePersonalDataMutation__
 *
 * To run a mutation, you first call `useUpdatePersonalDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePersonalDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePersonalDataMutation, { data, loading, error }] = useUpdatePersonalDataMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      birthday: // value for 'birthday'
 *      instagram: // value for 'instagram'
 *      phoneNumber: // value for 'phoneNumber'
 *      verificationCode: // value for 'verificationCode'
 *   },
 * });
 */
export function useUpdatePersonalDataMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePersonalDataMutation, UpdatePersonalDataMutationVariables>) {
        return Apollo.useMutation<UpdatePersonalDataMutation, UpdatePersonalDataMutationVariables>(UpdatePersonalDataDocument, baseOptions);
      }
export type UpdatePersonalDataMutationHookResult = ReturnType<typeof useUpdatePersonalDataMutation>;
export type UpdatePersonalDataMutationResult = Apollo.MutationResult<UpdatePersonalDataMutation>;
export type UpdatePersonalDataMutationOptions = Apollo.BaseMutationOptions<UpdatePersonalDataMutation, UpdatePersonalDataMutationVariables>;
export const SendPhoneVerificationCodeDocument = gql`
    mutation SendPhoneVerificationCode($phoneNumber: String!) {
  sendPhoneVerificationCode(phoneNumber: $phoneNumber) {
    errors {
      ...errorsData
    }
  }
}
    ${ErrorsDataFragmentDoc}`;
export type SendPhoneVerificationCodeMutationFn = Apollo.MutationFunction<SendPhoneVerificationCodeMutation, SendPhoneVerificationCodeMutationVariables>;

/**
 * __useSendPhoneVerificationCodeMutation__
 *
 * To run a mutation, you first call `useSendPhoneVerificationCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendPhoneVerificationCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendPhoneVerificationCodeMutation, { data, loading, error }] = useSendPhoneVerificationCodeMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useSendPhoneVerificationCodeMutation(baseOptions?: Apollo.MutationHookOptions<SendPhoneVerificationCodeMutation, SendPhoneVerificationCodeMutationVariables>) {
        return Apollo.useMutation<SendPhoneVerificationCodeMutation, SendPhoneVerificationCodeMutationVariables>(SendPhoneVerificationCodeDocument, baseOptions);
      }
export type SendPhoneVerificationCodeMutationHookResult = ReturnType<typeof useSendPhoneVerificationCodeMutation>;
export type SendPhoneVerificationCodeMutationResult = Apollo.MutationResult<SendPhoneVerificationCodeMutation>;
export type SendPhoneVerificationCodeMutationOptions = Apollo.BaseMutationOptions<SendPhoneVerificationCodeMutation, SendPhoneVerificationCodeMutationVariables>;
export const PersonalDataDocument = gql`
    query PersonalData {
  viewer {
    id
    firstName
    lastName
    phoneNumber
    avatarUrl
    instagram
    birthday
  }
}
    `;

/**
 * __usePersonalDataQuery__
 *
 * To run a query within a React component, call `usePersonalDataQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonalDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonalDataQuery({
 *   variables: {
 *   },
 * });
 */
export function usePersonalDataQuery(baseOptions?: Apollo.QueryHookOptions<PersonalDataQuery, PersonalDataQueryVariables>) {
        return Apollo.useQuery<PersonalDataQuery, PersonalDataQueryVariables>(PersonalDataDocument, baseOptions);
      }
export function usePersonalDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonalDataQuery, PersonalDataQueryVariables>) {
          return Apollo.useLazyQuery<PersonalDataQuery, PersonalDataQueryVariables>(PersonalDataDocument, baseOptions);
        }
export type PersonalDataQueryHookResult = ReturnType<typeof usePersonalDataQuery>;
export type PersonalDataLazyQueryHookResult = ReturnType<typeof usePersonalDataLazyQuery>;
export type PersonalDataQueryResult = Apollo.QueryResult<PersonalDataQuery, PersonalDataQueryVariables>;
export const StudentSubscriptionDocument = gql`
    query StudentSubscription {
  viewer {
    id
    student {
      purchasedLessonSubscriptions {
        id
        lessonSubscription {
          id
          name
          lessonsCount
          movesCount
          freezeDaysCount
        }
        freezeUsed
        lessonsUsed
        movementsUsed
        expireAt
        schedule {
          id
          hall {
            id
            name
            city
            street
            number
          }
          weekday
          time
        }
      }
    }
  }
}
    `;

/**
 * __useStudentSubscriptionQuery__
 *
 * To run a query within a React component, call `useStudentSubscriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentSubscriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentSubscriptionQuery({
 *   variables: {
 *   },
 * });
 */
export function useStudentSubscriptionQuery(baseOptions?: Apollo.QueryHookOptions<StudentSubscriptionQuery, StudentSubscriptionQueryVariables>) {
        return Apollo.useQuery<StudentSubscriptionQuery, StudentSubscriptionQueryVariables>(StudentSubscriptionDocument, baseOptions);
      }
export function useStudentSubscriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentSubscriptionQuery, StudentSubscriptionQueryVariables>) {
          return Apollo.useLazyQuery<StudentSubscriptionQuery, StudentSubscriptionQueryVariables>(StudentSubscriptionDocument, baseOptions);
        }
export type StudentSubscriptionQueryHookResult = ReturnType<typeof useStudentSubscriptionQuery>;
export type StudentSubscriptionLazyQueryHookResult = ReturnType<typeof useStudentSubscriptionLazyQuery>;
export type StudentSubscriptionQueryResult = Apollo.QueryResult<StudentSubscriptionQuery, StudentSubscriptionQueryVariables>;
export const TrialLessonsDocument = gql`
    query TrialLessons($startDate: Date!, $endDate: Date!, $locationId: Int, $time: LessonTime, $skillLevel: SkillLevel, $lessonType: LessonType) {
  trialLessons(
    startDate: $startDate
    endDate: $endDate
    locationId: $locationId
    time: $time
    skillLevel: $skillLevel
    lessonType: $lessonType
  ) {
    id
    hall {
      id
      name
      city
      street
      number
      locations {
        id
        name
        color
      }
    }
    level: skillLevel
    time
    type
    teacher {
      id
      firstName
      lastName
    }
    lessonTemplate {
      id
      weekday
    }
  }
}
    `;

/**
 * __useTrialLessonsQuery__
 *
 * To run a query within a React component, call `useTrialLessonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrialLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrialLessonsQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      locationId: // value for 'locationId'
 *      time: // value for 'time'
 *      skillLevel: // value for 'skillLevel'
 *      lessonType: // value for 'lessonType'
 *   },
 * });
 */
export function useTrialLessonsQuery(baseOptions: Apollo.QueryHookOptions<TrialLessonsQuery, TrialLessonsQueryVariables>) {
        return Apollo.useQuery<TrialLessonsQuery, TrialLessonsQueryVariables>(TrialLessonsDocument, baseOptions);
      }
export function useTrialLessonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrialLessonsQuery, TrialLessonsQueryVariables>) {
          return Apollo.useLazyQuery<TrialLessonsQuery, TrialLessonsQueryVariables>(TrialLessonsDocument, baseOptions);
        }
export type TrialLessonsQueryHookResult = ReturnType<typeof useTrialLessonsQuery>;
export type TrialLessonsLazyQueryHookResult = ReturnType<typeof useTrialLessonsLazyQuery>;
export type TrialLessonsQueryResult = Apollo.QueryResult<TrialLessonsQuery, TrialLessonsQueryVariables>;
export const TrialFilterDocument = gql`
    query TrialFilter {
  locations {
    id
    name
  }
}
    `;

/**
 * __useTrialFilterQuery__
 *
 * To run a query within a React component, call `useTrialFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrialFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrialFilterQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrialFilterQuery(baseOptions?: Apollo.QueryHookOptions<TrialFilterQuery, TrialFilterQueryVariables>) {
        return Apollo.useQuery<TrialFilterQuery, TrialFilterQueryVariables>(TrialFilterDocument, baseOptions);
      }
export function useTrialFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrialFilterQuery, TrialFilterQueryVariables>) {
          return Apollo.useLazyQuery<TrialFilterQuery, TrialFilterQueryVariables>(TrialFilterDocument, baseOptions);
        }
export type TrialFilterQueryHookResult = ReturnType<typeof useTrialFilterQuery>;
export type TrialFilterLazyQueryHookResult = ReturnType<typeof useTrialFilterLazyQuery>;
export type TrialFilterQueryResult = Apollo.QueryResult<TrialFilterQuery, TrialFilterQueryVariables>;
export const AddCommentOnStudentDocument = gql`
    mutation AddCommentOnStudent($text: String!, $visitorId: Int!) {
  addUserCoachComment(text: $text, visitorId: $visitorId) {
    comment {
      ...studentCardComment
    }
    errors {
      ...errorsData
    }
  }
}
    ${StudentCardCommentFragmentDoc}
${ErrorsDataFragmentDoc}`;
export type AddCommentOnStudentMutationFn = Apollo.MutationFunction<AddCommentOnStudentMutation, AddCommentOnStudentMutationVariables>;

/**
 * __useAddCommentOnStudentMutation__
 *
 * To run a mutation, you first call `useAddCommentOnStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentOnStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentOnStudentMutation, { data, loading, error }] = useAddCommentOnStudentMutation({
 *   variables: {
 *      text: // value for 'text'
 *      visitorId: // value for 'visitorId'
 *   },
 * });
 */
export function useAddCommentOnStudentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentOnStudentMutation, AddCommentOnStudentMutationVariables>) {
        return Apollo.useMutation<AddCommentOnStudentMutation, AddCommentOnStudentMutationVariables>(AddCommentOnStudentDocument, baseOptions);
      }
export type AddCommentOnStudentMutationHookResult = ReturnType<typeof useAddCommentOnStudentMutation>;
export type AddCommentOnStudentMutationResult = Apollo.MutationResult<AddCommentOnStudentMutation>;
export type AddCommentOnStudentMutationOptions = Apollo.BaseMutationOptions<AddCommentOnStudentMutation, AddCommentOnStudentMutationVariables>;
export const CloseLessonButtonDocument = gql`
    query CloseLessonButton($lessonId: Int!) {
  lessonDetail(lessonId: $lessonId) {
    id
    isClosed
  }
}
    `;

/**
 * __useCloseLessonButtonQuery__
 *
 * To run a query within a React component, call `useCloseLessonButtonQuery` and pass it any options that fit your needs.
 * When your component renders, `useCloseLessonButtonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCloseLessonButtonQuery({
 *   variables: {
 *      lessonId: // value for 'lessonId'
 *   },
 * });
 */
export function useCloseLessonButtonQuery(baseOptions: Apollo.QueryHookOptions<CloseLessonButtonQuery, CloseLessonButtonQueryVariables>) {
        return Apollo.useQuery<CloseLessonButtonQuery, CloseLessonButtonQueryVariables>(CloseLessonButtonDocument, baseOptions);
      }
export function useCloseLessonButtonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CloseLessonButtonQuery, CloseLessonButtonQueryVariables>) {
          return Apollo.useLazyQuery<CloseLessonButtonQuery, CloseLessonButtonQueryVariables>(CloseLessonButtonDocument, baseOptions);
        }
export type CloseLessonButtonQueryHookResult = ReturnType<typeof useCloseLessonButtonQuery>;
export type CloseLessonButtonLazyQueryHookResult = ReturnType<typeof useCloseLessonButtonLazyQuery>;
export type CloseLessonButtonQueryResult = Apollo.QueryResult<CloseLessonButtonQuery, CloseLessonButtonQueryVariables>;
export const CloseLessonDocument = gql`
    mutation CloseLesson($lessonId: Int!) {
  closeLesson(lessonId: $lessonId) {
    lesson {
      id
      isClosed
    }
  }
}
    `;
export type CloseLessonMutationFn = Apollo.MutationFunction<CloseLessonMutation, CloseLessonMutationVariables>;

/**
 * __useCloseLessonMutation__
 *
 * To run a mutation, you first call `useCloseLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCloseLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [closeLessonMutation, { data, loading, error }] = useCloseLessonMutation({
 *   variables: {
 *      lessonId: // value for 'lessonId'
 *   },
 * });
 */
export function useCloseLessonMutation(baseOptions?: Apollo.MutationHookOptions<CloseLessonMutation, CloseLessonMutationVariables>) {
        return Apollo.useMutation<CloseLessonMutation, CloseLessonMutationVariables>(CloseLessonDocument, baseOptions);
      }
export type CloseLessonMutationHookResult = ReturnType<typeof useCloseLessonMutation>;
export type CloseLessonMutationResult = Apollo.MutationResult<CloseLessonMutation>;
export type CloseLessonMutationOptions = Apollo.BaseMutationOptions<CloseLessonMutation, CloseLessonMutationVariables>;
export const TeacherCurrentLessonIdDocument = gql`
    query TeacherCurrentLessonId {
  viewer {
    id
    nearestLesson {
      id
    }
  }
}
    `;

/**
 * __useTeacherCurrentLessonIdQuery__
 *
 * To run a query within a React component, call `useTeacherCurrentLessonIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeacherCurrentLessonIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeacherCurrentLessonIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeacherCurrentLessonIdQuery(baseOptions?: Apollo.QueryHookOptions<TeacherCurrentLessonIdQuery, TeacherCurrentLessonIdQueryVariables>) {
        return Apollo.useQuery<TeacherCurrentLessonIdQuery, TeacherCurrentLessonIdQueryVariables>(TeacherCurrentLessonIdDocument, baseOptions);
      }
export function useTeacherCurrentLessonIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeacherCurrentLessonIdQuery, TeacherCurrentLessonIdQueryVariables>) {
          return Apollo.useLazyQuery<TeacherCurrentLessonIdQuery, TeacherCurrentLessonIdQueryVariables>(TeacherCurrentLessonIdDocument, baseOptions);
        }
export type TeacherCurrentLessonIdQueryHookResult = ReturnType<typeof useTeacherCurrentLessonIdQuery>;
export type TeacherCurrentLessonIdLazyQueryHookResult = ReturnType<typeof useTeacherCurrentLessonIdLazyQuery>;
export type TeacherCurrentLessonIdQueryResult = Apollo.QueryResult<TeacherCurrentLessonIdQuery, TeacherCurrentLessonIdQueryVariables>;
export const TeacherCurrentLessonDetailCardDocument = gql`
    query TeacherCurrentLessonDetailCard {
  viewer {
    id
    nearestLesson {
      id
      hall {
        id
        street
        number
      }
      time
      duration
      skillLevel
      ...lessonDetailVisitAnalytics
    }
  }
}
    ${LessonDetailVisitAnalyticsFragmentDoc}`;

/**
 * __useTeacherCurrentLessonDetailCardQuery__
 *
 * To run a query within a React component, call `useTeacherCurrentLessonDetailCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeacherCurrentLessonDetailCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeacherCurrentLessonDetailCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeacherCurrentLessonDetailCardQuery(baseOptions?: Apollo.QueryHookOptions<TeacherCurrentLessonDetailCardQuery, TeacherCurrentLessonDetailCardQueryVariables>) {
        return Apollo.useQuery<TeacherCurrentLessonDetailCardQuery, TeacherCurrentLessonDetailCardQueryVariables>(TeacherCurrentLessonDetailCardDocument, baseOptions);
      }
export function useTeacherCurrentLessonDetailCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeacherCurrentLessonDetailCardQuery, TeacherCurrentLessonDetailCardQueryVariables>) {
          return Apollo.useLazyQuery<TeacherCurrentLessonDetailCardQuery, TeacherCurrentLessonDetailCardQueryVariables>(TeacherCurrentLessonDetailCardDocument, baseOptions);
        }
export type TeacherCurrentLessonDetailCardQueryHookResult = ReturnType<typeof useTeacherCurrentLessonDetailCardQuery>;
export type TeacherCurrentLessonDetailCardLazyQueryHookResult = ReturnType<typeof useTeacherCurrentLessonDetailCardLazyQuery>;
export type TeacherCurrentLessonDetailCardQueryResult = Apollo.QueryResult<TeacherCurrentLessonDetailCardQuery, TeacherCurrentLessonDetailCardQueryVariables>;
export const TeacherLessonDetailCardByIdDocument = gql`
    query TeacherLessonDetailCardById($id: Int!) {
  lessonDetail(lessonId: $id) {
    id
    hall {
      id
      street
      number
    }
    time
    duration
    skillLevel
    isClosed
    ...lessonDetailVisitAnalytics
  }
}
    ${LessonDetailVisitAnalyticsFragmentDoc}`;

/**
 * __useTeacherLessonDetailCardByIdQuery__
 *
 * To run a query within a React component, call `useTeacherLessonDetailCardByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeacherLessonDetailCardByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeacherLessonDetailCardByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTeacherLessonDetailCardByIdQuery(baseOptions: Apollo.QueryHookOptions<TeacherLessonDetailCardByIdQuery, TeacherLessonDetailCardByIdQueryVariables>) {
        return Apollo.useQuery<TeacherLessonDetailCardByIdQuery, TeacherLessonDetailCardByIdQueryVariables>(TeacherLessonDetailCardByIdDocument, baseOptions);
      }
export function useTeacherLessonDetailCardByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeacherLessonDetailCardByIdQuery, TeacherLessonDetailCardByIdQueryVariables>) {
          return Apollo.useLazyQuery<TeacherLessonDetailCardByIdQuery, TeacherLessonDetailCardByIdQueryVariables>(TeacherLessonDetailCardByIdDocument, baseOptions);
        }
export type TeacherLessonDetailCardByIdQueryHookResult = ReturnType<typeof useTeacherLessonDetailCardByIdQuery>;
export type TeacherLessonDetailCardByIdLazyQueryHookResult = ReturnType<typeof useTeacherLessonDetailCardByIdLazyQuery>;
export type TeacherLessonDetailCardByIdQueryResult = Apollo.QueryResult<TeacherLessonDetailCardByIdQuery, TeacherLessonDetailCardByIdQueryVariables>;
export const LessonDetailStudentsListDocument = gql`
    query LessonDetailStudentsList($lessonId: Int!) {
  lessonDetail(lessonId: $lessonId) {
    id
    isClosed
    visitors {
      id
      visited
      isFirstVisit
      paidOnline
      payAmount
      paidOnLesson
      user {
        id
        firstName
        lastName
        avatarUrl
      }
    }
    ...lessonDetailVisitAnalytics
  }
}
    ${LessonDetailVisitAnalyticsFragmentDoc}`;

/**
 * __useLessonDetailStudentsListQuery__
 *
 * To run a query within a React component, call `useLessonDetailStudentsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useLessonDetailStudentsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLessonDetailStudentsListQuery({
 *   variables: {
 *      lessonId: // value for 'lessonId'
 *   },
 * });
 */
export function useLessonDetailStudentsListQuery(baseOptions: Apollo.QueryHookOptions<LessonDetailStudentsListQuery, LessonDetailStudentsListQueryVariables>) {
        return Apollo.useQuery<LessonDetailStudentsListQuery, LessonDetailStudentsListQueryVariables>(LessonDetailStudentsListDocument, baseOptions);
      }
export function useLessonDetailStudentsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LessonDetailStudentsListQuery, LessonDetailStudentsListQueryVariables>) {
          return Apollo.useLazyQuery<LessonDetailStudentsListQuery, LessonDetailStudentsListQueryVariables>(LessonDetailStudentsListDocument, baseOptions);
        }
export type LessonDetailStudentsListQueryHookResult = ReturnType<typeof useLessonDetailStudentsListQuery>;
export type LessonDetailStudentsListLazyQueryHookResult = ReturnType<typeof useLessonDetailStudentsListLazyQuery>;
export type LessonDetailStudentsListQueryResult = Apollo.QueryResult<LessonDetailStudentsListQuery, LessonDetailStudentsListQueryVariables>;
export const NavProfileDocument = gql`
    query NavProfile {
  viewer {
    id
    firstName
    avatarUrl
  }
}
    `;

/**
 * __useNavProfileQuery__
 *
 * To run a query within a React component, call `useNavProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useNavProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNavProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useNavProfileQuery(baseOptions?: Apollo.QueryHookOptions<NavProfileQuery, NavProfileQueryVariables>) {
        return Apollo.useQuery<NavProfileQuery, NavProfileQueryVariables>(NavProfileDocument, baseOptions);
      }
export function useNavProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NavProfileQuery, NavProfileQueryVariables>) {
          return Apollo.useLazyQuery<NavProfileQuery, NavProfileQueryVariables>(NavProfileDocument, baseOptions);
        }
export type NavProfileQueryHookResult = ReturnType<typeof useNavProfileQuery>;
export type NavProfileLazyQueryHookResult = ReturnType<typeof useNavProfileLazyQuery>;
export type NavProfileQueryResult = Apollo.QueryResult<NavProfileQuery, NavProfileQueryVariables>;
export const TeacherNextLessonDocument = gql`
    query TeacherNextLesson {
  viewer {
    id
    nearestLesson {
      id
      time
      hall {
        id
        city
        street
        number
      }
      duration
      skillLevel
    }
  }
}
    `;

/**
 * __useTeacherNextLessonQuery__
 *
 * To run a query within a React component, call `useTeacherNextLessonQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeacherNextLessonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeacherNextLessonQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeacherNextLessonQuery(baseOptions?: Apollo.QueryHookOptions<TeacherNextLessonQuery, TeacherNextLessonQueryVariables>) {
        return Apollo.useQuery<TeacherNextLessonQuery, TeacherNextLessonQueryVariables>(TeacherNextLessonDocument, baseOptions);
      }
export function useTeacherNextLessonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeacherNextLessonQuery, TeacherNextLessonQueryVariables>) {
          return Apollo.useLazyQuery<TeacherNextLessonQuery, TeacherNextLessonQueryVariables>(TeacherNextLessonDocument, baseOptions);
        }
export type TeacherNextLessonQueryHookResult = ReturnType<typeof useTeacherNextLessonQuery>;
export type TeacherNextLessonLazyQueryHookResult = ReturnType<typeof useTeacherNextLessonLazyQuery>;
export type TeacherNextLessonQueryResult = Apollo.QueryResult<TeacherNextLessonQuery, TeacherNextLessonQueryVariables>;
export const TeacherScheduleAggregationsDocument = gql`
    query TeacherScheduleAggregations($groupBy: LessonAggregationPeriods!, $before: String, $after: String) {
  viewer {
    id
    lessonsPeriodAggregation(
      groupBy: $groupBy
      before: $before
      after: $after
      first: 20
    ) {
      edges {
        node {
          lessonsCount
          individualLessonsCount
          groupLessonsCount
          startDate
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useTeacherScheduleAggregationsQuery__
 *
 * To run a query within a React component, call `useTeacherScheduleAggregationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeacherScheduleAggregationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeacherScheduleAggregationsQuery({
 *   variables: {
 *      groupBy: // value for 'groupBy'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useTeacherScheduleAggregationsQuery(baseOptions: Apollo.QueryHookOptions<TeacherScheduleAggregationsQuery, TeacherScheduleAggregationsQueryVariables>) {
        return Apollo.useQuery<TeacherScheduleAggregationsQuery, TeacherScheduleAggregationsQueryVariables>(TeacherScheduleAggregationsDocument, baseOptions);
      }
export function useTeacherScheduleAggregationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeacherScheduleAggregationsQuery, TeacherScheduleAggregationsQueryVariables>) {
          return Apollo.useLazyQuery<TeacherScheduleAggregationsQuery, TeacherScheduleAggregationsQueryVariables>(TeacherScheduleAggregationsDocument, baseOptions);
        }
export type TeacherScheduleAggregationsQueryHookResult = ReturnType<typeof useTeacherScheduleAggregationsQuery>;
export type TeacherScheduleAggregationsLazyQueryHookResult = ReturnType<typeof useTeacherScheduleAggregationsLazyQuery>;
export type TeacherScheduleAggregationsQueryResult = Apollo.QueryResult<TeacherScheduleAggregationsQuery, TeacherScheduleAggregationsQueryVariables>;
export const TeacherScheduleDaysDocument = gql`
    query TeacherScheduleDays($before: String, $after: String, $first: Int, $last: Int) {
  viewer {
    id
    lessons(before: $before, after: $after, first: $first, last: $last) {
      edges {
        node {
          id
          bookingPlacesCount
          trialPlacesCount
          time
          visitAnalytics {
            inAll
            shouldPresent
            notPaid
            trialLesson
            willAbsent
          }
          hall {
            id
            street
            number
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useTeacherScheduleDaysQuery__
 *
 * To run a query within a React component, call `useTeacherScheduleDaysQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeacherScheduleDaysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeacherScheduleDaysQuery({
 *   variables: {
 *      before: // value for 'before'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useTeacherScheduleDaysQuery(baseOptions?: Apollo.QueryHookOptions<TeacherScheduleDaysQuery, TeacherScheduleDaysQueryVariables>) {
        return Apollo.useQuery<TeacherScheduleDaysQuery, TeacherScheduleDaysQueryVariables>(TeacherScheduleDaysDocument, baseOptions);
      }
export function useTeacherScheduleDaysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeacherScheduleDaysQuery, TeacherScheduleDaysQueryVariables>) {
          return Apollo.useLazyQuery<TeacherScheduleDaysQuery, TeacherScheduleDaysQueryVariables>(TeacherScheduleDaysDocument, baseOptions);
        }
export type TeacherScheduleDaysQueryHookResult = ReturnType<typeof useTeacherScheduleDaysQuery>;
export type TeacherScheduleDaysLazyQueryHookResult = ReturnType<typeof useTeacherScheduleDaysLazyQuery>;
export type TeacherScheduleDaysQueryResult = Apollo.QueryResult<TeacherScheduleDaysQuery, TeacherScheduleDaysQueryVariables>;
export const StudentCoachCommentDocument = gql`
    query StudentCoachComment($id: Int!) {
  lessonVisitor(id: $id) {
    id
    user {
      id
      coachComments {
        id
        text
        commentator {
          id
          firstName
          lastName
        }
      }
    }
  }
}
    `;

/**
 * __useStudentCoachCommentQuery__
 *
 * To run a query within a React component, call `useStudentCoachCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentCoachCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentCoachCommentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStudentCoachCommentQuery(baseOptions: Apollo.QueryHookOptions<StudentCoachCommentQuery, StudentCoachCommentQueryVariables>) {
        return Apollo.useQuery<StudentCoachCommentQuery, StudentCoachCommentQueryVariables>(StudentCoachCommentDocument, baseOptions);
      }
export function useStudentCoachCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentCoachCommentQuery, StudentCoachCommentQueryVariables>) {
          return Apollo.useLazyQuery<StudentCoachCommentQuery, StudentCoachCommentQueryVariables>(StudentCoachCommentDocument, baseOptions);
        }
export type StudentCoachCommentQueryHookResult = ReturnType<typeof useStudentCoachCommentQuery>;
export type StudentCoachCommentLazyQueryHookResult = ReturnType<typeof useStudentCoachCommentLazyQuery>;
export type StudentCoachCommentQueryResult = Apollo.QueryResult<StudentCoachCommentQuery, StudentCoachCommentQueryVariables>;
export const VisitorTogglePaymentDocument = gql`
    mutation VisitorTogglePayment($visitorId: Int!, $isPaid: Boolean!) {
  togglePayment(visitorId: $visitorId, isPaid: $isPaid) {
    lessonVisitor {
      id
      paidOnLesson
    }
    errors {
      ...errorsData
    }
  }
}
    ${ErrorsDataFragmentDoc}`;
export type VisitorTogglePaymentMutationFn = Apollo.MutationFunction<VisitorTogglePaymentMutation, VisitorTogglePaymentMutationVariables>;

/**
 * __useVisitorTogglePaymentMutation__
 *
 * To run a mutation, you first call `useVisitorTogglePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVisitorTogglePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [visitorTogglePaymentMutation, { data, loading, error }] = useVisitorTogglePaymentMutation({
 *   variables: {
 *      visitorId: // value for 'visitorId'
 *      isPaid: // value for 'isPaid'
 *   },
 * });
 */
export function useVisitorTogglePaymentMutation(baseOptions?: Apollo.MutationHookOptions<VisitorTogglePaymentMutation, VisitorTogglePaymentMutationVariables>) {
        return Apollo.useMutation<VisitorTogglePaymentMutation, VisitorTogglePaymentMutationVariables>(VisitorTogglePaymentDocument, baseOptions);
      }
export type VisitorTogglePaymentMutationHookResult = ReturnType<typeof useVisitorTogglePaymentMutation>;
export type VisitorTogglePaymentMutationResult = Apollo.MutationResult<VisitorTogglePaymentMutation>;
export type VisitorTogglePaymentMutationOptions = Apollo.BaseMutationOptions<VisitorTogglePaymentMutation, VisitorTogglePaymentMutationVariables>;
export const VisitorToggleVisitDocument = gql`
    mutation VisitorToggleVisit($visitorId: Int!, $isVisited: Boolean!) {
  toggleVisit(visitorId: $visitorId, isVisited: $isVisited) {
    lessonVisitor {
      id
      visited
    }
    errors {
      ...errorsData
    }
  }
}
    ${ErrorsDataFragmentDoc}`;
export type VisitorToggleVisitMutationFn = Apollo.MutationFunction<VisitorToggleVisitMutation, VisitorToggleVisitMutationVariables>;

/**
 * __useVisitorToggleVisitMutation__
 *
 * To run a mutation, you first call `useVisitorToggleVisitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVisitorToggleVisitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [visitorToggleVisitMutation, { data, loading, error }] = useVisitorToggleVisitMutation({
 *   variables: {
 *      visitorId: // value for 'visitorId'
 *      isVisited: // value for 'isVisited'
 *   },
 * });
 */
export function useVisitorToggleVisitMutation(baseOptions?: Apollo.MutationHookOptions<VisitorToggleVisitMutation, VisitorToggleVisitMutationVariables>) {
        return Apollo.useMutation<VisitorToggleVisitMutation, VisitorToggleVisitMutationVariables>(VisitorToggleVisitDocument, baseOptions);
      }
export type VisitorToggleVisitMutationHookResult = ReturnType<typeof useVisitorToggleVisitMutation>;
export type VisitorToggleVisitMutationResult = Apollo.MutationResult<VisitorToggleVisitMutation>;
export type VisitorToggleVisitMutationOptions = Apollo.BaseMutationOptions<VisitorToggleVisitMutation, VisitorToggleVisitMutationVariables>;
export const GenericPageDocument = gql`
    query GenericPage($slug: String!) {
  page(slug: $slug) {
    id
    seoTitle
    seoDescription
    title
    subtitle
    content
  }
}
    `;

/**
 * __useGenericPageQuery__
 *
 * To run a query within a React component, call `useGenericPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenericPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenericPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGenericPageQuery(baseOptions: Apollo.QueryHookOptions<GenericPageQuery, GenericPageQueryVariables>) {
        return Apollo.useQuery<GenericPageQuery, GenericPageQueryVariables>(GenericPageDocument, baseOptions);
      }
export function useGenericPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenericPageQuery, GenericPageQueryVariables>) {
          return Apollo.useLazyQuery<GenericPageQuery, GenericPageQueryVariables>(GenericPageDocument, baseOptions);
        }
export type GenericPageQueryHookResult = ReturnType<typeof useGenericPageQuery>;
export type GenericPageLazyQueryHookResult = ReturnType<typeof useGenericPageLazyQuery>;
export type GenericPageQueryResult = Apollo.QueryResult<GenericPageQuery, GenericPageQueryVariables>;
export const LoginCheckDocument = gql`
    query LoginCheck {
  viewer {
    id
  }
}
    `;

/**
 * __useLoginCheckQuery__
 *
 * To run a query within a React component, call `useLoginCheckQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginCheckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginCheckQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoginCheckQuery(baseOptions?: Apollo.QueryHookOptions<LoginCheckQuery, LoginCheckQueryVariables>) {
        return Apollo.useQuery<LoginCheckQuery, LoginCheckQueryVariables>(LoginCheckDocument, baseOptions);
      }
export function useLoginCheckLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginCheckQuery, LoginCheckQueryVariables>) {
          return Apollo.useLazyQuery<LoginCheckQuery, LoginCheckQueryVariables>(LoginCheckDocument, baseOptions);
        }
export type LoginCheckQueryHookResult = ReturnType<typeof useLoginCheckQuery>;
export type LoginCheckLazyQueryHookResult = ReturnType<typeof useLoginCheckLazyQuery>;
export type LoginCheckQueryResult = Apollo.QueryResult<LoginCheckQuery, LoginCheckQueryVariables>;