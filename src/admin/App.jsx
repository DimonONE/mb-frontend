import React from 'react';
import Quill from 'quill';
import { ImageUpload } from 'quill-image-upload';
import {
  Admin,
  Resource,
  Login,
} from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';
import ViewQuilt from '@material-ui/icons/ViewQuilt';
import Description from '@material-ui/icons/Description';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import RateReview from '@material-ui/icons/RateReview';
import Room from '@material-ui/icons/Room';
import Schedule from '@material-ui/icons/Schedule';
import Category from '@material-ui/icons/Category';
import PhotoAlbum from '@material-ui/icons/PhotoAlbum';
import Photo from '@material-ui/icons/Photo';
import MyLocation from '@material-ui/icons/MyLocation';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Event from '@material-ui/icons/Event';
import Label from '@material-ui/icons/Label';
import List from '@material-ui/icons/List';
import Assignment from '@material-ui/icons/Assignment';
import Apps from '@material-ui/icons/Apps';


import { withApolloHooksProvider } from '@client';

import dataProvider from './dataProvider';
import authProvider from './authProvider';
import {
  LandingBlockList,
  LandingBlockEdit,
} from './LandingBlocks';
import {
  PageEdit,
  PageList,
} from './Page';
import {
  QuestionAnswerEdit,
  QuestionAnswerList,
  QuestionAnswerCreate,
} from './QuestionAnswer';
import {
  LandingReviewEdit,
  LandingReviewList,
  LandingReviewCreate,
} from './LandingReview';
import {
  HallEdit,
  HallCreate,
  HallList
} from './Hall';
import {
  LocationEdit,
  LocationCreate,
  LocationList
} from './Location';
import {
  LessonTemplateEdit,
  LessonTemplateCreate,
  LessonTemplateList,
} from './LessonTemplate';
import {
  AlbumTopicEdit,
  AlbumTopicCreate,
  AlbumTopicList
} from './AlbumTopic';
import {
  AlbumCreate,
  AlbumEdit,
  AlbumList,
} from './Album';
import {
  AlbumImageCreate,
  AlbumImageEdit,
  AlbumImageList,
} from './AlbumImage';
import {
  OnlineProgramOrderList,
  OnlineProgramOrderShow,
} from './OnlineProgramOrder';
import {
  UserList,
  UserCreate,
  UserEdit,
} from './User';
import {
  NewsCategoryList,
  NewsCategoryCreate,
  NewsCategoryEdit,
} from './NewsCategory';
import {
  ArticleTagList,
  ArticleTagCreate,
  ArticleTagEdit,
} from './ArticleTag';
import {
  ArticleList,
  ArticleEdit,
  ArticleCreate,
} from './Article';
import {
  LessonSubscriptionCreate,
  LessonSubscriptionList,
  LessonSubscriptionEdit,
} from './LessonSubscrption';
import {
  GroupCreate,
  GroupEdit,
  GroupList,
} from './Group';

// Register file upload plugin in Quill editor
Quill.register('modules/imageUpload', ImageUpload);

const LoginPageWithRandomImage = () => (
  <Login
    backgroundImage={`https://source.unsplash.com/${screen.width}x${screen.height}?cats`}
  />
);

const i18nProvider = polyglotI18nProvider(
  () => russianMessages,
  'ru'
);

const App = () => (
  <Admin
    loginPage={LoginPageWithRandomImage}
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
  >
    <Resource
      name="user"
      icon={AccountCircle}
      options={{
        label: 'Все пользователи',
      }}
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
    <Resource
      name="coach"
      icon={AccountCircle}
      options={{
        label: 'Преподаватели',
      }}
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
    <Resource
      name="landingblock"
      icon={ViewQuilt}
      options={{
        label: 'Landing блоки',
      }}
      list={LandingBlockList}
      edit={LandingBlockEdit}
    />
    <Resource
      name="questionanswer"
      icon={QuestionAnswer}
      options={{
        label: 'Landing Q&A',
      }}
      list={QuestionAnswerList}
      edit={QuestionAnswerEdit}
      create={QuestionAnswerCreate}
    />
    <Resource
      name="landingreview"
      icon={RateReview}
      options={{
        label: 'Landing отзывы',
      }}
      list={LandingReviewList}
      edit={LandingReviewEdit}
      create={LandingReviewCreate}
    />
    <Resource
      name="page"
      icon={Description}
      options={{
        label: 'Страницы',
      }}
      list={PageList}
      edit={PageEdit}
    />
    <Resource
      name="albumtopic"
      icon={Category}
      options={{
        label: 'Категории альбомов',
      }}
      list={AlbumTopicList}
      edit={AlbumTopicEdit}
      create={AlbumTopicCreate}
    />
    <Resource
      name="album"
      icon={PhotoAlbum}
      options={{
        label: 'Альбомы',
      }}
      list={AlbumList}
      edit={AlbumEdit}
      create={AlbumCreate}
    />
    <Resource
      name="albumimage"
      icon={Photo}
      options={{
        label: 'Изображения',
      }}
      list={AlbumImageList}
      edit={AlbumImageEdit}
      create={AlbumImageCreate}
    />
    <Resource
      name="location"
      icon={MyLocation}
      options={{
        label: 'Локации',
      }}
      list={LocationList}
      edit={LocationEdit}
      create={LocationCreate}
    />
    <Resource
      name="hall"
      icon={Room}
      options={{
        label: 'Залы',
      }}
      list={HallList}
      edit={HallEdit}
      create={HallCreate}
    />
    <Resource
      name="group"
      icon={Apps}
      options={{
        label: 'Групы',
      }}
      list={GroupList}
      edit={GroupEdit}
      create={GroupCreate}
    />
    <Resource
      name="lessontemplate"
      icon={Schedule}
      options={{
        label: 'Шаблоны занятий',
      }}
      list={LessonTemplateList}
      edit={LessonTemplateEdit}
      create={LessonTemplateCreate}
    />
    <Resource
      name="lessonsubscription"
      icon={List}
      options={{
        label: 'Абонементы',
      }}
      list={LessonSubscriptionList}
      edit={LessonSubscriptionEdit}
      create={LessonSubscriptionCreate}
    />
    <Resource
      name="lesson"
      icon={Event}
      options={{
        label: 'Занятия',
      }}
    />
    <Resource
      name="lessonvisitor"
      options={{
        label: 'Посетитель уроков',
      }}
    />
    <Resource
      name="onlineprogramorder"
      icon={ShoppingCart}
      options={{
        label: 'Онлайн заказы',
      }}
      list={OnlineProgramOrderList}
      show={OnlineProgramOrderShow}
    />
    <Resource
      name="newscategory"
      icon={Category}
      options={{
        label: 'Категории новостей',
      }}
      list={NewsCategoryList}
      edit={NewsCategoryEdit}
      create={NewsCategoryCreate}
    />
    <Resource
      name="articletag"
      icon={Label}
      options={{
        label: 'Теги статей',
      }}
      list={ArticleTagList}
      edit={ArticleTagEdit}
      create={ArticleTagCreate}
    />
    <Resource
      name="article"
      icon={Assignment}
      options={{
        label: 'Статьи',
      }}
      list={ArticleList}
      edit={ArticleEdit}
      create={ArticleCreate}
    />
    <Resource name="lessonpurchase" />
  </Admin>
);

export default withApolloHooksProvider(App);
