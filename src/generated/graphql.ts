import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryCb = {
  __typename?: 'CategoryCb';
  Image?: Maybe<UploadFileEntityResponse>;
  Meta_Description?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Slug?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CategoryCbRelationResponseCollection>;
  popular_post_cbs?: Maybe<PostCbRelationResponseCollection>;
  post_cbs?: Maybe<PostCbRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
};


export type CategoryCbLocalizationsArgs = {
  filters?: InputMaybe<CategoryCbFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CategoryCbPopular_Post_CbsArgs = {
  filters?: InputMaybe<PostCbFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CategoryCbPost_CbsArgs = {
  filters?: InputMaybe<PostCbFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryCbEntity = {
  __typename?: 'CategoryCbEntity';
  attributes?: Maybe<CategoryCb>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryCbEntityResponse = {
  __typename?: 'CategoryCbEntityResponse';
  data?: Maybe<CategoryCbEntity>;
};

export type CategoryCbEntityResponseCollection = {
  __typename?: 'CategoryCbEntityResponseCollection';
  data: Array<CategoryCbEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryCbFiltersInput = {
  Meta_Description?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CategoryCbFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryCbFiltersInput>;
  not?: InputMaybe<CategoryCbFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryCbFiltersInput>>>;
  popular_post_cbs?: InputMaybe<PostCbFiltersInput>;
  post_cbs?: InputMaybe<PostCbFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url_path_id?: InputMaybe<StringFilterInput>;
};

export type CategoryCbInput = {
  Image?: InputMaybe<Scalars['ID']>;
  Meta_Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Slug?: InputMaybe<Scalars['String']>;
  popular_post_cbs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  post_cbs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  url_path_id?: InputMaybe<Scalars['String']>;
};

export type CategoryCbRelationResponseCollection = {
  __typename?: 'CategoryCbRelationResponseCollection';
  data: Array<CategoryCbEntity>;
};

export type CategoryLb = {
  __typename?: 'CategoryLb';
  Meta_Description?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CategoryLbRelationResponseCollection>;
  post_lbs?: Maybe<PostLbRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
};


export type CategoryLbLocalizationsArgs = {
  filters?: InputMaybe<CategoryLbFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CategoryLbPost_LbsArgs = {
  filters?: InputMaybe<PostLbFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryLbEntity = {
  __typename?: 'CategoryLbEntity';
  attributes?: Maybe<CategoryLb>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryLbEntityResponse = {
  __typename?: 'CategoryLbEntityResponse';
  data?: Maybe<CategoryLbEntity>;
};

export type CategoryLbEntityResponseCollection = {
  __typename?: 'CategoryLbEntityResponseCollection';
  data: Array<CategoryLbEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryLbFiltersInput = {
  Meta_Description?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CategoryLbFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryLbFiltersInput>;
  not?: InputMaybe<CategoryLbFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryLbFiltersInput>>>;
  post_lbs?: InputMaybe<PostLbFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url_path_id?: InputMaybe<StringFilterInput>;
};

export type CategoryLbInput = {
  Meta_Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  post_lbs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  url_path_id?: InputMaybe<Scalars['String']>;
};

export type CategoryLbRelationResponseCollection = {
  __typename?: 'CategoryLbRelationResponseCollection';
  data: Array<CategoryLbEntity>;
};

export type ComponentPostPostComponent = {
  __typename?: 'ComponentPostPostComponent';
  Content: Scalars['String'];
  Estimation?: Maybe<Scalars['Int']>;
  Image?: Maybe<UploadFileRelationResponseCollection>;
  Meta_Description: Scalars['String'];
  Raw?: Maybe<Scalars['String']>;
  Title: Scalars['String'];
  id: Scalars['ID'];
};


export type ComponentPostPostComponentImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentPostPostComponentFiltersInput = {
  Content?: InputMaybe<StringFilterInput>;
  Estimation?: InputMaybe<IntFilterInput>;
  Meta_Description?: InputMaybe<StringFilterInput>;
  Raw?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentPostPostComponentFiltersInput>>>;
  not?: InputMaybe<ComponentPostPostComponentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPostPostComponentFiltersInput>>>;
};

export type ComponentPostPostComponentInput = {
  Content?: InputMaybe<Scalars['String']>;
  Estimation?: InputMaybe<Scalars['Int']>;
  Image?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Meta_Description?: InputMaybe<Scalars['String']>;
  Raw?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = CategoryCb | CategoryLb | ComponentPostPostComponent | I18NLocale | PostCb | PostHf | PostLb | SchedulerScheduler | SectionsCb | UploadFile | UrlAliasPath | UrlAliasPattern | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  contains?: InputMaybe<Scalars['Long']>;
  containsi?: InputMaybe<Scalars['Long']>;
  endsWith?: InputMaybe<Scalars['Long']>;
  eq?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  ne?: InputMaybe<Scalars['Long']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']>;
  notContainsi?: InputMaybe<Scalars['Long']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  startsWith?: InputMaybe<Scalars['Long']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategoryCb?: Maybe<CategoryCbEntityResponse>;
  createCategoryCbLocalization?: Maybe<CategoryCbEntityResponse>;
  createCategoryLb?: Maybe<CategoryLbEntityResponse>;
  createCategoryLbLocalization?: Maybe<CategoryLbEntityResponse>;
  createPostCb?: Maybe<PostCbEntityResponse>;
  createPostCbLocalization?: Maybe<PostCbEntityResponse>;
  createPostHf?: Maybe<PostHfEntityResponse>;
  createPostHfLocalization?: Maybe<PostHfEntityResponse>;
  createPostLb?: Maybe<PostLbEntityResponse>;
  createPostLbLocalization?: Maybe<PostLbEntityResponse>;
  createSchedulerScheduler?: Maybe<SchedulerSchedulerEntityResponse>;
  createSectionsCb?: Maybe<SectionsCbEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUrlAliasPath?: Maybe<UrlAliasPathEntityResponse>;
  createUrlAliasPattern?: Maybe<UrlAliasPatternEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCategoryCb?: Maybe<CategoryCbEntityResponse>;
  deleteCategoryLb?: Maybe<CategoryLbEntityResponse>;
  deletePostCb?: Maybe<PostCbEntityResponse>;
  deletePostHf?: Maybe<PostHfEntityResponse>;
  deletePostLb?: Maybe<PostLbEntityResponse>;
  deleteSchedulerScheduler?: Maybe<SchedulerSchedulerEntityResponse>;
  deleteSectionsCb?: Maybe<SectionsCbEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUrlAliasPath?: Maybe<UrlAliasPathEntityResponse>;
  deleteUrlAliasPattern?: Maybe<UrlAliasPatternEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCategoryCb?: Maybe<CategoryCbEntityResponse>;
  updateCategoryLb?: Maybe<CategoryLbEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updatePostCb?: Maybe<PostCbEntityResponse>;
  updatePostHf?: Maybe<PostHfEntityResponse>;
  updatePostLb?: Maybe<PostLbEntityResponse>;
  updateSchedulerScheduler?: Maybe<SchedulerSchedulerEntityResponse>;
  updateSectionsCb?: Maybe<SectionsCbEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUrlAliasPath?: Maybe<UrlAliasPathEntityResponse>;
  updateUrlAliasPattern?: Maybe<UrlAliasPatternEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateCategoryCbArgs = {
  data: CategoryCbInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCategoryCbLocalizationArgs = {
  data?: InputMaybe<CategoryCbInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCategoryLbArgs = {
  data: CategoryLbInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCategoryLbLocalizationArgs = {
  data?: InputMaybe<CategoryLbInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePostCbArgs = {
  data: PostCbInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePostCbLocalizationArgs = {
  data?: InputMaybe<PostCbInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePostHfArgs = {
  data: PostHfInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePostHfLocalizationArgs = {
  data?: InputMaybe<PostHfInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePostLbArgs = {
  data: PostLbInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePostLbLocalizationArgs = {
  data?: InputMaybe<PostLbInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateSchedulerSchedulerArgs = {
  data: SchedulerSchedulerInput;
};


export type MutationCreateSectionsCbArgs = {
  data: SectionsCbInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUrlAliasPathArgs = {
  data: UrlAliasPathInput;
};


export type MutationCreateUrlAliasPatternArgs = {
  data: UrlAliasPatternInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryCbArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCategoryLbArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePostCbArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePostHfArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePostLbArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteSchedulerSchedulerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSectionsCbArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUrlAliasPathArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUrlAliasPatternArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateCategoryCbArgs = {
  data: CategoryCbInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCategoryLbArgs = {
  data: CategoryLbInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdatePostCbArgs = {
  data: PostCbInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePostHfArgs = {
  data: PostHfInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePostLbArgs = {
  data: PostLbInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateSchedulerSchedulerArgs = {
  data: SchedulerSchedulerInput;
  id: Scalars['ID'];
};


export type MutationUpdateSectionsCbArgs = {
  data: SectionsCbInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUrlAliasPathArgs = {
  data: UrlAliasPathInput;
  id: Scalars['ID'];
};


export type MutationUpdateUrlAliasPatternArgs = {
  data: UrlAliasPatternInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type PostCb = {
  __typename?: 'PostCb';
  Slug?: Maybe<Scalars['String']>;
  category_cb?: Maybe<CategoryCbEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fields?: Maybe<ComponentPostPostComponent>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PostCbRelationResponseCollection>;
  popular_category_cb?: Maybe<CategoryCbEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sections_cbs?: Maybe<SectionsCbRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type PostCbLocalizationsArgs = {
  filters?: InputMaybe<PostCbFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PostCbSections_CbsArgs = {
  filters?: InputMaybe<SectionsCbFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PostCbEntity = {
  __typename?: 'PostCbEntity';
  attributes?: Maybe<PostCb>;
  id?: Maybe<Scalars['ID']>;
};

export type PostCbEntityResponse = {
  __typename?: 'PostCbEntityResponse';
  data?: Maybe<PostCbEntity>;
};

export type PostCbEntityResponseCollection = {
  __typename?: 'PostCbEntityResponseCollection';
  data: Array<PostCbEntity>;
  meta: ResponseCollectionMeta;
};

export type PostCbFiltersInput = {
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PostCbFiltersInput>>>;
  category_cb?: InputMaybe<CategoryCbFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fields?: InputMaybe<ComponentPostPostComponentFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PostCbFiltersInput>;
  not?: InputMaybe<PostCbFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostCbFiltersInput>>>;
  popular_category_cb?: InputMaybe<CategoryCbFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sections_cbs?: InputMaybe<SectionsCbFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url_path_id?: InputMaybe<StringFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type PostCbInput = {
  Slug?: InputMaybe<Scalars['String']>;
  category_cb?: InputMaybe<Scalars['ID']>;
  fields?: InputMaybe<ComponentPostPostComponentInput>;
  popular_category_cb?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sections_cbs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  url_path_id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type PostCbRelationResponseCollection = {
  __typename?: 'PostCbRelationResponseCollection';
  data: Array<PostCbEntity>;
};

export type PostHf = {
  __typename?: 'PostHf';
  createdAt?: Maybe<Scalars['DateTime']>;
  fields?: Maybe<ComponentPostPostComponent>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PostHfRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
};


export type PostHfLocalizationsArgs = {
  filters?: InputMaybe<PostHfFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PostHfEntity = {
  __typename?: 'PostHfEntity';
  attributes?: Maybe<PostHf>;
  id?: Maybe<Scalars['ID']>;
};

export type PostHfEntityResponse = {
  __typename?: 'PostHfEntityResponse';
  data?: Maybe<PostHfEntity>;
};

export type PostHfEntityResponseCollection = {
  __typename?: 'PostHfEntityResponseCollection';
  data: Array<PostHfEntity>;
  meta: ResponseCollectionMeta;
};

export type PostHfFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostHfFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fields?: InputMaybe<ComponentPostPostComponentFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PostHfFiltersInput>;
  not?: InputMaybe<PostHfFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostHfFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url_path_id?: InputMaybe<StringFilterInput>;
};

export type PostHfInput = {
  fields?: InputMaybe<ComponentPostPostComponentInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  url_path_id?: InputMaybe<Scalars['String']>;
};

export type PostHfRelationResponseCollection = {
  __typename?: 'PostHfRelationResponseCollection';
  data: Array<PostHfEntity>;
};

export type PostLb = {
  __typename?: 'PostLb';
  category_lb?: Maybe<CategoryLbEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fields?: Maybe<ComponentPostPostComponent>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PostLbRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
};


export type PostLbLocalizationsArgs = {
  filters?: InputMaybe<PostLbFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PostLbEntity = {
  __typename?: 'PostLbEntity';
  attributes?: Maybe<PostLb>;
  id?: Maybe<Scalars['ID']>;
};

export type PostLbEntityResponse = {
  __typename?: 'PostLbEntityResponse';
  data?: Maybe<PostLbEntity>;
};

export type PostLbEntityResponseCollection = {
  __typename?: 'PostLbEntityResponseCollection';
  data: Array<PostLbEntity>;
  meta: ResponseCollectionMeta;
};

export type PostLbFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostLbFiltersInput>>>;
  category_lb?: InputMaybe<CategoryLbFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fields?: InputMaybe<ComponentPostPostComponentFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PostLbFiltersInput>;
  not?: InputMaybe<PostLbFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostLbFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url_path_id?: InputMaybe<StringFilterInput>;
};

export type PostLbInput = {
  category_lb?: InputMaybe<Scalars['ID']>;
  fields?: InputMaybe<ComponentPostPostComponentInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  url_path_id?: InputMaybe<Scalars['String']>;
};

export type PostLbRelationResponseCollection = {
  __typename?: 'PostLbRelationResponseCollection';
  data: Array<PostLbEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  categoryCb?: Maybe<CategoryCbEntityResponse>;
  categoryCbs?: Maybe<CategoryCbEntityResponseCollection>;
  categoryLb?: Maybe<CategoryLbEntityResponse>;
  categoryLbs?: Maybe<CategoryLbEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  postCb?: Maybe<PostCbEntityResponse>;
  postCbs?: Maybe<PostCbEntityResponseCollection>;
  postHf?: Maybe<PostHfEntityResponse>;
  postHfs?: Maybe<PostHfEntityResponseCollection>;
  postLb?: Maybe<PostLbEntityResponse>;
  postLbs?: Maybe<PostLbEntityResponseCollection>;
  schedulerScheduler?: Maybe<SchedulerSchedulerEntityResponseCollection>;
  sectionsCb?: Maybe<SectionsCbEntityResponse>;
  sectionsCbs?: Maybe<SectionsCbEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  urlAliasPath?: Maybe<UrlAliasPathEntityResponse>;
  urlAliasPaths?: Maybe<UrlAliasPathEntityResponseCollection>;
  urlAliasPattern?: Maybe<UrlAliasPatternEntityResponse>;
  urlAliasPatterns?: Maybe<UrlAliasPatternEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCategoryCbArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryCategoryCbsArgs = {
  filters?: InputMaybe<CategoryCbFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryLbArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryCategoryLbsArgs = {
  filters?: InputMaybe<CategoryLbFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPostCbArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPostCbsArgs = {
  filters?: InputMaybe<PostCbFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPostHfArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPostHfsArgs = {
  filters?: InputMaybe<PostHfFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPostLbArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPostLbsArgs = {
  filters?: InputMaybe<PostLbFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySchedulerSchedulerArgs = {
  filters?: InputMaybe<SchedulerSchedulerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySectionsCbArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySectionsCbsArgs = {
  filters?: InputMaybe<SectionsCbFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUrlAliasPathArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUrlAliasPathsArgs = {
  filters?: InputMaybe<UrlAliasPathFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUrlAliasPatternArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUrlAliasPatternsArgs = {
  filters?: InputMaybe<UrlAliasPatternFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SchedulerScheduler = {
  __typename?: 'SchedulerScheduler';
  contentId?: Maybe<Scalars['Long']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  scheduleType?: Maybe<Scalars['String']>;
  scheduledDatetime?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchedulerSchedulerEntity = {
  __typename?: 'SchedulerSchedulerEntity';
  attributes?: Maybe<SchedulerScheduler>;
  id?: Maybe<Scalars['ID']>;
};

export type SchedulerSchedulerEntityResponse = {
  __typename?: 'SchedulerSchedulerEntityResponse';
  data?: Maybe<SchedulerSchedulerEntity>;
};

export type SchedulerSchedulerEntityResponseCollection = {
  __typename?: 'SchedulerSchedulerEntityResponseCollection';
  data: Array<SchedulerSchedulerEntity>;
  meta: ResponseCollectionMeta;
};

export type SchedulerSchedulerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SchedulerSchedulerFiltersInput>>>;
  contentId?: InputMaybe<LongFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SchedulerSchedulerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SchedulerSchedulerFiltersInput>>>;
  scheduleType?: InputMaybe<StringFilterInput>;
  scheduledDatetime?: InputMaybe<DateTimeFilterInput>;
  uid?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SchedulerSchedulerInput = {
  contentId?: InputMaybe<Scalars['Long']>;
  scheduleType?: InputMaybe<Scalars['String']>;
  scheduledDatetime?: InputMaybe<Scalars['DateTime']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type SectionsCb = {
  __typename?: 'SectionsCb';
  Name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  post_cbs?: Maybe<PostCbRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
};


export type SectionsCbPost_CbsArgs = {
  filters?: InputMaybe<PostCbFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SectionsCbEntity = {
  __typename?: 'SectionsCbEntity';
  attributes?: Maybe<SectionsCb>;
  id?: Maybe<Scalars['ID']>;
};

export type SectionsCbEntityResponse = {
  __typename?: 'SectionsCbEntityResponse';
  data?: Maybe<SectionsCbEntity>;
};

export type SectionsCbEntityResponseCollection = {
  __typename?: 'SectionsCbEntityResponseCollection';
  data: Array<SectionsCbEntity>;
  meta: ResponseCollectionMeta;
};

export type SectionsCbFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SectionsCbFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SectionsCbFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SectionsCbFiltersInput>>>;
  post_cbs?: InputMaybe<PostCbFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url_path_id?: InputMaybe<StringFilterInput>;
};

export type SectionsCbInput = {
  Name?: InputMaybe<Scalars['String']>;
  post_cbs?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  url_path_id?: InputMaybe<Scalars['String']>;
};

export type SectionsCbRelationResponseCollection = {
  __typename?: 'SectionsCbRelationResponseCollection';
  data: Array<SectionsCbEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UrlAliasPath = {
  __typename?: 'UrlAliasPath';
  contenttype: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  generated?: Maybe<Scalars['Boolean']>;
  path: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UrlAliasPathEntity = {
  __typename?: 'UrlAliasPathEntity';
  attributes?: Maybe<UrlAliasPath>;
  id?: Maybe<Scalars['ID']>;
};

export type UrlAliasPathEntityResponse = {
  __typename?: 'UrlAliasPathEntityResponse';
  data?: Maybe<UrlAliasPathEntity>;
};

export type UrlAliasPathEntityResponseCollection = {
  __typename?: 'UrlAliasPathEntityResponseCollection';
  data: Array<UrlAliasPathEntity>;
  meta: ResponseCollectionMeta;
};

export type UrlAliasPathFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UrlAliasPathFiltersInput>>>;
  contenttype?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  generated?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UrlAliasPathFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UrlAliasPathFiltersInput>>>;
  path?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UrlAliasPathInput = {
  contenttype?: InputMaybe<Scalars['String']>;
  generated?: InputMaybe<Scalars['Boolean']>;
  path?: InputMaybe<Scalars['String']>;
};

export type UrlAliasPattern = {
  __typename?: 'UrlAliasPattern';
  code: Scalars['String'];
  contenttype: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  label: Scalars['String'];
  languages: Scalars['JSON'];
  pattern: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UrlAliasPatternEntity = {
  __typename?: 'UrlAliasPatternEntity';
  attributes?: Maybe<UrlAliasPattern>;
  id?: Maybe<Scalars['ID']>;
};

export type UrlAliasPatternEntityResponse = {
  __typename?: 'UrlAliasPatternEntityResponse';
  data?: Maybe<UrlAliasPatternEntity>;
};

export type UrlAliasPatternEntityResponseCollection = {
  __typename?: 'UrlAliasPatternEntityResponseCollection';
  data: Array<UrlAliasPatternEntity>;
  meta: ResponseCollectionMeta;
};

export type UrlAliasPatternFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UrlAliasPatternFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  contenttype?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  languages?: InputMaybe<JsonFilterInput>;
  not?: InputMaybe<UrlAliasPatternFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UrlAliasPatternFiltersInput>>>;
  pattern?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UrlAliasPatternInput = {
  code?: InputMaybe<Scalars['String']>;
  contenttype?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  languages?: InputMaybe<Scalars['JSON']>;
  pattern?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFileEntityResponse>;
  lastname?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url_path_id?: InputMaybe<StringFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  url_path_id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityFragmentFragment = { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null };

export type UsersPermissionsUserEntityResponseFragmentFragment = { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null } | null };

export type UsersPermissionsUserEntityResponseCollectionFragmentFragment = { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null }> };

export type AuthorQueryVariables = Exact<{
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
}>;


export type AuthorQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null }> } | null };

export type AuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthorsQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null }> } | null };

export type CategoryCbsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type CategoryCbsQuery = { __typename?: 'Query', categoryCbs?: { __typename?: 'CategoryCbEntityResponseCollection', data: Array<{ __typename?: 'CategoryCbEntity', attributes?: { __typename?: 'CategoryCb', Name?: string | null, Meta_Description?: string | null, Slug?: string | null, popular_post_cbs?: { __typename?: 'PostCbRelationResponseCollection', data: Array<{ __typename?: 'PostCbEntity', attributes?: { __typename?: 'PostCb', Slug?: string | null, updatedAt?: any | null, createdAt?: any | null, publishedAt?: any | null, category_cb?: { __typename?: 'CategoryCbEntityResponse', data?: { __typename?: 'CategoryCbEntity', attributes?: { __typename?: 'CategoryCb', Name?: string | null, Meta_Description?: string | null, Slug?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null, size: number, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, fields?: { __typename?: 'ComponentPostPostComponent', Title: string, Content: string, Meta_Description: string, Estimation?: number | null, Image?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null } | null } | null }> } | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null, size: number, previewUrl?: string | null } | null } | null } | null } | null }> } | null };

export type CategoryCbEntityResponseCollectionFragmentFragment = { __typename?: 'CategoryCbEntityResponseCollection', data: Array<{ __typename?: 'CategoryCbEntity', attributes?: { __typename?: 'CategoryCb', Name?: string | null, Meta_Description?: string | null, Slug?: string | null, popular_post_cbs?: { __typename?: 'PostCbRelationResponseCollection', data: Array<{ __typename?: 'PostCbEntity', attributes?: { __typename?: 'PostCb', Slug?: string | null, updatedAt?: any | null, createdAt?: any | null, publishedAt?: any | null, category_cb?: { __typename?: 'CategoryCbEntityResponse', data?: { __typename?: 'CategoryCbEntity', attributes?: { __typename?: 'CategoryCb', Name?: string | null, Meta_Description?: string | null, Slug?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null, size: number, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, fields?: { __typename?: 'ComponentPostPostComponent', Title: string, Content: string, Meta_Description: string, Estimation?: number | null, Image?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null } | null } | null }> } | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null, size: number, previewUrl?: string | null } | null } | null } | null } | null }> };

export type CategoryCbEntityResponseFragmentFragment = { __typename?: 'CategoryCbEntityResponse', data?: { __typename?: 'CategoryCbEntity', attributes?: { __typename?: 'CategoryCb', Name?: string | null, Meta_Description?: string | null, Slug?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null, size: number, previewUrl?: string | null } | null } | null } | null } | null } | null };

export type CategoryCbQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
}>;


export type CategoryCbQuery = { __typename?: 'Query', postCbs?: { __typename?: 'PostCbEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number, pageSize: number, page: number } }, data: Array<{ __typename?: 'PostCbEntity', attributes?: { __typename?: 'PostCb', Slug?: string | null, updatedAt?: any | null, createdAt?: any | null, publishedAt?: any | null, category_cb?: { __typename?: 'CategoryCbEntityResponse', data?: { __typename?: 'CategoryCbEntity', attributes?: { __typename?: 'CategoryCb', Name?: string | null, Meta_Description?: string | null, Slug?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null, size: number, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, fields?: { __typename?: 'ComponentPostPostComponent', Title: string, Content: string, Meta_Description: string, Estimation?: number | null, Image?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null } | null } | null }> } | null, categoryCb?: { __typename?: 'CategoryCbEntityResponse', data?: { __typename?: 'CategoryCbEntity', attributes?: { __typename?: 'CategoryCb', Name?: string | null, Meta_Description?: string | null, Slug?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null, size: number, previewUrl?: string | null } | null } | null } | null } | null } | null } | null };

export type LocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalesQuery = { __typename?: 'Query', i18NLocales?: { __typename?: 'I18NLocaleEntityResponseCollection', data: Array<{ __typename?: 'I18NLocaleEntity', attributes?: { __typename?: 'I18NLocale', name?: string | null, code?: string | null } | null }> } | null };

export type PostCbEntityFragmentFragment = { __typename?: 'PostCbEntity', attributes?: { __typename?: 'PostCb', Slug?: string | null, updatedAt?: any | null, createdAt?: any | null, publishedAt?: any | null, category_cb?: { __typename?: 'CategoryCbEntityResponse', data?: { __typename?: 'CategoryCbEntity', attributes?: { __typename?: 'CategoryCb', Name?: string | null, Meta_Description?: string | null, Slug?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null, size: number, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, fields?: { __typename?: 'ComponentPostPostComponent', Title: string, Content: string, Meta_Description: string, Estimation?: number | null, Image?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null } | null } | null };

export type PostCbEntityResponseCollectionFragmentFragment = { __typename?: 'PostCbEntityResponseCollection', data: Array<{ __typename?: 'PostCbEntity', attributes?: { __typename?: 'PostCb', Slug?: string | null, updatedAt?: any | null, createdAt?: any | null, publishedAt?: any | null, category_cb?: { __typename?: 'CategoryCbEntityResponse', data?: { __typename?: 'CategoryCbEntity', attributes?: { __typename?: 'CategoryCb', Name?: string | null, Meta_Description?: string | null, Slug?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null, size: number, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, fields?: { __typename?: 'ComponentPostPostComponent', Title: string, Content: string, Meta_Description: string, Estimation?: number | null, Image?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null } | null } | null }> };

export type PostCbEntityResponseFragmentFragment = { __typename?: 'PostCbEntityResponse', data?: { __typename?: 'PostCbEntity', attributes?: { __typename?: 'PostCb', Slug?: string | null, updatedAt?: any | null, createdAt?: any | null, publishedAt?: any | null, category_cb?: { __typename?: 'CategoryCbEntityResponse', data?: { __typename?: 'CategoryCbEntity', attributes?: { __typename?: 'CategoryCb', Name?: string | null, Meta_Description?: string | null, Slug?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null, size: number, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, fields?: { __typename?: 'ComponentPostPostComponent', Title: string, Content: string, Meta_Description: string, Estimation?: number | null, Image?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null } | null } | null } | null };

export type PostCbQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  postId: Scalars['ID'];
}>;


export type PostCbQuery = { __typename?: 'Query', postCb?: { __typename?: 'PostCbEntityResponse', data?: { __typename?: 'PostCbEntity', attributes?: { __typename?: 'PostCb', Slug?: string | null, updatedAt?: any | null, createdAt?: any | null, publishedAt?: any | null, category_cb?: { __typename?: 'CategoryCbEntityResponse', data?: { __typename?: 'CategoryCbEntity', attributes?: { __typename?: 'CategoryCb', Name?: string | null, Meta_Description?: string | null, Slug?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null, size: number, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, fields?: { __typename?: 'ComponentPostPostComponent', Title: string, Content: string, Meta_Description: string, Estimation?: number | null, Image?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null } | null } | null } | null } | null };

export type PostCbsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  sectionId?: InputMaybe<Scalars['ID']>;
  categoryId?: InputMaybe<Scalars['ID']>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  slug?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
  popularCategoryId?: InputMaybe<Scalars['ID']>;
}>;


export type PostCbsQuery = { __typename?: 'Query', postCbs?: { __typename?: 'PostCbEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } }, data: Array<{ __typename?: 'PostCbEntity', attributes?: { __typename?: 'PostCb', Slug?: string | null, updatedAt?: any | null, createdAt?: any | null, publishedAt?: any | null, category_cb?: { __typename?: 'CategoryCbEntityResponse', data?: { __typename?: 'CategoryCbEntity', attributes?: { __typename?: 'CategoryCb', Name?: string | null, Meta_Description?: string | null, Slug?: string | null, Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null, size: number, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, firstname?: string | null, lastname?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, previewUrl?: string | null } | null } | null } | null } | null } | null } | null, fields?: { __typename?: 'ComponentPostPostComponent', Title: string, Content: string, Meta_Description: string, Estimation?: number | null, Image?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null }> } | null } | null } | null }> } | null };

export const UsersPermissionsUserEntityFragmentFragmentDoc = gql`
    fragment UsersPermissionsUserEntityFragment on UsersPermissionsUserEntity {
  id
  attributes {
    username
    firstname
    lastname
    description
    image {
      data {
        attributes {
          url
          width
          height
          previewUrl
        }
      }
    }
  }
}
    `;
export const UsersPermissionsUserEntityResponseCollectionFragmentFragmentDoc = gql`
    fragment UsersPermissionsUserEntityResponseCollectionFragment on UsersPermissionsUserEntityResponseCollection {
  data {
    ...UsersPermissionsUserEntityFragment
  }
}
    ${UsersPermissionsUserEntityFragmentFragmentDoc}`;
export const CategoryCbEntityResponseFragmentFragmentDoc = gql`
    fragment CategoryCbEntityResponseFragment on CategoryCbEntityResponse {
  data {
    attributes {
      Name
      Meta_Description
      Slug
      Image {
        data {
          attributes {
            url
            name
            alternativeText
            size
            previewUrl
          }
        }
      }
    }
  }
}
    `;
export const UsersPermissionsUserEntityResponseFragmentFragmentDoc = gql`
    fragment UsersPermissionsUserEntityResponseFragment on UsersPermissionsUserEntityResponse {
  data {
    ...UsersPermissionsUserEntityFragment
  }
}
    ${UsersPermissionsUserEntityFragmentFragmentDoc}`;
export const PostCbEntityFragmentFragmentDoc = gql`
    fragment PostCbEntityFragment on PostCbEntity {
  attributes {
    Slug
    category_cb {
      ...CategoryCbEntityResponseFragment
    }
    user {
      ...UsersPermissionsUserEntityResponseFragment
    }
    fields {
      Title
      Content
      Meta_Description
      Estimation
      Image {
        data {
          attributes {
            width
            height
            url
            previewUrl
          }
        }
      }
    }
    updatedAt
    createdAt
    publishedAt
    category_cb {
      data {
        attributes {
          Name
          Meta_Description
        }
      }
    }
  }
}
    ${CategoryCbEntityResponseFragmentFragmentDoc}
${UsersPermissionsUserEntityResponseFragmentFragmentDoc}`;
export const CategoryCbEntityResponseCollectionFragmentFragmentDoc = gql`
    fragment CategoryCbEntityResponseCollectionFragment on CategoryCbEntityResponseCollection {
  data {
    attributes {
      popular_post_cbs {
        data {
          ...PostCbEntityFragment
        }
      }
      Name
      Meta_Description
      Slug
      Image {
        data {
          attributes {
            url
            name
            alternativeText
            size
            previewUrl
          }
        }
      }
    }
  }
}
    ${PostCbEntityFragmentFragmentDoc}`;
export const PostCbEntityResponseCollectionFragmentFragmentDoc = gql`
    fragment PostCbEntityResponseCollectionFragment on PostCbEntityResponseCollection {
  data {
    ...PostCbEntityFragment
  }
}
    ${PostCbEntityFragmentFragmentDoc}`;
export const PostCbEntityResponseFragmentFragmentDoc = gql`
    fragment PostCbEntityResponseFragment on PostCbEntityResponse {
  data {
    ...PostCbEntityFragment
  }
}
    ${PostCbEntityFragmentFragmentDoc}`;
export const AuthorDocument = gql`
    query Author($firstname: String, $lastname: String) {
  usersPermissionsUsers(
    filters: {firstname: {containsi: $firstname}, lastname: {containsi: $lastname}}
  ) {
    ...UsersPermissionsUserEntityResponseCollectionFragment
  }
}
    ${UsersPermissionsUserEntityResponseCollectionFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AuthorGQL extends Apollo.Query<AuthorQuery, AuthorQueryVariables> {
    document = AuthorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AuthorsDocument = gql`
    query Authors {
  usersPermissionsUsers {
    ...UsersPermissionsUserEntityResponseCollectionFragment
  }
}
    ${UsersPermissionsUserEntityResponseCollectionFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AuthorsGQL extends Apollo.Query<AuthorsQuery, AuthorsQueryVariables> {
    document = AuthorsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CategoryCbsDocument = gql`
    query CategoryCbs($locale: I18NLocaleCode) {
  categoryCbs(locale: $locale) {
    ...CategoryCbEntityResponseCollectionFragment
  }
}
    ${CategoryCbEntityResponseCollectionFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CategoryCbsGQL extends Apollo.Query<CategoryCbsQuery, CategoryCbsQueryVariables> {
    document = CategoryCbsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CategoryCbDocument = gql`
    query CategoryCb($categoryId: ID, $page: Int, $pageSize: Int, $locale: String) {
  postCbs(
    filters: {category_cb: {id: {eq: $categoryId}}, locale: {eq: $locale}}
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    ...PostCbEntityResponseCollectionFragment
    meta {
      pagination {
        total
        pageCount
        pageSize
        page
      }
    }
  }
  categoryCb(id: $categoryId) {
    ...CategoryCbEntityResponseFragment
  }
}
    ${PostCbEntityResponseCollectionFragmentFragmentDoc}
${CategoryCbEntityResponseFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CategoryCbGQL extends Apollo.Query<CategoryCbQuery, CategoryCbQueryVariables> {
    document = CategoryCbDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LocalesDocument = gql`
    query Locales {
  i18NLocales {
    data {
      attributes {
        name
        code
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LocalesGQL extends Apollo.Query<LocalesQuery, LocalesQueryVariables> {
    document = LocalesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PostCbDocument = gql`
    query PostCb($locale: I18NLocaleCode, $postId: ID!) {
  postCb(locale: $locale, id: $postId) {
    ...PostCbEntityResponseFragment
  }
}
    ${PostCbEntityResponseFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PostCbGQL extends Apollo.Query<PostCbQuery, PostCbQueryVariables> {
    document = PostCbDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PostCbsDocument = gql`
    query PostCbs($locale: I18NLocaleCode!, $sectionId: ID, $categoryId: ID, $page: Int!, $pageSize: Int!, $slug: String, $userId: ID, $popularCategoryId: ID) {
  postCbs(
    locale: $locale
    filters: {sections_cbs: {id: {eq: $sectionId}}, category_cb: {id: {eq: $categoryId}}, Slug: {eq: $slug}, user: {id: {eq: $userId}}, popular_category_cb: {id: {eq: $popularCategoryId}}}
    pagination: {page: $page, pageSize: $pageSize}
  ) {
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
    ...PostCbEntityResponseCollectionFragment
  }
}
    ${PostCbEntityResponseCollectionFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PostCbsGQL extends Apollo.Query<PostCbsQuery, PostCbsQueryVariables> {
    document = PostCbsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }