import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  DateTime: Date;
  Json: any;
};

export type ActivityEvent = {
  __typename?: 'ActivityEvent';
  communityId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  eventId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  location: Scalars['String'];
  platform: Scalars['String'];
  properties?: Maybe<Scalars['Json']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ActivityEventCreateInput = {
  communityId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  platform?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Scalars['Json']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutActivityEventsInput;
};

export type ActivityEventCreateManyUserInput = {
  communityId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  platform?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Scalars['Json']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityEventCreateManyUserInputEnvelope = {
  data?: InputMaybe<Array<ActivityEventCreateManyUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActivityEventCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ActivityEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityEventCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ActivityEventCreateWithoutUserInput>>;
  createMany?: InputMaybe<ActivityEventCreateManyUserInputEnvelope>;
};

export type ActivityEventCreateOrConnectWithoutUserInput = {
  create: ActivityEventCreateWithoutUserInput;
  where: ActivityEventWhereUniqueInput;
};

export type ActivityEventCreateWithoutUserInput = {
  communityId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  platform?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Scalars['Json']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActivityEventListRelationFilter = {
  every?: InputMaybe<ActivityEventWhereInput>;
  none?: InputMaybe<ActivityEventWhereInput>;
  some?: InputMaybe<ActivityEventWhereInput>;
};

export type ActivityEventOrderByInput = {
  communityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  platform?: InputMaybe<SortOrder>;
  properties?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ActivityEventScalarWhereInput = {
  AND?: InputMaybe<Array<ActivityEventScalarWhereInput>>;
  NOT?: InputMaybe<Array<ActivityEventScalarWhereInput>>;
  OR?: InputMaybe<Array<ActivityEventScalarWhereInput>>;
  communityId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  platform?: InputMaybe<StringFilter>;
  properties?: InputMaybe<JsonNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ActivityEventUpdateInput = {
  communityId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  platform?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<Scalars['Json']>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutActivityEventsInput>;
};

export type ActivityEventUpdateManyMutationInput = {
  communityId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  platform?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<Scalars['Json']>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ActivityEventUpdateManyWithWhereWithoutUserInput = {
  data: ActivityEventUpdateManyMutationInput;
  where: ActivityEventScalarWhereInput;
};

export type ActivityEventUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ActivityEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityEventCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ActivityEventCreateWithoutUserInput>>;
  createMany?: InputMaybe<ActivityEventCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ActivityEventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ActivityEventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ActivityEventWhereUniqueInput>>;
  set?: InputMaybe<Array<ActivityEventWhereUniqueInput>>;
  update?: InputMaybe<Array<ActivityEventUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ActivityEventUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ActivityEventUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ActivityEventUpdateWithWhereUniqueWithoutUserInput = {
  data: ActivityEventUpdateWithoutUserInput;
  where: ActivityEventWhereUniqueInput;
};

export type ActivityEventUpdateWithoutUserInput = {
  communityId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  platform?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<Scalars['Json']>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ActivityEventUpsertWithWhereUniqueWithoutUserInput = {
  create: ActivityEventCreateWithoutUserInput;
  update: ActivityEventUpdateWithoutUserInput;
  where: ActivityEventWhereUniqueInput;
};

export type ActivityEventWhereInput = {
  AND?: InputMaybe<Array<ActivityEventWhereInput>>;
  NOT?: InputMaybe<Array<ActivityEventWhereInput>>;
  OR?: InputMaybe<Array<ActivityEventWhereInput>>;
  communityId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  platform?: InputMaybe<StringFilter>;
  properties?: InputMaybe<JsonNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type ActivityEventWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type AdminChat = {
  __typename?: 'AdminChat';
  id?: Maybe<Scalars['String']>;
  lastMessage?: Maybe<TalksMessage>;
  title?: Maybe<Scalars['String']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  communities?: Maybe<Array<Maybe<Community>>>;
  errors?: Maybe<Array<Maybe<TranslatableError>>>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type AuthV2Response = {
  __typename?: 'AuthV2Response';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  verificationCodeSent?: Maybe<Scalars['Boolean']>;
};

export enum BackgroundType {
  Color = 'Color',
  Picture = 'Picture',
  Pictures = 'Pictures',
  Video = 'Video',
  VideoAlways = 'VideoAlways'
}

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type ByDateBreakdownData = {
  __typename?: 'ByDateBreakdownData';
  byNameBreakdown?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  totalFaceValue?: Maybe<Scalars['Float']>;
  totalTickets?: Maybe<Scalars['Float']>;
};

export type ByTypeBreakdownData = {
  __typename?: 'ByTypeBreakdownData';
  data?: Maybe<Array<Maybe<Scalars['Float']>>>;
  label?: Maybe<Scalars['String']>;
};

export type CaDashboardResponse = {
  __typename?: 'CADashboardResponse';
  advocates?: Maybe<Array<Maybe<User>>>;
  contributors?: Maybe<Array<Maybe<User>>>;
  observers?: Maybe<Array<Maybe<User>>>;
  participants?: Maybe<Array<Maybe<User>>>;
  sleepers?: Maybe<Array<Maybe<User>>>;
};

export type CaEventActivityEvent = {
  __typename?: 'CAEventActivityEvent';
  action?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type CaEventInformation = {
  __typename?: 'CAEventInformation';
  grossRevenue?: Maybe<Scalars['Float']>;
  ticketsSold?: Maybe<Scalars['Float']>;
  usersCheckedIn?: Maybe<Scalars['Float']>;
  usersInvited?: Maybe<Scalars['Float']>;
  usersRegistered?: Maybe<Scalars['Float']>;
};

export type CaEventResponse = {
  __typename?: 'CAEventResponse';
  activityEvents?: Maybe<Array<Maybe<CaEventActivityEvent>>>;
  event?: Maybe<Event>;
  information?: Maybe<CaEventInformation>;
};

export type CaEventTicketsActivityResponse = {
  __typename?: 'CAEventTicketsActivityResponse';
  byDateBreakdown?: Maybe<Array<Maybe<ByDateBreakdownData>>>;
  byTypeBreakdown?: Maybe<Array<Maybe<ByTypeBreakdownData>>>;
};

export type CaFinancesOverviewResponse = {
  __typename?: 'CAFinancesOverviewResponse';
  salesBreakdown?: Maybe<Array<Maybe<SalesData>>>;
  totalSales?: Maybe<Scalars['Float']>;
};

export type CaFinancesPayoutsResponse = {
  __typename?: 'CAFinancesPayoutsResponse';
  availablePayouts?: Maybe<Scalars['Float']>;
  payoutsBreakdown?: Maybe<Array<Maybe<Scalars['Float']>>>;
  totalPayouts?: Maybe<Scalars['Float']>;
};

export type CaLinkStripeAccountPayload = {
  __typename?: 'CALinkStripeAccountPayload';
  url?: Maybe<Scalars['String']>;
};

export type CaStripeAccountInfoPayload = {
  __typename?: 'CAStripeAccountInfoPayload';
  chargesEnabled?: Maybe<Scalars['String']>;
  payoutsEnabled?: Maybe<Scalars['String']>;
  requirements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CaUnlinkStripeAccountPayload = {
  __typename?: 'CAUnlinkStripeAccountPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type Cta = {
  __typename?: 'CTA';
  frequency: Scalars['String'];
  link: Scalars['String'];
  style: Scalars['String'];
  text: Scalars['String'];
};

export type CatalogItem = {
  __typename?: 'CatalogItem';
  categories: Array<CatalogItemCategory>;
  description: Scalars['String'];
  id: Scalars['String'];
  instagramUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity?: Maybe<Community>;
  parentCommunityId?: Maybe<Scalars['String']>;
  schedule: Array<CatalogItemSchedule>;
  soundcloudUrl?: Maybe<Scalars['String']>;
  spotifyUrl?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
};


export type CatalogItemCategoriesArgs = {
  cursor?: InputMaybe<CatalogItemCategoryWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type CatalogItemScheduleArgs = {
  cursor?: InputMaybe<CatalogItemScheduleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CatalogItemScheduleOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type CatalogItemCategory = {
  __typename?: 'CatalogItemCategory';
  catalogItems: Array<CatalogItem>;
  id: Scalars['String'];
  name: Scalars['String'];
};


export type CatalogItemCategoryCatalogItemsArgs = {
  cursor?: InputMaybe<CatalogItemWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type CatalogItemCategoryCreateInput = {
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutCategoriesInput>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CatalogItemCategoryCreateNestedManyWithoutCatalogItemsInput = {
  connect?: InputMaybe<Array<CatalogItemCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatalogItemCategoryCreateOrConnectWithoutCatalogItemsInput>>;
  create?: InputMaybe<Array<CatalogItemCategoryCreateWithoutCatalogItemsInput>>;
};

export type CatalogItemCategoryCreateOrConnectWithoutCatalogItemsInput = {
  create: CatalogItemCategoryCreateWithoutCatalogItemsInput;
  where: CatalogItemCategoryWhereUniqueInput;
};

export type CatalogItemCategoryCreateWithoutCatalogItemsInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CatalogItemCategoryListRelationFilter = {
  every?: InputMaybe<CatalogItemCategoryWhereInput>;
  none?: InputMaybe<CatalogItemCategoryWhereInput>;
  some?: InputMaybe<CatalogItemCategoryWhereInput>;
};

export type CatalogItemCategoryOrderByInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CatalogItemCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CatalogItemCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CatalogItemCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CatalogItemCategoryScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CatalogItemCategoryUpdateInput = {
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutCategoriesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CatalogItemCategoryUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CatalogItemCategoryUpdateManyWithWhereWithoutCatalogItemsInput = {
  data: CatalogItemCategoryUpdateManyMutationInput;
  where: CatalogItemCategoryScalarWhereInput;
};

export type CatalogItemCategoryUpdateManyWithoutCatalogItemsInput = {
  connect?: InputMaybe<Array<CatalogItemCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatalogItemCategoryCreateOrConnectWithoutCatalogItemsInput>>;
  create?: InputMaybe<Array<CatalogItemCategoryCreateWithoutCatalogItemsInput>>;
  delete?: InputMaybe<Array<CatalogItemCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CatalogItemCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CatalogItemCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CatalogItemCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CatalogItemCategoryUpdateWithWhereUniqueWithoutCatalogItemsInput>>;
  updateMany?: InputMaybe<Array<CatalogItemCategoryUpdateManyWithWhereWithoutCatalogItemsInput>>;
  upsert?: InputMaybe<Array<CatalogItemCategoryUpsertWithWhereUniqueWithoutCatalogItemsInput>>;
};

export type CatalogItemCategoryUpdateWithWhereUniqueWithoutCatalogItemsInput = {
  data: CatalogItemCategoryUpdateWithoutCatalogItemsInput;
  where: CatalogItemCategoryWhereUniqueInput;
};

export type CatalogItemCategoryUpdateWithoutCatalogItemsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CatalogItemCategoryUpsertWithWhereUniqueWithoutCatalogItemsInput = {
  create: CatalogItemCategoryCreateWithoutCatalogItemsInput;
  update: CatalogItemCategoryUpdateWithoutCatalogItemsInput;
  where: CatalogItemCategoryWhereUniqueInput;
};

export type CatalogItemCategoryWhereInput = {
  AND?: InputMaybe<Array<CatalogItemCategoryWhereInput>>;
  NOT?: InputMaybe<Array<CatalogItemCategoryWhereInput>>;
  OR?: InputMaybe<Array<CatalogItemCategoryWhereInput>>;
  catalogItems?: InputMaybe<CatalogItemListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CatalogItemCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CatalogItemCreateInput = {
  categories?: InputMaybe<CatalogItemCategoryCreateNestedManyWithoutCatalogItemsInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instagramUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutCatalogItemsInput>;
  schedule?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutArtistInput>;
  soundcloudUrl?: InputMaybe<Scalars['String']>;
  spotifyUrl?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  youtubeUrl?: InputMaybe<Scalars['String']>;
};

export type CatalogItemCreateManyParentCommunityInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instagramUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  soundcloudUrl?: InputMaybe<Scalars['String']>;
  spotifyUrl?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  youtubeUrl?: InputMaybe<Scalars['String']>;
};

export type CatalogItemCreateManyParentCommunityInputEnvelope = {
  data?: InputMaybe<Array<CatalogItemCreateManyParentCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CatalogItemCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<CatalogItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatalogItemCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<CatalogItemCreateWithoutCategoriesInput>>;
};

export type CatalogItemCreateNestedManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<CatalogItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatalogItemCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<CatalogItemCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<CatalogItemCreateManyParentCommunityInputEnvelope>;
};

export type CatalogItemCreateNestedOneWithoutScheduleInput = {
  connect?: InputMaybe<CatalogItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CatalogItemCreateOrConnectWithoutScheduleInput>;
  create?: InputMaybe<CatalogItemCreateWithoutScheduleInput>;
};

export type CatalogItemCreateOrConnectWithoutCategoriesInput = {
  create: CatalogItemCreateWithoutCategoriesInput;
  where: CatalogItemWhereUniqueInput;
};

export type CatalogItemCreateOrConnectWithoutParentCommunityInput = {
  create: CatalogItemCreateWithoutParentCommunityInput;
  where: CatalogItemWhereUniqueInput;
};

export type CatalogItemCreateOrConnectWithoutScheduleInput = {
  create: CatalogItemCreateWithoutScheduleInput;
  where: CatalogItemWhereUniqueInput;
};

export type CatalogItemCreateWithoutCategoriesInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instagramUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutCatalogItemsInput>;
  schedule?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutArtistInput>;
  soundcloudUrl?: InputMaybe<Scalars['String']>;
  spotifyUrl?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  youtubeUrl?: InputMaybe<Scalars['String']>;
};

export type CatalogItemCreateWithoutParentCommunityInput = {
  categories?: InputMaybe<CatalogItemCategoryCreateNestedManyWithoutCatalogItemsInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instagramUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  schedule?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutArtistInput>;
  soundcloudUrl?: InputMaybe<Scalars['String']>;
  spotifyUrl?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  youtubeUrl?: InputMaybe<Scalars['String']>;
};

export type CatalogItemCreateWithoutScheduleInput = {
  categories?: InputMaybe<CatalogItemCategoryCreateNestedManyWithoutCatalogItemsInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instagramUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutCatalogItemsInput>;
  soundcloudUrl?: InputMaybe<Scalars['String']>;
  spotifyUrl?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  youtubeUrl?: InputMaybe<Scalars['String']>;
};

export type CatalogItemListRelationFilter = {
  every?: InputMaybe<CatalogItemWhereInput>;
  none?: InputMaybe<CatalogItemWhereInput>;
  some?: InputMaybe<CatalogItemWhereInput>;
};

export type CatalogItemOrderByInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  instagramUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentCommunityId?: InputMaybe<SortOrder>;
  soundcloudUrl?: InputMaybe<SortOrder>;
  spotifyUrl?: InputMaybe<SortOrder>;
  twitterUrl?: InputMaybe<SortOrder>;
  youtubeUrl?: InputMaybe<SortOrder>;
};

export type CatalogItemScalarWhereInput = {
  AND?: InputMaybe<Array<CatalogItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<CatalogItemScalarWhereInput>>;
  OR?: InputMaybe<Array<CatalogItemScalarWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instagramUrl?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  parentCommunityId?: InputMaybe<StringNullableFilter>;
  soundcloudUrl?: InputMaybe<StringNullableFilter>;
  spotifyUrl?: InputMaybe<StringNullableFilter>;
  twitterUrl?: InputMaybe<StringNullableFilter>;
  youtubeUrl?: InputMaybe<StringNullableFilter>;
};

export type CatalogItemSchedule = {
  __typename?: 'CatalogItemSchedule';
  artist?: Maybe<CatalogItem>;
  artistId?: Maybe<Scalars['String']>;
  end: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  parentCommunity?: Maybe<Community>;
  parentCommunityId?: Maybe<Scalars['String']>;
  stageName: Scalars['String'];
  start: Scalars['DateTime'];
};

export type CatalogItemScheduleCreateInput = {
  artist?: InputMaybe<CatalogItemCreateNestedOneWithoutScheduleInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutCatalogSchedulesInput>;
  stageName?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
};

export type CatalogItemScheduleCreateManyArtistInput = {
  end?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentCommunityId?: InputMaybe<Scalars['String']>;
  stageName?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
};

export type CatalogItemScheduleCreateManyArtistInputEnvelope = {
  data?: InputMaybe<Array<CatalogItemScheduleCreateManyArtistInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CatalogItemScheduleCreateManyParentCommunityInput = {
  artistId?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  stageName?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
};

export type CatalogItemScheduleCreateManyParentCommunityInputEnvelope = {
  data?: InputMaybe<Array<CatalogItemScheduleCreateManyParentCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CatalogItemScheduleCreateNestedManyWithoutArtistInput = {
  connect?: InputMaybe<Array<CatalogItemScheduleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatalogItemScheduleCreateOrConnectWithoutArtistInput>>;
  create?: InputMaybe<Array<CatalogItemScheduleCreateWithoutArtistInput>>;
  createMany?: InputMaybe<CatalogItemScheduleCreateManyArtistInputEnvelope>;
};

export type CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<CatalogItemScheduleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatalogItemScheduleCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<CatalogItemScheduleCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<CatalogItemScheduleCreateManyParentCommunityInputEnvelope>;
};

export type CatalogItemScheduleCreateOrConnectWithoutArtistInput = {
  create: CatalogItemScheduleCreateWithoutArtistInput;
  where: CatalogItemScheduleWhereUniqueInput;
};

export type CatalogItemScheduleCreateOrConnectWithoutParentCommunityInput = {
  create: CatalogItemScheduleCreateWithoutParentCommunityInput;
  where: CatalogItemScheduleWhereUniqueInput;
};

export type CatalogItemScheduleCreateWithoutArtistInput = {
  end?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutCatalogSchedulesInput>;
  stageName?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
};

export type CatalogItemScheduleCreateWithoutParentCommunityInput = {
  artist?: InputMaybe<CatalogItemCreateNestedOneWithoutScheduleInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  stageName?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
};

export type CatalogItemScheduleListRelationFilter = {
  every?: InputMaybe<CatalogItemScheduleWhereInput>;
  none?: InputMaybe<CatalogItemScheduleWhereInput>;
  some?: InputMaybe<CatalogItemScheduleWhereInput>;
};

export type CatalogItemScheduleOrderByInput = {
  artistId?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentCommunityId?: InputMaybe<SortOrder>;
  stageName?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
};

export type CatalogItemScheduleScalarWhereInput = {
  AND?: InputMaybe<Array<CatalogItemScheduleScalarWhereInput>>;
  NOT?: InputMaybe<Array<CatalogItemScheduleScalarWhereInput>>;
  OR?: InputMaybe<Array<CatalogItemScheduleScalarWhereInput>>;
  artistId?: InputMaybe<StringNullableFilter>;
  end?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parentCommunityId?: InputMaybe<StringNullableFilter>;
  stageName?: InputMaybe<StringFilter>;
  start?: InputMaybe<DateTimeFilter>;
};

export type CatalogItemScheduleUpdateInput = {
  artist?: InputMaybe<CatalogItemUpdateOneWithoutScheduleInput>;
  end?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutCatalogSchedulesInput>;
  stageName?: InputMaybe<StringFieldUpdateOperationsInput>;
  start?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CatalogItemScheduleUpdateManyMutationInput = {
  end?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stageName?: InputMaybe<StringFieldUpdateOperationsInput>;
  start?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CatalogItemScheduleUpdateManyWithWhereWithoutArtistInput = {
  data: CatalogItemScheduleUpdateManyMutationInput;
  where: CatalogItemScheduleScalarWhereInput;
};

export type CatalogItemScheduleUpdateManyWithWhereWithoutParentCommunityInput = {
  data: CatalogItemScheduleUpdateManyMutationInput;
  where: CatalogItemScheduleScalarWhereInput;
};

export type CatalogItemScheduleUpdateManyWithoutArtistInput = {
  connect?: InputMaybe<Array<CatalogItemScheduleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatalogItemScheduleCreateOrConnectWithoutArtistInput>>;
  create?: InputMaybe<Array<CatalogItemScheduleCreateWithoutArtistInput>>;
  createMany?: InputMaybe<CatalogItemScheduleCreateManyArtistInputEnvelope>;
  delete?: InputMaybe<Array<CatalogItemScheduleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CatalogItemScheduleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CatalogItemScheduleWhereUniqueInput>>;
  set?: InputMaybe<Array<CatalogItemScheduleWhereUniqueInput>>;
  update?: InputMaybe<Array<CatalogItemScheduleUpdateWithWhereUniqueWithoutArtistInput>>;
  updateMany?: InputMaybe<Array<CatalogItemScheduleUpdateManyWithWhereWithoutArtistInput>>;
  upsert?: InputMaybe<Array<CatalogItemScheduleUpsertWithWhereUniqueWithoutArtistInput>>;
};

export type CatalogItemScheduleUpdateManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<CatalogItemScheduleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatalogItemScheduleCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<CatalogItemScheduleCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<CatalogItemScheduleCreateManyParentCommunityInputEnvelope>;
  delete?: InputMaybe<Array<CatalogItemScheduleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CatalogItemScheduleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CatalogItemScheduleWhereUniqueInput>>;
  set?: InputMaybe<Array<CatalogItemScheduleWhereUniqueInput>>;
  update?: InputMaybe<Array<CatalogItemScheduleUpdateWithWhereUniqueWithoutParentCommunityInput>>;
  updateMany?: InputMaybe<Array<CatalogItemScheduleUpdateManyWithWhereWithoutParentCommunityInput>>;
  upsert?: InputMaybe<Array<CatalogItemScheduleUpsertWithWhereUniqueWithoutParentCommunityInput>>;
};

export type CatalogItemScheduleUpdateWithWhereUniqueWithoutArtistInput = {
  data: CatalogItemScheduleUpdateWithoutArtistInput;
  where: CatalogItemScheduleWhereUniqueInput;
};

export type CatalogItemScheduleUpdateWithWhereUniqueWithoutParentCommunityInput = {
  data: CatalogItemScheduleUpdateWithoutParentCommunityInput;
  where: CatalogItemScheduleWhereUniqueInput;
};

export type CatalogItemScheduleUpdateWithoutArtistInput = {
  end?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutCatalogSchedulesInput>;
  stageName?: InputMaybe<StringFieldUpdateOperationsInput>;
  start?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CatalogItemScheduleUpdateWithoutParentCommunityInput = {
  artist?: InputMaybe<CatalogItemUpdateOneWithoutScheduleInput>;
  end?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stageName?: InputMaybe<StringFieldUpdateOperationsInput>;
  start?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CatalogItemScheduleUpsertWithWhereUniqueWithoutArtistInput = {
  create: CatalogItemScheduleCreateWithoutArtistInput;
  update: CatalogItemScheduleUpdateWithoutArtistInput;
  where: CatalogItemScheduleWhereUniqueInput;
};

export type CatalogItemScheduleUpsertWithWhereUniqueWithoutParentCommunityInput = {
  create: CatalogItemScheduleCreateWithoutParentCommunityInput;
  update: CatalogItemScheduleUpdateWithoutParentCommunityInput;
  where: CatalogItemScheduleWhereUniqueInput;
};

export type CatalogItemScheduleWhereInput = {
  AND?: InputMaybe<Array<CatalogItemScheduleWhereInput>>;
  NOT?: InputMaybe<Array<CatalogItemScheduleWhereInput>>;
  OR?: InputMaybe<Array<CatalogItemScheduleWhereInput>>;
  artist?: InputMaybe<CatalogItemWhereInput>;
  artistId?: InputMaybe<StringNullableFilter>;
  end?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parentCommunity?: InputMaybe<CommunityWhereInput>;
  parentCommunityId?: InputMaybe<StringNullableFilter>;
  stageName?: InputMaybe<StringFilter>;
  start?: InputMaybe<DateTimeFilter>;
};

export type CatalogItemScheduleWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CatalogItemUpdateInput = {
  categories?: InputMaybe<CatalogItemCategoryUpdateManyWithoutCatalogItemsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  instagramUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutCatalogItemsInput>;
  schedule?: InputMaybe<CatalogItemScheduleUpdateManyWithoutArtistInput>;
  soundcloudUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  spotifyUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  youtubeUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CatalogItemUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  instagramUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  soundcloudUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  spotifyUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  youtubeUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CatalogItemUpdateManyWithWhereWithoutCategoriesInput = {
  data: CatalogItemUpdateManyMutationInput;
  where: CatalogItemScalarWhereInput;
};

export type CatalogItemUpdateManyWithWhereWithoutParentCommunityInput = {
  data: CatalogItemUpdateManyMutationInput;
  where: CatalogItemScalarWhereInput;
};

export type CatalogItemUpdateManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<CatalogItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatalogItemCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<CatalogItemCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<CatalogItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CatalogItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CatalogItemWhereUniqueInput>>;
  set?: InputMaybe<Array<CatalogItemWhereUniqueInput>>;
  update?: InputMaybe<Array<CatalogItemUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: InputMaybe<Array<CatalogItemUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: InputMaybe<Array<CatalogItemUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type CatalogItemUpdateManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<CatalogItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatalogItemCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<CatalogItemCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<CatalogItemCreateManyParentCommunityInputEnvelope>;
  delete?: InputMaybe<Array<CatalogItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CatalogItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CatalogItemWhereUniqueInput>>;
  set?: InputMaybe<Array<CatalogItemWhereUniqueInput>>;
  update?: InputMaybe<Array<CatalogItemUpdateWithWhereUniqueWithoutParentCommunityInput>>;
  updateMany?: InputMaybe<Array<CatalogItemUpdateManyWithWhereWithoutParentCommunityInput>>;
  upsert?: InputMaybe<Array<CatalogItemUpsertWithWhereUniqueWithoutParentCommunityInput>>;
};

export type CatalogItemUpdateOneWithoutScheduleInput = {
  connect?: InputMaybe<CatalogItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CatalogItemCreateOrConnectWithoutScheduleInput>;
  create?: InputMaybe<CatalogItemCreateWithoutScheduleInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CatalogItemUpdateWithoutScheduleInput>;
  upsert?: InputMaybe<CatalogItemUpsertWithoutScheduleInput>;
};

export type CatalogItemUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: CatalogItemUpdateWithoutCategoriesInput;
  where: CatalogItemWhereUniqueInput;
};

export type CatalogItemUpdateWithWhereUniqueWithoutParentCommunityInput = {
  data: CatalogItemUpdateWithoutParentCommunityInput;
  where: CatalogItemWhereUniqueInput;
};

export type CatalogItemUpdateWithoutCategoriesInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  instagramUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutCatalogItemsInput>;
  schedule?: InputMaybe<CatalogItemScheduleUpdateManyWithoutArtistInput>;
  soundcloudUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  spotifyUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  youtubeUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CatalogItemUpdateWithoutParentCommunityInput = {
  categories?: InputMaybe<CatalogItemCategoryUpdateManyWithoutCatalogItemsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  instagramUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  schedule?: InputMaybe<CatalogItemScheduleUpdateManyWithoutArtistInput>;
  soundcloudUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  spotifyUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  youtubeUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CatalogItemUpdateWithoutScheduleInput = {
  categories?: InputMaybe<CatalogItemCategoryUpdateManyWithoutCatalogItemsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  instagramUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutCatalogItemsInput>;
  soundcloudUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  spotifyUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  youtubeUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CatalogItemUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: CatalogItemCreateWithoutCategoriesInput;
  update: CatalogItemUpdateWithoutCategoriesInput;
  where: CatalogItemWhereUniqueInput;
};

export type CatalogItemUpsertWithWhereUniqueWithoutParentCommunityInput = {
  create: CatalogItemCreateWithoutParentCommunityInput;
  update: CatalogItemUpdateWithoutParentCommunityInput;
  where: CatalogItemWhereUniqueInput;
};

export type CatalogItemUpsertWithoutScheduleInput = {
  create: CatalogItemCreateWithoutScheduleInput;
  update: CatalogItemUpdateWithoutScheduleInput;
};

export type CatalogItemWhereInput = {
  AND?: InputMaybe<Array<CatalogItemWhereInput>>;
  NOT?: InputMaybe<Array<CatalogItemWhereInput>>;
  OR?: InputMaybe<Array<CatalogItemWhereInput>>;
  categories?: InputMaybe<CatalogItemCategoryListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instagramUrl?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  parentCommunity?: InputMaybe<CommunityWhereInput>;
  parentCommunityId?: InputMaybe<StringNullableFilter>;
  schedule?: InputMaybe<CatalogItemScheduleListRelationFilter>;
  soundcloudUrl?: InputMaybe<StringNullableFilter>;
  spotifyUrl?: InputMaybe<StringNullableFilter>;
  twitterUrl?: InputMaybe<StringNullableFilter>;
  youtubeUrl?: InputMaybe<StringNullableFilter>;
};

export type CatalogItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Chat = {
  __typename?: 'Chat';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ClaimedBadge = {
  __typename?: 'ClaimedBadge';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
  purchase?: Maybe<Purchase>;
  purchaseId?: Maybe<Scalars['String']>;
  template: TemplateBadge;
  templateId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ClaimedBadgeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutBadgesInput;
  purchase?: InputMaybe<PurchaseCreateNestedOneWithoutBadgeInput>;
  template: TemplateBadgeCreateNestedOneWithoutClaimedBadgesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClaimedBadgeCreateManyOwnerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  purchaseId?: InputMaybe<Scalars['String']>;
  templateId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClaimedBadgeCreateManyOwnerInputEnvelope = {
  data?: InputMaybe<Array<ClaimedBadgeCreateManyOwnerInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClaimedBadgeCreateManyTemplateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  ownerId: Scalars['String'];
  purchaseId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClaimedBadgeCreateManyTemplateInputEnvelope = {
  data?: InputMaybe<Array<ClaimedBadgeCreateManyTemplateInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClaimedBadgeCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<ClaimedBadgeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClaimedBadgeCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<ClaimedBadgeCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<ClaimedBadgeCreateManyOwnerInputEnvelope>;
};

export type ClaimedBadgeCreateNestedManyWithoutTemplateInput = {
  connect?: InputMaybe<Array<ClaimedBadgeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClaimedBadgeCreateOrConnectWithoutTemplateInput>>;
  create?: InputMaybe<Array<ClaimedBadgeCreateWithoutTemplateInput>>;
  createMany?: InputMaybe<ClaimedBadgeCreateManyTemplateInputEnvelope>;
};

export type ClaimedBadgeCreateNestedOneWithoutPurchaseInput = {
  connect?: InputMaybe<ClaimedBadgeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClaimedBadgeCreateOrConnectWithoutPurchaseInput>;
  create?: InputMaybe<ClaimedBadgeCreateWithoutPurchaseInput>;
};

export type ClaimedBadgeCreateOrConnectWithoutOwnerInput = {
  create: ClaimedBadgeCreateWithoutOwnerInput;
  where: ClaimedBadgeWhereUniqueInput;
};

export type ClaimedBadgeCreateOrConnectWithoutPurchaseInput = {
  create: ClaimedBadgeCreateWithoutPurchaseInput;
  where: ClaimedBadgeWhereUniqueInput;
};

export type ClaimedBadgeCreateOrConnectWithoutTemplateInput = {
  create: ClaimedBadgeCreateWithoutTemplateInput;
  where: ClaimedBadgeWhereUniqueInput;
};

export type ClaimedBadgeCreateWithoutOwnerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  purchase?: InputMaybe<PurchaseCreateNestedOneWithoutBadgeInput>;
  template: TemplateBadgeCreateNestedOneWithoutClaimedBadgesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClaimedBadgeCreateWithoutPurchaseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutBadgesInput;
  template: TemplateBadgeCreateNestedOneWithoutClaimedBadgesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClaimedBadgeCreateWithoutTemplateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutBadgesInput;
  purchase?: InputMaybe<PurchaseCreateNestedOneWithoutBadgeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClaimedBadgeListRelationFilter = {
  every?: InputMaybe<ClaimedBadgeWhereInput>;
  none?: InputMaybe<ClaimedBadgeWhereInput>;
  some?: InputMaybe<ClaimedBadgeWhereInput>;
};

export type ClaimedBadgeOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  purchaseId?: InputMaybe<SortOrder>;
  templateId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClaimedBadgeScalarWhereInput = {
  AND?: InputMaybe<Array<ClaimedBadgeScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClaimedBadgeScalarWhereInput>>;
  OR?: InputMaybe<Array<ClaimedBadgeScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringFilter>;
  purchaseId?: InputMaybe<StringNullableFilter>;
  templateId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClaimedBadgeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutBadgesInput>;
  purchase?: InputMaybe<PurchaseUpdateOneWithoutBadgeInput>;
  template?: InputMaybe<TemplateBadgeUpdateOneRequiredWithoutClaimedBadgesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClaimedBadgeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClaimedBadgeUpdateManyWithWhereWithoutOwnerInput = {
  data: ClaimedBadgeUpdateManyMutationInput;
  where: ClaimedBadgeScalarWhereInput;
};

export type ClaimedBadgeUpdateManyWithWhereWithoutTemplateInput = {
  data: ClaimedBadgeUpdateManyMutationInput;
  where: ClaimedBadgeScalarWhereInput;
};

export type ClaimedBadgeUpdateManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<ClaimedBadgeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClaimedBadgeCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<ClaimedBadgeCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<ClaimedBadgeCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<ClaimedBadgeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClaimedBadgeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClaimedBadgeWhereUniqueInput>>;
  set?: InputMaybe<Array<ClaimedBadgeWhereUniqueInput>>;
  update?: InputMaybe<Array<ClaimedBadgeUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: InputMaybe<Array<ClaimedBadgeUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: InputMaybe<Array<ClaimedBadgeUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type ClaimedBadgeUpdateManyWithoutTemplateInput = {
  connect?: InputMaybe<Array<ClaimedBadgeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClaimedBadgeCreateOrConnectWithoutTemplateInput>>;
  create?: InputMaybe<Array<ClaimedBadgeCreateWithoutTemplateInput>>;
  createMany?: InputMaybe<ClaimedBadgeCreateManyTemplateInputEnvelope>;
  delete?: InputMaybe<Array<ClaimedBadgeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClaimedBadgeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClaimedBadgeWhereUniqueInput>>;
  set?: InputMaybe<Array<ClaimedBadgeWhereUniqueInput>>;
  update?: InputMaybe<Array<ClaimedBadgeUpdateWithWhereUniqueWithoutTemplateInput>>;
  updateMany?: InputMaybe<Array<ClaimedBadgeUpdateManyWithWhereWithoutTemplateInput>>;
  upsert?: InputMaybe<Array<ClaimedBadgeUpsertWithWhereUniqueWithoutTemplateInput>>;
};

export type ClaimedBadgeUpdateOneWithoutPurchaseInput = {
  connect?: InputMaybe<ClaimedBadgeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClaimedBadgeCreateOrConnectWithoutPurchaseInput>;
  create?: InputMaybe<ClaimedBadgeCreateWithoutPurchaseInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ClaimedBadgeUpdateWithoutPurchaseInput>;
  upsert?: InputMaybe<ClaimedBadgeUpsertWithoutPurchaseInput>;
};

export type ClaimedBadgeUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ClaimedBadgeUpdateWithoutOwnerInput;
  where: ClaimedBadgeWhereUniqueInput;
};

export type ClaimedBadgeUpdateWithWhereUniqueWithoutTemplateInput = {
  data: ClaimedBadgeUpdateWithoutTemplateInput;
  where: ClaimedBadgeWhereUniqueInput;
};

export type ClaimedBadgeUpdateWithoutOwnerInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchase?: InputMaybe<PurchaseUpdateOneWithoutBadgeInput>;
  template?: InputMaybe<TemplateBadgeUpdateOneRequiredWithoutClaimedBadgesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClaimedBadgeUpdateWithoutPurchaseInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutBadgesInput>;
  template?: InputMaybe<TemplateBadgeUpdateOneRequiredWithoutClaimedBadgesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClaimedBadgeUpdateWithoutTemplateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutBadgesInput>;
  purchase?: InputMaybe<PurchaseUpdateOneWithoutBadgeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClaimedBadgeUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ClaimedBadgeCreateWithoutOwnerInput;
  update: ClaimedBadgeUpdateWithoutOwnerInput;
  where: ClaimedBadgeWhereUniqueInput;
};

export type ClaimedBadgeUpsertWithWhereUniqueWithoutTemplateInput = {
  create: ClaimedBadgeCreateWithoutTemplateInput;
  update: ClaimedBadgeUpdateWithoutTemplateInput;
  where: ClaimedBadgeWhereUniqueInput;
};

export type ClaimedBadgeUpsertWithoutPurchaseInput = {
  create: ClaimedBadgeCreateWithoutPurchaseInput;
  update: ClaimedBadgeUpdateWithoutPurchaseInput;
};

export type ClaimedBadgeWhereInput = {
  AND?: InputMaybe<Array<ClaimedBadgeWhereInput>>;
  NOT?: InputMaybe<Array<ClaimedBadgeWhereInput>>;
  OR?: InputMaybe<Array<ClaimedBadgeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserWhereInput>;
  ownerId?: InputMaybe<StringFilter>;
  purchase?: InputMaybe<PurchaseWhereInput>;
  purchaseId?: InputMaybe<StringNullableFilter>;
  template?: InputMaybe<TemplateBadgeWhereInput>;
  templateId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClaimedBadgeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  purchaseId?: InputMaybe<Scalars['String']>;
};

export type Community = {
  __typename?: 'Community';
  admins: Array<User>;
  availablePaymentMethods: Array<PurchasePaymentMethod>;
  backgroundColor: Scalars['String'];
  backgroundColorAndroid: Scalars['String'];
  backgroundLength: Scalars['Int'];
  backgroundLengthAndroid: Scalars['Int'];
  backgroundType: BackgroundType;
  backgroundTypeAndroid?: Maybe<BackgroundType>;
  code?: Maybe<Scalars['String']>;
  configs?: Maybe<Scalars['Json']>;
  country: SupportedCountries;
  createdAt: Scalars['DateTime'];
  currency: SupportedCurrencies;
  events: Array<Event>;
  globalInviteCode?: Maybe<Scalars['String']>;
  globalTicketsLink?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  landingCode?: Maybe<Scalars['String']>;
  landingLink?: Maybe<Scalars['String']>;
  memberSince?: Maybe<Scalars['Date']>;
  members: Array<User>;
  membersCount?: Maybe<Scalars['Int']>;
  minAppVersion: Scalars['String'];
  modulesDesign?: Maybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes: Scalars['Int'];
  paymentFees: ProductFees;
  requireVerifiedEmailForShopAccess: Scalars['Boolean'];
  requiredUserFields: Array<UserInfoField>;
  sawDisclaimer?: Maybe<Scalars['Boolean']>;
  stripeConnectedAccountId?: Maybe<Scalars['String']>;
  styleOverride?: Maybe<Scalars['Json']>;
  swishPayees?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  webFeeFixed: Scalars['Float'];
  webFeePercentage: Scalars['Float'];
};


export type CommunityAdminsArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type CommunityEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EventOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type CommunityMembersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type CommunityCreateInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateNestedManyWithoutAdminsInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityCreateOrConnectWithoutAdminsInput>>;
  create?: InputMaybe<Array<CommunityCreateWithoutAdminsInput>>;
};

export type CommunityCreateNestedManyWithoutMembersInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityCreateOrConnectWithoutMembersInput>>;
  create?: InputMaybe<Array<CommunityCreateWithoutMembersInput>>;
};

export type CommunityCreateNestedManyWithoutRelatedEventsInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityCreateOrConnectWithoutRelatedEventsInput>>;
  create?: InputMaybe<Array<CommunityCreateWithoutRelatedEventsInput>>;
};

export type CommunityCreateNestedManyWithoutRelatedInterestTagsInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityCreateOrConnectWithoutRelatedInterestTagsInput>>;
  create?: InputMaybe<Array<CommunityCreateWithoutRelatedInterestTagsInput>>;
};

export type CommunityCreateNestedOneWithoutBadgesInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutBadgesInput>;
  create?: InputMaybe<CommunityCreateWithoutBadgesInput>;
};

export type CommunityCreateNestedOneWithoutCatalogItemsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutCatalogItemsInput>;
  create?: InputMaybe<CommunityCreateWithoutCatalogItemsInput>;
};

export type CommunityCreateNestedOneWithoutCatalogSchedulesInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutCatalogSchedulesInput>;
  create?: InputMaybe<CommunityCreateWithoutCatalogSchedulesInput>;
};

export type CommunityCreateNestedOneWithoutCommunitySuggestionsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutCommunitySuggestionsInput>;
  create?: InputMaybe<CommunityCreateWithoutCommunitySuggestionsInput>;
};

export type CommunityCreateNestedOneWithoutEventsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutEventsInput>;
  create?: InputMaybe<CommunityCreateWithoutEventsInput>;
};

export type CommunityCreateNestedOneWithoutFaqItemsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutFaqItemsInput>;
  create?: InputMaybe<CommunityCreateWithoutFaqItemsInput>;
};

export type CommunityCreateNestedOneWithoutFeedItemInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutFeedItemInput>;
  create?: InputMaybe<CommunityCreateWithoutFeedItemInput>;
};

export type CommunityCreateNestedOneWithoutMembershipInfoInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutMembershipInfoInput>;
  create?: InputMaybe<CommunityCreateWithoutMembershipInfoInput>;
};

export type CommunityCreateNestedOneWithoutPersonalizedInviteCodesInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutPersonalizedInviteCodesInput>;
  create?: InputMaybe<CommunityCreateWithoutPersonalizedInviteCodesInput>;
};

export type CommunityCreateNestedOneWithoutPremiumAccessCardsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutPremiumAccessCardsInput>;
  create?: InputMaybe<CommunityCreateWithoutPremiumAccessCardsInput>;
};

export type CommunityCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<CommunityCreateWithoutProductsInput>;
};

export type CommunityCreateNestedOneWithoutPromocodesInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutPromocodesInput>;
  create?: InputMaybe<CommunityCreateWithoutPromocodesInput>;
};

export type CommunityCreateNestedOneWithoutRelatedHighlightsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutRelatedHighlightsInput>;
  create?: InputMaybe<CommunityCreateWithoutRelatedHighlightsInput>;
};

export type CommunityCreateNestedOneWithoutRelatedMasssMessagesInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutRelatedMasssMessagesInput>;
  create?: InputMaybe<CommunityCreateWithoutRelatedMasssMessagesInput>;
};

export type CommunityCreateNestedOneWithoutRelatedTalksMessagesInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutRelatedTalksMessagesInput>;
  create?: InputMaybe<CommunityCreateWithoutRelatedTalksMessagesInput>;
};

export type CommunityCreateNestedOneWithoutTrackInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutTrackInput>;
  create?: InputMaybe<CommunityCreateWithoutTrackInput>;
};

export type CommunityCreateOrConnectWithoutAdminsInput = {
  create: CommunityCreateWithoutAdminsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutBadgesInput = {
  create: CommunityCreateWithoutBadgesInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutCatalogItemsInput = {
  create: CommunityCreateWithoutCatalogItemsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutCatalogSchedulesInput = {
  create: CommunityCreateWithoutCatalogSchedulesInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutCommunitySuggestionsInput = {
  create: CommunityCreateWithoutCommunitySuggestionsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutEventsInput = {
  create: CommunityCreateWithoutEventsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutFaqItemsInput = {
  create: CommunityCreateWithoutFaqItemsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutFeedItemInput = {
  create: CommunityCreateWithoutFeedItemInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutMembersInput = {
  create: CommunityCreateWithoutMembersInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutMembershipInfoInput = {
  create: CommunityCreateWithoutMembershipInfoInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutPersonalizedInviteCodesInput = {
  create: CommunityCreateWithoutPersonalizedInviteCodesInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutPremiumAccessCardsInput = {
  create: CommunityCreateWithoutPremiumAccessCardsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutProductsInput = {
  create: CommunityCreateWithoutProductsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutPromocodesInput = {
  create: CommunityCreateWithoutPromocodesInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutRelatedEventsInput = {
  create: CommunityCreateWithoutRelatedEventsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutRelatedHighlightsInput = {
  create: CommunityCreateWithoutRelatedHighlightsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutRelatedInterestTagsInput = {
  create: CommunityCreateWithoutRelatedInterestTagsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutRelatedMasssMessagesInput = {
  create: CommunityCreateWithoutRelatedMasssMessagesInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutRelatedTalksMessagesInput = {
  create: CommunityCreateWithoutRelatedTalksMessagesInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateOrConnectWithoutTrackInput = {
  create: CommunityCreateWithoutTrackInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityCreateWithoutAdminsInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutBadgesInput = {
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutCatalogItemsInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutCatalogSchedulesInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutCommunitySuggestionsInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutEventsInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutFaqItemsInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutFeedItemInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutMembersInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutMembershipInfoInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutPersonalizedInviteCodesInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutPremiumAccessCardsInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutProductsInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutPromocodesInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutRelatedEventsInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutRelatedHighlightsInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutRelatedInterestTagsInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutRelatedMasssMessagesInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutRelatedTalksMessagesInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackCreateNestedManyWithoutCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateWithoutTrackInput = {
  Badges?: InputMaybe<TemplateBadgeCreateNestedManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemCreateNestedManyWithoutParentCommunityInput>;
  admins?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityCreateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColorAndroid?: InputMaybe<Scalars['String']>;
  backgroundLength?: InputMaybe<Scalars['Int']>;
  backgroundLengthAndroid?: InputMaybe<Scalars['Int']>;
  backgroundType?: InputMaybe<BackgroundType>;
  backgroundTypeAndroid?: InputMaybe<BackgroundType>;
  catalogItems?: InputMaybe<CatalogItemCreateNestedManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleCreateNestedManyWithoutParentCommunityInput>;
  code?: InputMaybe<Scalars['String']>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<SupportedCountries>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  events?: InputMaybe<EventCreateNestedManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<Scalars['String']>;
  globalTicketsLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  landingCode?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<Scalars['String']>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name: Scalars['String'];
  numPersonalizedInviteCodes?: InputMaybe<Scalars['Int']>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutCommunityInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageCreateNestedManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<Scalars['Boolean']>;
  requiredUserFields?: InputMaybe<CommunityCreaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<Scalars['String']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  webFeeFixed?: InputMaybe<Scalars['Float']>;
  webFeePercentage?: InputMaybe<Scalars['Float']>;
};

export type CommunityCreateavailablePaymentMethodsInput = {
  set?: InputMaybe<Array<PurchasePaymentMethod>>;
};

export type CommunityCreaterequiredUserFieldsInput = {
  set?: InputMaybe<Array<UserInfoField>>;
};

export type CommunityListRelationFilter = {
  every?: InputMaybe<CommunityWhereInput>;
  none?: InputMaybe<CommunityWhereInput>;
  some?: InputMaybe<CommunityWhereInput>;
};

export type CommunityMemberInfo = {
  __typename?: 'CommunityMemberInfo';
  community: Community;
  id?: Maybe<Scalars['String']>;
  memberSince: Scalars['DateTime'];
  sawDisclaimer: Scalars['Boolean'];
  user: User;
};

export type CommunityMemberInfoCreateInput = {
  community: CommunityCreateNestedOneWithoutMembershipInfoInput;
  memberSince?: InputMaybe<Scalars['DateTime']>;
  sawDisclaimer?: InputMaybe<Scalars['Boolean']>;
  user: UserCreateNestedOneWithoutCommunitiesMembershipInfoInput;
};

export type CommunityMemberInfoCreateManyCommunityInput = {
  memberSince?: InputMaybe<Scalars['DateTime']>;
  sawDisclaimer?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['String'];
};

export type CommunityMemberInfoCreateManyCommunityInputEnvelope = {
  data?: InputMaybe<Array<CommunityMemberInfoCreateManyCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommunityMemberInfoCreateManyUserInput = {
  communityId: Scalars['String'];
  memberSince?: InputMaybe<Scalars['DateTime']>;
  sawDisclaimer?: InputMaybe<Scalars['Boolean']>;
};

export type CommunityMemberInfoCreateManyUserInputEnvelope = {
  data?: InputMaybe<Array<CommunityMemberInfoCreateManyUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommunityMemberInfoCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<CommunityMemberInfoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityMemberInfoCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<CommunityMemberInfoCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<CommunityMemberInfoCreateManyCommunityInputEnvelope>;
};

export type CommunityMemberInfoCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommunityMemberInfoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityMemberInfoCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommunityMemberInfoCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommunityMemberInfoCreateManyUserInputEnvelope>;
};

export type CommunityMemberInfoCreateOrConnectWithoutCommunityInput = {
  create: CommunityMemberInfoCreateWithoutCommunityInput;
  where: CommunityMemberInfoWhereUniqueInput;
};

export type CommunityMemberInfoCreateOrConnectWithoutUserInput = {
  create: CommunityMemberInfoCreateWithoutUserInput;
  where: CommunityMemberInfoWhereUniqueInput;
};

export type CommunityMemberInfoCreateWithoutCommunityInput = {
  memberSince?: InputMaybe<Scalars['DateTime']>;
  sawDisclaimer?: InputMaybe<Scalars['Boolean']>;
  user: UserCreateNestedOneWithoutCommunitiesMembershipInfoInput;
};

export type CommunityMemberInfoCreateWithoutUserInput = {
  community: CommunityCreateNestedOneWithoutMembershipInfoInput;
  memberSince?: InputMaybe<Scalars['DateTime']>;
  sawDisclaimer?: InputMaybe<Scalars['Boolean']>;
};

export type CommunityMemberInfoListRelationFilter = {
  every?: InputMaybe<CommunityMemberInfoWhereInput>;
  none?: InputMaybe<CommunityMemberInfoWhereInput>;
  some?: InputMaybe<CommunityMemberInfoWhereInput>;
};

export type CommunityMemberInfoOrderByInput = {
  communityId?: InputMaybe<SortOrder>;
  memberSince?: InputMaybe<SortOrder>;
  sawDisclaimer?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommunityMemberInfoScalarWhereInput = {
  AND?: InputMaybe<Array<CommunityMemberInfoScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommunityMemberInfoScalarWhereInput>>;
  OR?: InputMaybe<Array<CommunityMemberInfoScalarWhereInput>>;
  communityId?: InputMaybe<StringFilter>;
  memberSince?: InputMaybe<DateTimeFilter>;
  sawDisclaimer?: InputMaybe<BoolFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CommunityMemberInfoUpdateInput = {
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutMembershipInfoInput>;
  memberSince?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sawDisclaimer?: InputMaybe<BoolFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommunitiesMembershipInfoInput>;
};

export type CommunityMemberInfoUpdateManyMutationInput = {
  memberSince?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sawDisclaimer?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CommunityMemberInfoUpdateManyWithWhereWithoutCommunityInput = {
  data: CommunityMemberInfoUpdateManyMutationInput;
  where: CommunityMemberInfoScalarWhereInput;
};

export type CommunityMemberInfoUpdateManyWithWhereWithoutUserInput = {
  data: CommunityMemberInfoUpdateManyMutationInput;
  where: CommunityMemberInfoScalarWhereInput;
};

export type CommunityMemberInfoUpdateManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<CommunityMemberInfoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityMemberInfoCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<CommunityMemberInfoCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<CommunityMemberInfoCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<CommunityMemberInfoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommunityMemberInfoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommunityMemberInfoWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityMemberInfoWhereUniqueInput>>;
  update?: InputMaybe<Array<CommunityMemberInfoUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<CommunityMemberInfoUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<CommunityMemberInfoUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type CommunityMemberInfoUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommunityMemberInfoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityMemberInfoCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommunityMemberInfoCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommunityMemberInfoCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CommunityMemberInfoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommunityMemberInfoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommunityMemberInfoWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityMemberInfoWhereUniqueInput>>;
  update?: InputMaybe<Array<CommunityMemberInfoUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CommunityMemberInfoUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CommunityMemberInfoUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommunityMemberInfoUpdateWithWhereUniqueWithoutCommunityInput = {
  data: CommunityMemberInfoUpdateWithoutCommunityInput;
  where: CommunityMemberInfoWhereUniqueInput;
};

export type CommunityMemberInfoUpdateWithWhereUniqueWithoutUserInput = {
  data: CommunityMemberInfoUpdateWithoutUserInput;
  where: CommunityMemberInfoWhereUniqueInput;
};

export type CommunityMemberInfoUpdateWithoutCommunityInput = {
  memberSince?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sawDisclaimer?: InputMaybe<BoolFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommunitiesMembershipInfoInput>;
};

export type CommunityMemberInfoUpdateWithoutUserInput = {
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutMembershipInfoInput>;
  memberSince?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sawDisclaimer?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CommunityMemberInfoUpsertWithWhereUniqueWithoutCommunityInput = {
  create: CommunityMemberInfoCreateWithoutCommunityInput;
  update: CommunityMemberInfoUpdateWithoutCommunityInput;
  where: CommunityMemberInfoWhereUniqueInput;
};

export type CommunityMemberInfoUpsertWithWhereUniqueWithoutUserInput = {
  create: CommunityMemberInfoCreateWithoutUserInput;
  update: CommunityMemberInfoUpdateWithoutUserInput;
  where: CommunityMemberInfoWhereUniqueInput;
};

export type CommunityMemberInfoUserIdCommunityIdCompoundUniqueInput = {
  communityId: Scalars['String'];
  userId: Scalars['String'];
};

export type CommunityMemberInfoWhereInput = {
  AND?: InputMaybe<Array<CommunityMemberInfoWhereInput>>;
  NOT?: InputMaybe<Array<CommunityMemberInfoWhereInput>>;
  OR?: InputMaybe<Array<CommunityMemberInfoWhereInput>>;
  community?: InputMaybe<CommunityWhereInput>;
  communityId?: InputMaybe<StringFilter>;
  memberSince?: InputMaybe<DateTimeFilter>;
  sawDisclaimer?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type CommunityMemberInfoWhereUniqueInput = {
  userId_communityId?: InputMaybe<CommunityMemberInfoUserIdCommunityIdCompoundUniqueInput>;
};

export type CommunityOrderByInput = {
  availablePaymentMethods?: InputMaybe<SortOrder>;
  backgroundColor?: InputMaybe<SortOrder>;
  backgroundColorAndroid?: InputMaybe<SortOrder>;
  backgroundLength?: InputMaybe<SortOrder>;
  backgroundLengthAndroid?: InputMaybe<SortOrder>;
  backgroundType?: InputMaybe<SortOrder>;
  backgroundTypeAndroid?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  configs?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  currency?: InputMaybe<SortOrder>;
  globalInviteCode?: InputMaybe<SortOrder>;
  globalTicketsLink?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  landingCode?: InputMaybe<SortOrder>;
  minAppVersion?: InputMaybe<SortOrder>;
  modulesDesign?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  numPersonalizedInviteCodes?: InputMaybe<SortOrder>;
  paymentFees?: InputMaybe<SortOrder>;
  requireVerifiedEmailForShopAccess?: InputMaybe<SortOrder>;
  requiredUserFields?: InputMaybe<SortOrder>;
  stripeConnectedAccountId?: InputMaybe<SortOrder>;
  styleOverride?: InputMaybe<SortOrder>;
  swishPayees?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  webFeeFixed?: InputMaybe<SortOrder>;
  webFeePercentage?: InputMaybe<SortOrder>;
};

export type CommunityPayload = {
  __typename?: 'CommunityPayload';
  communities?: Maybe<Array<Maybe<Community>>>;
  errors?: Maybe<Array<Maybe<TranslatableError>>>;
};

export type CommunityScalarWhereInput = {
  AND?: InputMaybe<Array<CommunityScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommunityScalarWhereInput>>;
  OR?: InputMaybe<Array<CommunityScalarWhereInput>>;
  availablePaymentMethods?: InputMaybe<EnumPurchasePaymentMethodNullableListFilter>;
  backgroundColor?: InputMaybe<StringFilter>;
  backgroundColorAndroid?: InputMaybe<StringFilter>;
  backgroundLength?: InputMaybe<IntFilter>;
  backgroundLengthAndroid?: InputMaybe<IntFilter>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFilter>;
  backgroundTypeAndroid?: InputMaybe<EnumBackgroundTypeNullableFilter>;
  code?: InputMaybe<StringNullableFilter>;
  configs?: InputMaybe<JsonNullableFilter>;
  country?: InputMaybe<EnumSupportedCountriesFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currency?: InputMaybe<EnumSupportedCurrenciesFilter>;
  globalInviteCode?: InputMaybe<StringNullableFilter>;
  globalTicketsLink?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  landingCode?: InputMaybe<StringNullableFilter>;
  minAppVersion?: InputMaybe<StringFilter>;
  modulesDesign?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  numPersonalizedInviteCodes?: InputMaybe<IntFilter>;
  paymentFees?: InputMaybe<JsonNullableFilter>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFilter>;
  requiredUserFields?: InputMaybe<EnumUserInfoFieldNullableListFilter>;
  stripeConnectedAccountId?: InputMaybe<StringNullableFilter>;
  styleOverride?: InputMaybe<JsonNullableFilter>;
  swishPayees?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  webFeeFixed?: InputMaybe<FloatFilter>;
  webFeePercentage?: InputMaybe<FloatFilter>;
};

export type CommunitySuggestion = {
  __typename?: 'CommunitySuggestion';
  community: Community;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  status: CommunitySuggestionStatus;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type CommunitySuggestionCreateInput = {
  community: CommunityCreateNestedOneWithoutCommunitySuggestionsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<CommunitySuggestionStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCommunitySuggestionsInput;
};

export type CommunitySuggestionCreateManyCommunityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<CommunitySuggestionStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CommunitySuggestionCreateManyCommunityInputEnvelope = {
  data?: InputMaybe<Array<CommunitySuggestionCreateManyCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommunitySuggestionCreateManyUserInput = {
  communityId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<CommunitySuggestionStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommunitySuggestionCreateManyUserInputEnvelope = {
  data?: InputMaybe<Array<CommunitySuggestionCreateManyUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommunitySuggestionCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<CommunitySuggestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunitySuggestionCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<CommunitySuggestionCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<CommunitySuggestionCreateManyCommunityInputEnvelope>;
};

export type CommunitySuggestionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommunitySuggestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunitySuggestionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommunitySuggestionCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommunitySuggestionCreateManyUserInputEnvelope>;
};

export type CommunitySuggestionCreateOrConnectWithoutCommunityInput = {
  create: CommunitySuggestionCreateWithoutCommunityInput;
  where: CommunitySuggestionWhereUniqueInput;
};

export type CommunitySuggestionCreateOrConnectWithoutUserInput = {
  create: CommunitySuggestionCreateWithoutUserInput;
  where: CommunitySuggestionWhereUniqueInput;
};

export type CommunitySuggestionCreateWithoutCommunityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<CommunitySuggestionStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCommunitySuggestionsInput;
};

export type CommunitySuggestionCreateWithoutUserInput = {
  community: CommunityCreateNestedOneWithoutCommunitySuggestionsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<CommunitySuggestionStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommunitySuggestionListRelationFilter = {
  every?: InputMaybe<CommunitySuggestionWhereInput>;
  none?: InputMaybe<CommunitySuggestionWhereInput>;
  some?: InputMaybe<CommunitySuggestionWhereInput>;
};

export type CommunitySuggestionOrderByInput = {
  communityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommunitySuggestionScalarWhereInput = {
  AND?: InputMaybe<Array<CommunitySuggestionScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommunitySuggestionScalarWhereInput>>;
  OR?: InputMaybe<Array<CommunitySuggestionScalarWhereInput>>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumCommunitySuggestionStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum CommunitySuggestionStatus {
  AcceptedAdmin = 'AcceptedAdmin',
  AcceptedUser = 'AcceptedUser',
  DeclinedAdmin = 'DeclinedAdmin',
  DeclinedUser = 'DeclinedUser',
  New = 'New',
  SuggestedToAdmin = 'SuggestedToAdmin'
}

export type CommunitySuggestionUpdateInput = {
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutCommunitySuggestionsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumCommunitySuggestionStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommunitySuggestionsInput>;
};

export type CommunitySuggestionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumCommunitySuggestionStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommunitySuggestionUpdateManyWithWhereWithoutCommunityInput = {
  data: CommunitySuggestionUpdateManyMutationInput;
  where: CommunitySuggestionScalarWhereInput;
};

export type CommunitySuggestionUpdateManyWithWhereWithoutUserInput = {
  data: CommunitySuggestionUpdateManyMutationInput;
  where: CommunitySuggestionScalarWhereInput;
};

export type CommunitySuggestionUpdateManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<CommunitySuggestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunitySuggestionCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<CommunitySuggestionCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<CommunitySuggestionCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<CommunitySuggestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommunitySuggestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommunitySuggestionWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunitySuggestionWhereUniqueInput>>;
  update?: InputMaybe<Array<CommunitySuggestionUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<CommunitySuggestionUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<CommunitySuggestionUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type CommunitySuggestionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommunitySuggestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunitySuggestionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommunitySuggestionCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommunitySuggestionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CommunitySuggestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommunitySuggestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommunitySuggestionWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunitySuggestionWhereUniqueInput>>;
  update?: InputMaybe<Array<CommunitySuggestionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CommunitySuggestionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CommunitySuggestionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommunitySuggestionUpdateWithWhereUniqueWithoutCommunityInput = {
  data: CommunitySuggestionUpdateWithoutCommunityInput;
  where: CommunitySuggestionWhereUniqueInput;
};

export type CommunitySuggestionUpdateWithWhereUniqueWithoutUserInput = {
  data: CommunitySuggestionUpdateWithoutUserInput;
  where: CommunitySuggestionWhereUniqueInput;
};

export type CommunitySuggestionUpdateWithoutCommunityInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumCommunitySuggestionStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommunitySuggestionsInput>;
};

export type CommunitySuggestionUpdateWithoutUserInput = {
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutCommunitySuggestionsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumCommunitySuggestionStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommunitySuggestionUpsertWithWhereUniqueWithoutCommunityInput = {
  create: CommunitySuggestionCreateWithoutCommunityInput;
  update: CommunitySuggestionUpdateWithoutCommunityInput;
  where: CommunitySuggestionWhereUniqueInput;
};

export type CommunitySuggestionUpsertWithWhereUniqueWithoutUserInput = {
  create: CommunitySuggestionCreateWithoutUserInput;
  update: CommunitySuggestionUpdateWithoutUserInput;
  where: CommunitySuggestionWhereUniqueInput;
};

export type CommunitySuggestionUserIdCommunityIdCompoundUniqueInput = {
  communityId: Scalars['String'];
  userId: Scalars['String'];
};

export type CommunitySuggestionWhereInput = {
  AND?: InputMaybe<Array<CommunitySuggestionWhereInput>>;
  NOT?: InputMaybe<Array<CommunitySuggestionWhereInput>>;
  OR?: InputMaybe<Array<CommunitySuggestionWhereInput>>;
  community?: InputMaybe<CommunityWhereInput>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumCommunitySuggestionStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type CommunitySuggestionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId_communityId?: InputMaybe<CommunitySuggestionUserIdCommunityIdCompoundUniqueInput>;
};

export type CommunityUpdateInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateManyMutationInput = {
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateManyWithWhereWithoutAdminsInput = {
  data: CommunityUpdateManyMutationInput;
  where: CommunityScalarWhereInput;
};

export type CommunityUpdateManyWithWhereWithoutMembersInput = {
  data: CommunityUpdateManyMutationInput;
  where: CommunityScalarWhereInput;
};

export type CommunityUpdateManyWithWhereWithoutRelatedEventsInput = {
  data: CommunityUpdateManyMutationInput;
  where: CommunityScalarWhereInput;
};

export type CommunityUpdateManyWithWhereWithoutRelatedInterestTagsInput = {
  data: CommunityUpdateManyMutationInput;
  where: CommunityScalarWhereInput;
};

export type CommunityUpdateManyWithoutAdminsInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityCreateOrConnectWithoutAdminsInput>>;
  create?: InputMaybe<Array<CommunityCreateWithoutAdminsInput>>;
  delete?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommunityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  update?: InputMaybe<Array<CommunityUpdateWithWhereUniqueWithoutAdminsInput>>;
  updateMany?: InputMaybe<Array<CommunityUpdateManyWithWhereWithoutAdminsInput>>;
  upsert?: InputMaybe<Array<CommunityUpsertWithWhereUniqueWithoutAdminsInput>>;
};

export type CommunityUpdateManyWithoutMembersInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityCreateOrConnectWithoutMembersInput>>;
  create?: InputMaybe<Array<CommunityCreateWithoutMembersInput>>;
  delete?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommunityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  update?: InputMaybe<Array<CommunityUpdateWithWhereUniqueWithoutMembersInput>>;
  updateMany?: InputMaybe<Array<CommunityUpdateManyWithWhereWithoutMembersInput>>;
  upsert?: InputMaybe<Array<CommunityUpsertWithWhereUniqueWithoutMembersInput>>;
};

export type CommunityUpdateManyWithoutRelatedEventsInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityCreateOrConnectWithoutRelatedEventsInput>>;
  create?: InputMaybe<Array<CommunityCreateWithoutRelatedEventsInput>>;
  delete?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommunityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  update?: InputMaybe<Array<CommunityUpdateWithWhereUniqueWithoutRelatedEventsInput>>;
  updateMany?: InputMaybe<Array<CommunityUpdateManyWithWhereWithoutRelatedEventsInput>>;
  upsert?: InputMaybe<Array<CommunityUpsertWithWhereUniqueWithoutRelatedEventsInput>>;
};

export type CommunityUpdateManyWithoutRelatedInterestTagsInput = {
  connect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommunityCreateOrConnectWithoutRelatedInterestTagsInput>>;
  create?: InputMaybe<Array<CommunityCreateWithoutRelatedInterestTagsInput>>;
  delete?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommunityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  set?: InputMaybe<Array<CommunityWhereUniqueInput>>;
  update?: InputMaybe<Array<CommunityUpdateWithWhereUniqueWithoutRelatedInterestTagsInput>>;
  updateMany?: InputMaybe<Array<CommunityUpdateManyWithWhereWithoutRelatedInterestTagsInput>>;
  upsert?: InputMaybe<Array<CommunityUpsertWithWhereUniqueWithoutRelatedInterestTagsInput>>;
};

export type CommunityUpdateOneRequiredWithoutBadgesInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutBadgesInput>;
  create?: InputMaybe<CommunityCreateWithoutBadgesInput>;
  update?: InputMaybe<CommunityUpdateWithoutBadgesInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutBadgesInput>;
};

export type CommunityUpdateOneRequiredWithoutCommunitySuggestionsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutCommunitySuggestionsInput>;
  create?: InputMaybe<CommunityCreateWithoutCommunitySuggestionsInput>;
  update?: InputMaybe<CommunityUpdateWithoutCommunitySuggestionsInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutCommunitySuggestionsInput>;
};

export type CommunityUpdateOneRequiredWithoutEventsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutEventsInput>;
  create?: InputMaybe<CommunityCreateWithoutEventsInput>;
  update?: InputMaybe<CommunityUpdateWithoutEventsInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutEventsInput>;
};

export type CommunityUpdateOneRequiredWithoutFeedItemInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutFeedItemInput>;
  create?: InputMaybe<CommunityCreateWithoutFeedItemInput>;
  update?: InputMaybe<CommunityUpdateWithoutFeedItemInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutFeedItemInput>;
};

export type CommunityUpdateOneRequiredWithoutMembershipInfoInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutMembershipInfoInput>;
  create?: InputMaybe<CommunityCreateWithoutMembershipInfoInput>;
  update?: InputMaybe<CommunityUpdateWithoutMembershipInfoInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutMembershipInfoInput>;
};

export type CommunityUpdateOneRequiredWithoutPersonalizedInviteCodesInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutPersonalizedInviteCodesInput>;
  create?: InputMaybe<CommunityCreateWithoutPersonalizedInviteCodesInput>;
  update?: InputMaybe<CommunityUpdateWithoutPersonalizedInviteCodesInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutPersonalizedInviteCodesInput>;
};

export type CommunityUpdateOneRequiredWithoutPremiumAccessCardsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutPremiumAccessCardsInput>;
  create?: InputMaybe<CommunityCreateWithoutPremiumAccessCardsInput>;
  update?: InputMaybe<CommunityUpdateWithoutPremiumAccessCardsInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutPremiumAccessCardsInput>;
};

export type CommunityUpdateOneRequiredWithoutProductsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<CommunityCreateWithoutProductsInput>;
  update?: InputMaybe<CommunityUpdateWithoutProductsInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutProductsInput>;
};

export type CommunityUpdateOneRequiredWithoutRelatedMasssMessagesInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutRelatedMasssMessagesInput>;
  create?: InputMaybe<CommunityCreateWithoutRelatedMasssMessagesInput>;
  update?: InputMaybe<CommunityUpdateWithoutRelatedMasssMessagesInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutRelatedMasssMessagesInput>;
};

export type CommunityUpdateOneRequiredWithoutTrackInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutTrackInput>;
  create?: InputMaybe<CommunityCreateWithoutTrackInput>;
  update?: InputMaybe<CommunityUpdateWithoutTrackInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutTrackInput>;
};

export type CommunityUpdateOneWithoutCatalogItemsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutCatalogItemsInput>;
  create?: InputMaybe<CommunityCreateWithoutCatalogItemsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CommunityUpdateWithoutCatalogItemsInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutCatalogItemsInput>;
};

export type CommunityUpdateOneWithoutCatalogSchedulesInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutCatalogSchedulesInput>;
  create?: InputMaybe<CommunityCreateWithoutCatalogSchedulesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CommunityUpdateWithoutCatalogSchedulesInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutCatalogSchedulesInput>;
};

export type CommunityUpdateOneWithoutFaqItemsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutFaqItemsInput>;
  create?: InputMaybe<CommunityCreateWithoutFaqItemsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CommunityUpdateWithoutFaqItemsInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutFaqItemsInput>;
};

export type CommunityUpdateOneWithoutPromocodesInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutPromocodesInput>;
  create?: InputMaybe<CommunityCreateWithoutPromocodesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CommunityUpdateWithoutPromocodesInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutPromocodesInput>;
};

export type CommunityUpdateOneWithoutRelatedHighlightsInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutRelatedHighlightsInput>;
  create?: InputMaybe<CommunityCreateWithoutRelatedHighlightsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CommunityUpdateWithoutRelatedHighlightsInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutRelatedHighlightsInput>;
};

export type CommunityUpdateOneWithoutRelatedTalksMessagesInput = {
  connect?: InputMaybe<CommunityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CommunityCreateOrConnectWithoutRelatedTalksMessagesInput>;
  create?: InputMaybe<CommunityCreateWithoutRelatedTalksMessagesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CommunityUpdateWithoutRelatedTalksMessagesInput>;
  upsert?: InputMaybe<CommunityUpsertWithoutRelatedTalksMessagesInput>;
};

export type CommunityUpdateWithWhereUniqueWithoutAdminsInput = {
  data: CommunityUpdateWithoutAdminsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpdateWithWhereUniqueWithoutMembersInput = {
  data: CommunityUpdateWithoutMembersInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpdateWithWhereUniqueWithoutRelatedEventsInput = {
  data: CommunityUpdateWithoutRelatedEventsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpdateWithWhereUniqueWithoutRelatedInterestTagsInput = {
  data: CommunityUpdateWithoutRelatedInterestTagsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpdateWithoutAdminsInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutBadgesInput = {
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutCatalogItemsInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutCatalogSchedulesInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutCommunitySuggestionsInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutEventsInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutFaqItemsInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutFeedItemInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutMembersInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutMembershipInfoInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutPersonalizedInviteCodesInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutPremiumAccessCardsInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutProductsInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutPromocodesInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutRelatedEventsInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutRelatedHighlightsInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutRelatedInterestTagsInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutRelatedMasssMessagesInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutRelatedTalksMessagesInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  Track?: InputMaybe<TrackUpdateManyWithoutCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateWithoutTrackInput = {
  Badges?: InputMaybe<TemplateBadgeUpdateManyWithoutParentCommunityInput>;
  FeedItem?: InputMaybe<FeedItemUpdateManyWithoutParentCommunityInput>;
  admins?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereAdminInput>;
  availablePaymentMethods?: InputMaybe<CommunityUpdateavailablePaymentMethodsInput>;
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundColorAndroid?: InputMaybe<StringFieldUpdateOperationsInput>;
  backgroundLength?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundLengthAndroid?: InputMaybe<IntFieldUpdateOperationsInput>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFieldUpdateOperationsInput>;
  backgroundTypeAndroid?: InputMaybe<NullableEnumBackgroundTypeFieldUpdateOperationsInput>;
  catalogItems?: InputMaybe<CatalogItemUpdateManyWithoutParentCommunityInput>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleUpdateManyWithoutParentCommunityInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutCommunityInput>;
  configs?: InputMaybe<Scalars['Json']>;
  country?: InputMaybe<EnumSupportedCountriesFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParentCommunityInput>;
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutParentCommunityInput>;
  globalInviteCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  globalTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  landingCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutCommunitiesWhereMemberInput>;
  membershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutCommunityInput>;
  minAppVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  modulesDesign?: InputMaybe<Scalars['Json']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numPersonalizedInviteCodes?: InputMaybe<IntFieldUpdateOperationsInput>;
  paymentFees?: InputMaybe<Scalars['Json']>;
  personalizedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutCommunityInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutCommunityInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCommunityInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutParentCommunityInput>;
  relatedEvents?: InputMaybe<EventUpdateManyWithoutRelatedCommunitiesInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutCommunityInput>;
  relatedInterestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedCommunitiesInput>;
  relatedMasssMessages?: InputMaybe<MassMessageUpdateManyWithoutCommunityInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutCommunityInput>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFieldUpdateOperationsInput>;
  requiredUserFields?: InputMaybe<CommunityUpdaterequiredUserFieldsInput>;
  stripeConnectedAccountId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  swishPayees?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  webFeeFixed?: InputMaybe<FloatFieldUpdateOperationsInput>;
  webFeePercentage?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type CommunityUpdateavailablePaymentMethodsInput = {
  push?: InputMaybe<PurchasePaymentMethod>;
  set?: InputMaybe<Array<PurchasePaymentMethod>>;
};

export type CommunityUpdaterequiredUserFieldsInput = {
  push?: InputMaybe<UserInfoField>;
  set?: InputMaybe<Array<UserInfoField>>;
};

export type CommunityUpsertWithWhereUniqueWithoutAdminsInput = {
  create: CommunityCreateWithoutAdminsInput;
  update: CommunityUpdateWithoutAdminsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpsertWithWhereUniqueWithoutMembersInput = {
  create: CommunityCreateWithoutMembersInput;
  update: CommunityUpdateWithoutMembersInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpsertWithWhereUniqueWithoutRelatedEventsInput = {
  create: CommunityCreateWithoutRelatedEventsInput;
  update: CommunityUpdateWithoutRelatedEventsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpsertWithWhereUniqueWithoutRelatedInterestTagsInput = {
  create: CommunityCreateWithoutRelatedInterestTagsInput;
  update: CommunityUpdateWithoutRelatedInterestTagsInput;
  where: CommunityWhereUniqueInput;
};

export type CommunityUpsertWithoutBadgesInput = {
  create: CommunityCreateWithoutBadgesInput;
  update: CommunityUpdateWithoutBadgesInput;
};

export type CommunityUpsertWithoutCatalogItemsInput = {
  create: CommunityCreateWithoutCatalogItemsInput;
  update: CommunityUpdateWithoutCatalogItemsInput;
};

export type CommunityUpsertWithoutCatalogSchedulesInput = {
  create: CommunityCreateWithoutCatalogSchedulesInput;
  update: CommunityUpdateWithoutCatalogSchedulesInput;
};

export type CommunityUpsertWithoutCommunitySuggestionsInput = {
  create: CommunityCreateWithoutCommunitySuggestionsInput;
  update: CommunityUpdateWithoutCommunitySuggestionsInput;
};

export type CommunityUpsertWithoutEventsInput = {
  create: CommunityCreateWithoutEventsInput;
  update: CommunityUpdateWithoutEventsInput;
};

export type CommunityUpsertWithoutFaqItemsInput = {
  create: CommunityCreateWithoutFaqItemsInput;
  update: CommunityUpdateWithoutFaqItemsInput;
};

export type CommunityUpsertWithoutFeedItemInput = {
  create: CommunityCreateWithoutFeedItemInput;
  update: CommunityUpdateWithoutFeedItemInput;
};

export type CommunityUpsertWithoutMembershipInfoInput = {
  create: CommunityCreateWithoutMembershipInfoInput;
  update: CommunityUpdateWithoutMembershipInfoInput;
};

export type CommunityUpsertWithoutPersonalizedInviteCodesInput = {
  create: CommunityCreateWithoutPersonalizedInviteCodesInput;
  update: CommunityUpdateWithoutPersonalizedInviteCodesInput;
};

export type CommunityUpsertWithoutPremiumAccessCardsInput = {
  create: CommunityCreateWithoutPremiumAccessCardsInput;
  update: CommunityUpdateWithoutPremiumAccessCardsInput;
};

export type CommunityUpsertWithoutProductsInput = {
  create: CommunityCreateWithoutProductsInput;
  update: CommunityUpdateWithoutProductsInput;
};

export type CommunityUpsertWithoutPromocodesInput = {
  create: CommunityCreateWithoutPromocodesInput;
  update: CommunityUpdateWithoutPromocodesInput;
};

export type CommunityUpsertWithoutRelatedHighlightsInput = {
  create: CommunityCreateWithoutRelatedHighlightsInput;
  update: CommunityUpdateWithoutRelatedHighlightsInput;
};

export type CommunityUpsertWithoutRelatedMasssMessagesInput = {
  create: CommunityCreateWithoutRelatedMasssMessagesInput;
  update: CommunityUpdateWithoutRelatedMasssMessagesInput;
};

export type CommunityUpsertWithoutRelatedTalksMessagesInput = {
  create: CommunityCreateWithoutRelatedTalksMessagesInput;
  update: CommunityUpdateWithoutRelatedTalksMessagesInput;
};

export type CommunityUpsertWithoutTrackInput = {
  create: CommunityCreateWithoutTrackInput;
  update: CommunityUpdateWithoutTrackInput;
};

export type CommunityWhereInput = {
  AND?: InputMaybe<Array<CommunityWhereInput>>;
  Badges?: InputMaybe<TemplateBadgeListRelationFilter>;
  FeedItem?: InputMaybe<FeedItemListRelationFilter>;
  NOT?: InputMaybe<Array<CommunityWhereInput>>;
  OR?: InputMaybe<Array<CommunityWhereInput>>;
  Track?: InputMaybe<TrackListRelationFilter>;
  admins?: InputMaybe<UserListRelationFilter>;
  availablePaymentMethods?: InputMaybe<EnumPurchasePaymentMethodNullableListFilter>;
  backgroundColor?: InputMaybe<StringFilter>;
  backgroundColorAndroid?: InputMaybe<StringFilter>;
  backgroundLength?: InputMaybe<IntFilter>;
  backgroundLengthAndroid?: InputMaybe<IntFilter>;
  backgroundType?: InputMaybe<EnumBackgroundTypeFilter>;
  backgroundTypeAndroid?: InputMaybe<EnumBackgroundTypeNullableFilter>;
  catalogItems?: InputMaybe<CatalogItemListRelationFilter>;
  catalogSchedules?: InputMaybe<CatalogItemScheduleListRelationFilter>;
  code?: InputMaybe<StringNullableFilter>;
  communitySuggestions?: InputMaybe<CommunitySuggestionListRelationFilter>;
  configs?: InputMaybe<JsonNullableFilter>;
  country?: InputMaybe<EnumSupportedCountriesFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currency?: InputMaybe<EnumSupportedCurrenciesFilter>;
  events?: InputMaybe<EventListRelationFilter>;
  faqItems?: InputMaybe<FaqItemListRelationFilter>;
  globalInviteCode?: InputMaybe<StringNullableFilter>;
  globalTicketsLink?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  landingCode?: InputMaybe<StringNullableFilter>;
  members?: InputMaybe<UserListRelationFilter>;
  membershipInfo?: InputMaybe<CommunityMemberInfoListRelationFilter>;
  minAppVersion?: InputMaybe<StringFilter>;
  modulesDesign?: InputMaybe<JsonNullableFilter>;
  name?: InputMaybe<StringFilter>;
  numPersonalizedInviteCodes?: InputMaybe<IntFilter>;
  paymentFees?: InputMaybe<JsonNullableFilter>;
  personalizedInviteCodes?: InputMaybe<InviteCodeListRelationFilter>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardListRelationFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  promocodes?: InputMaybe<PromocodeListRelationFilter>;
  relatedEvents?: InputMaybe<EventListRelationFilter>;
  relatedHighlights?: InputMaybe<HighlightListRelationFilter>;
  relatedInterestTags?: InputMaybe<InterestTagListRelationFilter>;
  relatedMasssMessages?: InputMaybe<MassMessageListRelationFilter>;
  relatedTalksMessages?: InputMaybe<TalksMessageListRelationFilter>;
  requireVerifiedEmailForShopAccess?: InputMaybe<BoolFilter>;
  requiredUserFields?: InputMaybe<EnumUserInfoFieldNullableListFilter>;
  stripeConnectedAccountId?: InputMaybe<StringNullableFilter>;
  styleOverride?: InputMaybe<JsonNullableFilter>;
  swishPayees?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  webFeeFixed?: InputMaybe<FloatFilter>;
  webFeePercentage?: InputMaybe<FloatFilter>;
};

export type CommunityWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type CreateMediaResponse = {
  __typename?: 'CreateMediaResponse';
  errors?: Maybe<Array<Maybe<TranslatableError>>>;
  uploadURL?: Maybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['DateTime']>>;
  has?: InputMaybe<Scalars['DateTime']>;
  hasEvery?: InputMaybe<Array<Scalars['DateTime']>>;
  hasSome?: InputMaybe<Array<Scalars['DateTime']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type DiscountAndFees = {
  __typename?: 'DiscountAndFees';
  discount?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  vat?: Maybe<Scalars['Float']>;
  webFees?: Maybe<Scalars['Float']>;
};

export type DiscoverCard = {
  __typename?: 'DiscoverCard';
  backgroundColor: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  interestTags: Array<InterestTag>;
  textColor: Scalars['String'];
};


export type DiscoverCardInterestTagsArgs = {
  cursor?: InputMaybe<InterestTagWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type DiscoverCardCreateInput = {
  backgroundColor: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  interestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedDiscoverCardsInput>;
  textColor: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  usersThatAccepted?: InputMaybe<UserCreateNestedManyWithoutAcceptedDiscoverCardsInput>;
  usersThatDeclined?: InputMaybe<UserCreateNestedManyWithoutDeclinedDiscoverCardsInput>;
};

export type DiscoverCardCreateNestedManyWithoutInterestTagsInput = {
  connect?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DiscoverCardCreateOrConnectWithoutInterestTagsInput>>;
  create?: InputMaybe<Array<DiscoverCardCreateWithoutInterestTagsInput>>;
};

export type DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput = {
  connect?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DiscoverCardCreateOrConnectWithoutUsersThatAcceptedInput>>;
  create?: InputMaybe<Array<DiscoverCardCreateWithoutUsersThatAcceptedInput>>;
};

export type DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput = {
  connect?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DiscoverCardCreateOrConnectWithoutUsersThatDeclinedInput>>;
  create?: InputMaybe<Array<DiscoverCardCreateWithoutUsersThatDeclinedInput>>;
};

export type DiscoverCardCreateOrConnectWithoutInterestTagsInput = {
  create: DiscoverCardCreateWithoutInterestTagsInput;
  where: DiscoverCardWhereUniqueInput;
};

export type DiscoverCardCreateOrConnectWithoutUsersThatAcceptedInput = {
  create: DiscoverCardCreateWithoutUsersThatAcceptedInput;
  where: DiscoverCardWhereUniqueInput;
};

export type DiscoverCardCreateOrConnectWithoutUsersThatDeclinedInput = {
  create: DiscoverCardCreateWithoutUsersThatDeclinedInput;
  where: DiscoverCardWhereUniqueInput;
};

export type DiscoverCardCreateWithoutInterestTagsInput = {
  backgroundColor: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  textColor: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  usersThatAccepted?: InputMaybe<UserCreateNestedManyWithoutAcceptedDiscoverCardsInput>;
  usersThatDeclined?: InputMaybe<UserCreateNestedManyWithoutDeclinedDiscoverCardsInput>;
};

export type DiscoverCardCreateWithoutUsersThatAcceptedInput = {
  backgroundColor: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  interestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedDiscoverCardsInput>;
  textColor: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  usersThatDeclined?: InputMaybe<UserCreateNestedManyWithoutDeclinedDiscoverCardsInput>;
};

export type DiscoverCardCreateWithoutUsersThatDeclinedInput = {
  backgroundColor: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  interestTags?: InputMaybe<InterestTagCreateNestedManyWithoutRelatedDiscoverCardsInput>;
  textColor: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  usersThatAccepted?: InputMaybe<UserCreateNestedManyWithoutAcceptedDiscoverCardsInput>;
};

export type DiscoverCardListRelationFilter = {
  every?: InputMaybe<DiscoverCardWhereInput>;
  none?: InputMaybe<DiscoverCardWhereInput>;
  some?: InputMaybe<DiscoverCardWhereInput>;
};

export type DiscoverCardOrderByInput = {
  backgroundColor?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  textColor?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type DiscoverCardScalarWhereInput = {
  AND?: InputMaybe<Array<DiscoverCardScalarWhereInput>>;
  NOT?: InputMaybe<Array<DiscoverCardScalarWhereInput>>;
  OR?: InputMaybe<Array<DiscoverCardScalarWhereInput>>;
  backgroundColor?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  textColor?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DiscoverCardUpdateInput = {
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedDiscoverCardsInput>;
  textColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  usersThatAccepted?: InputMaybe<UserUpdateManyWithoutAcceptedDiscoverCardsInput>;
  usersThatDeclined?: InputMaybe<UserUpdateManyWithoutDeclinedDiscoverCardsInput>;
};

export type DiscoverCardUpdateManyMutationInput = {
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  textColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DiscoverCardUpdateManyWithWhereWithoutInterestTagsInput = {
  data: DiscoverCardUpdateManyMutationInput;
  where: DiscoverCardScalarWhereInput;
};

export type DiscoverCardUpdateManyWithWhereWithoutUsersThatAcceptedInput = {
  data: DiscoverCardUpdateManyMutationInput;
  where: DiscoverCardScalarWhereInput;
};

export type DiscoverCardUpdateManyWithWhereWithoutUsersThatDeclinedInput = {
  data: DiscoverCardUpdateManyMutationInput;
  where: DiscoverCardScalarWhereInput;
};

export type DiscoverCardUpdateManyWithoutInterestTagsInput = {
  connect?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DiscoverCardCreateOrConnectWithoutInterestTagsInput>>;
  create?: InputMaybe<Array<DiscoverCardCreateWithoutInterestTagsInput>>;
  delete?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DiscoverCardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  set?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  update?: InputMaybe<Array<DiscoverCardUpdateWithWhereUniqueWithoutInterestTagsInput>>;
  updateMany?: InputMaybe<Array<DiscoverCardUpdateManyWithWhereWithoutInterestTagsInput>>;
  upsert?: InputMaybe<Array<DiscoverCardUpsertWithWhereUniqueWithoutInterestTagsInput>>;
};

export type DiscoverCardUpdateManyWithoutUsersThatAcceptedInput = {
  connect?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DiscoverCardCreateOrConnectWithoutUsersThatAcceptedInput>>;
  create?: InputMaybe<Array<DiscoverCardCreateWithoutUsersThatAcceptedInput>>;
  delete?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DiscoverCardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  set?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  update?: InputMaybe<Array<DiscoverCardUpdateWithWhereUniqueWithoutUsersThatAcceptedInput>>;
  updateMany?: InputMaybe<Array<DiscoverCardUpdateManyWithWhereWithoutUsersThatAcceptedInput>>;
  upsert?: InputMaybe<Array<DiscoverCardUpsertWithWhereUniqueWithoutUsersThatAcceptedInput>>;
};

export type DiscoverCardUpdateManyWithoutUsersThatDeclinedInput = {
  connect?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DiscoverCardCreateOrConnectWithoutUsersThatDeclinedInput>>;
  create?: InputMaybe<Array<DiscoverCardCreateWithoutUsersThatDeclinedInput>>;
  delete?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DiscoverCardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  set?: InputMaybe<Array<DiscoverCardWhereUniqueInput>>;
  update?: InputMaybe<Array<DiscoverCardUpdateWithWhereUniqueWithoutUsersThatDeclinedInput>>;
  updateMany?: InputMaybe<Array<DiscoverCardUpdateManyWithWhereWithoutUsersThatDeclinedInput>>;
  upsert?: InputMaybe<Array<DiscoverCardUpsertWithWhereUniqueWithoutUsersThatDeclinedInput>>;
};

export type DiscoverCardUpdateWithWhereUniqueWithoutInterestTagsInput = {
  data: DiscoverCardUpdateWithoutInterestTagsInput;
  where: DiscoverCardWhereUniqueInput;
};

export type DiscoverCardUpdateWithWhereUniqueWithoutUsersThatAcceptedInput = {
  data: DiscoverCardUpdateWithoutUsersThatAcceptedInput;
  where: DiscoverCardWhereUniqueInput;
};

export type DiscoverCardUpdateWithWhereUniqueWithoutUsersThatDeclinedInput = {
  data: DiscoverCardUpdateWithoutUsersThatDeclinedInput;
  where: DiscoverCardWhereUniqueInput;
};

export type DiscoverCardUpdateWithoutInterestTagsInput = {
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  textColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  usersThatAccepted?: InputMaybe<UserUpdateManyWithoutAcceptedDiscoverCardsInput>;
  usersThatDeclined?: InputMaybe<UserUpdateManyWithoutDeclinedDiscoverCardsInput>;
};

export type DiscoverCardUpdateWithoutUsersThatAcceptedInput = {
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedDiscoverCardsInput>;
  textColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  usersThatDeclined?: InputMaybe<UserUpdateManyWithoutDeclinedDiscoverCardsInput>;
};

export type DiscoverCardUpdateWithoutUsersThatDeclinedInput = {
  backgroundColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interestTags?: InputMaybe<InterestTagUpdateManyWithoutRelatedDiscoverCardsInput>;
  textColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  usersThatAccepted?: InputMaybe<UserUpdateManyWithoutAcceptedDiscoverCardsInput>;
};

export type DiscoverCardUpsertWithWhereUniqueWithoutInterestTagsInput = {
  create: DiscoverCardCreateWithoutInterestTagsInput;
  update: DiscoverCardUpdateWithoutInterestTagsInput;
  where: DiscoverCardWhereUniqueInput;
};

export type DiscoverCardUpsertWithWhereUniqueWithoutUsersThatAcceptedInput = {
  create: DiscoverCardCreateWithoutUsersThatAcceptedInput;
  update: DiscoverCardUpdateWithoutUsersThatAcceptedInput;
  where: DiscoverCardWhereUniqueInput;
};

export type DiscoverCardUpsertWithWhereUniqueWithoutUsersThatDeclinedInput = {
  create: DiscoverCardCreateWithoutUsersThatDeclinedInput;
  update: DiscoverCardUpdateWithoutUsersThatDeclinedInput;
  where: DiscoverCardWhereUniqueInput;
};

export type DiscoverCardWhereInput = {
  AND?: InputMaybe<Array<DiscoverCardWhereInput>>;
  NOT?: InputMaybe<Array<DiscoverCardWhereInput>>;
  OR?: InputMaybe<Array<DiscoverCardWhereInput>>;
  backgroundColor?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  interestTags?: InputMaybe<InterestTagListRelationFilter>;
  textColor?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  usersThatAccepted?: InputMaybe<UserListRelationFilter>;
  usersThatDeclined?: InputMaybe<UserListRelationFilter>;
};

export type DiscoverCardWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type EnumBackgroundTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<BackgroundType>;
};

export type EnumBackgroundTypeFilter = {
  equals?: InputMaybe<BackgroundType>;
  in?: InputMaybe<Array<BackgroundType>>;
  not?: InputMaybe<NestedEnumBackgroundTypeFilter>;
  notIn?: InputMaybe<Array<BackgroundType>>;
};

export type EnumBackgroundTypeNullableFilter = {
  equals?: InputMaybe<BackgroundType>;
  in?: InputMaybe<Array<BackgroundType>>;
  not?: InputMaybe<NestedEnumBackgroundTypeNullableFilter>;
  notIn?: InputMaybe<Array<BackgroundType>>;
};

export type EnumCommunitySuggestionStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<CommunitySuggestionStatus>;
};

export type EnumCommunitySuggestionStatusFilter = {
  equals?: InputMaybe<CommunitySuggestionStatus>;
  in?: InputMaybe<Array<CommunitySuggestionStatus>>;
  not?: InputMaybe<NestedEnumCommunitySuggestionStatusFilter>;
  notIn?: InputMaybe<Array<CommunitySuggestionStatus>>;
};

export type EnumEventStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<EventStatus>;
};

export type EnumEventStatusFilter = {
  equals?: InputMaybe<EventStatus>;
  in?: InputMaybe<Array<EventStatus>>;
  not?: InputMaybe<NestedEnumEventStatusFilter>;
  notIn?: InputMaybe<Array<EventStatus>>;
};

export type EnumFeedItemPublishingStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<FeedItemPublishingStatus>;
};

export type EnumFeedItemPublishingStatusFilter = {
  equals?: InputMaybe<FeedItemPublishingStatus>;
  in?: InputMaybe<Array<FeedItemPublishingStatus>>;
  not?: InputMaybe<NestedEnumFeedItemPublishingStatusFilter>;
  notIn?: InputMaybe<Array<FeedItemPublishingStatus>>;
};

export type EnumHeadlineTypeNullableFilter = {
  equals?: InputMaybe<HeadlineType>;
  in?: InputMaybe<Array<HeadlineType>>;
  not?: InputMaybe<NestedEnumHeadlineTypeNullableFilter>;
  notIn?: InputMaybe<Array<HeadlineType>>;
};

export type EnumHighlightTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<HighlightType>;
};

export type EnumHighlightTypeFilter = {
  equals?: InputMaybe<HighlightType>;
  in?: InputMaybe<Array<HighlightType>>;
  not?: InputMaybe<NestedEnumHighlightTypeFilter>;
  notIn?: InputMaybe<Array<HighlightType>>;
};

export type EnumInviteCodeTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<InviteCodeType>;
};

export type EnumInviteCodeTypeFilter = {
  equals?: InputMaybe<InviteCodeType>;
  in?: InputMaybe<Array<InviteCodeType>>;
  not?: InputMaybe<NestedEnumInviteCodeTypeFilter>;
  notIn?: InputMaybe<Array<InviteCodeType>>;
};

export type EnumMassMessageSegmentNullableFilter = {
  equals?: InputMaybe<MassMessageSegment>;
  in?: InputMaybe<Array<MassMessageSegment>>;
  not?: InputMaybe<NestedEnumMassMessageSegmentNullableFilter>;
  notIn?: InputMaybe<Array<MassMessageSegment>>;
};

export type EnumMassMessageStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<MassMessageStatus>;
};

export type EnumMassMessageStatusFilter = {
  equals?: InputMaybe<MassMessageStatus>;
  in?: InputMaybe<Array<MassMessageStatus>>;
  not?: InputMaybe<NestedEnumMassMessageStatusFilter>;
  notIn?: InputMaybe<Array<MassMessageStatus>>;
};

export type EnumMassMessageTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<MassMessageType>;
};

export type EnumMassMessageTypeFilter = {
  equals?: InputMaybe<MassMessageType>;
  in?: InputMaybe<Array<MassMessageType>>;
  not?: InputMaybe<NestedEnumMassMessageTypeFilter>;
  notIn?: InputMaybe<Array<MassMessageType>>;
};

export type EnumMessageHighlightStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<MessageHighlightStatus>;
};

export type EnumMessageHighlightStatusFilter = {
  equals?: InputMaybe<MessageHighlightStatus>;
  in?: InputMaybe<Array<MessageHighlightStatus>>;
  not?: InputMaybe<NestedEnumMessageHighlightStatusFilter>;
  notIn?: InputMaybe<Array<MessageHighlightStatus>>;
};

export type EnumModuleNullableFilter = {
  equals?: InputMaybe<Module>;
  in?: InputMaybe<Array<Module>>;
  not?: InputMaybe<NestedEnumModuleNullableFilter>;
  notIn?: InputMaybe<Array<Module>>;
};

export type EnumPayoutStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<PayoutStatus>;
};

export type EnumPayoutStatusFilter = {
  equals?: InputMaybe<PayoutStatus>;
  in?: InputMaybe<Array<PayoutStatus>>;
  not?: InputMaybe<NestedEnumPayoutStatusFilter>;
  notIn?: InputMaybe<Array<PayoutStatus>>;
};

export type EnumProductStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<ProductStatus>;
};

export type EnumProductStatusFilter = {
  equals?: InputMaybe<ProductStatus>;
  in?: InputMaybe<Array<ProductStatus>>;
  not?: InputMaybe<NestedEnumProductStatusFilter>;
  notIn?: InputMaybe<Array<ProductStatus>>;
};

export type EnumProductTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ProductType>;
};

export type EnumProductTypeFilter = {
  equals?: InputMaybe<ProductType>;
  in?: InputMaybe<Array<ProductType>>;
  not?: InputMaybe<NestedEnumProductTypeFilter>;
  notIn?: InputMaybe<Array<ProductType>>;
};

export type EnumPurchasePaymentMethodFieldUpdateOperationsInput = {
  set?: InputMaybe<PurchasePaymentMethod>;
};

export type EnumPurchasePaymentMethodFilter = {
  equals?: InputMaybe<PurchasePaymentMethod>;
  in?: InputMaybe<Array<PurchasePaymentMethod>>;
  not?: InputMaybe<NestedEnumPurchasePaymentMethodFilter>;
  notIn?: InputMaybe<Array<PurchasePaymentMethod>>;
};

export type EnumPurchasePaymentMethodNullableListFilter = {
  equals?: InputMaybe<Array<PurchasePaymentMethod>>;
  has?: InputMaybe<PurchasePaymentMethod>;
  hasEvery?: InputMaybe<Array<PurchasePaymentMethod>>;
  hasSome?: InputMaybe<Array<PurchasePaymentMethod>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumPurchaseStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<PurchaseStatus>;
};

export type EnumPurchaseStatusFilter = {
  equals?: InputMaybe<PurchaseStatus>;
  in?: InputMaybe<Array<PurchaseStatus>>;
  not?: InputMaybe<NestedEnumPurchaseStatusFilter>;
  notIn?: InputMaybe<Array<PurchaseStatus>>;
};

export type EnumSupportedCountriesFieldUpdateOperationsInput = {
  set?: InputMaybe<SupportedCountries>;
};

export type EnumSupportedCountriesFilter = {
  equals?: InputMaybe<SupportedCountries>;
  in?: InputMaybe<Array<SupportedCountries>>;
  not?: InputMaybe<NestedEnumSupportedCountriesFilter>;
  notIn?: InputMaybe<Array<SupportedCountries>>;
};

export type EnumSupportedCurrenciesFieldUpdateOperationsInput = {
  set?: InputMaybe<SupportedCurrencies>;
};

export type EnumSupportedCurrenciesFilter = {
  equals?: InputMaybe<SupportedCurrencies>;
  in?: InputMaybe<Array<SupportedCurrencies>>;
  not?: InputMaybe<NestedEnumSupportedCurrenciesFilter>;
  notIn?: InputMaybe<Array<SupportedCurrencies>>;
};

export type EnumTalksMessageTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<TalksMessageType>;
};

export type EnumTalksMessageTypeFilter = {
  equals?: InputMaybe<TalksMessageType>;
  in?: InputMaybe<Array<TalksMessageType>>;
  not?: InputMaybe<NestedEnumTalksMessageTypeFilter>;
  notIn?: InputMaybe<Array<TalksMessageType>>;
};

export type EnumTalksMessageTypeNullableFilter = {
  equals?: InputMaybe<TalksMessageType>;
  in?: InputMaybe<Array<TalksMessageType>>;
  not?: InputMaybe<NestedEnumTalksMessageTypeNullableFilter>;
  notIn?: InputMaybe<Array<TalksMessageType>>;
};

export type EnumUserInfoFieldNullableListFilter = {
  equals?: InputMaybe<Array<UserInfoField>>;
  has?: InputMaybe<UserInfoField>;
  hasEvery?: InputMaybe<Array<UserInfoField>>;
  hasSome?: InputMaybe<Array<UserInfoField>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumUserRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<UserRole>;
};

export type EnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type EnumUserStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<UserStatus>;
};

export type EnumUserStatusFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  not?: InputMaybe<NestedEnumUserStatusFilter>;
  notIn?: InputMaybe<Array<UserStatus>>;
};

export type EnumWaitlistSourceFieldUpdateOperationsInput = {
  set?: InputMaybe<WaitlistSource>;
};

export type EnumWaitlistSourceFilter = {
  equals?: InputMaybe<WaitlistSource>;
  in?: InputMaybe<Array<WaitlistSource>>;
  not?: InputMaybe<NestedEnumWaitlistSourceFilter>;
  notIn?: InputMaybe<Array<WaitlistSource>>;
};

export type Event = {
  __typename?: 'Event';
  additionalDetails?: Maybe<Scalars['String']>;
  buyTicketsLink?: Maybe<Scalars['String']>;
  categories: Array<EventCategory>;
  checkedInUsers: Array<User>;
  creator?: Maybe<User>;
  creatorId?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['DateTime']>;
  eventDetails: Array<EventDetail>;
  feed: Array<FeedItem>;
  grossRevenue?: Maybe<Scalars['Float']>;
  host?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  infoStepsComplete: Scalars['Int'];
  invitedUsers: Array<User>;
  isLocked: Scalars['Boolean'];
  isMaster: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  latitude?: Maybe<Scalars['Float']>;
  location?: Maybe<Scalars['String']>;
  locationDescription?: Maybe<Scalars['String']>;
  locationDropTime?: Maybe<Scalars['DateTime']>;
  longitude?: Maybe<Scalars['Float']>;
  mediaUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: Community;
  parentCommunityId: Scalars['String'];
  potentialRevenue?: Maybe<Scalars['Float']>;
  prePurchaseCode?: Maybe<Scalars['String']>;
  products: Array<Product>;
  publishingStatus: EventStatus;
  registerLink?: Maybe<Scalars['String']>;
  registeredUsers: Array<User>;
  registrationRequired: Scalars['Boolean'];
  relatedCommunities: Array<Community>;
  shouldInviteCommunityMembersAutomatically: Scalars['Boolean'];
  start?: Maybe<Scalars['DateTime']>;
  styleOverride?: Maybe<Scalars['Json']>;
  ticketedUsers: Array<User>;
  ticketsSold?: Maybe<Scalars['Int']>;
  ticketsTotal?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};


export type EventCategoriesArgs = {
  cursor?: InputMaybe<EventCategoryWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type EventCheckedInUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type EventEventDetailsArgs = {
  cursor?: InputMaybe<EventDetailWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type EventFeedArgs = {
  cursor?: InputMaybe<FeedItemWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type EventInvitedUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type EventProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type EventRegisteredUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type EventRelatedCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type EventTicketedUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type EventCategory = {
  __typename?: 'EventCategory';
  createdAt: Scalars['DateTime'];
  events: Array<Event>;
  id: Scalars['String'];
  name: Scalars['String'];
  styleOverride?: Maybe<Scalars['Json']>;
  updatedAt: Scalars['DateTime'];
};


export type EventCategoryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type EventCategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  events?: InputMaybe<EventCreateNestedManyWithoutCategoriesInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCategoryCreateNestedManyWithoutEventsInput = {
  connect?: InputMaybe<Array<EventCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCategoryCreateOrConnectWithoutEventsInput>>;
  create?: InputMaybe<Array<EventCategoryCreateWithoutEventsInput>>;
};

export type EventCategoryCreateOrConnectWithoutEventsInput = {
  create: EventCategoryCreateWithoutEventsInput;
  where: EventCategoryWhereUniqueInput;
};

export type EventCategoryCreateWithoutEventsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCategoryListRelationFilter = {
  every?: InputMaybe<EventCategoryWhereInput>;
  none?: InputMaybe<EventCategoryWhereInput>;
  some?: InputMaybe<EventCategoryWhereInput>;
};

export type EventCategoryOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  styleOverride?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EventCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<EventCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<EventCategoryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  styleOverride?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EventCategoryUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutCategoriesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventCategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventCategoryUpdateManyWithWhereWithoutEventsInput = {
  data: EventCategoryUpdateManyMutationInput;
  where: EventCategoryScalarWhereInput;
};

export type EventCategoryUpdateManyWithoutEventsInput = {
  connect?: InputMaybe<Array<EventCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCategoryCreateOrConnectWithoutEventsInput>>;
  create?: InputMaybe<Array<EventCategoryCreateWithoutEventsInput>>;
  delete?: InputMaybe<Array<EventCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<EventCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<EventCategoryUpdateWithWhereUniqueWithoutEventsInput>>;
  updateMany?: InputMaybe<Array<EventCategoryUpdateManyWithWhereWithoutEventsInput>>;
  upsert?: InputMaybe<Array<EventCategoryUpsertWithWhereUniqueWithoutEventsInput>>;
};

export type EventCategoryUpdateWithWhereUniqueWithoutEventsInput = {
  data: EventCategoryUpdateWithoutEventsInput;
  where: EventCategoryWhereUniqueInput;
};

export type EventCategoryUpdateWithoutEventsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventCategoryUpsertWithWhereUniqueWithoutEventsInput = {
  create: EventCategoryCreateWithoutEventsInput;
  update: EventCategoryUpdateWithoutEventsInput;
  where: EventCategoryWhereUniqueInput;
};

export type EventCategoryWhereInput = {
  AND?: InputMaybe<Array<EventCategoryWhereInput>>;
  NOT?: InputMaybe<Array<EventCategoryWhereInput>>;
  OR?: InputMaybe<Array<EventCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  events?: InputMaybe<EventListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  styleOverride?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EventCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type EventCreateInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateManyCreatorInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  end?: InputMaybe<Scalars['DateTime']>;
  externalId?: InputMaybe<Scalars['String']>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunityId: Scalars['String'];
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateManyCreatorInputEnvelope = {
  data?: InputMaybe<Array<EventCreateManyCreatorInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventCreateManyParentCommunityInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['DateTime']>;
  externalId?: InputMaybe<Scalars['String']>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateManyParentCommunityInputEnvelope = {
  data?: InputMaybe<Array<EventCreateManyParentCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<EventCreateWithoutCategoriesInput>>;
};

export type EventCreateNestedManyWithoutCheckedInUsersInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutCheckedInUsersInput>>;
  create?: InputMaybe<Array<EventCreateWithoutCheckedInUsersInput>>;
};

export type EventCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<EventCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<EventCreateManyCreatorInputEnvelope>;
};

export type EventCreateNestedManyWithoutFeedInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutFeedInput>>;
  create?: InputMaybe<Array<EventCreateWithoutFeedInput>>;
};

export type EventCreateNestedManyWithoutInvitedUsersInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutInvitedUsersInput>>;
  create?: InputMaybe<Array<EventCreateWithoutInvitedUsersInput>>;
};

export type EventCreateNestedManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<EventCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<EventCreateManyParentCommunityInputEnvelope>;
};

export type EventCreateNestedManyWithoutRegisteredUsersInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutRegisteredUsersInput>>;
  create?: InputMaybe<Array<EventCreateWithoutRegisteredUsersInput>>;
};

export type EventCreateNestedManyWithoutRelatedCommunitiesInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutRelatedCommunitiesInput>>;
  create?: InputMaybe<Array<EventCreateWithoutRelatedCommunitiesInput>>;
};

export type EventCreateNestedManyWithoutTicketedUsersInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutTicketedUsersInput>>;
  create?: InputMaybe<Array<EventCreateWithoutTicketedUsersInput>>;
};

export type EventCreateNestedOneWithoutEventDetailsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutEventDetailsInput>;
  create?: InputMaybe<EventCreateWithoutEventDetailsInput>;
};

export type EventCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<EventCreateWithoutProductsInput>;
};

export type EventCreateNestedOneWithoutRelatedHighlightsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutRelatedHighlightsInput>;
  create?: InputMaybe<EventCreateWithoutRelatedHighlightsInput>;
};

export type EventCreateNestedOneWithoutRelatedMassMessagesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutRelatedMassMessagesInput>;
  create?: InputMaybe<EventCreateWithoutRelatedMassMessagesInput>;
};

export type EventCreateNestedOneWithoutRelatedTalksMessagesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutRelatedTalksMessagesInput>;
  create?: InputMaybe<EventCreateWithoutRelatedTalksMessagesInput>;
};

export type EventCreateOrConnectWithoutCategoriesInput = {
  create: EventCreateWithoutCategoriesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutCheckedInUsersInput = {
  create: EventCreateWithoutCheckedInUsersInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutCreatorInput = {
  create: EventCreateWithoutCreatorInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutEventDetailsInput = {
  create: EventCreateWithoutEventDetailsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutFeedInput = {
  create: EventCreateWithoutFeedInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutInvitedUsersInput = {
  create: EventCreateWithoutInvitedUsersInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutParentCommunityInput = {
  create: EventCreateWithoutParentCommunityInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutProductsInput = {
  create: EventCreateWithoutProductsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutRegisteredUsersInput = {
  create: EventCreateWithoutRegisteredUsersInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutRelatedCommunitiesInput = {
  create: EventCreateWithoutRelatedCommunitiesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutRelatedHighlightsInput = {
  create: EventCreateWithoutRelatedHighlightsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutRelatedMassMessagesInput = {
  create: EventCreateWithoutRelatedMassMessagesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutRelatedTalksMessagesInput = {
  create: EventCreateWithoutRelatedTalksMessagesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutTicketedUsersInput = {
  create: EventCreateWithoutTicketedUsersInput;
  where: EventWhereUniqueInput;
};

export type EventCreateWithoutCategoriesInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutCheckedInUsersInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutCreatorInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutEventDetailsInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutFeedInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutInvitedUsersInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutParentCommunityInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutProductsInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutRegisteredUsersInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutRelatedCommunitiesInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutRelatedHighlightsInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutRelatedMassMessagesInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutRelatedTalksMessagesInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserCreateNestedManyWithoutTicketsEventsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateWithoutTicketedUsersInput = {
  additionalDetails?: InputMaybe<Scalars['String']>;
  buyTicketsLink?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<EventCategoryCreateNestedManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserCreateNestedManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedEventsInput>;
  end?: InputMaybe<Scalars['DateTime']>;
  eventDetails?: InputMaybe<EventDetailCreateNestedManyWithoutEventInput>;
  externalId?: InputMaybe<Scalars['String']>;
  feed?: InputMaybe<FeedItemCreateNestedManyWithoutEventsInput>;
  host?: InputMaybe<Scalars['String']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoStepsComplete?: InputMaybe<Scalars['Int']>;
  invitedUsers?: InputMaybe<UserCreateNestedManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isMaster?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationDropTime?: InputMaybe<Scalars['DateTime']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutEventsInput;
  prePurchaseCode?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EventStatus>;
  registerLink?: InputMaybe<Scalars['String']>;
  registeredUsers?: InputMaybe<UserCreateNestedManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<Scalars['Boolean']>;
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightCreateNestedManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageCreateNestedManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageCreateNestedManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventDetail = {
  __typename?: 'EventDetail';
  createdAt: Scalars['DateTime'];
  event: Event;
  id: Scalars['String'];
  shouldSendNotification: Scalars['Boolean'];
  text?: Maybe<Scalars['String']>;
};

export type EventDetailCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutEventDetailsInput;
  id?: InputMaybe<Scalars['String']>;
  notificationsSent?: InputMaybe<Scalars['Boolean']>;
  shouldSendNotification?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventDetailCreateManyEventInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  notificationsSent?: InputMaybe<Scalars['Boolean']>;
  shouldSendNotification?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventDetailCreateManyEventInputEnvelope = {
  data?: InputMaybe<Array<EventDetailCreateManyEventInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventDetailCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventDetailWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventDetailCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<EventDetailCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventDetailCreateManyEventInputEnvelope>;
};

export type EventDetailCreateOrConnectWithoutEventInput = {
  create: EventDetailCreateWithoutEventInput;
  where: EventDetailWhereUniqueInput;
};

export type EventDetailCreateWithoutEventInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  notificationsSent?: InputMaybe<Scalars['Boolean']>;
  shouldSendNotification?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventDetailListRelationFilter = {
  every?: InputMaybe<EventDetailWhereInput>;
  none?: InputMaybe<EventDetailWhereInput>;
  some?: InputMaybe<EventDetailWhereInput>;
};

export type EventDetailOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notificationsSent?: InputMaybe<SortOrder>;
  shouldSendNotification?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EventDetailScalarWhereInput = {
  AND?: InputMaybe<Array<EventDetailScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventDetailScalarWhereInput>>;
  OR?: InputMaybe<Array<EventDetailScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  notificationsSent?: InputMaybe<BoolFilter>;
  shouldSendNotification?: InputMaybe<BoolFilter>;
  text?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EventDetailUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutEventDetailsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  notificationsSent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  shouldSendNotification?: InputMaybe<BoolFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventDetailUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  notificationsSent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  shouldSendNotification?: InputMaybe<BoolFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventDetailUpdateManyWithWhereWithoutEventInput = {
  data: EventDetailUpdateManyMutationInput;
  where: EventDetailScalarWhereInput;
};

export type EventDetailUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventDetailWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventDetailCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<EventDetailCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventDetailCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<EventDetailWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventDetailScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventDetailWhereUniqueInput>>;
  set?: InputMaybe<Array<EventDetailWhereUniqueInput>>;
  update?: InputMaybe<Array<EventDetailUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<EventDetailUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<EventDetailUpsertWithWhereUniqueWithoutEventInput>>;
};

export type EventDetailUpdateWithWhereUniqueWithoutEventInput = {
  data: EventDetailUpdateWithoutEventInput;
  where: EventDetailWhereUniqueInput;
};

export type EventDetailUpdateWithoutEventInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  notificationsSent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  shouldSendNotification?: InputMaybe<BoolFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventDetailUpsertWithWhereUniqueWithoutEventInput = {
  create: EventDetailCreateWithoutEventInput;
  update: EventDetailUpdateWithoutEventInput;
  where: EventDetailWhereUniqueInput;
};

export type EventDetailWhereInput = {
  AND?: InputMaybe<Array<EventDetailWhereInput>>;
  NOT?: InputMaybe<Array<EventDetailWhereInput>>;
  OR?: InputMaybe<Array<EventDetailWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventWhereInput>;
  eventId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  notificationsSent?: InputMaybe<BoolFilter>;
  shouldSendNotification?: InputMaybe<BoolFilter>;
  text?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EventDetailWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type EventInfoSection = {
  __typename?: 'EventInfoSection';
  items?: Maybe<Array<Maybe<EventInfoSectionItem>>>;
  name: Scalars['String'];
  productId?: Maybe<Scalars['String']>;
};

export type EventInfoSectionItem = {
  __typename?: 'EventInfoSectionItem';
  color: Scalars['String'];
  count: Scalars['Float'];
  desc: Scalars['String'];
  name: Scalars['String'];
  type: EventInfoSectionItemType;
};

export enum EventInfoSectionItemType {
  CheckedIn = 'CheckedIn',
  Invited = 'Invited',
  Purchased = 'Purchased',
  Registered = 'Registered'
}

export type EventListRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventOrderByInput = {
  additionalDetails?: InputMaybe<SortOrder>;
  buyTicketsLink?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  end?: InputMaybe<SortOrder>;
  externalId?: InputMaybe<SortOrder>;
  host?: InputMaybe<SortOrder>;
  iconUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  infoStepsComplete?: InputMaybe<SortOrder>;
  isLocked?: InputMaybe<SortOrder>;
  isMaster?: InputMaybe<SortOrder>;
  isPrivate?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  locationDescription?: InputMaybe<SortOrder>;
  locationDropTime?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  mediaUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentCommunityId?: InputMaybe<SortOrder>;
  prePurchaseCode?: InputMaybe<SortOrder>;
  publishingStatus?: InputMaybe<SortOrder>;
  registerLink?: InputMaybe<SortOrder>;
  registrationRequired?: InputMaybe<SortOrder>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<SortOrder>;
  start?: InputMaybe<SortOrder>;
  styleOverride?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EventScalarWhereInput = {
  AND?: InputMaybe<Array<EventScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventScalarWhereInput>>;
  OR?: InputMaybe<Array<EventScalarWhereInput>>;
  additionalDetails?: InputMaybe<StringNullableFilter>;
  buyTicketsLink?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  creatorId?: InputMaybe<StringNullableFilter>;
  end?: InputMaybe<DateTimeNullableFilter>;
  externalId?: InputMaybe<StringNullableFilter>;
  host?: InputMaybe<StringNullableFilter>;
  iconUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  infoStepsComplete?: InputMaybe<IntFilter>;
  isLocked?: InputMaybe<BoolFilter>;
  isMaster?: InputMaybe<BoolFilter>;
  isPrivate?: InputMaybe<BoolFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  location?: InputMaybe<StringNullableFilter>;
  locationDescription?: InputMaybe<StringNullableFilter>;
  locationDropTime?: InputMaybe<DateTimeNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  mediaUrl?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  parentCommunityId?: InputMaybe<StringFilter>;
  prePurchaseCode?: InputMaybe<StringNullableFilter>;
  publishingStatus?: InputMaybe<EnumEventStatusFilter>;
  registerLink?: InputMaybe<StringNullableFilter>;
  registrationRequired?: InputMaybe<BoolFilter>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFilter>;
  start?: InputMaybe<DateTimeNullableFilter>;
  styleOverride?: InputMaybe<JsonNullableFilter>;
  type?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum EventStatus {
  Active = 'Active',
  Canceled = 'Canceled',
  CompletedDraft = 'CompletedDraft',
  Draft = 'Draft',
  UneditedDraft = 'UneditedDraft'
}

export type EventUpdateInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateManyMutationInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateManyWithWhereWithoutCategoriesInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutCheckedInUsersInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutCreatorInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutFeedInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutInvitedUsersInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutParentCommunityInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutRegisteredUsersInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutRelatedCommunitiesInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutTicketedUsersInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<EventCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type EventUpdateManyWithoutCheckedInUsersInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutCheckedInUsersInput>>;
  create?: InputMaybe<Array<EventCreateWithoutCheckedInUsersInput>>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutCheckedInUsersInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutCheckedInUsersInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutCheckedInUsersInput>>;
};

export type EventUpdateManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<EventCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<EventCreateManyCreatorInputEnvelope>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutCreatorInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutCreatorInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutCreatorInput>>;
};

export type EventUpdateManyWithoutFeedInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutFeedInput>>;
  create?: InputMaybe<Array<EventCreateWithoutFeedInput>>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutFeedInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutFeedInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutFeedInput>>;
};

export type EventUpdateManyWithoutInvitedUsersInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutInvitedUsersInput>>;
  create?: InputMaybe<Array<EventCreateWithoutInvitedUsersInput>>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutInvitedUsersInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutInvitedUsersInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutInvitedUsersInput>>;
};

export type EventUpdateManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<EventCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<EventCreateManyParentCommunityInputEnvelope>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutParentCommunityInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutParentCommunityInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutParentCommunityInput>>;
};

export type EventUpdateManyWithoutRegisteredUsersInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutRegisteredUsersInput>>;
  create?: InputMaybe<Array<EventCreateWithoutRegisteredUsersInput>>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutRegisteredUsersInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutRegisteredUsersInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutRegisteredUsersInput>>;
};

export type EventUpdateManyWithoutRelatedCommunitiesInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutRelatedCommunitiesInput>>;
  create?: InputMaybe<Array<EventCreateWithoutRelatedCommunitiesInput>>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutRelatedCommunitiesInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutRelatedCommunitiesInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutRelatedCommunitiesInput>>;
};

export type EventUpdateManyWithoutTicketedUsersInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutTicketedUsersInput>>;
  create?: InputMaybe<Array<EventCreateWithoutTicketedUsersInput>>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutTicketedUsersInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutTicketedUsersInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutTicketedUsersInput>>;
};

export type EventUpdateOneRequiredWithoutEventDetailsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutEventDetailsInput>;
  create?: InputMaybe<EventCreateWithoutEventDetailsInput>;
  update?: InputMaybe<EventUpdateWithoutEventDetailsInput>;
  upsert?: InputMaybe<EventUpsertWithoutEventDetailsInput>;
};

export type EventUpdateOneWithoutProductsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<EventCreateWithoutProductsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<EventUpdateWithoutProductsInput>;
  upsert?: InputMaybe<EventUpsertWithoutProductsInput>;
};

export type EventUpdateOneWithoutRelatedHighlightsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutRelatedHighlightsInput>;
  create?: InputMaybe<EventCreateWithoutRelatedHighlightsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<EventUpdateWithoutRelatedHighlightsInput>;
  upsert?: InputMaybe<EventUpsertWithoutRelatedHighlightsInput>;
};

export type EventUpdateOneWithoutRelatedMassMessagesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutRelatedMassMessagesInput>;
  create?: InputMaybe<EventCreateWithoutRelatedMassMessagesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<EventUpdateWithoutRelatedMassMessagesInput>;
  upsert?: InputMaybe<EventUpsertWithoutRelatedMassMessagesInput>;
};

export type EventUpdateOneWithoutRelatedTalksMessagesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutRelatedTalksMessagesInput>;
  create?: InputMaybe<EventCreateWithoutRelatedTalksMessagesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<EventUpdateWithoutRelatedTalksMessagesInput>;
  upsert?: InputMaybe<EventUpsertWithoutRelatedTalksMessagesInput>;
};

export type EventUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: EventUpdateWithoutCategoriesInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutCheckedInUsersInput = {
  data: EventUpdateWithoutCheckedInUsersInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutCreatorInput = {
  data: EventUpdateWithoutCreatorInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutFeedInput = {
  data: EventUpdateWithoutFeedInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutInvitedUsersInput = {
  data: EventUpdateWithoutInvitedUsersInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutParentCommunityInput = {
  data: EventUpdateWithoutParentCommunityInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutRegisteredUsersInput = {
  data: EventUpdateWithoutRegisteredUsersInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutRelatedCommunitiesInput = {
  data: EventUpdateWithoutRelatedCommunitiesInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutTicketedUsersInput = {
  data: EventUpdateWithoutTicketedUsersInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithoutCategoriesInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutCheckedInUsersInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutCreatorInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutEventDetailsInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutFeedInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutInvitedUsersInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutParentCommunityInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutProductsInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutRegisteredUsersInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutRelatedCommunitiesInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutRelatedHighlightsInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutRelatedMassMessagesInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutRelatedTalksMessagesInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  ticketedUsers?: InputMaybe<UserUpdateManyWithoutTicketsEventsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutTicketedUsersInput = {
  additionalDetails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buyTicketsLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<EventCategoryUpdateManyWithoutEventsInput>;
  checkedInUsers?: InputMaybe<UserUpdateManyWithoutCheckedInEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedEventsInput>;
  end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventDetails?: InputMaybe<EventDetailUpdateManyWithoutEventInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  feed?: InputMaybe<FeedItemUpdateManyWithoutEventsInput>;
  host?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  iconUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  infoStepsComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  invitedUsers?: InputMaybe<UserUpdateManyWithoutInvitedEventsInput>;
  isLocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isMaster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  locationDropTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutEventsInput>;
  prePurchaseCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEventInput>;
  publishingStatus?: InputMaybe<EnumEventStatusFieldUpdateOperationsInput>;
  registerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  registeredUsers?: InputMaybe<UserUpdateManyWithoutRegisteredEventsInput>;
  registrationRequired?: InputMaybe<BoolFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedEventsInput>;
  relatedHighlights?: InputMaybe<HighlightUpdateManyWithoutEventInput>;
  relatedMassMessages?: InputMaybe<MassMessageUpdateManyWithoutEventInput>;
  relatedTalksMessages?: InputMaybe<TalksMessageUpdateManyWithoutEventInput>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: EventCreateWithoutCategoriesInput;
  update: EventUpdateWithoutCategoriesInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutCheckedInUsersInput = {
  create: EventCreateWithoutCheckedInUsersInput;
  update: EventUpdateWithoutCheckedInUsersInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutCreatorInput = {
  create: EventCreateWithoutCreatorInput;
  update: EventUpdateWithoutCreatorInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutFeedInput = {
  create: EventCreateWithoutFeedInput;
  update: EventUpdateWithoutFeedInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutInvitedUsersInput = {
  create: EventCreateWithoutInvitedUsersInput;
  update: EventUpdateWithoutInvitedUsersInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutParentCommunityInput = {
  create: EventCreateWithoutParentCommunityInput;
  update: EventUpdateWithoutParentCommunityInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutRegisteredUsersInput = {
  create: EventCreateWithoutRegisteredUsersInput;
  update: EventUpdateWithoutRegisteredUsersInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutRelatedCommunitiesInput = {
  create: EventCreateWithoutRelatedCommunitiesInput;
  update: EventUpdateWithoutRelatedCommunitiesInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutTicketedUsersInput = {
  create: EventCreateWithoutTicketedUsersInput;
  update: EventUpdateWithoutTicketedUsersInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithoutEventDetailsInput = {
  create: EventCreateWithoutEventDetailsInput;
  update: EventUpdateWithoutEventDetailsInput;
};

export type EventUpsertWithoutProductsInput = {
  create: EventCreateWithoutProductsInput;
  update: EventUpdateWithoutProductsInput;
};

export type EventUpsertWithoutRelatedHighlightsInput = {
  create: EventCreateWithoutRelatedHighlightsInput;
  update: EventUpdateWithoutRelatedHighlightsInput;
};

export type EventUpsertWithoutRelatedMassMessagesInput = {
  create: EventCreateWithoutRelatedMassMessagesInput;
  update: EventUpdateWithoutRelatedMassMessagesInput;
};

export type EventUpsertWithoutRelatedTalksMessagesInput = {
  create: EventCreateWithoutRelatedTalksMessagesInput;
  update: EventUpdateWithoutRelatedTalksMessagesInput;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  additionalDetails?: InputMaybe<StringNullableFilter>;
  buyTicketsLink?: InputMaybe<StringNullableFilter>;
  categories?: InputMaybe<EventCategoryListRelationFilter>;
  checkedInUsers?: InputMaybe<UserListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  creator?: InputMaybe<UserWhereInput>;
  creatorId?: InputMaybe<StringNullableFilter>;
  end?: InputMaybe<DateTimeNullableFilter>;
  eventDetails?: InputMaybe<EventDetailListRelationFilter>;
  externalId?: InputMaybe<StringNullableFilter>;
  feed?: InputMaybe<FeedItemListRelationFilter>;
  host?: InputMaybe<StringNullableFilter>;
  iconUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  infoStepsComplete?: InputMaybe<IntFilter>;
  invitedUsers?: InputMaybe<UserListRelationFilter>;
  isLocked?: InputMaybe<BoolFilter>;
  isMaster?: InputMaybe<BoolFilter>;
  isPrivate?: InputMaybe<BoolFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  location?: InputMaybe<StringNullableFilter>;
  locationDescription?: InputMaybe<StringNullableFilter>;
  locationDropTime?: InputMaybe<DateTimeNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  mediaUrl?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  parentCommunity?: InputMaybe<CommunityWhereInput>;
  parentCommunityId?: InputMaybe<StringFilter>;
  prePurchaseCode?: InputMaybe<StringNullableFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  publishingStatus?: InputMaybe<EnumEventStatusFilter>;
  registerLink?: InputMaybe<StringNullableFilter>;
  registeredUsers?: InputMaybe<UserListRelationFilter>;
  registrationRequired?: InputMaybe<BoolFilter>;
  relatedCommunities?: InputMaybe<CommunityListRelationFilter>;
  relatedHighlights?: InputMaybe<HighlightListRelationFilter>;
  relatedMassMessages?: InputMaybe<MassMessageListRelationFilter>;
  relatedTalksMessages?: InputMaybe<TalksMessageListRelationFilter>;
  shouldInviteCommunityMembersAutomatically?: InputMaybe<BoolFilter>;
  start?: InputMaybe<DateTimeNullableFilter>;
  styleOverride?: InputMaybe<JsonNullableFilter>;
  ticketedUsers?: InputMaybe<UserListRelationFilter>;
  type?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type FaqCategory = {
  __typename?: 'FaqCategory';
  faqItems: Array<FaqItem>;
  id: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Int'];
};


export type FaqCategoryFaqItemsArgs = {
  cursor?: InputMaybe<FaqItemWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type FaqCategoryCreateInput = {
  faqItems?: InputMaybe<FaqItemCreateNestedManyWithoutCategoryInput>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type FaqCategoryCreateNestedOneWithoutFaqItemsInput = {
  connect?: InputMaybe<FaqCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FaqCategoryCreateOrConnectWithoutFaqItemsInput>;
  create?: InputMaybe<FaqCategoryCreateWithoutFaqItemsInput>;
};

export type FaqCategoryCreateOrConnectWithoutFaqItemsInput = {
  create: FaqCategoryCreateWithoutFaqItemsInput;
  where: FaqCategoryWhereUniqueInput;
};

export type FaqCategoryCreateWithoutFaqItemsInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type FaqCategoryOrderByInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
};

export type FaqCategoryUpdateInput = {
  faqItems?: InputMaybe<FaqItemUpdateManyWithoutCategoryInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FaqCategoryUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FaqCategoryUpdateOneRequiredWithoutFaqItemsInput = {
  connect?: InputMaybe<FaqCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FaqCategoryCreateOrConnectWithoutFaqItemsInput>;
  create?: InputMaybe<FaqCategoryCreateWithoutFaqItemsInput>;
  update?: InputMaybe<FaqCategoryUpdateWithoutFaqItemsInput>;
  upsert?: InputMaybe<FaqCategoryUpsertWithoutFaqItemsInput>;
};

export type FaqCategoryUpdateWithoutFaqItemsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FaqCategoryUpsertWithoutFaqItemsInput = {
  create: FaqCategoryCreateWithoutFaqItemsInput;
  update: FaqCategoryUpdateWithoutFaqItemsInput;
};

export type FaqCategoryWhereInput = {
  AND?: InputMaybe<Array<FaqCategoryWhereInput>>;
  NOT?: InputMaybe<Array<FaqCategoryWhereInput>>;
  OR?: InputMaybe<Array<FaqCategoryWhereInput>>;
  faqItems?: InputMaybe<FaqItemListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
};

export type FaqCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type FaqItem = {
  __typename?: 'FaqItem';
  answer: Scalars['String'];
  category: FaqCategory;
  categoryId: Scalars['String'];
  id: Scalars['String'];
  order: Scalars['Int'];
  parentCommunity?: Maybe<Community>;
  parentCommunityId?: Maybe<Scalars['String']>;
  question: Scalars['String'];
};

export type FaqItemCreateInput = {
  answer?: InputMaybe<Scalars['String']>;
  category: FaqCategoryCreateNestedOneWithoutFaqItemsInput;
  id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutFaqItemsInput>;
  question?: InputMaybe<Scalars['String']>;
};

export type FaqItemCreateManyCategoryInput = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  parentCommunityId?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
};

export type FaqItemCreateManyCategoryInputEnvelope = {
  data?: InputMaybe<Array<FaqItemCreateManyCategoryInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FaqItemCreateManyParentCommunityInput = {
  answer?: InputMaybe<Scalars['String']>;
  categoryId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<Scalars['String']>;
};

export type FaqItemCreateManyParentCommunityInputEnvelope = {
  data?: InputMaybe<Array<FaqItemCreateManyParentCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FaqItemCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<FaqItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FaqItemCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<FaqItemCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<FaqItemCreateManyCategoryInputEnvelope>;
};

export type FaqItemCreateNestedManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<FaqItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FaqItemCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<FaqItemCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<FaqItemCreateManyParentCommunityInputEnvelope>;
};

export type FaqItemCreateOrConnectWithoutCategoryInput = {
  create: FaqItemCreateWithoutCategoryInput;
  where: FaqItemWhereUniqueInput;
};

export type FaqItemCreateOrConnectWithoutParentCommunityInput = {
  create: FaqItemCreateWithoutParentCommunityInput;
  where: FaqItemWhereUniqueInput;
};

export type FaqItemCreateWithoutCategoryInput = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutFaqItemsInput>;
  question?: InputMaybe<Scalars['String']>;
};

export type FaqItemCreateWithoutParentCommunityInput = {
  answer?: InputMaybe<Scalars['String']>;
  category: FaqCategoryCreateNestedOneWithoutFaqItemsInput;
  id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<Scalars['String']>;
};

export type FaqItemListRelationFilter = {
  every?: InputMaybe<FaqItemWhereInput>;
  none?: InputMaybe<FaqItemWhereInput>;
  some?: InputMaybe<FaqItemWhereInput>;
};

export type FaqItemOrderByInput = {
  answer?: InputMaybe<SortOrder>;
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  parentCommunityId?: InputMaybe<SortOrder>;
  question?: InputMaybe<SortOrder>;
};

export type FaqItemScalarWhereInput = {
  AND?: InputMaybe<Array<FaqItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<FaqItemScalarWhereInput>>;
  OR?: InputMaybe<Array<FaqItemScalarWhereInput>>;
  answer?: InputMaybe<StringFilter>;
  categoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  parentCommunityId?: InputMaybe<StringNullableFilter>;
  question?: InputMaybe<StringFilter>;
};

export type FaqItemUpdateInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  category?: InputMaybe<FaqCategoryUpdateOneRequiredWithoutFaqItemsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutFaqItemsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FaqItemUpdateManyMutationInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FaqItemUpdateManyWithWhereWithoutCategoryInput = {
  data: FaqItemUpdateManyMutationInput;
  where: FaqItemScalarWhereInput;
};

export type FaqItemUpdateManyWithWhereWithoutParentCommunityInput = {
  data: FaqItemUpdateManyMutationInput;
  where: FaqItemScalarWhereInput;
};

export type FaqItemUpdateManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<FaqItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FaqItemCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<FaqItemCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<FaqItemCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<FaqItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FaqItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FaqItemWhereUniqueInput>>;
  set?: InputMaybe<Array<FaqItemWhereUniqueInput>>;
  update?: InputMaybe<Array<FaqItemUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<FaqItemUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<FaqItemUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type FaqItemUpdateManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<FaqItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FaqItemCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<FaqItemCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<FaqItemCreateManyParentCommunityInputEnvelope>;
  delete?: InputMaybe<Array<FaqItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FaqItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FaqItemWhereUniqueInput>>;
  set?: InputMaybe<Array<FaqItemWhereUniqueInput>>;
  update?: InputMaybe<Array<FaqItemUpdateWithWhereUniqueWithoutParentCommunityInput>>;
  updateMany?: InputMaybe<Array<FaqItemUpdateManyWithWhereWithoutParentCommunityInput>>;
  upsert?: InputMaybe<Array<FaqItemUpsertWithWhereUniqueWithoutParentCommunityInput>>;
};

export type FaqItemUpdateWithWhereUniqueWithoutCategoryInput = {
  data: FaqItemUpdateWithoutCategoryInput;
  where: FaqItemWhereUniqueInput;
};

export type FaqItemUpdateWithWhereUniqueWithoutParentCommunityInput = {
  data: FaqItemUpdateWithoutParentCommunityInput;
  where: FaqItemWhereUniqueInput;
};

export type FaqItemUpdateWithoutCategoryInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutFaqItemsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FaqItemUpdateWithoutParentCommunityInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  category?: InputMaybe<FaqCategoryUpdateOneRequiredWithoutFaqItemsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FaqItemUpsertWithWhereUniqueWithoutCategoryInput = {
  create: FaqItemCreateWithoutCategoryInput;
  update: FaqItemUpdateWithoutCategoryInput;
  where: FaqItemWhereUniqueInput;
};

export type FaqItemUpsertWithWhereUniqueWithoutParentCommunityInput = {
  create: FaqItemCreateWithoutParentCommunityInput;
  update: FaqItemUpdateWithoutParentCommunityInput;
  where: FaqItemWhereUniqueInput;
};

export type FaqItemWhereInput = {
  AND?: InputMaybe<Array<FaqItemWhereInput>>;
  NOT?: InputMaybe<Array<FaqItemWhereInput>>;
  OR?: InputMaybe<Array<FaqItemWhereInput>>;
  answer?: InputMaybe<StringFilter>;
  category?: InputMaybe<FaqCategoryWhereInput>;
  categoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  parentCommunity?: InputMaybe<CommunityWhereInput>;
  parentCommunityId?: InputMaybe<StringNullableFilter>;
  question?: InputMaybe<StringFilter>;
};

export type FaqItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type FeedCategory = {
  __typename?: 'FeedCategory';
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  items: Array<FeedItem>;
  name: Scalars['String'];
  styleOverride?: Maybe<Scalars['Json']>;
  updatedAt: Scalars['DateTime'];
};


export type FeedCategoryItemsArgs = {
  cursor?: InputMaybe<FeedItemWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type FeedCategoryCreateInput = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<FeedItemCreateNestedManyWithoutCategoriesInput>;
  name: Scalars['String'];
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FeedCategoryCreateNestedManyWithoutItemsInput = {
  connect?: InputMaybe<Array<FeedCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedCategoryCreateOrConnectWithoutItemsInput>>;
  create?: InputMaybe<Array<FeedCategoryCreateWithoutItemsInput>>;
};

export type FeedCategoryCreateOrConnectWithoutItemsInput = {
  create: FeedCategoryCreateWithoutItemsInput;
  where: FeedCategoryWhereUniqueInput;
};

export type FeedCategoryCreateWithoutItemsInput = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FeedCategoryListRelationFilter = {
  every?: InputMaybe<FeedCategoryWhereInput>;
  none?: InputMaybe<FeedCategoryWhereInput>;
  some?: InputMaybe<FeedCategoryWhereInput>;
};

export type FeedCategoryOrderByInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  styleOverride?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FeedCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<FeedCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<FeedCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<FeedCategoryScalarWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  styleOverride?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FeedCategoryUpdateInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<FeedItemUpdateManyWithoutCategoriesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedCategoryUpdateManyMutationInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedCategoryUpdateManyWithWhereWithoutItemsInput = {
  data: FeedCategoryUpdateManyMutationInput;
  where: FeedCategoryScalarWhereInput;
};

export type FeedCategoryUpdateManyWithoutItemsInput = {
  connect?: InputMaybe<Array<FeedCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedCategoryCreateOrConnectWithoutItemsInput>>;
  create?: InputMaybe<Array<FeedCategoryCreateWithoutItemsInput>>;
  delete?: InputMaybe<Array<FeedCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeedCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeedCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<FeedCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<FeedCategoryUpdateWithWhereUniqueWithoutItemsInput>>;
  updateMany?: InputMaybe<Array<FeedCategoryUpdateManyWithWhereWithoutItemsInput>>;
  upsert?: InputMaybe<Array<FeedCategoryUpsertWithWhereUniqueWithoutItemsInput>>;
};

export type FeedCategoryUpdateWithWhereUniqueWithoutItemsInput = {
  data: FeedCategoryUpdateWithoutItemsInput;
  where: FeedCategoryWhereUniqueInput;
};

export type FeedCategoryUpdateWithoutItemsInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedCategoryUpsertWithWhereUniqueWithoutItemsInput = {
  create: FeedCategoryCreateWithoutItemsInput;
  update: FeedCategoryUpdateWithoutItemsInput;
  where: FeedCategoryWhereUniqueInput;
};

export type FeedCategoryWhereInput = {
  AND?: InputMaybe<Array<FeedCategoryWhereInput>>;
  NOT?: InputMaybe<Array<FeedCategoryWhereInput>>;
  OR?: InputMaybe<Array<FeedCategoryWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  items?: InputMaybe<FeedItemListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  styleOverride?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FeedCategoryWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  author?: Maybe<Scalars['String']>;
  categories: Array<FeedCategory>;
  createdAt: Scalars['DateTime'];
  ctaButtonTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  downvoted: Array<User>;
  downvotes?: Maybe<Scalars['Int']>;
  events: Array<Event>;
  externalUrl?: Maybe<Scalars['String']>;
  headlineType?: Maybe<HeadlineType>;
  id: Scalars['String'];
  mediaPreviewUrl?: Maybe<Scalars['String']>;
  mediaUrl?: Maybe<Scalars['String']>;
  parentCommunity: Community;
  posterUrl?: Maybe<Scalars['String']>;
  publishingStatus: FeedItemPublishingStatus;
  subtitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  trailerLink?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  upvoted: Array<User>;
  upvotes?: Maybe<Scalars['Int']>;
  watchLink?: Maybe<Scalars['String']>;
};


export type FeedItemCategoriesArgs = {
  cursor?: InputMaybe<FeedCategoryWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type FeedItemDownvotedArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type FeedItemEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type FeedItemUpvotedArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type FeedItemCreateInput = {
  author?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<FeedCategoryCreateNestedManyWithoutItemsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  ctaButtonTitle?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  downvoted?: InputMaybe<UserCreateNestedManyWithoutDownvotedFeedItemsInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutFeedInput>;
  externalId?: InputMaybe<Scalars['String']>;
  externalUrl?: InputMaybe<Scalars['String']>;
  headlineType?: InputMaybe<HeadlineType>;
  id?: InputMaybe<Scalars['String']>;
  mediaPreviewUrl?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  parentCommunity: CommunityCreateNestedOneWithoutFeedItemInput;
  posterUrl?: InputMaybe<Scalars['String']>;
  publishingStatus?: InputMaybe<FeedItemPublishingStatus>;
  subtitle?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailerLink?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvoted?: InputMaybe<UserCreateNestedManyWithoutUpvotedFeedItemsInput>;
  watchLink?: InputMaybe<Scalars['String']>;
};

export type FeedItemCreateManyParentCommunityInput = {
  author?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  ctaButtonTitle?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  externalUrl?: InputMaybe<Scalars['String']>;
  headlineType?: InputMaybe<HeadlineType>;
  id?: InputMaybe<Scalars['String']>;
  mediaPreviewUrl?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  posterUrl?: InputMaybe<Scalars['String']>;
  publishingStatus?: InputMaybe<FeedItemPublishingStatus>;
  subtitle?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailerLink?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchLink?: InputMaybe<Scalars['String']>;
};

export type FeedItemCreateManyParentCommunityInputEnvelope = {
  data?: InputMaybe<Array<FeedItemCreateManyParentCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FeedItemCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedItemCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<FeedItemCreateWithoutCategoriesInput>>;
};

export type FeedItemCreateNestedManyWithoutDownvotedInput = {
  connect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedItemCreateOrConnectWithoutDownvotedInput>>;
  create?: InputMaybe<Array<FeedItemCreateWithoutDownvotedInput>>;
};

export type FeedItemCreateNestedManyWithoutEventsInput = {
  connect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedItemCreateOrConnectWithoutEventsInput>>;
  create?: InputMaybe<Array<FeedItemCreateWithoutEventsInput>>;
};

export type FeedItemCreateNestedManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedItemCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<FeedItemCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<FeedItemCreateManyParentCommunityInputEnvelope>;
};

export type FeedItemCreateNestedManyWithoutUpvotedInput = {
  connect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedItemCreateOrConnectWithoutUpvotedInput>>;
  create?: InputMaybe<Array<FeedItemCreateWithoutUpvotedInput>>;
};

export type FeedItemCreateOrConnectWithoutCategoriesInput = {
  create: FeedItemCreateWithoutCategoriesInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateOrConnectWithoutDownvotedInput = {
  create: FeedItemCreateWithoutDownvotedInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateOrConnectWithoutEventsInput = {
  create: FeedItemCreateWithoutEventsInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateOrConnectWithoutParentCommunityInput = {
  create: FeedItemCreateWithoutParentCommunityInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateOrConnectWithoutUpvotedInput = {
  create: FeedItemCreateWithoutUpvotedInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateWithoutCategoriesInput = {
  author?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  ctaButtonTitle?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  downvoted?: InputMaybe<UserCreateNestedManyWithoutDownvotedFeedItemsInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutFeedInput>;
  externalId?: InputMaybe<Scalars['String']>;
  externalUrl?: InputMaybe<Scalars['String']>;
  headlineType?: InputMaybe<HeadlineType>;
  id?: InputMaybe<Scalars['String']>;
  mediaPreviewUrl?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  parentCommunity: CommunityCreateNestedOneWithoutFeedItemInput;
  posterUrl?: InputMaybe<Scalars['String']>;
  publishingStatus?: InputMaybe<FeedItemPublishingStatus>;
  subtitle?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailerLink?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvoted?: InputMaybe<UserCreateNestedManyWithoutUpvotedFeedItemsInput>;
  watchLink?: InputMaybe<Scalars['String']>;
};

export type FeedItemCreateWithoutDownvotedInput = {
  author?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<FeedCategoryCreateNestedManyWithoutItemsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  ctaButtonTitle?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<EventCreateNestedManyWithoutFeedInput>;
  externalId?: InputMaybe<Scalars['String']>;
  externalUrl?: InputMaybe<Scalars['String']>;
  headlineType?: InputMaybe<HeadlineType>;
  id?: InputMaybe<Scalars['String']>;
  mediaPreviewUrl?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  parentCommunity: CommunityCreateNestedOneWithoutFeedItemInput;
  posterUrl?: InputMaybe<Scalars['String']>;
  publishingStatus?: InputMaybe<FeedItemPublishingStatus>;
  subtitle?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailerLink?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvoted?: InputMaybe<UserCreateNestedManyWithoutUpvotedFeedItemsInput>;
  watchLink?: InputMaybe<Scalars['String']>;
};

export type FeedItemCreateWithoutEventsInput = {
  author?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<FeedCategoryCreateNestedManyWithoutItemsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  ctaButtonTitle?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  downvoted?: InputMaybe<UserCreateNestedManyWithoutDownvotedFeedItemsInput>;
  externalId?: InputMaybe<Scalars['String']>;
  externalUrl?: InputMaybe<Scalars['String']>;
  headlineType?: InputMaybe<HeadlineType>;
  id?: InputMaybe<Scalars['String']>;
  mediaPreviewUrl?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  parentCommunity: CommunityCreateNestedOneWithoutFeedItemInput;
  posterUrl?: InputMaybe<Scalars['String']>;
  publishingStatus?: InputMaybe<FeedItemPublishingStatus>;
  subtitle?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailerLink?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvoted?: InputMaybe<UserCreateNestedManyWithoutUpvotedFeedItemsInput>;
  watchLink?: InputMaybe<Scalars['String']>;
};

export type FeedItemCreateWithoutParentCommunityInput = {
  author?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<FeedCategoryCreateNestedManyWithoutItemsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  ctaButtonTitle?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  downvoted?: InputMaybe<UserCreateNestedManyWithoutDownvotedFeedItemsInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutFeedInput>;
  externalId?: InputMaybe<Scalars['String']>;
  externalUrl?: InputMaybe<Scalars['String']>;
  headlineType?: InputMaybe<HeadlineType>;
  id?: InputMaybe<Scalars['String']>;
  mediaPreviewUrl?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  posterUrl?: InputMaybe<Scalars['String']>;
  publishingStatus?: InputMaybe<FeedItemPublishingStatus>;
  subtitle?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailerLink?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvoted?: InputMaybe<UserCreateNestedManyWithoutUpvotedFeedItemsInput>;
  watchLink?: InputMaybe<Scalars['String']>;
};

export type FeedItemCreateWithoutUpvotedInput = {
  author?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<FeedCategoryCreateNestedManyWithoutItemsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  ctaButtonTitle?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  downvoted?: InputMaybe<UserCreateNestedManyWithoutDownvotedFeedItemsInput>;
  events?: InputMaybe<EventCreateNestedManyWithoutFeedInput>;
  externalId?: InputMaybe<Scalars['String']>;
  externalUrl?: InputMaybe<Scalars['String']>;
  headlineType?: InputMaybe<HeadlineType>;
  id?: InputMaybe<Scalars['String']>;
  mediaPreviewUrl?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  parentCommunity: CommunityCreateNestedOneWithoutFeedItemInput;
  posterUrl?: InputMaybe<Scalars['String']>;
  publishingStatus?: InputMaybe<FeedItemPublishingStatus>;
  subtitle?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailerLink?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchLink?: InputMaybe<Scalars['String']>;
};

export type FeedItemListRelationFilter = {
  every?: InputMaybe<FeedItemWhereInput>;
  none?: InputMaybe<FeedItemWhereInput>;
  some?: InputMaybe<FeedItemWhereInput>;
};

export type FeedItemOrderByInput = {
  author?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  ctaButtonTitle?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  externalId?: InputMaybe<SortOrder>;
  externalUrl?: InputMaybe<SortOrder>;
  headlineType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mediaPreviewUrl?: InputMaybe<SortOrder>;
  mediaUrl?: InputMaybe<SortOrder>;
  parentCommunityId?: InputMaybe<SortOrder>;
  posterUrl?: InputMaybe<SortOrder>;
  publishingStatus?: InputMaybe<SortOrder>;
  subtitle?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailerLink?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  watchLink?: InputMaybe<SortOrder>;
};

export enum FeedItemPublishingStatus {
  Draft = 'Draft',
  Published = 'Published',
  UneditedDraft = 'UneditedDraft'
}

export type FeedItemScalarWhereInput = {
  AND?: InputMaybe<Array<FeedItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<FeedItemScalarWhereInput>>;
  OR?: InputMaybe<Array<FeedItemScalarWhereInput>>;
  author?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  ctaButtonTitle?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  externalId?: InputMaybe<StringNullableFilter>;
  externalUrl?: InputMaybe<StringNullableFilter>;
  headlineType?: InputMaybe<EnumHeadlineTypeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  mediaPreviewUrl?: InputMaybe<StringNullableFilter>;
  mediaUrl?: InputMaybe<StringNullableFilter>;
  parentCommunityId?: InputMaybe<StringFilter>;
  posterUrl?: InputMaybe<StringNullableFilter>;
  publishingStatus?: InputMaybe<EnumFeedItemPublishingStatusFilter>;
  subtitle?: InputMaybe<StringNullableFilter>;
  text?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  trailerLink?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  watchLink?: InputMaybe<StringNullableFilter>;
};

export type FeedItemUpdateInput = {
  author?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<FeedCategoryUpdateManyWithoutItemsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  ctaButtonTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  downvoted?: InputMaybe<UserUpdateManyWithoutDownvotedFeedItemsInput>;
  events?: InputMaybe<EventUpdateManyWithoutFeedInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headlineType?: InputMaybe<NullableEnumHeadlineTypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediaPreviewUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutFeedItemInput>;
  posterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publishingStatus?: InputMaybe<EnumFeedItemPublishingStatusFieldUpdateOperationsInput>;
  subtitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvoted?: InputMaybe<UserUpdateManyWithoutUpvotedFeedItemsInput>;
  watchLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedItemUpdateManyMutationInput = {
  author?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  ctaButtonTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headlineType?: InputMaybe<NullableEnumHeadlineTypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediaPreviewUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publishingStatus?: InputMaybe<EnumFeedItemPublishingStatusFieldUpdateOperationsInput>;
  subtitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedItemUpdateManyWithWhereWithoutCategoriesInput = {
  data: FeedItemUpdateManyMutationInput;
  where: FeedItemScalarWhereInput;
};

export type FeedItemUpdateManyWithWhereWithoutDownvotedInput = {
  data: FeedItemUpdateManyMutationInput;
  where: FeedItemScalarWhereInput;
};

export type FeedItemUpdateManyWithWhereWithoutEventsInput = {
  data: FeedItemUpdateManyMutationInput;
  where: FeedItemScalarWhereInput;
};

export type FeedItemUpdateManyWithWhereWithoutParentCommunityInput = {
  data: FeedItemUpdateManyMutationInput;
  where: FeedItemScalarWhereInput;
};

export type FeedItemUpdateManyWithWhereWithoutUpvotedInput = {
  data: FeedItemUpdateManyMutationInput;
  where: FeedItemScalarWhereInput;
};

export type FeedItemUpdateManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedItemCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<FeedItemCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeedItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  set?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  update?: InputMaybe<Array<FeedItemUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: InputMaybe<Array<FeedItemUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: InputMaybe<Array<FeedItemUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type FeedItemUpdateManyWithoutDownvotedInput = {
  connect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedItemCreateOrConnectWithoutDownvotedInput>>;
  create?: InputMaybe<Array<FeedItemCreateWithoutDownvotedInput>>;
  delete?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeedItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  set?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  update?: InputMaybe<Array<FeedItemUpdateWithWhereUniqueWithoutDownvotedInput>>;
  updateMany?: InputMaybe<Array<FeedItemUpdateManyWithWhereWithoutDownvotedInput>>;
  upsert?: InputMaybe<Array<FeedItemUpsertWithWhereUniqueWithoutDownvotedInput>>;
};

export type FeedItemUpdateManyWithoutEventsInput = {
  connect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedItemCreateOrConnectWithoutEventsInput>>;
  create?: InputMaybe<Array<FeedItemCreateWithoutEventsInput>>;
  delete?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeedItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  set?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  update?: InputMaybe<Array<FeedItemUpdateWithWhereUniqueWithoutEventsInput>>;
  updateMany?: InputMaybe<Array<FeedItemUpdateManyWithWhereWithoutEventsInput>>;
  upsert?: InputMaybe<Array<FeedItemUpsertWithWhereUniqueWithoutEventsInput>>;
};

export type FeedItemUpdateManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedItemCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<FeedItemCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<FeedItemCreateManyParentCommunityInputEnvelope>;
  delete?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeedItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  set?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  update?: InputMaybe<Array<FeedItemUpdateWithWhereUniqueWithoutParentCommunityInput>>;
  updateMany?: InputMaybe<Array<FeedItemUpdateManyWithWhereWithoutParentCommunityInput>>;
  upsert?: InputMaybe<Array<FeedItemUpsertWithWhereUniqueWithoutParentCommunityInput>>;
};

export type FeedItemUpdateManyWithoutUpvotedInput = {
  connect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeedItemCreateOrConnectWithoutUpvotedInput>>;
  create?: InputMaybe<Array<FeedItemCreateWithoutUpvotedInput>>;
  delete?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeedItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  set?: InputMaybe<Array<FeedItemWhereUniqueInput>>;
  update?: InputMaybe<Array<FeedItemUpdateWithWhereUniqueWithoutUpvotedInput>>;
  updateMany?: InputMaybe<Array<FeedItemUpdateManyWithWhereWithoutUpvotedInput>>;
  upsert?: InputMaybe<Array<FeedItemUpsertWithWhereUniqueWithoutUpvotedInput>>;
};

export type FeedItemUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: FeedItemUpdateWithoutCategoriesInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpdateWithWhereUniqueWithoutDownvotedInput = {
  data: FeedItemUpdateWithoutDownvotedInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpdateWithWhereUniqueWithoutEventsInput = {
  data: FeedItemUpdateWithoutEventsInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpdateWithWhereUniqueWithoutParentCommunityInput = {
  data: FeedItemUpdateWithoutParentCommunityInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpdateWithWhereUniqueWithoutUpvotedInput = {
  data: FeedItemUpdateWithoutUpvotedInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpdateWithoutCategoriesInput = {
  author?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  ctaButtonTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  downvoted?: InputMaybe<UserUpdateManyWithoutDownvotedFeedItemsInput>;
  events?: InputMaybe<EventUpdateManyWithoutFeedInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headlineType?: InputMaybe<NullableEnumHeadlineTypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediaPreviewUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutFeedItemInput>;
  posterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publishingStatus?: InputMaybe<EnumFeedItemPublishingStatusFieldUpdateOperationsInput>;
  subtitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvoted?: InputMaybe<UserUpdateManyWithoutUpvotedFeedItemsInput>;
  watchLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedItemUpdateWithoutDownvotedInput = {
  author?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<FeedCategoryUpdateManyWithoutItemsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  ctaButtonTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutFeedInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headlineType?: InputMaybe<NullableEnumHeadlineTypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediaPreviewUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutFeedItemInput>;
  posterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publishingStatus?: InputMaybe<EnumFeedItemPublishingStatusFieldUpdateOperationsInput>;
  subtitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvoted?: InputMaybe<UserUpdateManyWithoutUpvotedFeedItemsInput>;
  watchLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedItemUpdateWithoutEventsInput = {
  author?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<FeedCategoryUpdateManyWithoutItemsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  ctaButtonTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  downvoted?: InputMaybe<UserUpdateManyWithoutDownvotedFeedItemsInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headlineType?: InputMaybe<NullableEnumHeadlineTypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediaPreviewUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutFeedItemInput>;
  posterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publishingStatus?: InputMaybe<EnumFeedItemPublishingStatusFieldUpdateOperationsInput>;
  subtitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvoted?: InputMaybe<UserUpdateManyWithoutUpvotedFeedItemsInput>;
  watchLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedItemUpdateWithoutParentCommunityInput = {
  author?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<FeedCategoryUpdateManyWithoutItemsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  ctaButtonTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  downvoted?: InputMaybe<UserUpdateManyWithoutDownvotedFeedItemsInput>;
  events?: InputMaybe<EventUpdateManyWithoutFeedInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headlineType?: InputMaybe<NullableEnumHeadlineTypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediaPreviewUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publishingStatus?: InputMaybe<EnumFeedItemPublishingStatusFieldUpdateOperationsInput>;
  subtitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvoted?: InputMaybe<UserUpdateManyWithoutUpvotedFeedItemsInput>;
  watchLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedItemUpdateWithoutUpvotedInput = {
  author?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<FeedCategoryUpdateManyWithoutItemsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  ctaButtonTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  downvoted?: InputMaybe<UserUpdateManyWithoutDownvotedFeedItemsInput>;
  events?: InputMaybe<EventUpdateManyWithoutFeedInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headlineType?: InputMaybe<NullableEnumHeadlineTypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediaPreviewUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutFeedItemInput>;
  posterUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publishingStatus?: InputMaybe<EnumFeedItemPublishingStatusFieldUpdateOperationsInput>;
  subtitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailerLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FeedItemUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: FeedItemCreateWithoutCategoriesInput;
  update: FeedItemUpdateWithoutCategoriesInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpsertWithWhereUniqueWithoutDownvotedInput = {
  create: FeedItemCreateWithoutDownvotedInput;
  update: FeedItemUpdateWithoutDownvotedInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpsertWithWhereUniqueWithoutEventsInput = {
  create: FeedItemCreateWithoutEventsInput;
  update: FeedItemUpdateWithoutEventsInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpsertWithWhereUniqueWithoutParentCommunityInput = {
  create: FeedItemCreateWithoutParentCommunityInput;
  update: FeedItemUpdateWithoutParentCommunityInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpsertWithWhereUniqueWithoutUpvotedInput = {
  create: FeedItemCreateWithoutUpvotedInput;
  update: FeedItemUpdateWithoutUpvotedInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemWhereInput = {
  AND?: InputMaybe<Array<FeedItemWhereInput>>;
  NOT?: InputMaybe<Array<FeedItemWhereInput>>;
  OR?: InputMaybe<Array<FeedItemWhereInput>>;
  author?: InputMaybe<StringNullableFilter>;
  categories?: InputMaybe<FeedCategoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  ctaButtonTitle?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  downvoted?: InputMaybe<UserListRelationFilter>;
  events?: InputMaybe<EventListRelationFilter>;
  externalId?: InputMaybe<StringNullableFilter>;
  externalUrl?: InputMaybe<StringNullableFilter>;
  headlineType?: InputMaybe<EnumHeadlineTypeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  mediaPreviewUrl?: InputMaybe<StringNullableFilter>;
  mediaUrl?: InputMaybe<StringNullableFilter>;
  parentCommunity?: InputMaybe<CommunityWhereInput>;
  parentCommunityId?: InputMaybe<StringFilter>;
  posterUrl?: InputMaybe<StringNullableFilter>;
  publishingStatus?: InputMaybe<EnumFeedItemPublishingStatusFilter>;
  subtitle?: InputMaybe<StringNullableFilter>;
  text?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  trailerLink?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  upvoted?: InputMaybe<UserListRelationFilter>;
  watchLink?: InputMaybe<StringNullableFilter>;
};

export type FeedItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export enum HeadlineType {
  Picture = 'Picture',
  Video = 'Video'
}

export type Highlight = {
  __typename?: 'Highlight';
  community?: Maybe<Community>;
  communityId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  event?: Maybe<Event>;
  id: Scalars['String'];
  linkedItemId?: Maybe<Scalars['String']>;
  linkedModule?: Maybe<Module>;
  mediaType?: Maybe<HeadlineType>;
  mediaUrl?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  status: MessageHighlightStatus;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type HighlightCreateInput = {
  community?: InputMaybe<CommunityCreateNestedOneWithoutRelatedHighlightsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutRelatedHighlightsInput>;
  id?: InputMaybe<Scalars['String']>;
  linkedItemId?: InputMaybe<Scalars['String']>;
  linkedModule?: InputMaybe<Module>;
  mediaType?: InputMaybe<HeadlineType>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<HighlightType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HighlightCreateManyCommunityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  linkedItemId?: InputMaybe<Scalars['String']>;
  linkedModule?: InputMaybe<Module>;
  mediaType?: InputMaybe<HeadlineType>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<HighlightType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HighlightCreateManyCommunityInputEnvelope = {
  data?: InputMaybe<Array<HighlightCreateManyCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type HighlightCreateManyEventInput = {
  communityId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  linkedItemId?: InputMaybe<Scalars['String']>;
  linkedModule?: InputMaybe<Module>;
  mediaType?: InputMaybe<HeadlineType>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<HighlightType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HighlightCreateManyEventInputEnvelope = {
  data?: InputMaybe<Array<HighlightCreateManyEventInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type HighlightCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<HighlightCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<HighlightCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<HighlightCreateManyCommunityInputEnvelope>;
};

export type HighlightCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<HighlightCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<HighlightCreateWithoutEventInput>>;
  createMany?: InputMaybe<HighlightCreateManyEventInputEnvelope>;
};

export type HighlightCreateOrConnectWithoutCommunityInput = {
  create: HighlightCreateWithoutCommunityInput;
  where: HighlightWhereUniqueInput;
};

export type HighlightCreateOrConnectWithoutEventInput = {
  create: HighlightCreateWithoutEventInput;
  where: HighlightWhereUniqueInput;
};

export type HighlightCreateWithoutCommunityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutRelatedHighlightsInput>;
  id?: InputMaybe<Scalars['String']>;
  linkedItemId?: InputMaybe<Scalars['String']>;
  linkedModule?: InputMaybe<Module>;
  mediaType?: InputMaybe<HeadlineType>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<HighlightType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HighlightCreateWithoutEventInput = {
  community?: InputMaybe<CommunityCreateNestedOneWithoutRelatedHighlightsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  linkedItemId?: InputMaybe<Scalars['String']>;
  linkedModule?: InputMaybe<Module>;
  mediaType?: InputMaybe<HeadlineType>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<HighlightType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HighlightListRelationFilter = {
  every?: InputMaybe<HighlightWhereInput>;
  none?: InputMaybe<HighlightWhereInput>;
  some?: InputMaybe<HighlightWhereInput>;
};

export type HighlightOrderByInput = {
  communityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linkedItemId?: InputMaybe<SortOrder>;
  linkedModule?: InputMaybe<SortOrder>;
  mediaType?: InputMaybe<SortOrder>;
  mediaUrl?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HighlightScalarWhereInput = {
  AND?: InputMaybe<Array<HighlightScalarWhereInput>>;
  NOT?: InputMaybe<Array<HighlightScalarWhereInput>>;
  OR?: InputMaybe<Array<HighlightScalarWhereInput>>;
  communityId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  linkedItemId?: InputMaybe<StringNullableFilter>;
  linkedModule?: InputMaybe<EnumModuleNullableFilter>;
  mediaType?: InputMaybe<EnumHeadlineTypeNullableFilter>;
  mediaUrl?: InputMaybe<StringNullableFilter>;
  message?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumMessageHighlightStatusFilter>;
  type?: InputMaybe<EnumHighlightTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum HighlightType {
  EventCreated = 'EventCreated',
  EventUpdated = 'EventUpdated',
  FeedItemCreated = 'FeedItemCreated',
  Generic = 'Generic',
  ProductCreated = 'ProductCreated',
  ProductOnlyHasFewLeft = 'ProductOnlyHasFewLeft',
  ProductSoldOut = 'ProductSoldOut'
}

export type HighlightUpdateInput = {
  community?: InputMaybe<CommunityUpdateOneWithoutRelatedHighlightsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutRelatedHighlightsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedItemId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedModule?: InputMaybe<NullableEnumModuleFieldUpdateOperationsInput>;
  mediaType?: InputMaybe<NullableEnumHeadlineTypeFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageHighlightStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumHighlightTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HighlightUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedItemId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedModule?: InputMaybe<NullableEnumModuleFieldUpdateOperationsInput>;
  mediaType?: InputMaybe<NullableEnumHeadlineTypeFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageHighlightStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumHighlightTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HighlightUpdateManyWithWhereWithoutCommunityInput = {
  data: HighlightUpdateManyMutationInput;
  where: HighlightScalarWhereInput;
};

export type HighlightUpdateManyWithWhereWithoutEventInput = {
  data: HighlightUpdateManyMutationInput;
  where: HighlightScalarWhereInput;
};

export type HighlightUpdateManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<HighlightCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<HighlightCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<HighlightCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<HighlightScalarWhereInput>>;
  disconnect?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  set?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  update?: InputMaybe<Array<HighlightUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<HighlightUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<HighlightUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type HighlightUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<HighlightCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<HighlightCreateWithoutEventInput>>;
  createMany?: InputMaybe<HighlightCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<HighlightScalarWhereInput>>;
  disconnect?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  set?: InputMaybe<Array<HighlightWhereUniqueInput>>;
  update?: InputMaybe<Array<HighlightUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<HighlightUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<HighlightUpsertWithWhereUniqueWithoutEventInput>>;
};

export type HighlightUpdateWithWhereUniqueWithoutCommunityInput = {
  data: HighlightUpdateWithoutCommunityInput;
  where: HighlightWhereUniqueInput;
};

export type HighlightUpdateWithWhereUniqueWithoutEventInput = {
  data: HighlightUpdateWithoutEventInput;
  where: HighlightWhereUniqueInput;
};

export type HighlightUpdateWithoutCommunityInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutRelatedHighlightsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedItemId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedModule?: InputMaybe<NullableEnumModuleFieldUpdateOperationsInput>;
  mediaType?: InputMaybe<NullableEnumHeadlineTypeFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageHighlightStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumHighlightTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HighlightUpdateWithoutEventInput = {
  community?: InputMaybe<CommunityUpdateOneWithoutRelatedHighlightsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedItemId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedModule?: InputMaybe<NullableEnumModuleFieldUpdateOperationsInput>;
  mediaType?: InputMaybe<NullableEnumHeadlineTypeFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageHighlightStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumHighlightTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type HighlightUpsertWithWhereUniqueWithoutCommunityInput = {
  create: HighlightCreateWithoutCommunityInput;
  update: HighlightUpdateWithoutCommunityInput;
  where: HighlightWhereUniqueInput;
};

export type HighlightUpsertWithWhereUniqueWithoutEventInput = {
  create: HighlightCreateWithoutEventInput;
  update: HighlightUpdateWithoutEventInput;
  where: HighlightWhereUniqueInput;
};

export type HighlightWhereInput = {
  AND?: InputMaybe<Array<HighlightWhereInput>>;
  NOT?: InputMaybe<Array<HighlightWhereInput>>;
  OR?: InputMaybe<Array<HighlightWhereInput>>;
  community?: InputMaybe<CommunityWhereInput>;
  communityId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventWhereInput>;
  eventId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  linkedItemId?: InputMaybe<StringNullableFilter>;
  linkedModule?: InputMaybe<EnumModuleNullableFilter>;
  mediaType?: InputMaybe<EnumHeadlineTypeNullableFilter>;
  mediaUrl?: InputMaybe<StringNullableFilter>;
  message?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumMessageHighlightStatusFilter>;
  type?: InputMaybe<EnumHighlightTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HighlightWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type InterestTag = {
  __typename?: 'InterestTag';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  relatedCommunities: Array<Community>;
  relatedDiscoverCards: Array<DiscoverCard>;
};


export type InterestTagRelatedCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type InterestTagRelatedDiscoverCardsArgs = {
  cursor?: InputMaybe<DiscoverCardWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type InterestTagCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedInterestTagsInput>;
  relatedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutInterestTagsInput>;
};

export type InterestTagCreateNestedManyWithoutRelatedCommunitiesInput = {
  connect?: InputMaybe<Array<InterestTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InterestTagCreateOrConnectWithoutRelatedCommunitiesInput>>;
  create?: InputMaybe<Array<InterestTagCreateWithoutRelatedCommunitiesInput>>;
};

export type InterestTagCreateNestedManyWithoutRelatedDiscoverCardsInput = {
  connect?: InputMaybe<Array<InterestTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InterestTagCreateOrConnectWithoutRelatedDiscoverCardsInput>>;
  create?: InputMaybe<Array<InterestTagCreateWithoutRelatedDiscoverCardsInput>>;
};

export type InterestTagCreateOrConnectWithoutRelatedCommunitiesInput = {
  create: InterestTagCreateWithoutRelatedCommunitiesInput;
  where: InterestTagWhereUniqueInput;
};

export type InterestTagCreateOrConnectWithoutRelatedDiscoverCardsInput = {
  create: InterestTagCreateWithoutRelatedDiscoverCardsInput;
  where: InterestTagWhereUniqueInput;
};

export type InterestTagCreateWithoutRelatedCommunitiesInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  relatedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutInterestTagsInput>;
};

export type InterestTagCreateWithoutRelatedDiscoverCardsInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  relatedCommunities?: InputMaybe<CommunityCreateNestedManyWithoutRelatedInterestTagsInput>;
};

export type InterestTagListRelationFilter = {
  every?: InputMaybe<InterestTagWhereInput>;
  none?: InputMaybe<InterestTagWhereInput>;
  some?: InputMaybe<InterestTagWhereInput>;
};

export type InterestTagOrderByInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type InterestTagScalarWhereInput = {
  AND?: InputMaybe<Array<InterestTagScalarWhereInput>>;
  NOT?: InputMaybe<Array<InterestTagScalarWhereInput>>;
  OR?: InputMaybe<Array<InterestTagScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type InterestTagUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedInterestTagsInput>;
  relatedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutInterestTagsInput>;
};

export type InterestTagUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type InterestTagUpdateManyWithWhereWithoutRelatedCommunitiesInput = {
  data: InterestTagUpdateManyMutationInput;
  where: InterestTagScalarWhereInput;
};

export type InterestTagUpdateManyWithWhereWithoutRelatedDiscoverCardsInput = {
  data: InterestTagUpdateManyMutationInput;
  where: InterestTagScalarWhereInput;
};

export type InterestTagUpdateManyWithoutRelatedCommunitiesInput = {
  connect?: InputMaybe<Array<InterestTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InterestTagCreateOrConnectWithoutRelatedCommunitiesInput>>;
  create?: InputMaybe<Array<InterestTagCreateWithoutRelatedCommunitiesInput>>;
  delete?: InputMaybe<Array<InterestTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InterestTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InterestTagWhereUniqueInput>>;
  set?: InputMaybe<Array<InterestTagWhereUniqueInput>>;
  update?: InputMaybe<Array<InterestTagUpdateWithWhereUniqueWithoutRelatedCommunitiesInput>>;
  updateMany?: InputMaybe<Array<InterestTagUpdateManyWithWhereWithoutRelatedCommunitiesInput>>;
  upsert?: InputMaybe<Array<InterestTagUpsertWithWhereUniqueWithoutRelatedCommunitiesInput>>;
};

export type InterestTagUpdateManyWithoutRelatedDiscoverCardsInput = {
  connect?: InputMaybe<Array<InterestTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InterestTagCreateOrConnectWithoutRelatedDiscoverCardsInput>>;
  create?: InputMaybe<Array<InterestTagCreateWithoutRelatedDiscoverCardsInput>>;
  delete?: InputMaybe<Array<InterestTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InterestTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InterestTagWhereUniqueInput>>;
  set?: InputMaybe<Array<InterestTagWhereUniqueInput>>;
  update?: InputMaybe<Array<InterestTagUpdateWithWhereUniqueWithoutRelatedDiscoverCardsInput>>;
  updateMany?: InputMaybe<Array<InterestTagUpdateManyWithWhereWithoutRelatedDiscoverCardsInput>>;
  upsert?: InputMaybe<Array<InterestTagUpsertWithWhereUniqueWithoutRelatedDiscoverCardsInput>>;
};

export type InterestTagUpdateWithWhereUniqueWithoutRelatedCommunitiesInput = {
  data: InterestTagUpdateWithoutRelatedCommunitiesInput;
  where: InterestTagWhereUniqueInput;
};

export type InterestTagUpdateWithWhereUniqueWithoutRelatedDiscoverCardsInput = {
  data: InterestTagUpdateWithoutRelatedDiscoverCardsInput;
  where: InterestTagWhereUniqueInput;
};

export type InterestTagUpdateWithoutRelatedCommunitiesInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  relatedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutInterestTagsInput>;
};

export type InterestTagUpdateWithoutRelatedDiscoverCardsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  relatedCommunities?: InputMaybe<CommunityUpdateManyWithoutRelatedInterestTagsInput>;
};

export type InterestTagUpsertWithWhereUniqueWithoutRelatedCommunitiesInput = {
  create: InterestTagCreateWithoutRelatedCommunitiesInput;
  update: InterestTagUpdateWithoutRelatedCommunitiesInput;
  where: InterestTagWhereUniqueInput;
};

export type InterestTagUpsertWithWhereUniqueWithoutRelatedDiscoverCardsInput = {
  create: InterestTagCreateWithoutRelatedDiscoverCardsInput;
  update: InterestTagUpdateWithoutRelatedDiscoverCardsInput;
  where: InterestTagWhereUniqueInput;
};

export type InterestTagWhereInput = {
  AND?: InputMaybe<Array<InterestTagWhereInput>>;
  NOT?: InputMaybe<Array<InterestTagWhereInput>>;
  OR?: InputMaybe<Array<InterestTagWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  relatedCommunities?: InputMaybe<CommunityListRelationFilter>;
  relatedDiscoverCards?: InputMaybe<DiscoverCardListRelationFilter>;
};

export type InterestTagWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type InventoryReturnType = {
  __typename?: 'InventoryReturnType';
  active?: Maybe<Array<Maybe<Purchase>>>;
  expired?: Maybe<Array<Maybe<Purchase>>>;
};

export type InventorySendInvite = {
  __typename?: 'InventorySendInvite';
  errors?: Maybe<Array<Maybe<TranslatableError>>>;
  success: Scalars['Boolean'];
};

export type InviteCode = {
  __typename?: 'InviteCode';
  additionalConfiguration?: Maybe<Scalars['Json']>;
  claimedAt?: Maybe<Scalars['DateTime']>;
  claimer?: Maybe<User>;
  claimerId?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  community: Community;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['String']>;
  reservedFor?: Maybe<Scalars['String']>;
  type: InviteCodeType;
  updatedAt: Scalars['DateTime'];
};

export type InviteCodeCreateInput = {
  additionalConfiguration?: InputMaybe<Scalars['Json']>;
  claimedAt?: InputMaybe<Scalars['DateTime']>;
  claimer?: InputMaybe<UserCreateNestedOneWithoutClaimedInviteCodeInput>;
  code: Scalars['String'];
  community: CommunityCreateNestedOneWithoutPersonalizedInviteCodesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<UserCreateNestedOneWithoutOwnedInviteCodesInput>;
  reservedFor?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<InviteCodeType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type InviteCodeCreateManyClaimerInput = {
  additionalConfiguration?: InputMaybe<Scalars['Json']>;
  claimedAt?: InputMaybe<Scalars['DateTime']>;
  code: Scalars['String'];
  communityId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['String']>;
  reservedFor?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<InviteCodeType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type InviteCodeCreateManyClaimerInputEnvelope = {
  data?: InputMaybe<Array<InviteCodeCreateManyClaimerInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InviteCodeCreateManyCommunityInput = {
  additionalConfiguration?: InputMaybe<Scalars['Json']>;
  claimedAt?: InputMaybe<Scalars['DateTime']>;
  claimerId?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['String']>;
  reservedFor?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<InviteCodeType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type InviteCodeCreateManyCommunityInputEnvelope = {
  data?: InputMaybe<Array<InviteCodeCreateManyCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InviteCodeCreateManyOwnerInput = {
  additionalConfiguration?: InputMaybe<Scalars['Json']>;
  claimedAt?: InputMaybe<Scalars['DateTime']>;
  claimerId?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
  communityId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  reservedFor?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<InviteCodeType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type InviteCodeCreateManyOwnerInputEnvelope = {
  data?: InputMaybe<Array<InviteCodeCreateManyOwnerInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InviteCodeCreateNestedManyWithoutClaimerInput = {
  connect?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InviteCodeCreateOrConnectWithoutClaimerInput>>;
  create?: InputMaybe<Array<InviteCodeCreateWithoutClaimerInput>>;
  createMany?: InputMaybe<InviteCodeCreateManyClaimerInputEnvelope>;
};

export type InviteCodeCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InviteCodeCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<InviteCodeCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<InviteCodeCreateManyCommunityInputEnvelope>;
};

export type InviteCodeCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InviteCodeCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<InviteCodeCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<InviteCodeCreateManyOwnerInputEnvelope>;
};

export type InviteCodeCreateOrConnectWithoutClaimerInput = {
  create: InviteCodeCreateWithoutClaimerInput;
  where: InviteCodeWhereUniqueInput;
};

export type InviteCodeCreateOrConnectWithoutCommunityInput = {
  create: InviteCodeCreateWithoutCommunityInput;
  where: InviteCodeWhereUniqueInput;
};

export type InviteCodeCreateOrConnectWithoutOwnerInput = {
  create: InviteCodeCreateWithoutOwnerInput;
  where: InviteCodeWhereUniqueInput;
};

export type InviteCodeCreateWithoutClaimerInput = {
  additionalConfiguration?: InputMaybe<Scalars['Json']>;
  claimedAt?: InputMaybe<Scalars['DateTime']>;
  code: Scalars['String'];
  community: CommunityCreateNestedOneWithoutPersonalizedInviteCodesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<UserCreateNestedOneWithoutOwnedInviteCodesInput>;
  reservedFor?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<InviteCodeType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type InviteCodeCreateWithoutCommunityInput = {
  additionalConfiguration?: InputMaybe<Scalars['Json']>;
  claimedAt?: InputMaybe<Scalars['DateTime']>;
  claimer?: InputMaybe<UserCreateNestedOneWithoutClaimedInviteCodeInput>;
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<UserCreateNestedOneWithoutOwnedInviteCodesInput>;
  reservedFor?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<InviteCodeType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type InviteCodeCreateWithoutOwnerInput = {
  additionalConfiguration?: InputMaybe<Scalars['Json']>;
  claimedAt?: InputMaybe<Scalars['DateTime']>;
  claimer?: InputMaybe<UserCreateNestedOneWithoutClaimedInviteCodeInput>;
  code: Scalars['String'];
  community: CommunityCreateNestedOneWithoutPersonalizedInviteCodesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  reservedFor?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<InviteCodeType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type InviteCodeListRelationFilter = {
  every?: InputMaybe<InviteCodeWhereInput>;
  none?: InputMaybe<InviteCodeWhereInput>;
  some?: InputMaybe<InviteCodeWhereInput>;
};

export type InviteCodeOrderByInput = {
  additionalConfiguration?: InputMaybe<SortOrder>;
  claimedAt?: InputMaybe<SortOrder>;
  claimerId?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  communityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  reservedFor?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type InviteCodeScalarWhereInput = {
  AND?: InputMaybe<Array<InviteCodeScalarWhereInput>>;
  NOT?: InputMaybe<Array<InviteCodeScalarWhereInput>>;
  OR?: InputMaybe<Array<InviteCodeScalarWhereInput>>;
  additionalConfiguration?: InputMaybe<JsonNullableFilter>;
  claimedAt?: InputMaybe<DateTimeNullableFilter>;
  claimerId?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<StringFilter>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringNullableFilter>;
  reservedFor?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumInviteCodeTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum InviteCodeType {
  Invalid = 'Invalid',
  Permanent = 'Permanent',
  Personalized = 'Personalized'
}

export type InviteCodeUpdateInput = {
  additionalConfiguration?: InputMaybe<Scalars['Json']>;
  claimedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  claimer?: InputMaybe<UserUpdateOneWithoutClaimedInviteCodeInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutPersonalizedInviteCodesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneWithoutOwnedInviteCodesInput>;
  reservedFor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumInviteCodeTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InviteCodeUpdateManyMutationInput = {
  additionalConfiguration?: InputMaybe<Scalars['Json']>;
  claimedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  reservedFor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumInviteCodeTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InviteCodeUpdateManyWithWhereWithoutClaimerInput = {
  data: InviteCodeUpdateManyMutationInput;
  where: InviteCodeScalarWhereInput;
};

export type InviteCodeUpdateManyWithWhereWithoutCommunityInput = {
  data: InviteCodeUpdateManyMutationInput;
  where: InviteCodeScalarWhereInput;
};

export type InviteCodeUpdateManyWithWhereWithoutOwnerInput = {
  data: InviteCodeUpdateManyMutationInput;
  where: InviteCodeScalarWhereInput;
};

export type InviteCodeUpdateManyWithoutClaimerInput = {
  connect?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InviteCodeCreateOrConnectWithoutClaimerInput>>;
  create?: InputMaybe<Array<InviteCodeCreateWithoutClaimerInput>>;
  createMany?: InputMaybe<InviteCodeCreateManyClaimerInputEnvelope>;
  delete?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InviteCodeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  set?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  update?: InputMaybe<Array<InviteCodeUpdateWithWhereUniqueWithoutClaimerInput>>;
  updateMany?: InputMaybe<Array<InviteCodeUpdateManyWithWhereWithoutClaimerInput>>;
  upsert?: InputMaybe<Array<InviteCodeUpsertWithWhereUniqueWithoutClaimerInput>>;
};

export type InviteCodeUpdateManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InviteCodeCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<InviteCodeCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<InviteCodeCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InviteCodeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  set?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  update?: InputMaybe<Array<InviteCodeUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<InviteCodeUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<InviteCodeUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type InviteCodeUpdateManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InviteCodeCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<InviteCodeCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<InviteCodeCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InviteCodeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  set?: InputMaybe<Array<InviteCodeWhereUniqueInput>>;
  update?: InputMaybe<Array<InviteCodeUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: InputMaybe<Array<InviteCodeUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: InputMaybe<Array<InviteCodeUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type InviteCodeUpdateWithWhereUniqueWithoutClaimerInput = {
  data: InviteCodeUpdateWithoutClaimerInput;
  where: InviteCodeWhereUniqueInput;
};

export type InviteCodeUpdateWithWhereUniqueWithoutCommunityInput = {
  data: InviteCodeUpdateWithoutCommunityInput;
  where: InviteCodeWhereUniqueInput;
};

export type InviteCodeUpdateWithWhereUniqueWithoutOwnerInput = {
  data: InviteCodeUpdateWithoutOwnerInput;
  where: InviteCodeWhereUniqueInput;
};

export type InviteCodeUpdateWithoutClaimerInput = {
  additionalConfiguration?: InputMaybe<Scalars['Json']>;
  claimedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutPersonalizedInviteCodesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneWithoutOwnedInviteCodesInput>;
  reservedFor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumInviteCodeTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InviteCodeUpdateWithoutCommunityInput = {
  additionalConfiguration?: InputMaybe<Scalars['Json']>;
  claimedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  claimer?: InputMaybe<UserUpdateOneWithoutClaimedInviteCodeInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneWithoutOwnedInviteCodesInput>;
  reservedFor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumInviteCodeTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InviteCodeUpdateWithoutOwnerInput = {
  additionalConfiguration?: InputMaybe<Scalars['Json']>;
  claimedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  claimer?: InputMaybe<UserUpdateOneWithoutClaimedInviteCodeInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutPersonalizedInviteCodesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  reservedFor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumInviteCodeTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InviteCodeUpsertWithWhereUniqueWithoutClaimerInput = {
  create: InviteCodeCreateWithoutClaimerInput;
  update: InviteCodeUpdateWithoutClaimerInput;
  where: InviteCodeWhereUniqueInput;
};

export type InviteCodeUpsertWithWhereUniqueWithoutCommunityInput = {
  create: InviteCodeCreateWithoutCommunityInput;
  update: InviteCodeUpdateWithoutCommunityInput;
  where: InviteCodeWhereUniqueInput;
};

export type InviteCodeUpsertWithWhereUniqueWithoutOwnerInput = {
  create: InviteCodeCreateWithoutOwnerInput;
  update: InviteCodeUpdateWithoutOwnerInput;
  where: InviteCodeWhereUniqueInput;
};

export type InviteCodeWhereInput = {
  AND?: InputMaybe<Array<InviteCodeWhereInput>>;
  NOT?: InputMaybe<Array<InviteCodeWhereInput>>;
  OR?: InputMaybe<Array<InviteCodeWhereInput>>;
  additionalConfiguration?: InputMaybe<JsonNullableFilter>;
  claimedAt?: InputMaybe<DateTimeNullableFilter>;
  claimer?: InputMaybe<UserWhereInput>;
  claimerId?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<StringFilter>;
  community?: InputMaybe<CommunityWhereInput>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserWhereInput>;
  ownerId?: InputMaybe<StringNullableFilter>;
  reservedFor?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumInviteCodeTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type InviteCodeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type JoinCommunityReturnType = {
  __typename?: 'JoinCommunityReturnType';
  communities?: Maybe<Array<Community>>;
  communityToJoin?: Maybe<Community>;
  missingInfo?: Maybe<Array<Maybe<UserInfoField>>>;
};

export type JsonNullableFilter = {
  equals?: InputMaybe<Scalars['Json']>;
  not?: InputMaybe<Scalars['Json']>;
};

export type MassMessage = {
  __typename?: 'MassMessage';
  actionDeepLink: Scalars['String'];
  chunkInterval: Scalars['Int'];
  chunkSize: Scalars['Int'];
  community: Community;
  createdAt: Scalars['DateTime'];
  event?: Maybe<Event>;
  id: Scalars['String'];
  linkedItemId?: Maybe<Scalars['String']>;
  linkedModule?: Maybe<Module>;
  message: Scalars['String'];
  name: Scalars['String'];
  onesignalIds: Array<Scalars['String']>;
  onesignalUrls: Array<Scalars['String']>;
  rejectionReason?: Maybe<Scalars['String']>;
  segment?: Maybe<MassMessageSegment>;
  sendAt: Scalars['DateTime'];
  status: MassMessageStatus;
  talksMessageType?: Maybe<TalksMessageType>;
  title: Scalars['String'];
  totalClicks: Scalars['Int'];
  totalPushIds: Scalars['Int'];
  totalReceivers: Scalars['Int'];
  totalUsers: Scalars['Int'];
  type: MassMessageType;
  updatedAt: Scalars['DateTime'];
};

export type MassMessageCreateInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  chunkInterval?: InputMaybe<Scalars['Int']>;
  chunkSize?: InputMaybe<Scalars['Int']>;
  community: CommunityCreateNestedOneWithoutRelatedMasssMessagesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutRelatedMassMessagesInput>;
  id?: InputMaybe<Scalars['String']>;
  linkedItemId?: InputMaybe<Scalars['String']>;
  linkedModule?: InputMaybe<Module>;
  message: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  onesignalIds?: InputMaybe<MassMessageCreateonesignalIdsInput>;
  onesignalUrls?: InputMaybe<MassMessageCreateonesignalUrlsInput>;
  rejectionReason?: InputMaybe<Scalars['String']>;
  segment?: InputMaybe<MassMessageSegment>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<MassMessageStatus>;
  talksMessageType?: InputMaybe<TalksMessageType>;
  title?: InputMaybe<Scalars['String']>;
  totalClicks?: InputMaybe<Scalars['Int']>;
  totalPushIds?: InputMaybe<Scalars['Int']>;
  totalReceivers?: InputMaybe<Scalars['Int']>;
  totalUsers?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<MassMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MassMessageCreateManyCommunityInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  chunkInterval?: InputMaybe<Scalars['Int']>;
  chunkSize?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  linkedItemId?: InputMaybe<Scalars['String']>;
  linkedModule?: InputMaybe<Module>;
  message: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  onesignalIds?: InputMaybe<MassMessageCreateManyonesignalIdsInput>;
  onesignalUrls?: InputMaybe<MassMessageCreateManyonesignalUrlsInput>;
  rejectionReason?: InputMaybe<Scalars['String']>;
  segment?: InputMaybe<MassMessageSegment>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<MassMessageStatus>;
  talksMessageType?: InputMaybe<TalksMessageType>;
  title?: InputMaybe<Scalars['String']>;
  totalClicks?: InputMaybe<Scalars['Int']>;
  totalPushIds?: InputMaybe<Scalars['Int']>;
  totalReceivers?: InputMaybe<Scalars['Int']>;
  totalUsers?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<MassMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MassMessageCreateManyCommunityInputEnvelope = {
  data?: InputMaybe<Array<MassMessageCreateManyCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MassMessageCreateManyEventInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  chunkInterval?: InputMaybe<Scalars['Int']>;
  chunkSize?: InputMaybe<Scalars['Int']>;
  communityId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  linkedItemId?: InputMaybe<Scalars['String']>;
  linkedModule?: InputMaybe<Module>;
  message: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  onesignalIds?: InputMaybe<MassMessageCreateManyonesignalIdsInput>;
  onesignalUrls?: InputMaybe<MassMessageCreateManyonesignalUrlsInput>;
  rejectionReason?: InputMaybe<Scalars['String']>;
  segment?: InputMaybe<MassMessageSegment>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<MassMessageStatus>;
  talksMessageType?: InputMaybe<TalksMessageType>;
  title?: InputMaybe<Scalars['String']>;
  totalClicks?: InputMaybe<Scalars['Int']>;
  totalPushIds?: InputMaybe<Scalars['Int']>;
  totalReceivers?: InputMaybe<Scalars['Int']>;
  totalUsers?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<MassMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MassMessageCreateManyEventInputEnvelope = {
  data?: InputMaybe<Array<MassMessageCreateManyEventInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MassMessageCreateManyonesignalIdsInput = {
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type MassMessageCreateManyonesignalUrlsInput = {
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type MassMessageCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<MassMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MassMessageCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<MassMessageCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<MassMessageCreateManyCommunityInputEnvelope>;
};

export type MassMessageCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<MassMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MassMessageCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<MassMessageCreateWithoutEventInput>>;
  createMany?: InputMaybe<MassMessageCreateManyEventInputEnvelope>;
};

export type MassMessageCreateOrConnectWithoutCommunityInput = {
  create: MassMessageCreateWithoutCommunityInput;
  where: MassMessageWhereUniqueInput;
};

export type MassMessageCreateOrConnectWithoutEventInput = {
  create: MassMessageCreateWithoutEventInput;
  where: MassMessageWhereUniqueInput;
};

export type MassMessageCreateWithoutCommunityInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  chunkInterval?: InputMaybe<Scalars['Int']>;
  chunkSize?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutRelatedMassMessagesInput>;
  id?: InputMaybe<Scalars['String']>;
  linkedItemId?: InputMaybe<Scalars['String']>;
  linkedModule?: InputMaybe<Module>;
  message: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  onesignalIds?: InputMaybe<MassMessageCreateonesignalIdsInput>;
  onesignalUrls?: InputMaybe<MassMessageCreateonesignalUrlsInput>;
  rejectionReason?: InputMaybe<Scalars['String']>;
  segment?: InputMaybe<MassMessageSegment>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<MassMessageStatus>;
  talksMessageType?: InputMaybe<TalksMessageType>;
  title?: InputMaybe<Scalars['String']>;
  totalClicks?: InputMaybe<Scalars['Int']>;
  totalPushIds?: InputMaybe<Scalars['Int']>;
  totalReceivers?: InputMaybe<Scalars['Int']>;
  totalUsers?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<MassMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MassMessageCreateWithoutEventInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  chunkInterval?: InputMaybe<Scalars['Int']>;
  chunkSize?: InputMaybe<Scalars['Int']>;
  community: CommunityCreateNestedOneWithoutRelatedMasssMessagesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  linkedItemId?: InputMaybe<Scalars['String']>;
  linkedModule?: InputMaybe<Module>;
  message: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  onesignalIds?: InputMaybe<MassMessageCreateonesignalIdsInput>;
  onesignalUrls?: InputMaybe<MassMessageCreateonesignalUrlsInput>;
  rejectionReason?: InputMaybe<Scalars['String']>;
  segment?: InputMaybe<MassMessageSegment>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<MassMessageStatus>;
  talksMessageType?: InputMaybe<TalksMessageType>;
  title?: InputMaybe<Scalars['String']>;
  totalClicks?: InputMaybe<Scalars['Int']>;
  totalPushIds?: InputMaybe<Scalars['Int']>;
  totalReceivers?: InputMaybe<Scalars['Int']>;
  totalUsers?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<MassMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MassMessageCreateonesignalIdsInput = {
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type MassMessageCreateonesignalUrlsInput = {
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type MassMessageListRelationFilter = {
  every?: InputMaybe<MassMessageWhereInput>;
  none?: InputMaybe<MassMessageWhereInput>;
  some?: InputMaybe<MassMessageWhereInput>;
};

export type MassMessageOrderByInput = {
  actionDeepLink?: InputMaybe<SortOrder>;
  chunkInterval?: InputMaybe<SortOrder>;
  chunkSize?: InputMaybe<SortOrder>;
  communityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  linkedItemId?: InputMaybe<SortOrder>;
  linkedModule?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  onesignalIds?: InputMaybe<SortOrder>;
  onesignalUrls?: InputMaybe<SortOrder>;
  rejectionReason?: InputMaybe<SortOrder>;
  segment?: InputMaybe<SortOrder>;
  sendAt?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  talksMessageType?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  totalClicks?: InputMaybe<SortOrder>;
  totalPushIds?: InputMaybe<SortOrder>;
  totalReceivers?: InputMaybe<SortOrder>;
  totalUsers?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MassMessageScalarWhereInput = {
  AND?: InputMaybe<Array<MassMessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<MassMessageScalarWhereInput>>;
  OR?: InputMaybe<Array<MassMessageScalarWhereInput>>;
  actionDeepLink?: InputMaybe<StringFilter>;
  chunkInterval?: InputMaybe<IntFilter>;
  chunkSize?: InputMaybe<IntFilter>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  linkedItemId?: InputMaybe<StringNullableFilter>;
  linkedModule?: InputMaybe<EnumModuleNullableFilter>;
  message?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  onesignalIds?: InputMaybe<StringNullableListFilter>;
  onesignalUrls?: InputMaybe<StringNullableListFilter>;
  rejectionReason?: InputMaybe<StringNullableFilter>;
  segment?: InputMaybe<EnumMassMessageSegmentNullableFilter>;
  sendAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumMassMessageStatusFilter>;
  talksMessageType?: InputMaybe<EnumTalksMessageTypeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  totalClicks?: InputMaybe<IntFilter>;
  totalPushIds?: InputMaybe<IntFilter>;
  totalReceivers?: InputMaybe<IntFilter>;
  totalUsers?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumMassMessageTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum MassMessageSegment {
  CommunityMembers = 'CommunityMembers',
  EventCheckedIn = 'EventCheckedIn',
  EventInvited = 'EventInvited',
  EventInvitedNoTicket = 'EventInvitedNoTicket',
  EventMultipleTickets = 'EventMultipleTickets',
  EventRegistered = 'EventRegistered',
  EventRegisteredNoTicket = 'EventRegisteredNoTicket',
  EventTicketed = 'EventTicketed'
}

export enum MassMessageStatus {
  Draft = 'Draft',
  FailedScheduling = 'FailedScheduling',
  PendingScheduling = 'PendingScheduling',
  Rejected = 'Rejected',
  Scheduled = 'Scheduled',
  Sent = 'Sent',
  UneditedDraft = 'UneditedDraft',
  WaitingForApproval = 'WaitingForApproval'
}

export enum MassMessageType {
  LocationDropped = 'LocationDropped',
  Manual = 'Manual'
}

export type MassMessageUpdateInput = {
  actionDeepLink?: InputMaybe<StringFieldUpdateOperationsInput>;
  chunkInterval?: InputMaybe<IntFieldUpdateOperationsInput>;
  chunkSize?: InputMaybe<IntFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutRelatedMasssMessagesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutRelatedMassMessagesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedItemId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedModule?: InputMaybe<NullableEnumModuleFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  onesignalIds?: InputMaybe<MassMessageUpdateonesignalIdsInput>;
  onesignalUrls?: InputMaybe<MassMessageUpdateonesignalUrlsInput>;
  rejectionReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  segment?: InputMaybe<NullableEnumMassMessageSegmentFieldUpdateOperationsInput>;
  sendAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMassMessageStatusFieldUpdateOperationsInput>;
  talksMessageType?: InputMaybe<NullableEnumTalksMessageTypeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  totalClicks?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPushIds?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalReceivers?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalUsers?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumMassMessageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MassMessageUpdateManyMutationInput = {
  actionDeepLink?: InputMaybe<StringFieldUpdateOperationsInput>;
  chunkInterval?: InputMaybe<IntFieldUpdateOperationsInput>;
  chunkSize?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedItemId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedModule?: InputMaybe<NullableEnumModuleFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  onesignalIds?: InputMaybe<MassMessageUpdateonesignalIdsInput>;
  onesignalUrls?: InputMaybe<MassMessageUpdateonesignalUrlsInput>;
  rejectionReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  segment?: InputMaybe<NullableEnumMassMessageSegmentFieldUpdateOperationsInput>;
  sendAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMassMessageStatusFieldUpdateOperationsInput>;
  talksMessageType?: InputMaybe<NullableEnumTalksMessageTypeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  totalClicks?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPushIds?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalReceivers?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalUsers?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumMassMessageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MassMessageUpdateManyWithWhereWithoutCommunityInput = {
  data: MassMessageUpdateManyMutationInput;
  where: MassMessageScalarWhereInput;
};

export type MassMessageUpdateManyWithWhereWithoutEventInput = {
  data: MassMessageUpdateManyMutationInput;
  where: MassMessageScalarWhereInput;
};

export type MassMessageUpdateManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<MassMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MassMessageCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<MassMessageCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<MassMessageCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<MassMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MassMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MassMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MassMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MassMessageUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<MassMessageUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<MassMessageUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type MassMessageUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<MassMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MassMessageCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<MassMessageCreateWithoutEventInput>>;
  createMany?: InputMaybe<MassMessageCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<MassMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MassMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MassMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MassMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MassMessageUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<MassMessageUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<MassMessageUpsertWithWhereUniqueWithoutEventInput>>;
};

export type MassMessageUpdateWithWhereUniqueWithoutCommunityInput = {
  data: MassMessageUpdateWithoutCommunityInput;
  where: MassMessageWhereUniqueInput;
};

export type MassMessageUpdateWithWhereUniqueWithoutEventInput = {
  data: MassMessageUpdateWithoutEventInput;
  where: MassMessageWhereUniqueInput;
};

export type MassMessageUpdateWithoutCommunityInput = {
  actionDeepLink?: InputMaybe<StringFieldUpdateOperationsInput>;
  chunkInterval?: InputMaybe<IntFieldUpdateOperationsInput>;
  chunkSize?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutRelatedMassMessagesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedItemId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedModule?: InputMaybe<NullableEnumModuleFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  onesignalIds?: InputMaybe<MassMessageUpdateonesignalIdsInput>;
  onesignalUrls?: InputMaybe<MassMessageUpdateonesignalUrlsInput>;
  rejectionReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  segment?: InputMaybe<NullableEnumMassMessageSegmentFieldUpdateOperationsInput>;
  sendAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMassMessageStatusFieldUpdateOperationsInput>;
  talksMessageType?: InputMaybe<NullableEnumTalksMessageTypeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  totalClicks?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPushIds?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalReceivers?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalUsers?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumMassMessageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MassMessageUpdateWithoutEventInput = {
  actionDeepLink?: InputMaybe<StringFieldUpdateOperationsInput>;
  chunkInterval?: InputMaybe<IntFieldUpdateOperationsInput>;
  chunkSize?: InputMaybe<IntFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutRelatedMasssMessagesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedItemId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedModule?: InputMaybe<NullableEnumModuleFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  onesignalIds?: InputMaybe<MassMessageUpdateonesignalIdsInput>;
  onesignalUrls?: InputMaybe<MassMessageUpdateonesignalUrlsInput>;
  rejectionReason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  segment?: InputMaybe<NullableEnumMassMessageSegmentFieldUpdateOperationsInput>;
  sendAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMassMessageStatusFieldUpdateOperationsInput>;
  talksMessageType?: InputMaybe<NullableEnumTalksMessageTypeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  totalClicks?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPushIds?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalReceivers?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalUsers?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumMassMessageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MassMessageUpdateonesignalIdsInput = {
  push?: InputMaybe<Scalars['String']>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type MassMessageUpdateonesignalUrlsInput = {
  push?: InputMaybe<Scalars['String']>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type MassMessageUpsertWithWhereUniqueWithoutCommunityInput = {
  create: MassMessageCreateWithoutCommunityInput;
  update: MassMessageUpdateWithoutCommunityInput;
  where: MassMessageWhereUniqueInput;
};

export type MassMessageUpsertWithWhereUniqueWithoutEventInput = {
  create: MassMessageCreateWithoutEventInput;
  update: MassMessageUpdateWithoutEventInput;
  where: MassMessageWhereUniqueInput;
};

export type MassMessageWhereInput = {
  AND?: InputMaybe<Array<MassMessageWhereInput>>;
  NOT?: InputMaybe<Array<MassMessageWhereInput>>;
  OR?: InputMaybe<Array<MassMessageWhereInput>>;
  actionDeepLink?: InputMaybe<StringFilter>;
  chunkInterval?: InputMaybe<IntFilter>;
  chunkSize?: InputMaybe<IntFilter>;
  community?: InputMaybe<CommunityWhereInput>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventWhereInput>;
  eventId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  linkedItemId?: InputMaybe<StringNullableFilter>;
  linkedModule?: InputMaybe<EnumModuleNullableFilter>;
  message?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  onesignalIds?: InputMaybe<StringNullableListFilter>;
  onesignalUrls?: InputMaybe<StringNullableListFilter>;
  rejectionReason?: InputMaybe<StringNullableFilter>;
  segment?: InputMaybe<EnumMassMessageSegmentNullableFilter>;
  sendAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumMassMessageStatusFilter>;
  talksMessageType?: InputMaybe<EnumTalksMessageTypeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  totalClicks?: InputMaybe<IntFilter>;
  totalPushIds?: InputMaybe<IntFilter>;
  totalReceivers?: InputMaybe<IntFilter>;
  totalUsers?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumMassMessageTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MassMessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum MessageHighlightStatus {
  Hidden = 'Hidden',
  Visible = 'Visible'
}

export type Modal = {
  __typename?: 'Modal';
  CTAs: Array<Cta>;
  body: Scalars['String'];
  frequency: ModalFrequency;
  title: Scalars['String'];
  type: Scalars['String'];
};

export enum ModalFrequency {
  Day = 'day',
  Once = 'once'
}

export enum Module {
  EventList = 'EventList',
  Feed = 'Feed',
  IdCard = 'IDCard',
  PrivateEvent = 'PrivateEvent',
  Shop = 'Shop'
}

export type Mutation = {
  __typename?: 'Mutation';
  addToWaitlist?: Maybe<Scalars['Boolean']>;
  adminCreateOneActivityEvent: ActivityEvent;
  adminCreateOneCatalogItem: CatalogItem;
  adminCreateOneCatalogItemCategory: CatalogItemCategory;
  adminCreateOneCatalogItemSchedule: CatalogItemSchedule;
  adminCreateOneClaimedBadge: ClaimedBadge;
  adminCreateOneCommunity: Community;
  adminCreateOneCommunityMemberInfo: CommunityMemberInfo;
  adminCreateOneCommunitySuggestion: CommunitySuggestion;
  adminCreateOneDiscoverCard: DiscoverCard;
  adminCreateOneEvent: Event;
  adminCreateOneEventCategory: EventCategory;
  adminCreateOneEventDetail: EventDetail;
  adminCreateOneFaqCategory: FaqCategory;
  adminCreateOneFaqItem: FaqItem;
  adminCreateOneFeedCategory: FeedCategory;
  adminCreateOneFeedItem: FeedItem;
  adminCreateOneHighlight: Highlight;
  adminCreateOneInterestTag: InterestTag;
  adminCreateOneInviteCode: InviteCode;
  adminCreateOneMassMessage: MassMessage;
  adminCreateOnePayout: Payout;
  adminCreateOnePremiumAccessCard: PremiumAccessCard;
  adminCreateOneProduct: Product;
  adminCreateOnePromocode: Promocode;
  adminCreateOnePurchase: Purchase;
  adminCreateOnePurchaseTransfer: PurchaseTransfer;
  adminCreateOneTalksMessage: TalksMessage;
  adminCreateOneTemplateBadge: TemplateBadge;
  adminCreateOneTrack: Track;
  adminCreateOneUser: User;
  adminCreateOneWaitlistUser: WaitlistUser;
  adminDeleteManyActivityEvent: AffectedRowsOutput;
  adminDeleteManyCatalogItem: AffectedRowsOutput;
  adminDeleteManyCatalogItemCategory: AffectedRowsOutput;
  adminDeleteManyCatalogItemSchedule: AffectedRowsOutput;
  adminDeleteManyClaimedBadge: AffectedRowsOutput;
  adminDeleteManyCommunity: AffectedRowsOutput;
  adminDeleteManyCommunityMemberInfo: AffectedRowsOutput;
  adminDeleteManyCommunitySuggestion: AffectedRowsOutput;
  adminDeleteManyDiscoverCard: AffectedRowsOutput;
  adminDeleteManyEvent: AffectedRowsOutput;
  adminDeleteManyEventCategory: AffectedRowsOutput;
  adminDeleteManyEventDetail: AffectedRowsOutput;
  adminDeleteManyFaqCategory: AffectedRowsOutput;
  adminDeleteManyFaqItem: AffectedRowsOutput;
  adminDeleteManyFeedCategory: AffectedRowsOutput;
  adminDeleteManyFeedItem: AffectedRowsOutput;
  adminDeleteManyHighlight: AffectedRowsOutput;
  adminDeleteManyInterestTag: AffectedRowsOutput;
  adminDeleteManyInviteCode: AffectedRowsOutput;
  adminDeleteManyMassMessage: AffectedRowsOutput;
  adminDeleteManyPayout: AffectedRowsOutput;
  adminDeleteManyPremiumAccessCard: AffectedRowsOutput;
  adminDeleteManyProduct: AffectedRowsOutput;
  adminDeleteManyPromocode: AffectedRowsOutput;
  adminDeleteManyPurchase: AffectedRowsOutput;
  adminDeleteManyPurchaseTransfer: AffectedRowsOutput;
  adminDeleteManyTalksMessage: AffectedRowsOutput;
  adminDeleteManyTemplateBadge: AffectedRowsOutput;
  adminDeleteManyTrack: AffectedRowsOutput;
  adminDeleteManyUser: AffectedRowsOutput;
  adminDeleteManyWaitlistUser: AffectedRowsOutput;
  adminDeleteOneActivityEvent?: Maybe<ActivityEvent>;
  adminDeleteOneCatalogItem?: Maybe<CatalogItem>;
  adminDeleteOneCatalogItemCategory?: Maybe<CatalogItemCategory>;
  adminDeleteOneCatalogItemSchedule?: Maybe<CatalogItemSchedule>;
  adminDeleteOneClaimedBadge?: Maybe<ClaimedBadge>;
  adminDeleteOneCommunity?: Maybe<Community>;
  adminDeleteOneCommunityMemberInfo?: Maybe<CommunityMemberInfo>;
  adminDeleteOneCommunitySuggestion?: Maybe<CommunitySuggestion>;
  adminDeleteOneDiscoverCard?: Maybe<DiscoverCard>;
  adminDeleteOneEvent?: Maybe<Event>;
  adminDeleteOneEventCategory?: Maybe<EventCategory>;
  adminDeleteOneEventDetail?: Maybe<EventDetail>;
  adminDeleteOneFaqCategory?: Maybe<FaqCategory>;
  adminDeleteOneFaqItem?: Maybe<FaqItem>;
  adminDeleteOneFeedCategory?: Maybe<FeedCategory>;
  adminDeleteOneFeedItem?: Maybe<FeedItem>;
  adminDeleteOneHighlight?: Maybe<Highlight>;
  adminDeleteOneInterestTag?: Maybe<InterestTag>;
  adminDeleteOneInviteCode?: Maybe<InviteCode>;
  adminDeleteOneMassMessage?: Maybe<MassMessage>;
  adminDeleteOnePayout?: Maybe<Payout>;
  adminDeleteOnePremiumAccessCard?: Maybe<PremiumAccessCard>;
  adminDeleteOneProduct?: Maybe<Product>;
  adminDeleteOnePromocode?: Maybe<Promocode>;
  adminDeleteOnePurchase?: Maybe<Purchase>;
  adminDeleteOnePurchaseTransfer?: Maybe<PurchaseTransfer>;
  adminDeleteOneTalksMessage?: Maybe<TalksMessage>;
  adminDeleteOneTemplateBadge?: Maybe<TemplateBadge>;
  adminDeleteOneTrack?: Maybe<Track>;
  adminDeleteOneUser?: Maybe<User>;
  adminDeleteOneWaitlistUser?: Maybe<WaitlistUser>;
  adminInviteMembers?: Maybe<Scalars['Boolean']>;
  adminUpdateManyActivityEvent: AffectedRowsOutput;
  adminUpdateManyCatalogItem: AffectedRowsOutput;
  adminUpdateManyCatalogItemCategory: AffectedRowsOutput;
  adminUpdateManyCatalogItemSchedule: AffectedRowsOutput;
  adminUpdateManyClaimedBadge: AffectedRowsOutput;
  adminUpdateManyCommunity: AffectedRowsOutput;
  adminUpdateManyCommunityMemberInfo: AffectedRowsOutput;
  adminUpdateManyCommunitySuggestion: AffectedRowsOutput;
  adminUpdateManyDiscoverCard: AffectedRowsOutput;
  adminUpdateManyEvent: AffectedRowsOutput;
  adminUpdateManyEventCategory: AffectedRowsOutput;
  adminUpdateManyEventDetail: AffectedRowsOutput;
  adminUpdateManyFaqCategory: AffectedRowsOutput;
  adminUpdateManyFaqItem: AffectedRowsOutput;
  adminUpdateManyFeedCategory: AffectedRowsOutput;
  adminUpdateManyFeedItem: AffectedRowsOutput;
  adminUpdateManyHighlight: AffectedRowsOutput;
  adminUpdateManyInterestTag: AffectedRowsOutput;
  adminUpdateManyInviteCode: AffectedRowsOutput;
  adminUpdateManyMassMessage: AffectedRowsOutput;
  adminUpdateManyPayout: AffectedRowsOutput;
  adminUpdateManyPremiumAccessCard: AffectedRowsOutput;
  adminUpdateManyProduct: AffectedRowsOutput;
  adminUpdateManyPromocode: AffectedRowsOutput;
  adminUpdateManyPurchase: AffectedRowsOutput;
  adminUpdateManyPurchaseTransfer: AffectedRowsOutput;
  adminUpdateManyTalksMessage: AffectedRowsOutput;
  adminUpdateManyTemplateBadge: AffectedRowsOutput;
  adminUpdateManyTrack: AffectedRowsOutput;
  adminUpdateManyUser: AffectedRowsOutput;
  adminUpdateManyWaitlistUser: AffectedRowsOutput;
  adminUpdateOneActivityEvent?: Maybe<ActivityEvent>;
  adminUpdateOneCatalogItem?: Maybe<CatalogItem>;
  adminUpdateOneCatalogItemCategory?: Maybe<CatalogItemCategory>;
  adminUpdateOneCatalogItemSchedule?: Maybe<CatalogItemSchedule>;
  adminUpdateOneClaimedBadge?: Maybe<ClaimedBadge>;
  adminUpdateOneCommunity?: Maybe<Community>;
  adminUpdateOneCommunityMemberInfo?: Maybe<CommunityMemberInfo>;
  adminUpdateOneCommunitySuggestion?: Maybe<CommunitySuggestion>;
  adminUpdateOneDiscoverCard?: Maybe<DiscoverCard>;
  adminUpdateOneEvent?: Maybe<Event>;
  adminUpdateOneEventCategory?: Maybe<EventCategory>;
  adminUpdateOneEventDetail?: Maybe<EventDetail>;
  adminUpdateOneFaqCategory?: Maybe<FaqCategory>;
  adminUpdateOneFaqItem?: Maybe<FaqItem>;
  adminUpdateOneFeedCategory?: Maybe<FeedCategory>;
  adminUpdateOneFeedItem?: Maybe<FeedItem>;
  adminUpdateOneHighlight?: Maybe<Highlight>;
  adminUpdateOneInterestTag?: Maybe<InterestTag>;
  adminUpdateOneInviteCode?: Maybe<InviteCode>;
  adminUpdateOneMassMessage?: Maybe<MassMessage>;
  adminUpdateOnePayout?: Maybe<Payout>;
  adminUpdateOnePremiumAccessCard?: Maybe<PremiumAccessCard>;
  adminUpdateOneProduct?: Maybe<Product>;
  adminUpdateOnePromocode?: Maybe<Promocode>;
  adminUpdateOnePurchase?: Maybe<Purchase>;
  adminUpdateOnePurchaseTransfer?: Maybe<PurchaseTransfer>;
  adminUpdateOneTalksMessage?: Maybe<TalksMessage>;
  adminUpdateOneTemplateBadge?: Maybe<TemplateBadge>;
  adminUpdateOneTrack?: Maybe<Track>;
  adminUpdateOneUser?: Maybe<User>;
  adminUpdateOneWaitlistUser?: Maybe<WaitlistUser>;
  adminUpsertOneActivityEvent: ActivityEvent;
  adminUpsertOneCatalogItem: CatalogItem;
  adminUpsertOneCatalogItemCategory: CatalogItemCategory;
  adminUpsertOneCatalogItemSchedule: CatalogItemSchedule;
  adminUpsertOneClaimedBadge: ClaimedBadge;
  adminUpsertOneCommunity: Community;
  adminUpsertOneCommunityMemberInfo: CommunityMemberInfo;
  adminUpsertOneCommunitySuggestion: CommunitySuggestion;
  adminUpsertOneDiscoverCard: DiscoverCard;
  adminUpsertOneEvent: Event;
  adminUpsertOneEventCategory: EventCategory;
  adminUpsertOneEventDetail: EventDetail;
  adminUpsertOneFaqCategory: FaqCategory;
  adminUpsertOneFaqItem: FaqItem;
  adminUpsertOneFeedCategory: FeedCategory;
  adminUpsertOneFeedItem: FeedItem;
  adminUpsertOneHighlight: Highlight;
  adminUpsertOneInterestTag: InterestTag;
  adminUpsertOneInviteCode: InviteCode;
  adminUpsertOneMassMessage: MassMessage;
  adminUpsertOnePayout: Payout;
  adminUpsertOnePremiumAccessCard: PremiumAccessCard;
  adminUpsertOneProduct: Product;
  adminUpsertOnePromocode: Promocode;
  adminUpsertOnePurchase: Purchase;
  adminUpsertOnePurchaseTransfer: PurchaseTransfer;
  adminUpsertOneTalksMessage: TalksMessage;
  adminUpsertOneTemplateBadge: TemplateBadge;
  adminUpsertOneTrack: Track;
  adminUpsertOneUser: User;
  adminUpsertOneWaitlistUser: WaitlistUser;
  attendeeCheckIn?: Maybe<Event>;
  authV2?: Maybe<AuthV2Response>;
  caCreateNewEvent?: Maybe<Event>;
  caCreatePayoutRequest?: Maybe<Payout>;
  caDeleteMassMessage?: Maybe<MassMessage>;
  caDuplicateEvent?: Maybe<Event>;
  caDuplicateFeedItem?: Maybe<FeedItem>;
  caDuplicateMassMessage?: Maybe<MassMessage>;
  caDuplicateProduct?: Maybe<Product>;
  caLinkStripeAccount?: Maybe<CaLinkStripeAccountPayload>;
  caModifyEvent?: Maybe<Event>;
  caModifyProduct?: Maybe<Product>;
  caUnlinkStripeAccount?: Maybe<CaUnlinkStripeAccountPayload>;
  calculateDiscountAndFees?: Maybe<DiscountAndFees>;
  cancelPurchases?: Maybe<Scalars['Boolean']>;
  createMedia?: Maybe<CreateMediaResponse>;
  createOneCommunity: Community;
  createOneEventDetail: EventDetail;
  createOneFeedItem: FeedItem;
  createOneInviteCode: InviteCode;
  createOnePremiumAccessCard: PremiumAccessCard;
  createOneUser: User;
  createOneWaitlistUser: WaitlistUser;
  getInviteCodeByReservedEmail?: Maybe<Scalars['String']>;
  joinCommunity?: Maybe<CommunityPayload>;
  joinCommunityWithInfoCheck?: Maybe<JoinCommunityReturnType>;
  login?: Maybe<AuthPayload>;
  postCreateUserUpdate?: Maybe<User>;
  readMessage?: Maybe<ReadMessageResponse>;
  requestAccountDeletion?: Maybe<Scalars['Boolean']>;
  requestEmailVerification?: Maybe<Scalars['Boolean']>;
  requestPhoneVerification?: Maybe<Scalars['Boolean']>;
  requestProductPurchase?: Maybe<RequestProductPurchase>;
  requestProductsPurchase?: Maybe<RequestProductsPurchase>;
  resetPassword?: Maybe<AuthPayload>;
  resetPasswordRequest?: Maybe<PasswordResetRequestPayload>;
  rollbackEmail?: Maybe<Scalars['Boolean']>;
  sendCommunityInvite?: Maybe<InventorySendInvite>;
  sendInviteCode?: Maybe<Scalars['Boolean']>;
  sendMessage?: Maybe<SendMessageResponse>;
  sendTicket?: Maybe<Scalars['Boolean']>;
  signUp?: Maybe<AuthPayload>;
  syncPushPlayerIds?: Maybe<SyncPushPlayerIdsResponse>;
  updateOneCommunityMemberInfo?: Maybe<CommunityMemberInfo>;
  updateOneCommunitySuggestion?: Maybe<CommunitySuggestion>;
  updateOneEvent?: Maybe<Event>;
  updateOneHighlight?: Maybe<Highlight>;
  updateOnePremiumAccessCard?: Maybe<PremiumAccessCard>;
  updateOneTalksMessage?: Maybe<TalksMessage>;
  updateOneUser?: Maybe<User>;
  userUpdate?: Maybe<User>;
  validateInviteCode?: Maybe<ValidateInviteCodePayload>;
  validatePasswordResetCode?: Maybe<Scalars['Boolean']>;
  validatePromocode?: Maybe<Promocode>;
  validateUsername?: Maybe<Scalars['Boolean']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
  verifySwishPayment?: Maybe<Scalars['Boolean']>;
  verifyUser?: Maybe<AuthPayload>;
  voteFeedItem?: Maybe<FeedItem>;
};


export type MutationAddToWaitlistArgs = {
  email: Scalars['String'];
  source?: InputMaybe<WaitlistSource>;
};


export type MutationAdminCreateOneActivityEventArgs = {
  data: ActivityEventCreateInput;
};


export type MutationAdminCreateOneCatalogItemArgs = {
  data: CatalogItemCreateInput;
};


export type MutationAdminCreateOneCatalogItemCategoryArgs = {
  data: CatalogItemCategoryCreateInput;
};


export type MutationAdminCreateOneCatalogItemScheduleArgs = {
  data: CatalogItemScheduleCreateInput;
};


export type MutationAdminCreateOneClaimedBadgeArgs = {
  data: ClaimedBadgeCreateInput;
};


export type MutationAdminCreateOneCommunityArgs = {
  data: CommunityCreateInput;
};


export type MutationAdminCreateOneCommunityMemberInfoArgs = {
  data: CommunityMemberInfoCreateInput;
};


export type MutationAdminCreateOneCommunitySuggestionArgs = {
  data: CommunitySuggestionCreateInput;
};


export type MutationAdminCreateOneDiscoverCardArgs = {
  data: DiscoverCardCreateInput;
};


export type MutationAdminCreateOneEventArgs = {
  data: EventCreateInput;
};


export type MutationAdminCreateOneEventCategoryArgs = {
  data: EventCategoryCreateInput;
};


export type MutationAdminCreateOneEventDetailArgs = {
  data: EventDetailCreateInput;
};


export type MutationAdminCreateOneFaqCategoryArgs = {
  data: FaqCategoryCreateInput;
};


export type MutationAdminCreateOneFaqItemArgs = {
  data: FaqItemCreateInput;
};


export type MutationAdminCreateOneFeedCategoryArgs = {
  data: FeedCategoryCreateInput;
};


export type MutationAdminCreateOneFeedItemArgs = {
  data: FeedItemCreateInput;
};


export type MutationAdminCreateOneHighlightArgs = {
  data: HighlightCreateInput;
};


export type MutationAdminCreateOneInterestTagArgs = {
  data: InterestTagCreateInput;
};


export type MutationAdminCreateOneInviteCodeArgs = {
  data: InviteCodeCreateInput;
};


export type MutationAdminCreateOneMassMessageArgs = {
  data: MassMessageCreateInput;
};


export type MutationAdminCreateOnePayoutArgs = {
  data: PayoutCreateInput;
};


export type MutationAdminCreateOnePremiumAccessCardArgs = {
  data: PremiumAccessCardCreateInput;
};


export type MutationAdminCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationAdminCreateOnePromocodeArgs = {
  data: PromocodeCreateInput;
};


export type MutationAdminCreateOnePurchaseArgs = {
  data: PurchaseCreateInput;
};


export type MutationAdminCreateOnePurchaseTransferArgs = {
  data: PurchaseTransferCreateInput;
};


export type MutationAdminCreateOneTalksMessageArgs = {
  data: TalksMessageCreateInput;
};


export type MutationAdminCreateOneTemplateBadgeArgs = {
  data: TemplateBadgeCreateInput;
};


export type MutationAdminCreateOneTrackArgs = {
  data: TrackCreateInput;
};


export type MutationAdminCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationAdminCreateOneWaitlistUserArgs = {
  data: WaitlistUserCreateInput;
};


export type MutationAdminDeleteManyActivityEventArgs = {
  where?: InputMaybe<ActivityEventWhereInput>;
};


export type MutationAdminDeleteManyCatalogItemArgs = {
  where?: InputMaybe<CatalogItemWhereInput>;
};


export type MutationAdminDeleteManyCatalogItemCategoryArgs = {
  where?: InputMaybe<CatalogItemCategoryWhereInput>;
};


export type MutationAdminDeleteManyCatalogItemScheduleArgs = {
  where?: InputMaybe<CatalogItemScheduleWhereInput>;
};


export type MutationAdminDeleteManyClaimedBadgeArgs = {
  where?: InputMaybe<ClaimedBadgeWhereInput>;
};


export type MutationAdminDeleteManyCommunityArgs = {
  where?: InputMaybe<CommunityWhereInput>;
};


export type MutationAdminDeleteManyCommunityMemberInfoArgs = {
  where?: InputMaybe<CommunityMemberInfoWhereInput>;
};


export type MutationAdminDeleteManyCommunitySuggestionArgs = {
  where?: InputMaybe<CommunitySuggestionWhereInput>;
};


export type MutationAdminDeleteManyDiscoverCardArgs = {
  where?: InputMaybe<DiscoverCardWhereInput>;
};


export type MutationAdminDeleteManyEventArgs = {
  where?: InputMaybe<EventWhereInput>;
};


export type MutationAdminDeleteManyEventCategoryArgs = {
  where?: InputMaybe<EventCategoryWhereInput>;
};


export type MutationAdminDeleteManyEventDetailArgs = {
  where?: InputMaybe<EventDetailWhereInput>;
};


export type MutationAdminDeleteManyFaqCategoryArgs = {
  where?: InputMaybe<FaqCategoryWhereInput>;
};


export type MutationAdminDeleteManyFaqItemArgs = {
  where?: InputMaybe<FaqItemWhereInput>;
};


export type MutationAdminDeleteManyFeedCategoryArgs = {
  where?: InputMaybe<FeedCategoryWhereInput>;
};


export type MutationAdminDeleteManyFeedItemArgs = {
  where?: InputMaybe<FeedItemWhereInput>;
};


export type MutationAdminDeleteManyHighlightArgs = {
  where?: InputMaybe<HighlightWhereInput>;
};


export type MutationAdminDeleteManyInterestTagArgs = {
  where?: InputMaybe<InterestTagWhereInput>;
};


export type MutationAdminDeleteManyInviteCodeArgs = {
  where?: InputMaybe<InviteCodeWhereInput>;
};


export type MutationAdminDeleteManyMassMessageArgs = {
  where?: InputMaybe<MassMessageWhereInput>;
};


export type MutationAdminDeleteManyPayoutArgs = {
  where?: InputMaybe<PayoutWhereInput>;
};


export type MutationAdminDeleteManyPremiumAccessCardArgs = {
  where?: InputMaybe<PremiumAccessCardWhereInput>;
};


export type MutationAdminDeleteManyProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationAdminDeleteManyPromocodeArgs = {
  where?: InputMaybe<PromocodeWhereInput>;
};


export type MutationAdminDeleteManyPurchaseArgs = {
  where?: InputMaybe<PurchaseWhereInput>;
};


export type MutationAdminDeleteManyPurchaseTransferArgs = {
  where?: InputMaybe<PurchaseTransferWhereInput>;
};


export type MutationAdminDeleteManyTalksMessageArgs = {
  where?: InputMaybe<TalksMessageWhereInput>;
};


export type MutationAdminDeleteManyTemplateBadgeArgs = {
  where?: InputMaybe<TemplateBadgeWhereInput>;
};


export type MutationAdminDeleteManyTrackArgs = {
  where?: InputMaybe<TrackWhereInput>;
};


export type MutationAdminDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationAdminDeleteManyWaitlistUserArgs = {
  where?: InputMaybe<WaitlistUserWhereInput>;
};


export type MutationAdminDeleteOneActivityEventArgs = {
  where: ActivityEventWhereUniqueInput;
};


export type MutationAdminDeleteOneCatalogItemArgs = {
  where: CatalogItemWhereUniqueInput;
};


export type MutationAdminDeleteOneCatalogItemCategoryArgs = {
  where: CatalogItemCategoryWhereUniqueInput;
};


export type MutationAdminDeleteOneCatalogItemScheduleArgs = {
  where: CatalogItemScheduleWhereUniqueInput;
};


export type MutationAdminDeleteOneClaimedBadgeArgs = {
  where: ClaimedBadgeWhereUniqueInput;
};


export type MutationAdminDeleteOneCommunityArgs = {
  where: CommunityWhereUniqueInput;
};


export type MutationAdminDeleteOneCommunityMemberInfoArgs = {
  where: CommunityMemberInfoWhereUniqueInput;
};


export type MutationAdminDeleteOneCommunitySuggestionArgs = {
  where: CommunitySuggestionWhereUniqueInput;
};


export type MutationAdminDeleteOneDiscoverCardArgs = {
  where: DiscoverCardWhereUniqueInput;
};


export type MutationAdminDeleteOneEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationAdminDeleteOneEventCategoryArgs = {
  where: EventCategoryWhereUniqueInput;
};


export type MutationAdminDeleteOneEventDetailArgs = {
  where: EventDetailWhereUniqueInput;
};


export type MutationAdminDeleteOneFaqCategoryArgs = {
  where: FaqCategoryWhereUniqueInput;
};


export type MutationAdminDeleteOneFaqItemArgs = {
  where: FaqItemWhereUniqueInput;
};


export type MutationAdminDeleteOneFeedCategoryArgs = {
  where: FeedCategoryWhereUniqueInput;
};


export type MutationAdminDeleteOneFeedItemArgs = {
  where: FeedItemWhereUniqueInput;
};


export type MutationAdminDeleteOneHighlightArgs = {
  where: HighlightWhereUniqueInput;
};


export type MutationAdminDeleteOneInterestTagArgs = {
  where: InterestTagWhereUniqueInput;
};


export type MutationAdminDeleteOneInviteCodeArgs = {
  where: InviteCodeWhereUniqueInput;
};


export type MutationAdminDeleteOneMassMessageArgs = {
  where: MassMessageWhereUniqueInput;
};


export type MutationAdminDeleteOnePayoutArgs = {
  where: PayoutWhereUniqueInput;
};


export type MutationAdminDeleteOnePremiumAccessCardArgs = {
  where: PremiumAccessCardWhereUniqueInput;
};


export type MutationAdminDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationAdminDeleteOnePromocodeArgs = {
  where: PromocodeWhereUniqueInput;
};


export type MutationAdminDeleteOnePurchaseArgs = {
  where: PurchaseWhereUniqueInput;
};


export type MutationAdminDeleteOnePurchaseTransferArgs = {
  where: PurchaseTransferWhereUniqueInput;
};


export type MutationAdminDeleteOneTalksMessageArgs = {
  where: TalksMessageWhereUniqueInput;
};


export type MutationAdminDeleteOneTemplateBadgeArgs = {
  where: TemplateBadgeWhereUniqueInput;
};


export type MutationAdminDeleteOneTrackArgs = {
  where: TrackWhereUniqueInput;
};


export type MutationAdminDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationAdminDeleteOneWaitlistUserArgs = {
  where: WaitlistUserWhereUniqueInput;
};


export type MutationAdminInviteMembersArgs = {
  eventId: Scalars['String'];
};


export type MutationAdminUpdateManyActivityEventArgs = {
  data: ActivityEventUpdateManyMutationInput;
  where?: InputMaybe<ActivityEventWhereInput>;
};


export type MutationAdminUpdateManyCatalogItemArgs = {
  data: CatalogItemUpdateManyMutationInput;
  where?: InputMaybe<CatalogItemWhereInput>;
};


export type MutationAdminUpdateManyCatalogItemCategoryArgs = {
  data: CatalogItemCategoryUpdateManyMutationInput;
  where?: InputMaybe<CatalogItemCategoryWhereInput>;
};


export type MutationAdminUpdateManyCatalogItemScheduleArgs = {
  data: CatalogItemScheduleUpdateManyMutationInput;
  where?: InputMaybe<CatalogItemScheduleWhereInput>;
};


export type MutationAdminUpdateManyClaimedBadgeArgs = {
  data: ClaimedBadgeUpdateManyMutationInput;
  where?: InputMaybe<ClaimedBadgeWhereInput>;
};


export type MutationAdminUpdateManyCommunityArgs = {
  data: CommunityUpdateManyMutationInput;
  where?: InputMaybe<CommunityWhereInput>;
};


export type MutationAdminUpdateManyCommunityMemberInfoArgs = {
  data: CommunityMemberInfoUpdateManyMutationInput;
  where?: InputMaybe<CommunityMemberInfoWhereInput>;
};


export type MutationAdminUpdateManyCommunitySuggestionArgs = {
  data: CommunitySuggestionUpdateManyMutationInput;
  where?: InputMaybe<CommunitySuggestionWhereInput>;
};


export type MutationAdminUpdateManyDiscoverCardArgs = {
  data: DiscoverCardUpdateManyMutationInput;
  where?: InputMaybe<DiscoverCardWhereInput>;
};


export type MutationAdminUpdateManyEventArgs = {
  data: EventUpdateManyMutationInput;
  where?: InputMaybe<EventWhereInput>;
};


export type MutationAdminUpdateManyEventCategoryArgs = {
  data: EventCategoryUpdateManyMutationInput;
  where?: InputMaybe<EventCategoryWhereInput>;
};


export type MutationAdminUpdateManyEventDetailArgs = {
  data: EventDetailUpdateManyMutationInput;
  where?: InputMaybe<EventDetailWhereInput>;
};


export type MutationAdminUpdateManyFaqCategoryArgs = {
  data: FaqCategoryUpdateManyMutationInput;
  where?: InputMaybe<FaqCategoryWhereInput>;
};


export type MutationAdminUpdateManyFaqItemArgs = {
  data: FaqItemUpdateManyMutationInput;
  where?: InputMaybe<FaqItemWhereInput>;
};


export type MutationAdminUpdateManyFeedCategoryArgs = {
  data: FeedCategoryUpdateManyMutationInput;
  where?: InputMaybe<FeedCategoryWhereInput>;
};


export type MutationAdminUpdateManyFeedItemArgs = {
  data: FeedItemUpdateManyMutationInput;
  where?: InputMaybe<FeedItemWhereInput>;
};


export type MutationAdminUpdateManyHighlightArgs = {
  data: HighlightUpdateManyMutationInput;
  where?: InputMaybe<HighlightWhereInput>;
};


export type MutationAdminUpdateManyInterestTagArgs = {
  data: InterestTagUpdateManyMutationInput;
  where?: InputMaybe<InterestTagWhereInput>;
};


export type MutationAdminUpdateManyInviteCodeArgs = {
  data: InviteCodeUpdateManyMutationInput;
  where?: InputMaybe<InviteCodeWhereInput>;
};


export type MutationAdminUpdateManyMassMessageArgs = {
  data: MassMessageUpdateManyMutationInput;
  where?: InputMaybe<MassMessageWhereInput>;
};


export type MutationAdminUpdateManyPayoutArgs = {
  data: PayoutUpdateManyMutationInput;
  where?: InputMaybe<PayoutWhereInput>;
};


export type MutationAdminUpdateManyPremiumAccessCardArgs = {
  data: PremiumAccessCardUpdateManyMutationInput;
  where?: InputMaybe<PremiumAccessCardWhereInput>;
};


export type MutationAdminUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationAdminUpdateManyPromocodeArgs = {
  data: PromocodeUpdateManyMutationInput;
  where?: InputMaybe<PromocodeWhereInput>;
};


export type MutationAdminUpdateManyPurchaseArgs = {
  data: PurchaseUpdateManyMutationInput;
  where?: InputMaybe<PurchaseWhereInput>;
};


export type MutationAdminUpdateManyPurchaseTransferArgs = {
  data: PurchaseTransferUpdateManyMutationInput;
  where?: InputMaybe<PurchaseTransferWhereInput>;
};


export type MutationAdminUpdateManyTalksMessageArgs = {
  data: TalksMessageUpdateManyMutationInput;
  where?: InputMaybe<TalksMessageWhereInput>;
};


export type MutationAdminUpdateManyTemplateBadgeArgs = {
  data: TemplateBadgeUpdateManyMutationInput;
  where?: InputMaybe<TemplateBadgeWhereInput>;
};


export type MutationAdminUpdateManyTrackArgs = {
  data: TrackUpdateManyMutationInput;
  where?: InputMaybe<TrackWhereInput>;
};


export type MutationAdminUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationAdminUpdateManyWaitlistUserArgs = {
  data: WaitlistUserUpdateManyMutationInput;
  where?: InputMaybe<WaitlistUserWhereInput>;
};


export type MutationAdminUpdateOneActivityEventArgs = {
  data: ActivityEventUpdateInput;
  where: ActivityEventWhereUniqueInput;
};


export type MutationAdminUpdateOneCatalogItemArgs = {
  data: CatalogItemUpdateInput;
  where: CatalogItemWhereUniqueInput;
};


export type MutationAdminUpdateOneCatalogItemCategoryArgs = {
  data: CatalogItemCategoryUpdateInput;
  where: CatalogItemCategoryWhereUniqueInput;
};


export type MutationAdminUpdateOneCatalogItemScheduleArgs = {
  data: CatalogItemScheduleUpdateInput;
  where: CatalogItemScheduleWhereUniqueInput;
};


export type MutationAdminUpdateOneClaimedBadgeArgs = {
  data: ClaimedBadgeUpdateInput;
  where: ClaimedBadgeWhereUniqueInput;
};


export type MutationAdminUpdateOneCommunityArgs = {
  data: CommunityUpdateInput;
  where: CommunityWhereUniqueInput;
};


export type MutationAdminUpdateOneCommunityMemberInfoArgs = {
  data: CommunityMemberInfoUpdateInput;
  where: CommunityMemberInfoWhereUniqueInput;
};


export type MutationAdminUpdateOneCommunitySuggestionArgs = {
  data: CommunitySuggestionUpdateInput;
  where: CommunitySuggestionWhereUniqueInput;
};


export type MutationAdminUpdateOneDiscoverCardArgs = {
  data: DiscoverCardUpdateInput;
  where: DiscoverCardWhereUniqueInput;
};


export type MutationAdminUpdateOneEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationAdminUpdateOneEventCategoryArgs = {
  data: EventCategoryUpdateInput;
  where: EventCategoryWhereUniqueInput;
};


export type MutationAdminUpdateOneEventDetailArgs = {
  data: EventDetailUpdateInput;
  where: EventDetailWhereUniqueInput;
};


export type MutationAdminUpdateOneFaqCategoryArgs = {
  data: FaqCategoryUpdateInput;
  where: FaqCategoryWhereUniqueInput;
};


export type MutationAdminUpdateOneFaqItemArgs = {
  data: FaqItemUpdateInput;
  where: FaqItemWhereUniqueInput;
};


export type MutationAdminUpdateOneFeedCategoryArgs = {
  data: FeedCategoryUpdateInput;
  where: FeedCategoryWhereUniqueInput;
};


export type MutationAdminUpdateOneFeedItemArgs = {
  data: FeedItemUpdateInput;
  where: FeedItemWhereUniqueInput;
};


export type MutationAdminUpdateOneHighlightArgs = {
  data: HighlightUpdateInput;
  where: HighlightWhereUniqueInput;
};


export type MutationAdminUpdateOneInterestTagArgs = {
  data: InterestTagUpdateInput;
  where: InterestTagWhereUniqueInput;
};


export type MutationAdminUpdateOneInviteCodeArgs = {
  data: InviteCodeUpdateInput;
  where: InviteCodeWhereUniqueInput;
};


export type MutationAdminUpdateOneMassMessageArgs = {
  data: MassMessageUpdateInput;
  where: MassMessageWhereUniqueInput;
};


export type MutationAdminUpdateOnePayoutArgs = {
  data: PayoutUpdateInput;
  where: PayoutWhereUniqueInput;
};


export type MutationAdminUpdateOnePremiumAccessCardArgs = {
  data: PremiumAccessCardUpdateInput;
  where: PremiumAccessCardWhereUniqueInput;
};


export type MutationAdminUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationAdminUpdateOnePromocodeArgs = {
  data: PromocodeUpdateInput;
  where: PromocodeWhereUniqueInput;
};


export type MutationAdminUpdateOnePurchaseArgs = {
  data: PurchaseUpdateInput;
  where: PurchaseWhereUniqueInput;
};


export type MutationAdminUpdateOnePurchaseTransferArgs = {
  data: PurchaseTransferUpdateInput;
  where: PurchaseTransferWhereUniqueInput;
};


export type MutationAdminUpdateOneTalksMessageArgs = {
  data: TalksMessageUpdateInput;
  where: TalksMessageWhereUniqueInput;
};


export type MutationAdminUpdateOneTemplateBadgeArgs = {
  data: TemplateBadgeUpdateInput;
  where: TemplateBadgeWhereUniqueInput;
};


export type MutationAdminUpdateOneTrackArgs = {
  data: TrackUpdateInput;
  where: TrackWhereUniqueInput;
};


export type MutationAdminUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationAdminUpdateOneWaitlistUserArgs = {
  data: WaitlistUserUpdateInput;
  where: WaitlistUserWhereUniqueInput;
};


export type MutationAdminUpsertOneActivityEventArgs = {
  create: ActivityEventCreateInput;
  update: ActivityEventUpdateInput;
  where: ActivityEventWhereUniqueInput;
};


export type MutationAdminUpsertOneCatalogItemArgs = {
  create: CatalogItemCreateInput;
  update: CatalogItemUpdateInput;
  where: CatalogItemWhereUniqueInput;
};


export type MutationAdminUpsertOneCatalogItemCategoryArgs = {
  create: CatalogItemCategoryCreateInput;
  update: CatalogItemCategoryUpdateInput;
  where: CatalogItemCategoryWhereUniqueInput;
};


export type MutationAdminUpsertOneCatalogItemScheduleArgs = {
  create: CatalogItemScheduleCreateInput;
  update: CatalogItemScheduleUpdateInput;
  where: CatalogItemScheduleWhereUniqueInput;
};


export type MutationAdminUpsertOneClaimedBadgeArgs = {
  create: ClaimedBadgeCreateInput;
  update: ClaimedBadgeUpdateInput;
  where: ClaimedBadgeWhereUniqueInput;
};


export type MutationAdminUpsertOneCommunityArgs = {
  create: CommunityCreateInput;
  update: CommunityUpdateInput;
  where: CommunityWhereUniqueInput;
};


export type MutationAdminUpsertOneCommunityMemberInfoArgs = {
  create: CommunityMemberInfoCreateInput;
  update: CommunityMemberInfoUpdateInput;
  where: CommunityMemberInfoWhereUniqueInput;
};


export type MutationAdminUpsertOneCommunitySuggestionArgs = {
  create: CommunitySuggestionCreateInput;
  update: CommunitySuggestionUpdateInput;
  where: CommunitySuggestionWhereUniqueInput;
};


export type MutationAdminUpsertOneDiscoverCardArgs = {
  create: DiscoverCardCreateInput;
  update: DiscoverCardUpdateInput;
  where: DiscoverCardWhereUniqueInput;
};


export type MutationAdminUpsertOneEventArgs = {
  create: EventCreateInput;
  update: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationAdminUpsertOneEventCategoryArgs = {
  create: EventCategoryCreateInput;
  update: EventCategoryUpdateInput;
  where: EventCategoryWhereUniqueInput;
};


export type MutationAdminUpsertOneEventDetailArgs = {
  create: EventDetailCreateInput;
  update: EventDetailUpdateInput;
  where: EventDetailWhereUniqueInput;
};


export type MutationAdminUpsertOneFaqCategoryArgs = {
  create: FaqCategoryCreateInput;
  update: FaqCategoryUpdateInput;
  where: FaqCategoryWhereUniqueInput;
};


export type MutationAdminUpsertOneFaqItemArgs = {
  create: FaqItemCreateInput;
  update: FaqItemUpdateInput;
  where: FaqItemWhereUniqueInput;
};


export type MutationAdminUpsertOneFeedCategoryArgs = {
  create: FeedCategoryCreateInput;
  update: FeedCategoryUpdateInput;
  where: FeedCategoryWhereUniqueInput;
};


export type MutationAdminUpsertOneFeedItemArgs = {
  create: FeedItemCreateInput;
  update: FeedItemUpdateInput;
  where: FeedItemWhereUniqueInput;
};


export type MutationAdminUpsertOneHighlightArgs = {
  create: HighlightCreateInput;
  update: HighlightUpdateInput;
  where: HighlightWhereUniqueInput;
};


export type MutationAdminUpsertOneInterestTagArgs = {
  create: InterestTagCreateInput;
  update: InterestTagUpdateInput;
  where: InterestTagWhereUniqueInput;
};


export type MutationAdminUpsertOneInviteCodeArgs = {
  create: InviteCodeCreateInput;
  update: InviteCodeUpdateInput;
  where: InviteCodeWhereUniqueInput;
};


export type MutationAdminUpsertOneMassMessageArgs = {
  create: MassMessageCreateInput;
  update: MassMessageUpdateInput;
  where: MassMessageWhereUniqueInput;
};


export type MutationAdminUpsertOnePayoutArgs = {
  create: PayoutCreateInput;
  update: PayoutUpdateInput;
  where: PayoutWhereUniqueInput;
};


export type MutationAdminUpsertOnePremiumAccessCardArgs = {
  create: PremiumAccessCardCreateInput;
  update: PremiumAccessCardUpdateInput;
  where: PremiumAccessCardWhereUniqueInput;
};


export type MutationAdminUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationAdminUpsertOnePromocodeArgs = {
  create: PromocodeCreateInput;
  update: PromocodeUpdateInput;
  where: PromocodeWhereUniqueInput;
};


export type MutationAdminUpsertOnePurchaseArgs = {
  create: PurchaseCreateInput;
  update: PurchaseUpdateInput;
  where: PurchaseWhereUniqueInput;
};


export type MutationAdminUpsertOnePurchaseTransferArgs = {
  create: PurchaseTransferCreateInput;
  update: PurchaseTransferUpdateInput;
  where: PurchaseTransferWhereUniqueInput;
};


export type MutationAdminUpsertOneTalksMessageArgs = {
  create: TalksMessageCreateInput;
  update: TalksMessageUpdateInput;
  where: TalksMessageWhereUniqueInput;
};


export type MutationAdminUpsertOneTemplateBadgeArgs = {
  create: TemplateBadgeCreateInput;
  update: TemplateBadgeUpdateInput;
  where: TemplateBadgeWhereUniqueInput;
};


export type MutationAdminUpsertOneTrackArgs = {
  create: TrackCreateInput;
  update: TrackUpdateInput;
  where: TrackWhereUniqueInput;
};


export type MutationAdminUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationAdminUpsertOneWaitlistUserArgs = {
  create: WaitlistUserCreateInput;
  update: WaitlistUserUpdateInput;
  where: WaitlistUserWhereUniqueInput;
};


export type MutationAttendeeCheckInArgs = {
  eventId: Scalars['String'];
  purchaseIds?: InputMaybe<Array<Scalars['String']>>;
  userId: Scalars['String'];
};


export type MutationAuthV2Args = {
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  phone: Scalars['String'];
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
};


export type MutationCaCreateNewEventArgs = {
  communityId: Scalars['ID'];
};


export type MutationCaCreatePayoutRequestArgs = {
  account?: InputMaybe<Scalars['String']>;
  amount: Scalars['Float'];
  communityId: Scalars['ID'];
};


export type MutationCaDeleteMassMessageArgs = {
  massMessageId: Scalars['String'];
};


export type MutationCaDuplicateEventArgs = {
  id: Scalars['ID'];
};


export type MutationCaDuplicateFeedItemArgs = {
  id: Scalars['ID'];
};


export type MutationCaDuplicateMassMessageArgs = {
  massMessageId: Scalars['String'];
};


export type MutationCaDuplicateProductArgs = {
  id: Scalars['ID'];
};


export type MutationCaLinkStripeAccountArgs = {
  communityId: Scalars['ID'];
};


export type MutationCaModifyEventArgs = {
  eventInput: EventUpdateInput;
  id: Scalars['ID'];
  ticketInput: TicketCreateOrUpdateInput;
  tiersInput: Array<InputMaybe<TierCreateOrUpdateInput>>;
};


export type MutationCaModifyProductArgs = {
  badgeMediaPath?: InputMaybe<Scalars['String']>;
  data: ProductUpdateInput;
  productId: Scalars['ID'];
};


export type MutationCaUnlinkStripeAccountArgs = {
  communityId: Scalars['ID'];
};


export type MutationCalculateDiscountAndFeesArgs = {
  cart: Array<RequestProductsPurchaseInput>;
  paymentMethod?: InputMaybe<PurchasePaymentMethod>;
  promocodeId?: InputMaybe<Scalars['String']>;
  sendQR?: Scalars['Boolean'];
};


export type MutationCancelPurchasesArgs = {
  purchaseIds: Array<Scalars['String']>;
};


export type MutationCreateMediaArgs = {
  filename: Scalars['String'];
  mimeType: Scalars['String'];
  subpath: Scalars['String'];
};


export type MutationCreateOneCommunityArgs = {
  data: CommunityCreateInput;
};


export type MutationCreateOneEventDetailArgs = {
  data: EventDetailCreateInput;
};


export type MutationCreateOneFeedItemArgs = {
  data: FeedItemCreateInput;
};


export type MutationCreateOneInviteCodeArgs = {
  data: InviteCodeCreateInput;
};


export type MutationCreateOnePremiumAccessCardArgs = {
  data: PremiumAccessCardCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneWaitlistUserArgs = {
  data: WaitlistUserCreateInput;
};


export type MutationGetInviteCodeByReservedEmailArgs = {
  email: Scalars['String'];
};


export type MutationJoinCommunityArgs = {
  inviteCode: Scalars['String'];
};


export type MutationJoinCommunityWithInfoCheckArgs = {
  doInfoChecks?: InputMaybe<Scalars['Boolean']>;
  inviteCode: Scalars['String'];
};


export type MutationLoginArgs = {
  identifier?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  solanaWalletSignature?: InputMaybe<Scalars['String']>;
};


export type MutationPostCreateUserUpdateArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationReadMessageArgs = {
  chatId: Scalars['String'];
};


export type MutationRequestAccountDeletionArgs = {
  password: Scalars['String'];
  reason: Scalars['String'];
};


export type MutationRequestEmailVerificationArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationRequestPhoneVerificationArgs = {
  phone?: InputMaybe<Scalars['String']>;
};


export type MutationRequestProductPurchaseArgs = {
  paymentMethod: Scalars['String'];
  productId: Scalars['ID'];
  promocode?: InputMaybe<Scalars['String']>;
  swishDeeplink?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRequestProductsPurchaseArgs = {
  cart: Array<RequestProductsPurchaseInput>;
  fromWeb?: Scalars['Boolean'];
  paymentMethod: PurchasePaymentMethod;
  promocodeId?: InputMaybe<Scalars['String']>;
  sendQR?: Scalars['Boolean'];
};


export type MutationResetPasswordArgs = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  passwordResetCode: Scalars['String'];
};


export type MutationResetPasswordRequestArgs = {
  identifier: Scalars['String'];
};


export type MutationSendCommunityInviteArgs = {
  communityId: Scalars['ID'];
  phone?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationSendInviteCodeArgs = {
  identifier: Scalars['String'];
  inviteCode: Scalars['String'];
};


export type MutationSendMessageArgs = {
  attachmentId?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  recipientId: Scalars['String'];
};


export type MutationSendTicketArgs = {
  purchaseId: Scalars['ID'];
  recipientId: Scalars['ID'];
};


export type MutationSignUpArgs = {
  inviteCode?: InputMaybe<Scalars['String']>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  solanaWalletSignature?: InputMaybe<Scalars['String']>;
  user: UserCreateInput;
};


export type MutationSyncPushPlayerIdsArgs = {
  currentPushPlayerId: Scalars['String'];
};


export type MutationUpdateOneCommunityMemberInfoArgs = {
  data: CommunityMemberInfoUpdateInput;
  where: CommunityMemberInfoWhereUniqueInput;
};


export type MutationUpdateOneCommunitySuggestionArgs = {
  data: CommunitySuggestionUpdateInput;
  where: CommunitySuggestionWhereUniqueInput;
};


export type MutationUpdateOneEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateOneHighlightArgs = {
  data: HighlightUpdateInput;
  where: HighlightWhereUniqueInput;
};


export type MutationUpdateOnePremiumAccessCardArgs = {
  data: PremiumAccessCardUpdateInput;
  where: PremiumAccessCardWhereUniqueInput;
};


export type MutationUpdateOneTalksMessageArgs = {
  data: TalksMessageUpdateInput;
  where: TalksMessageWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUserUpdateArgs = {
  avatar?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['String']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  solanaWalletSignature?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationValidateInviteCodeArgs = {
  inviteCode: Scalars['String'];
};


export type MutationValidatePasswordResetCodeArgs = {
  passwordResetCode: Scalars['String'];
};


export type MutationValidatePromocodeArgs = {
  parentCommunityId: Scalars['String'];
  productIds: Array<Scalars['String']>;
  promocode: Scalars['String'];
};


export type MutationValidateUsernameArgs = {
  username: Scalars['String'];
};


export type MutationVerifyEmailArgs = {
  emailVerificationCode: Scalars['String'];
};


export type MutationVerifySwishPaymentArgs = {
  paid: Scalars['Boolean'];
  purchaseId: Scalars['String'];
};


export type MutationVerifyUserArgs = {
  phoneVerificationCode: Scalars['String'];
};


export type MutationVoteFeedItemArgs = {
  feedItemId: Scalars['ID'];
  type: Scalars['String'];
};

export type Nft = {
  __typename?: 'NFT';
  address?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Maybe<NftAttribute>>>;
  collectionName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type NftAttribute = {
  __typename?: 'NFTAttribute';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumBackgroundTypeFilter = {
  equals?: InputMaybe<BackgroundType>;
  in?: InputMaybe<Array<BackgroundType>>;
  not?: InputMaybe<NestedEnumBackgroundTypeFilter>;
  notIn?: InputMaybe<Array<BackgroundType>>;
};

export type NestedEnumBackgroundTypeNullableFilter = {
  equals?: InputMaybe<BackgroundType>;
  in?: InputMaybe<Array<BackgroundType>>;
  not?: InputMaybe<NestedEnumBackgroundTypeNullableFilter>;
  notIn?: InputMaybe<Array<BackgroundType>>;
};

export type NestedEnumCommunitySuggestionStatusFilter = {
  equals?: InputMaybe<CommunitySuggestionStatus>;
  in?: InputMaybe<Array<CommunitySuggestionStatus>>;
  not?: InputMaybe<NestedEnumCommunitySuggestionStatusFilter>;
  notIn?: InputMaybe<Array<CommunitySuggestionStatus>>;
};

export type NestedEnumEventStatusFilter = {
  equals?: InputMaybe<EventStatus>;
  in?: InputMaybe<Array<EventStatus>>;
  not?: InputMaybe<NestedEnumEventStatusFilter>;
  notIn?: InputMaybe<Array<EventStatus>>;
};

export type NestedEnumFeedItemPublishingStatusFilter = {
  equals?: InputMaybe<FeedItemPublishingStatus>;
  in?: InputMaybe<Array<FeedItemPublishingStatus>>;
  not?: InputMaybe<NestedEnumFeedItemPublishingStatusFilter>;
  notIn?: InputMaybe<Array<FeedItemPublishingStatus>>;
};

export type NestedEnumHeadlineTypeNullableFilter = {
  equals?: InputMaybe<HeadlineType>;
  in?: InputMaybe<Array<HeadlineType>>;
  not?: InputMaybe<NestedEnumHeadlineTypeNullableFilter>;
  notIn?: InputMaybe<Array<HeadlineType>>;
};

export type NestedEnumHighlightTypeFilter = {
  equals?: InputMaybe<HighlightType>;
  in?: InputMaybe<Array<HighlightType>>;
  not?: InputMaybe<NestedEnumHighlightTypeFilter>;
  notIn?: InputMaybe<Array<HighlightType>>;
};

export type NestedEnumInviteCodeTypeFilter = {
  equals?: InputMaybe<InviteCodeType>;
  in?: InputMaybe<Array<InviteCodeType>>;
  not?: InputMaybe<NestedEnumInviteCodeTypeFilter>;
  notIn?: InputMaybe<Array<InviteCodeType>>;
};

export type NestedEnumMassMessageSegmentNullableFilter = {
  equals?: InputMaybe<MassMessageSegment>;
  in?: InputMaybe<Array<MassMessageSegment>>;
  not?: InputMaybe<NestedEnumMassMessageSegmentNullableFilter>;
  notIn?: InputMaybe<Array<MassMessageSegment>>;
};

export type NestedEnumMassMessageStatusFilter = {
  equals?: InputMaybe<MassMessageStatus>;
  in?: InputMaybe<Array<MassMessageStatus>>;
  not?: InputMaybe<NestedEnumMassMessageStatusFilter>;
  notIn?: InputMaybe<Array<MassMessageStatus>>;
};

export type NestedEnumMassMessageTypeFilter = {
  equals?: InputMaybe<MassMessageType>;
  in?: InputMaybe<Array<MassMessageType>>;
  not?: InputMaybe<NestedEnumMassMessageTypeFilter>;
  notIn?: InputMaybe<Array<MassMessageType>>;
};

export type NestedEnumMessageHighlightStatusFilter = {
  equals?: InputMaybe<MessageHighlightStatus>;
  in?: InputMaybe<Array<MessageHighlightStatus>>;
  not?: InputMaybe<NestedEnumMessageHighlightStatusFilter>;
  notIn?: InputMaybe<Array<MessageHighlightStatus>>;
};

export type NestedEnumModuleNullableFilter = {
  equals?: InputMaybe<Module>;
  in?: InputMaybe<Array<Module>>;
  not?: InputMaybe<NestedEnumModuleNullableFilter>;
  notIn?: InputMaybe<Array<Module>>;
};

export type NestedEnumPayoutStatusFilter = {
  equals?: InputMaybe<PayoutStatus>;
  in?: InputMaybe<Array<PayoutStatus>>;
  not?: InputMaybe<NestedEnumPayoutStatusFilter>;
  notIn?: InputMaybe<Array<PayoutStatus>>;
};

export type NestedEnumProductStatusFilter = {
  equals?: InputMaybe<ProductStatus>;
  in?: InputMaybe<Array<ProductStatus>>;
  not?: InputMaybe<NestedEnumProductStatusFilter>;
  notIn?: InputMaybe<Array<ProductStatus>>;
};

export type NestedEnumProductTypeFilter = {
  equals?: InputMaybe<ProductType>;
  in?: InputMaybe<Array<ProductType>>;
  not?: InputMaybe<NestedEnumProductTypeFilter>;
  notIn?: InputMaybe<Array<ProductType>>;
};

export type NestedEnumPurchasePaymentMethodFilter = {
  equals?: InputMaybe<PurchasePaymentMethod>;
  in?: InputMaybe<Array<PurchasePaymentMethod>>;
  not?: InputMaybe<NestedEnumPurchasePaymentMethodFilter>;
  notIn?: InputMaybe<Array<PurchasePaymentMethod>>;
};

export type NestedEnumPurchaseStatusFilter = {
  equals?: InputMaybe<PurchaseStatus>;
  in?: InputMaybe<Array<PurchaseStatus>>;
  not?: InputMaybe<NestedEnumPurchaseStatusFilter>;
  notIn?: InputMaybe<Array<PurchaseStatus>>;
};

export type NestedEnumSupportedCountriesFilter = {
  equals?: InputMaybe<SupportedCountries>;
  in?: InputMaybe<Array<SupportedCountries>>;
  not?: InputMaybe<NestedEnumSupportedCountriesFilter>;
  notIn?: InputMaybe<Array<SupportedCountries>>;
};

export type NestedEnumSupportedCurrenciesFilter = {
  equals?: InputMaybe<SupportedCurrencies>;
  in?: InputMaybe<Array<SupportedCurrencies>>;
  not?: InputMaybe<NestedEnumSupportedCurrenciesFilter>;
  notIn?: InputMaybe<Array<SupportedCurrencies>>;
};

export type NestedEnumTalksMessageTypeFilter = {
  equals?: InputMaybe<TalksMessageType>;
  in?: InputMaybe<Array<TalksMessageType>>;
  not?: InputMaybe<NestedEnumTalksMessageTypeFilter>;
  notIn?: InputMaybe<Array<TalksMessageType>>;
};

export type NestedEnumTalksMessageTypeNullableFilter = {
  equals?: InputMaybe<TalksMessageType>;
  in?: InputMaybe<Array<TalksMessageType>>;
  not?: InputMaybe<NestedEnumTalksMessageTypeNullableFilter>;
  notIn?: InputMaybe<Array<TalksMessageType>>;
};

export type NestedEnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type NestedEnumUserStatusFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  not?: InputMaybe<NestedEnumUserStatusFilter>;
  notIn?: InputMaybe<Array<UserStatus>>;
};

export type NestedEnumWaitlistSourceFilter = {
  equals?: InputMaybe<WaitlistSource>;
  in?: InputMaybe<Array<WaitlistSource>>;
  not?: InputMaybe<NestedEnumWaitlistSourceFilter>;
  notIn?: InputMaybe<Array<WaitlistSource>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableEnumBackgroundTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<BackgroundType>;
};

export type NullableEnumHeadlineTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<HeadlineType>;
};

export type NullableEnumMassMessageSegmentFieldUpdateOperationsInput = {
  set?: InputMaybe<MassMessageSegment>;
};

export type NullableEnumModuleFieldUpdateOperationsInput = {
  set?: InputMaybe<Module>;
};

export type NullableEnumTalksMessageTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<TalksMessageType>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type PasswordResetRequestPayload = {
  __typename?: 'PasswordResetRequestPayload';
  errors?: Maybe<Array<Maybe<TranslatableError>>>;
  requested: Scalars['Boolean'];
};

export type Payout = {
  __typename?: 'Payout';
  account?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  communityId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  method: PurchasePaymentMethod;
  purchaseId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type PayoutCreateInput = {
  account?: InputMaybe<Scalars['String']>;
  amount: Scalars['Float'];
  communityId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<PurchasePaymentMethod>;
  purchaseId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PayoutStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PayoutOrderByInput = {
  account?: InputMaybe<SortOrder>;
  amount?: InputMaybe<SortOrder>;
  communityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  method?: InputMaybe<SortOrder>;
  purchaseId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PayoutStatus {
  Accepted = 'Accepted',
  Declined = 'Declined',
  Processing = 'Processing',
  RequestSent = 'RequestSent'
}

export type PayoutUpdateInput = {
  account?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  communityId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  method?: InputMaybe<EnumPurchasePaymentMethodFieldUpdateOperationsInput>;
  purchaseId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPayoutStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PayoutUpdateManyMutationInput = {
  account?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  communityId?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  method?: InputMaybe<EnumPurchasePaymentMethodFieldUpdateOperationsInput>;
  purchaseId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPayoutStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PayoutWhereInput = {
  AND?: InputMaybe<Array<PayoutWhereInput>>;
  NOT?: InputMaybe<Array<PayoutWhereInput>>;
  OR?: InputMaybe<Array<PayoutWhereInput>>;
  account?: InputMaybe<StringNullableFilter>;
  amount?: InputMaybe<FloatFilter>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  method?: InputMaybe<EnumPurchasePaymentMethodFilter>;
  purchaseId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumPayoutStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PayoutWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PremiumAccessCard = {
  __typename?: 'PremiumAccessCard';
  community: Community;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  maxNumUsed: Scalars['Int'];
  number: Scalars['Int'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  usages: Array<Scalars['DateTime']>;
  user: User;
};

export type PremiumAccessCardCreateInput = {
  community: CommunityCreateNestedOneWithoutPremiumAccessCardsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumUsed?: InputMaybe<Scalars['Int']>;
  number?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  usages?: InputMaybe<PremiumAccessCardCreateusagesInput>;
  user: UserCreateNestedOneWithoutPremiumAccessCardsInput;
};

export type PremiumAccessCardCreateManyCommunityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumUsed?: InputMaybe<Scalars['Int']>;
  number?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  usages?: InputMaybe<PremiumAccessCardCreateManyusagesInput>;
  userId: Scalars['String'];
};

export type PremiumAccessCardCreateManyCommunityInputEnvelope = {
  data?: InputMaybe<Array<PremiumAccessCardCreateManyCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PremiumAccessCardCreateManyUserInput = {
  communityId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumUsed?: InputMaybe<Scalars['Int']>;
  number?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  usages?: InputMaybe<PremiumAccessCardCreateManyusagesInput>;
};

export type PremiumAccessCardCreateManyUserInputEnvelope = {
  data?: InputMaybe<Array<PremiumAccessCardCreateManyUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PremiumAccessCardCreateManyusagesInput = {
  set?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type PremiumAccessCardCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<PremiumAccessCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PremiumAccessCardCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<PremiumAccessCardCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<PremiumAccessCardCreateManyCommunityInputEnvelope>;
};

export type PremiumAccessCardCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PremiumAccessCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PremiumAccessCardCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PremiumAccessCardCreateWithoutUserInput>>;
  createMany?: InputMaybe<PremiumAccessCardCreateManyUserInputEnvelope>;
};

export type PremiumAccessCardCreateOrConnectWithoutCommunityInput = {
  create: PremiumAccessCardCreateWithoutCommunityInput;
  where: PremiumAccessCardWhereUniqueInput;
};

export type PremiumAccessCardCreateOrConnectWithoutUserInput = {
  create: PremiumAccessCardCreateWithoutUserInput;
  where: PremiumAccessCardWhereUniqueInput;
};

export type PremiumAccessCardCreateWithoutCommunityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumUsed?: InputMaybe<Scalars['Int']>;
  number?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  usages?: InputMaybe<PremiumAccessCardCreateusagesInput>;
  user: UserCreateNestedOneWithoutPremiumAccessCardsInput;
};

export type PremiumAccessCardCreateWithoutUserInput = {
  community: CommunityCreateNestedOneWithoutPremiumAccessCardsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumUsed?: InputMaybe<Scalars['Int']>;
  number?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  usages?: InputMaybe<PremiumAccessCardCreateusagesInput>;
};

export type PremiumAccessCardCreateusagesInput = {
  set?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type PremiumAccessCardListRelationFilter = {
  every?: InputMaybe<PremiumAccessCardWhereInput>;
  none?: InputMaybe<PremiumAccessCardWhereInput>;
  some?: InputMaybe<PremiumAccessCardWhereInput>;
};

export type PremiumAccessCardOrderByInput = {
  communityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxNumUsed?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  usages?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PremiumAccessCardScalarWhereInput = {
  AND?: InputMaybe<Array<PremiumAccessCardScalarWhereInput>>;
  NOT?: InputMaybe<Array<PremiumAccessCardScalarWhereInput>>;
  OR?: InputMaybe<Array<PremiumAccessCardScalarWhereInput>>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  maxNumUsed?: InputMaybe<IntFilter>;
  number?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  usages?: InputMaybe<DateTimeNullableListFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PremiumAccessCardUpdateInput = {
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutPremiumAccessCardsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxNumUsed?: InputMaybe<IntFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  usages?: InputMaybe<PremiumAccessCardUpdateusagesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPremiumAccessCardsInput>;
};

export type PremiumAccessCardUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxNumUsed?: InputMaybe<IntFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  usages?: InputMaybe<PremiumAccessCardUpdateusagesInput>;
};

export type PremiumAccessCardUpdateManyWithWhereWithoutCommunityInput = {
  data: PremiumAccessCardUpdateManyMutationInput;
  where: PremiumAccessCardScalarWhereInput;
};

export type PremiumAccessCardUpdateManyWithWhereWithoutUserInput = {
  data: PremiumAccessCardUpdateManyMutationInput;
  where: PremiumAccessCardScalarWhereInput;
};

export type PremiumAccessCardUpdateManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<PremiumAccessCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PremiumAccessCardCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<PremiumAccessCardCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<PremiumAccessCardCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<PremiumAccessCardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PremiumAccessCardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PremiumAccessCardWhereUniqueInput>>;
  set?: InputMaybe<Array<PremiumAccessCardWhereUniqueInput>>;
  update?: InputMaybe<Array<PremiumAccessCardUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<PremiumAccessCardUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<PremiumAccessCardUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type PremiumAccessCardUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<PremiumAccessCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PremiumAccessCardCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PremiumAccessCardCreateWithoutUserInput>>;
  createMany?: InputMaybe<PremiumAccessCardCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PremiumAccessCardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PremiumAccessCardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PremiumAccessCardWhereUniqueInput>>;
  set?: InputMaybe<Array<PremiumAccessCardWhereUniqueInput>>;
  update?: InputMaybe<Array<PremiumAccessCardUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PremiumAccessCardUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PremiumAccessCardUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PremiumAccessCardUpdateWithWhereUniqueWithoutCommunityInput = {
  data: PremiumAccessCardUpdateWithoutCommunityInput;
  where: PremiumAccessCardWhereUniqueInput;
};

export type PremiumAccessCardUpdateWithWhereUniqueWithoutUserInput = {
  data: PremiumAccessCardUpdateWithoutUserInput;
  where: PremiumAccessCardWhereUniqueInput;
};

export type PremiumAccessCardUpdateWithoutCommunityInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxNumUsed?: InputMaybe<IntFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  usages?: InputMaybe<PremiumAccessCardUpdateusagesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPremiumAccessCardsInput>;
};

export type PremiumAccessCardUpdateWithoutUserInput = {
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutPremiumAccessCardsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxNumUsed?: InputMaybe<IntFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  usages?: InputMaybe<PremiumAccessCardUpdateusagesInput>;
};

export type PremiumAccessCardUpdateusagesInput = {
  push?: InputMaybe<Scalars['DateTime']>;
  set?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type PremiumAccessCardUpsertWithWhereUniqueWithoutCommunityInput = {
  create: PremiumAccessCardCreateWithoutCommunityInput;
  update: PremiumAccessCardUpdateWithoutCommunityInput;
  where: PremiumAccessCardWhereUniqueInput;
};

export type PremiumAccessCardUpsertWithWhereUniqueWithoutUserInput = {
  create: PremiumAccessCardCreateWithoutUserInput;
  update: PremiumAccessCardUpdateWithoutUserInput;
  where: PremiumAccessCardWhereUniqueInput;
};

export type PremiumAccessCardWhereInput = {
  AND?: InputMaybe<Array<PremiumAccessCardWhereInput>>;
  NOT?: InputMaybe<Array<PremiumAccessCardWhereInput>>;
  OR?: InputMaybe<Array<PremiumAccessCardWhereInput>>;
  community?: InputMaybe<CommunityWhereInput>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  maxNumUsed?: InputMaybe<IntFilter>;
  number?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  usages?: InputMaybe<DateTimeNullableListFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type PremiumAccessCardWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  additionalInfo?: Maybe<Scalars['String']>;
  badge?: Maybe<TemplateBadge>;
  badgeId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  community: Community;
  communityId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customReceiptAlias?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  event?: Maybe<Event>;
  fees: ProductFees;
  grossRevenue?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  isDisabled: Scalars['Boolean'];
  limit: Scalars['Int'];
  maxAllowedPurchases?: Maybe<Scalars['Int']>;
  mediaUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  order: Scalars['Int'];
  payees: Scalars['String'];
  price: Scalars['Float'];
  productType: ProductType;
  promocodes: Array<Promocode>;
  publishingStatus: ProductStatus;
  purchases: Array<Purchase>;
  quantity: Scalars['Int'];
  showBeforeStartDate: Scalars['Boolean'];
  soldoutAfter?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status: Scalars['String'];
  styleOverride?: Maybe<Scalars['Json']>;
  totalProcess?: Maybe<Scalars['Int']>;
  totalSold?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  vat: Scalars['Float'];
};


export type ProductPromocodesArgs = {
  cursor?: InputMaybe<PromocodeWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type ProductPurchasesArgs = {
  cursor?: InputMaybe<PurchaseWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PurchaseWhereInput>;
};

export type ProductCreateInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  badge?: InputMaybe<TemplateBadgeCreateNestedOneWithoutProductsInput>;
  code?: InputMaybe<Scalars['String']>;
  community: CommunityCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customReceiptAlias?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutProductsInput>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxAllowedPurchases?: InputMaybe<Scalars['Int']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  payees: Scalars['String'];
  price: Scalars['Float'];
  productType?: InputMaybe<ProductType>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutProductsInput>;
  publishingStatus?: InputMaybe<ProductStatus>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutProductInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  showBeforeStartDate?: InputMaybe<Scalars['Boolean']>;
  soldoutAfter?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vat?: InputMaybe<Scalars['Float']>;
};

export type ProductCreateManyBadgeInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  communityId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customReceiptAlias?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  eventId?: InputMaybe<Scalars['String']>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxAllowedPurchases?: InputMaybe<Scalars['Int']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  payees: Scalars['String'];
  price: Scalars['Float'];
  productType?: InputMaybe<ProductType>;
  publishingStatus?: InputMaybe<ProductStatus>;
  quantity?: InputMaybe<Scalars['Int']>;
  showBeforeStartDate?: InputMaybe<Scalars['Boolean']>;
  soldoutAfter?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vat?: InputMaybe<Scalars['Float']>;
};

export type ProductCreateManyBadgeInputEnvelope = {
  data?: InputMaybe<Array<ProductCreateManyBadgeInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProductCreateManyCommunityInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  badgeId?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customReceiptAlias?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  eventId?: InputMaybe<Scalars['String']>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxAllowedPurchases?: InputMaybe<Scalars['Int']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  payees: Scalars['String'];
  price: Scalars['Float'];
  productType?: InputMaybe<ProductType>;
  publishingStatus?: InputMaybe<ProductStatus>;
  quantity?: InputMaybe<Scalars['Int']>;
  showBeforeStartDate?: InputMaybe<Scalars['Boolean']>;
  soldoutAfter?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vat?: InputMaybe<Scalars['Float']>;
};

export type ProductCreateManyCommunityInputEnvelope = {
  data?: InputMaybe<Array<ProductCreateManyCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProductCreateManyEventInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  badgeId?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  communityId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customReceiptAlias?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxAllowedPurchases?: InputMaybe<Scalars['Int']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  payees: Scalars['String'];
  price: Scalars['Float'];
  productType?: InputMaybe<ProductType>;
  publishingStatus?: InputMaybe<ProductStatus>;
  quantity?: InputMaybe<Scalars['Int']>;
  showBeforeStartDate?: InputMaybe<Scalars['Boolean']>;
  soldoutAfter?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vat?: InputMaybe<Scalars['Float']>;
};

export type ProductCreateManyEventInputEnvelope = {
  data?: InputMaybe<Array<ProductCreateManyEventInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProductCreateNestedManyWithoutBadgeInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutBadgeInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutBadgeInput>>;
  createMany?: InputMaybe<ProductCreateManyBadgeInputEnvelope>;
};

export type ProductCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<ProductCreateManyCommunityInputEnvelope>;
};

export type ProductCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutEventInput>>;
  createMany?: InputMaybe<ProductCreateManyEventInputEnvelope>;
};

export type ProductCreateNestedManyWithoutPromocodesInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutPromocodesInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutPromocodesInput>>;
};

export type ProductCreateNestedOneWithoutPurchasesInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutPurchasesInput>;
  create?: InputMaybe<ProductCreateWithoutPurchasesInput>;
};

export type ProductCreateOrConnectWithoutBadgeInput = {
  create: ProductCreateWithoutBadgeInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutCommunityInput = {
  create: ProductCreateWithoutCommunityInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutEventInput = {
  create: ProductCreateWithoutEventInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutPromocodesInput = {
  create: ProductCreateWithoutPromocodesInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutPurchasesInput = {
  create: ProductCreateWithoutPurchasesInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutBadgeInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  community: CommunityCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customReceiptAlias?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutProductsInput>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxAllowedPurchases?: InputMaybe<Scalars['Int']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  payees: Scalars['String'];
  price: Scalars['Float'];
  productType?: InputMaybe<ProductType>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutProductsInput>;
  publishingStatus?: InputMaybe<ProductStatus>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutProductInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  showBeforeStartDate?: InputMaybe<Scalars['Boolean']>;
  soldoutAfter?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vat?: InputMaybe<Scalars['Float']>;
};

export type ProductCreateWithoutCommunityInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  badge?: InputMaybe<TemplateBadgeCreateNestedOneWithoutProductsInput>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customReceiptAlias?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutProductsInput>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxAllowedPurchases?: InputMaybe<Scalars['Int']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  payees: Scalars['String'];
  price: Scalars['Float'];
  productType?: InputMaybe<ProductType>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutProductsInput>;
  publishingStatus?: InputMaybe<ProductStatus>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutProductInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  showBeforeStartDate?: InputMaybe<Scalars['Boolean']>;
  soldoutAfter?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vat?: InputMaybe<Scalars['Float']>;
};

export type ProductCreateWithoutEventInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  badge?: InputMaybe<TemplateBadgeCreateNestedOneWithoutProductsInput>;
  code?: InputMaybe<Scalars['String']>;
  community: CommunityCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customReceiptAlias?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxAllowedPurchases?: InputMaybe<Scalars['Int']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  payees: Scalars['String'];
  price: Scalars['Float'];
  productType?: InputMaybe<ProductType>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutProductsInput>;
  publishingStatus?: InputMaybe<ProductStatus>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutProductInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  showBeforeStartDate?: InputMaybe<Scalars['Boolean']>;
  soldoutAfter?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vat?: InputMaybe<Scalars['Float']>;
};

export type ProductCreateWithoutPromocodesInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  badge?: InputMaybe<TemplateBadgeCreateNestedOneWithoutProductsInput>;
  code?: InputMaybe<Scalars['String']>;
  community: CommunityCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customReceiptAlias?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutProductsInput>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxAllowedPurchases?: InputMaybe<Scalars['Int']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  payees: Scalars['String'];
  price: Scalars['Float'];
  productType?: InputMaybe<ProductType>;
  publishingStatus?: InputMaybe<ProductStatus>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutProductInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  showBeforeStartDate?: InputMaybe<Scalars['Boolean']>;
  soldoutAfter?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vat?: InputMaybe<Scalars['Float']>;
};

export type ProductCreateWithoutPurchasesInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  badge?: InputMaybe<TemplateBadgeCreateNestedOneWithoutProductsInput>;
  code?: InputMaybe<Scalars['String']>;
  community: CommunityCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customReceiptAlias?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutProductsInput>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxAllowedPurchases?: InputMaybe<Scalars['Int']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  payees: Scalars['String'];
  price: Scalars['Float'];
  productType?: InputMaybe<ProductType>;
  promocodes?: InputMaybe<PromocodeCreateNestedManyWithoutProductsInput>;
  publishingStatus?: InputMaybe<ProductStatus>;
  quantity?: InputMaybe<Scalars['Int']>;
  showBeforeStartDate?: InputMaybe<Scalars['Boolean']>;
  soldoutAfter?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vat?: InputMaybe<Scalars['Float']>;
};

export type ProductFees = {
  __typename?: 'ProductFees';
  Stripe: Scalars['Float'];
  StripeFixed: Scalars['Float'];
  StripePercentage: Scalars['Float'];
  Swish: Scalars['Float'];
  SwishFixed: Scalars['Float'];
  SwishPercentage: Scalars['Float'];
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductOrderByInput = {
  additionalInfo?: InputMaybe<SortOrder>;
  badgeId?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  communityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customReceiptAlias?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  fees?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDisabled?: InputMaybe<SortOrder>;
  limit?: InputMaybe<SortOrder>;
  maxAllowedPurchases?: InputMaybe<SortOrder>;
  mediaUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  payees?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  productType?: InputMaybe<SortOrder>;
  publishingStatus?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  showBeforeStartDate?: InputMaybe<SortOrder>;
  soldoutAfter?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  styleOverride?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  vat?: InputMaybe<SortOrder>;
};

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  additionalInfo?: InputMaybe<StringNullableFilter>;
  badgeId?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<StringNullableFilter>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customReceiptAlias?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  eventId?: InputMaybe<StringNullableFilter>;
  fees?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isDisabled?: InputMaybe<BoolFilter>;
  limit?: InputMaybe<IntFilter>;
  maxAllowedPurchases?: InputMaybe<IntNullableFilter>;
  mediaUrl?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  payees?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  productType?: InputMaybe<EnumProductTypeFilter>;
  publishingStatus?: InputMaybe<EnumProductStatusFilter>;
  quantity?: InputMaybe<IntFilter>;
  showBeforeStartDate?: InputMaybe<BoolFilter>;
  soldoutAfter?: InputMaybe<DateTimeNullableFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  styleOverride?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vat?: InputMaybe<FloatFilter>;
};

export enum ProductStatus {
  CompleteAvailable = 'CompleteAvailable',
  CompleteUnavailable = 'CompleteUnavailable',
  Draft = 'Draft',
  UneditedDraft = 'UneditedDraft'
}

export enum ProductType {
  Accomodation = 'Accomodation',
  Clothing = 'Clothing',
  Ticket = 'Ticket'
}

export type ProductUpdateInput = {
  additionalInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badge?: InputMaybe<TemplateBadgeUpdateOneWithoutProductsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutProductsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customReceiptAlias?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutProductsInput>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDisabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  limit?: InputMaybe<IntFieldUpdateOperationsInput>;
  maxAllowedPurchases?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  payees?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  productType?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutProductsInput>;
  publishingStatus?: InputMaybe<EnumProductStatusFieldUpdateOperationsInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutProductInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  showBeforeStartDate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  soldoutAfter?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vat?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductUpdateManyMutationInput = {
  additionalInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customReceiptAlias?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDisabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  limit?: InputMaybe<IntFieldUpdateOperationsInput>;
  maxAllowedPurchases?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  payees?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  productType?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  publishingStatus?: InputMaybe<EnumProductStatusFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  showBeforeStartDate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  soldoutAfter?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vat?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutBadgeInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutCommunityInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutEventInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutPromocodesInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutBadgeInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutBadgeInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutBadgeInput>>;
  createMany?: InputMaybe<ProductCreateManyBadgeInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutBadgeInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutBadgeInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutBadgeInput>>;
};

export type ProductUpdateManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<ProductCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type ProductUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutEventInput>>;
  createMany?: InputMaybe<ProductCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutEventInput>>;
};

export type ProductUpdateManyWithoutPromocodesInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutPromocodesInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutPromocodesInput>>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutPromocodesInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutPromocodesInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutPromocodesInput>>;
};

export type ProductUpdateOneRequiredWithoutPurchasesInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutPurchasesInput>;
  create?: InputMaybe<ProductCreateWithoutPurchasesInput>;
  update?: InputMaybe<ProductUpdateWithoutPurchasesInput>;
  upsert?: InputMaybe<ProductUpsertWithoutPurchasesInput>;
};

export type ProductUpdateWithWhereUniqueWithoutBadgeInput = {
  data: ProductUpdateWithoutBadgeInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutCommunityInput = {
  data: ProductUpdateWithoutCommunityInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutEventInput = {
  data: ProductUpdateWithoutEventInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutPromocodesInput = {
  data: ProductUpdateWithoutPromocodesInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutBadgeInput = {
  additionalInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutProductsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customReceiptAlias?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutProductsInput>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDisabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  limit?: InputMaybe<IntFieldUpdateOperationsInput>;
  maxAllowedPurchases?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  payees?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  productType?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutProductsInput>;
  publishingStatus?: InputMaybe<EnumProductStatusFieldUpdateOperationsInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutProductInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  showBeforeStartDate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  soldoutAfter?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vat?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutCommunityInput = {
  additionalInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badge?: InputMaybe<TemplateBadgeUpdateOneWithoutProductsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customReceiptAlias?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutProductsInput>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDisabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  limit?: InputMaybe<IntFieldUpdateOperationsInput>;
  maxAllowedPurchases?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  payees?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  productType?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutProductsInput>;
  publishingStatus?: InputMaybe<EnumProductStatusFieldUpdateOperationsInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutProductInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  showBeforeStartDate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  soldoutAfter?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vat?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutEventInput = {
  additionalInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badge?: InputMaybe<TemplateBadgeUpdateOneWithoutProductsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutProductsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customReceiptAlias?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDisabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  limit?: InputMaybe<IntFieldUpdateOperationsInput>;
  maxAllowedPurchases?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  payees?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  productType?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutProductsInput>;
  publishingStatus?: InputMaybe<EnumProductStatusFieldUpdateOperationsInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutProductInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  showBeforeStartDate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  soldoutAfter?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vat?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutPromocodesInput = {
  additionalInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badge?: InputMaybe<TemplateBadgeUpdateOneWithoutProductsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutProductsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customReceiptAlias?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutProductsInput>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDisabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  limit?: InputMaybe<IntFieldUpdateOperationsInput>;
  maxAllowedPurchases?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  payees?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  productType?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  publishingStatus?: InputMaybe<EnumProductStatusFieldUpdateOperationsInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutProductInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  showBeforeStartDate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  soldoutAfter?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vat?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutPurchasesInput = {
  additionalInfo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badge?: InputMaybe<TemplateBadgeUpdateOneWithoutProductsInput>;
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutProductsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customReceiptAlias?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutProductsInput>;
  fees?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDisabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  limit?: InputMaybe<IntFieldUpdateOperationsInput>;
  maxAllowedPurchases?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  payees?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  productType?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  promocodes?: InputMaybe<PromocodeUpdateManyWithoutProductsInput>;
  publishingStatus?: InputMaybe<EnumProductStatusFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  showBeforeStartDate?: InputMaybe<BoolFieldUpdateOperationsInput>;
  soldoutAfter?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  styleOverride?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  vat?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type ProductUpsertWithWhereUniqueWithoutBadgeInput = {
  create: ProductCreateWithoutBadgeInput;
  update: ProductUpdateWithoutBadgeInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutCommunityInput = {
  create: ProductCreateWithoutCommunityInput;
  update: ProductUpdateWithoutCommunityInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutEventInput = {
  create: ProductCreateWithoutEventInput;
  update: ProductUpdateWithoutEventInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutPromocodesInput = {
  create: ProductCreateWithoutPromocodesInput;
  update: ProductUpdateWithoutPromocodesInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithoutPurchasesInput = {
  create: ProductCreateWithoutPurchasesInput;
  update: ProductUpdateWithoutPurchasesInput;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  additionalInfo?: InputMaybe<StringNullableFilter>;
  badge?: InputMaybe<TemplateBadgeWhereInput>;
  badgeId?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<StringNullableFilter>;
  community?: InputMaybe<CommunityWhereInput>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customReceiptAlias?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventWhereInput>;
  eventId?: InputMaybe<StringNullableFilter>;
  fees?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isDisabled?: InputMaybe<BoolFilter>;
  limit?: InputMaybe<IntFilter>;
  maxAllowedPurchases?: InputMaybe<IntNullableFilter>;
  mediaUrl?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  payees?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  productType?: InputMaybe<EnumProductTypeFilter>;
  promocodes?: InputMaybe<PromocodeListRelationFilter>;
  publishingStatus?: InputMaybe<EnumProductStatusFilter>;
  purchases?: InputMaybe<PurchaseListRelationFilter>;
  quantity?: InputMaybe<IntFilter>;
  showBeforeStartDate?: InputMaybe<BoolFilter>;
  soldoutAfter?: InputMaybe<DateTimeNullableFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  styleOverride?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  vat?: InputMaybe<FloatFilter>;
};

export type ProductWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type Promocode = {
  __typename?: 'Promocode';
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  discountFixed: Scalars['Int'];
  discountPercentage: Scalars['Int'];
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  limitPerUser: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  parentCommunity?: Maybe<Community>;
  products: Array<Product>;
  purchases: Array<Purchase>;
  quantity: Scalars['Int'];
  startDate?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};


export type PromocodeProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type PromocodePurchasesArgs = {
  cursor?: InputMaybe<PurchaseWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type PromocodeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discountFixed?: InputMaybe<Scalars['Int']>;
  discountPercentage?: InputMaybe<Scalars['Int']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  limitPerUser?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutPromocodesInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutPromocodesInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutPromocodeInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PromocodeCreateManyParentCommunityInput = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discountFixed?: InputMaybe<Scalars['Int']>;
  discountPercentage?: InputMaybe<Scalars['Int']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  limitPerUser?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PromocodeCreateManyParentCommunityInputEnvelope = {
  data?: InputMaybe<Array<PromocodeCreateManyParentCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PromocodeCreateNestedManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<PromocodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PromocodeCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<PromocodeCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<PromocodeCreateManyParentCommunityInputEnvelope>;
};

export type PromocodeCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<PromocodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PromocodeCreateOrConnectWithoutProductsInput>>;
  create?: InputMaybe<Array<PromocodeCreateWithoutProductsInput>>;
};

export type PromocodeCreateNestedOneWithoutPurchasesInput = {
  connect?: InputMaybe<PromocodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PromocodeCreateOrConnectWithoutPurchasesInput>;
  create?: InputMaybe<PromocodeCreateWithoutPurchasesInput>;
};

export type PromocodeCreateOrConnectWithoutParentCommunityInput = {
  create: PromocodeCreateWithoutParentCommunityInput;
  where: PromocodeWhereUniqueInput;
};

export type PromocodeCreateOrConnectWithoutProductsInput = {
  create: PromocodeCreateWithoutProductsInput;
  where: PromocodeWhereUniqueInput;
};

export type PromocodeCreateOrConnectWithoutPurchasesInput = {
  create: PromocodeCreateWithoutPurchasesInput;
  where: PromocodeWhereUniqueInput;
};

export type PromocodeCreateWithoutParentCommunityInput = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discountFixed?: InputMaybe<Scalars['Int']>;
  discountPercentage?: InputMaybe<Scalars['Int']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  limitPerUser?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutPromocodesInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutPromocodeInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PromocodeCreateWithoutProductsInput = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discountFixed?: InputMaybe<Scalars['Int']>;
  discountPercentage?: InputMaybe<Scalars['Int']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  limitPerUser?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutPromocodesInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutPromocodeInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PromocodeCreateWithoutPurchasesInput = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  discountFixed?: InputMaybe<Scalars['Int']>;
  discountPercentage?: InputMaybe<Scalars['Int']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  limitPerUser?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  parentCommunity?: InputMaybe<CommunityCreateNestedOneWithoutPromocodesInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutPromocodesInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PromocodeListRelationFilter = {
  every?: InputMaybe<PromocodeWhereInput>;
  none?: InputMaybe<PromocodeWhereInput>;
  some?: InputMaybe<PromocodeWhereInput>;
};

export type PromocodeOrderByInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discountFixed?: InputMaybe<SortOrder>;
  discountPercentage?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  limitPerUser?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentCommunityId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PromocodeScalarWhereInput = {
  AND?: InputMaybe<Array<PromocodeScalarWhereInput>>;
  NOT?: InputMaybe<Array<PromocodeScalarWhereInput>>;
  OR?: InputMaybe<Array<PromocodeScalarWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  discountFixed?: InputMaybe<IntFilter>;
  discountPercentage?: InputMaybe<IntFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  limitPerUser?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  parentCommunityId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PromocodeUpdateInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discountFixed?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountPercentage?: InputMaybe<IntFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  limitPerUser?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutPromocodesInput>;
  products?: InputMaybe<ProductUpdateManyWithoutPromocodesInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutPromocodeInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PromocodeUpdateManyMutationInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discountFixed?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountPercentage?: InputMaybe<IntFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  limitPerUser?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PromocodeUpdateManyWithWhereWithoutParentCommunityInput = {
  data: PromocodeUpdateManyMutationInput;
  where: PromocodeScalarWhereInput;
};

export type PromocodeUpdateManyWithWhereWithoutProductsInput = {
  data: PromocodeUpdateManyMutationInput;
  where: PromocodeScalarWhereInput;
};

export type PromocodeUpdateManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<PromocodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PromocodeCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<PromocodeCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<PromocodeCreateManyParentCommunityInputEnvelope>;
  delete?: InputMaybe<Array<PromocodeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PromocodeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PromocodeWhereUniqueInput>>;
  set?: InputMaybe<Array<PromocodeWhereUniqueInput>>;
  update?: InputMaybe<Array<PromocodeUpdateWithWhereUniqueWithoutParentCommunityInput>>;
  updateMany?: InputMaybe<Array<PromocodeUpdateManyWithWhereWithoutParentCommunityInput>>;
  upsert?: InputMaybe<Array<PromocodeUpsertWithWhereUniqueWithoutParentCommunityInput>>;
};

export type PromocodeUpdateManyWithoutProductsInput = {
  connect?: InputMaybe<Array<PromocodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PromocodeCreateOrConnectWithoutProductsInput>>;
  create?: InputMaybe<Array<PromocodeCreateWithoutProductsInput>>;
  delete?: InputMaybe<Array<PromocodeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PromocodeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PromocodeWhereUniqueInput>>;
  set?: InputMaybe<Array<PromocodeWhereUniqueInput>>;
  update?: InputMaybe<Array<PromocodeUpdateWithWhereUniqueWithoutProductsInput>>;
  updateMany?: InputMaybe<Array<PromocodeUpdateManyWithWhereWithoutProductsInput>>;
  upsert?: InputMaybe<Array<PromocodeUpsertWithWhereUniqueWithoutProductsInput>>;
};

export type PromocodeUpdateOneWithoutPurchasesInput = {
  connect?: InputMaybe<PromocodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PromocodeCreateOrConnectWithoutPurchasesInput>;
  create?: InputMaybe<PromocodeCreateWithoutPurchasesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PromocodeUpdateWithoutPurchasesInput>;
  upsert?: InputMaybe<PromocodeUpsertWithoutPurchasesInput>;
};

export type PromocodeUpdateWithWhereUniqueWithoutParentCommunityInput = {
  data: PromocodeUpdateWithoutParentCommunityInput;
  where: PromocodeWhereUniqueInput;
};

export type PromocodeUpdateWithWhereUniqueWithoutProductsInput = {
  data: PromocodeUpdateWithoutProductsInput;
  where: PromocodeWhereUniqueInput;
};

export type PromocodeUpdateWithoutParentCommunityInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discountFixed?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountPercentage?: InputMaybe<IntFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  limitPerUser?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutPromocodesInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutPromocodeInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PromocodeUpdateWithoutProductsInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discountFixed?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountPercentage?: InputMaybe<IntFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  limitPerUser?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutPromocodesInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutPromocodeInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PromocodeUpdateWithoutPurchasesInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  discountFixed?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountPercentage?: InputMaybe<IntFieldUpdateOperationsInput>;
  endDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  limitPerUser?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneWithoutPromocodesInput>;
  products?: InputMaybe<ProductUpdateManyWithoutPromocodesInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PromocodeUpsertWithWhereUniqueWithoutParentCommunityInput = {
  create: PromocodeCreateWithoutParentCommunityInput;
  update: PromocodeUpdateWithoutParentCommunityInput;
  where: PromocodeWhereUniqueInput;
};

export type PromocodeUpsertWithWhereUniqueWithoutProductsInput = {
  create: PromocodeCreateWithoutProductsInput;
  update: PromocodeUpdateWithoutProductsInput;
  where: PromocodeWhereUniqueInput;
};

export type PromocodeUpsertWithoutPurchasesInput = {
  create: PromocodeCreateWithoutPurchasesInput;
  update: PromocodeUpdateWithoutPurchasesInput;
};

export type PromocodeWhereInput = {
  AND?: InputMaybe<Array<PromocodeWhereInput>>;
  NOT?: InputMaybe<Array<PromocodeWhereInput>>;
  OR?: InputMaybe<Array<PromocodeWhereInput>>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  discountFixed?: InputMaybe<IntFilter>;
  discountPercentage?: InputMaybe<IntFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  limitPerUser?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  parentCommunity?: InputMaybe<CommunityWhereInput>;
  parentCommunityId?: InputMaybe<StringNullableFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  purchases?: InputMaybe<PurchaseListRelationFilter>;
  quantity?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PromocodeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Purchase = {
  __typename?: 'Purchase';
  amount: Scalars['Float'];
  badge?: Maybe<ClaimedBadge>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  discount: Scalars['Float'];
  fee: Scalars['Float'];
  fromWeb: Scalars['Boolean'];
  id: Scalars['String'];
  isCheckedIn: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  number: Scalars['Int'];
  owner: User;
  ownerId: Scalars['String'];
  payee?: Maybe<Scalars['String']>;
  paymentMethod: PurchasePaymentMethod;
  product: Product;
  productId: Scalars['String'];
  promocode?: Maybe<Promocode>;
  purchaserId: Scalars['String'];
  sendQR: Scalars['Boolean'];
  status: PurchaseStatus;
  statusMessage?: Maybe<Scalars['String']>;
  transferHistory: Array<PurchaseTransfer>;
  updatedAt: Scalars['DateTime'];
};


export type PurchaseTransferHistoryArgs = {
  cursor?: InputMaybe<PurchaseTransferWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PurchaseTransferWhereInput>;
};

export type PurchaseCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  badge?: InputMaybe<ClaimedBadgeCreateNestedOneWithoutPurchaseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  discount?: InputMaybe<Scalars['Float']>;
  emailSent?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Float']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isCheckedIn?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  owner: UserCreateNestedOneWithoutPurchasesInput;
  payee?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PurchasePaymentMethod>;
  paymentMethodChargeId?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutPurchasesInput;
  promocode?: InputMaybe<PromocodeCreateNestedOneWithoutPurchasesInput>;
  purchaserId?: InputMaybe<Scalars['String']>;
  relatedPurchases?: InputMaybe<PurchaseCreaterelatedPurchasesInput>;
  sendQR?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<PurchaseStatus>;
  statusMessage?: InputMaybe<Scalars['String']>;
  transferHistory?: InputMaybe<PurchaseTransferCreateNestedManyWithoutPurchaseInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseCreateManyOwnerInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  discount?: InputMaybe<Scalars['Float']>;
  emailSent?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Float']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isCheckedIn?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  payee?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PurchasePaymentMethod>;
  paymentMethodChargeId?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  promocodeId?: InputMaybe<Scalars['String']>;
  purchaserId?: InputMaybe<Scalars['String']>;
  relatedPurchases?: InputMaybe<PurchaseCreateManyrelatedPurchasesInput>;
  sendQR?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<PurchaseStatus>;
  statusMessage?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseCreateManyOwnerInputEnvelope = {
  data?: InputMaybe<Array<PurchaseCreateManyOwnerInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PurchaseCreateManyProductInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  discount?: InputMaybe<Scalars['Float']>;
  emailSent?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Float']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isCheckedIn?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  ownerId: Scalars['String'];
  payee?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PurchasePaymentMethod>;
  paymentMethodChargeId?: InputMaybe<Scalars['String']>;
  promocodeId?: InputMaybe<Scalars['String']>;
  purchaserId?: InputMaybe<Scalars['String']>;
  relatedPurchases?: InputMaybe<PurchaseCreateManyrelatedPurchasesInput>;
  sendQR?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<PurchaseStatus>;
  statusMessage?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseCreateManyProductInputEnvelope = {
  data?: InputMaybe<Array<PurchaseCreateManyProductInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PurchaseCreateManyPromocodeInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  discount?: InputMaybe<Scalars['Float']>;
  emailSent?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Float']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isCheckedIn?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  ownerId: Scalars['String'];
  payee?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PurchasePaymentMethod>;
  paymentMethodChargeId?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  purchaserId?: InputMaybe<Scalars['String']>;
  relatedPurchases?: InputMaybe<PurchaseCreateManyrelatedPurchasesInput>;
  sendQR?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<PurchaseStatus>;
  statusMessage?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseCreateManyPromocodeInputEnvelope = {
  data?: InputMaybe<Array<PurchaseCreateManyPromocodeInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PurchaseCreateManyrelatedPurchasesInput = {
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type PurchaseCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PurchaseCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<PurchaseCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<PurchaseCreateManyOwnerInputEnvelope>;
};

export type PurchaseCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PurchaseCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<PurchaseCreateWithoutProductInput>>;
  createMany?: InputMaybe<PurchaseCreateManyProductInputEnvelope>;
};

export type PurchaseCreateNestedManyWithoutPromocodeInput = {
  connect?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PurchaseCreateOrConnectWithoutPromocodeInput>>;
  create?: InputMaybe<Array<PurchaseCreateWithoutPromocodeInput>>;
  createMany?: InputMaybe<PurchaseCreateManyPromocodeInputEnvelope>;
};

export type PurchaseCreateNestedOneWithoutBadgeInput = {
  connect?: InputMaybe<PurchaseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PurchaseCreateOrConnectWithoutBadgeInput>;
  create?: InputMaybe<PurchaseCreateWithoutBadgeInput>;
};

export type PurchaseCreateNestedOneWithoutTransferHistoryInput = {
  connect?: InputMaybe<PurchaseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PurchaseCreateOrConnectWithoutTransferHistoryInput>;
  create?: InputMaybe<PurchaseCreateWithoutTransferHistoryInput>;
};

export type PurchaseCreateOrConnectWithoutBadgeInput = {
  create: PurchaseCreateWithoutBadgeInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseCreateOrConnectWithoutOwnerInput = {
  create: PurchaseCreateWithoutOwnerInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseCreateOrConnectWithoutProductInput = {
  create: PurchaseCreateWithoutProductInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseCreateOrConnectWithoutPromocodeInput = {
  create: PurchaseCreateWithoutPromocodeInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseCreateOrConnectWithoutTransferHistoryInput = {
  create: PurchaseCreateWithoutTransferHistoryInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseCreateWithoutBadgeInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  discount?: InputMaybe<Scalars['Float']>;
  emailSent?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Float']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isCheckedIn?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  owner: UserCreateNestedOneWithoutPurchasesInput;
  payee?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PurchasePaymentMethod>;
  paymentMethodChargeId?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutPurchasesInput;
  promocode?: InputMaybe<PromocodeCreateNestedOneWithoutPurchasesInput>;
  purchaserId?: InputMaybe<Scalars['String']>;
  relatedPurchases?: InputMaybe<PurchaseCreaterelatedPurchasesInput>;
  sendQR?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<PurchaseStatus>;
  statusMessage?: InputMaybe<Scalars['String']>;
  transferHistory?: InputMaybe<PurchaseTransferCreateNestedManyWithoutPurchaseInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseCreateWithoutOwnerInput = {
  amount?: InputMaybe<Scalars['Float']>;
  badge?: InputMaybe<ClaimedBadgeCreateNestedOneWithoutPurchaseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  discount?: InputMaybe<Scalars['Float']>;
  emailSent?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Float']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isCheckedIn?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  payee?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PurchasePaymentMethod>;
  paymentMethodChargeId?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutPurchasesInput;
  promocode?: InputMaybe<PromocodeCreateNestedOneWithoutPurchasesInput>;
  purchaserId?: InputMaybe<Scalars['String']>;
  relatedPurchases?: InputMaybe<PurchaseCreaterelatedPurchasesInput>;
  sendQR?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<PurchaseStatus>;
  statusMessage?: InputMaybe<Scalars['String']>;
  transferHistory?: InputMaybe<PurchaseTransferCreateNestedManyWithoutPurchaseInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseCreateWithoutProductInput = {
  amount?: InputMaybe<Scalars['Float']>;
  badge?: InputMaybe<ClaimedBadgeCreateNestedOneWithoutPurchaseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  discount?: InputMaybe<Scalars['Float']>;
  emailSent?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Float']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isCheckedIn?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  owner: UserCreateNestedOneWithoutPurchasesInput;
  payee?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PurchasePaymentMethod>;
  paymentMethodChargeId?: InputMaybe<Scalars['String']>;
  promocode?: InputMaybe<PromocodeCreateNestedOneWithoutPurchasesInput>;
  purchaserId?: InputMaybe<Scalars['String']>;
  relatedPurchases?: InputMaybe<PurchaseCreaterelatedPurchasesInput>;
  sendQR?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<PurchaseStatus>;
  statusMessage?: InputMaybe<Scalars['String']>;
  transferHistory?: InputMaybe<PurchaseTransferCreateNestedManyWithoutPurchaseInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseCreateWithoutPromocodeInput = {
  amount?: InputMaybe<Scalars['Float']>;
  badge?: InputMaybe<ClaimedBadgeCreateNestedOneWithoutPurchaseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  discount?: InputMaybe<Scalars['Float']>;
  emailSent?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Float']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isCheckedIn?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  owner: UserCreateNestedOneWithoutPurchasesInput;
  payee?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PurchasePaymentMethod>;
  paymentMethodChargeId?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutPurchasesInput;
  purchaserId?: InputMaybe<Scalars['String']>;
  relatedPurchases?: InputMaybe<PurchaseCreaterelatedPurchasesInput>;
  sendQR?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<PurchaseStatus>;
  statusMessage?: InputMaybe<Scalars['String']>;
  transferHistory?: InputMaybe<PurchaseTransferCreateNestedManyWithoutPurchaseInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseCreateWithoutTransferHistoryInput = {
  amount?: InputMaybe<Scalars['Float']>;
  badge?: InputMaybe<ClaimedBadgeCreateNestedOneWithoutPurchaseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<SupportedCurrencies>;
  discount?: InputMaybe<Scalars['Float']>;
  emailSent?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Float']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isCheckedIn?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  owner: UserCreateNestedOneWithoutPurchasesInput;
  payee?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PurchasePaymentMethod>;
  paymentMethodChargeId?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutPurchasesInput;
  promocode?: InputMaybe<PromocodeCreateNestedOneWithoutPurchasesInput>;
  purchaserId?: InputMaybe<Scalars['String']>;
  relatedPurchases?: InputMaybe<PurchaseCreaterelatedPurchasesInput>;
  sendQR?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<PurchaseStatus>;
  statusMessage?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseCreaterelatedPurchasesInput = {
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type PurchaseListRelationFilter = {
  every?: InputMaybe<PurchaseWhereInput>;
  none?: InputMaybe<PurchaseWhereInput>;
  some?: InputMaybe<PurchaseWhereInput>;
};

export type PurchaseOrderByInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  currency?: InputMaybe<SortOrder>;
  discount?: InputMaybe<SortOrder>;
  emailSent?: InputMaybe<SortOrder>;
  fee?: InputMaybe<SortOrder>;
  fromWeb?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCheckedIn?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  payee?: InputMaybe<SortOrder>;
  paymentMethod?: InputMaybe<SortOrder>;
  paymentMethodChargeId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  promocodeId?: InputMaybe<SortOrder>;
  purchaserId?: InputMaybe<SortOrder>;
  relatedPurchases?: InputMaybe<SortOrder>;
  sendQR?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  statusMessage?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PurchasePaymentMethod {
  Stripe = 'Stripe',
  Swish = 'Swish'
}

export type PurchaseScalarWhereInput = {
  AND?: InputMaybe<Array<PurchaseScalarWhereInput>>;
  NOT?: InputMaybe<Array<PurchaseScalarWhereInput>>;
  OR?: InputMaybe<Array<PurchaseScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currency?: InputMaybe<EnumSupportedCurrenciesFilter>;
  discount?: InputMaybe<FloatFilter>;
  emailSent?: InputMaybe<BoolFilter>;
  fee?: InputMaybe<FloatFilter>;
  fromWeb?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  isCheckedIn?: InputMaybe<BoolFilter>;
  message?: InputMaybe<StringNullableFilter>;
  number?: InputMaybe<IntFilter>;
  ownerId?: InputMaybe<StringFilter>;
  payee?: InputMaybe<StringNullableFilter>;
  paymentMethod?: InputMaybe<EnumPurchasePaymentMethodFilter>;
  paymentMethodChargeId?: InputMaybe<StringNullableFilter>;
  productId?: InputMaybe<StringFilter>;
  promocodeId?: InputMaybe<StringNullableFilter>;
  purchaserId?: InputMaybe<StringFilter>;
  relatedPurchases?: InputMaybe<StringNullableListFilter>;
  sendQR?: InputMaybe<BoolFilter>;
  status?: InputMaybe<EnumPurchaseStatusFilter>;
  statusMessage?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum PurchaseStatus {
  Failed = 'Failed',
  Paid = 'Paid',
  Processing = 'Processing'
}

export type PurchaseTransfer = {
  __typename?: 'PurchaseTransfer';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  purchase?: Maybe<Purchase>;
  recipient?: Maybe<User>;
  sender: User;
  updatedAt: Scalars['DateTime'];
};

export type PurchaseTransferCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  purchase?: InputMaybe<PurchaseCreateNestedOneWithoutTransferHistoryInput>;
  recipient?: InputMaybe<UserCreateNestedOneWithoutPurchaseTransfersWhereRecipientInput>;
  sender: UserCreateNestedOneWithoutPurchaseTransfersWhereSenderInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseTransferCreateManyPurchaseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  recipientId?: InputMaybe<Scalars['String']>;
  senderId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseTransferCreateManyPurchaseInputEnvelope = {
  data?: InputMaybe<Array<PurchaseTransferCreateManyPurchaseInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PurchaseTransferCreateManyRecipientInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  purchaseId?: InputMaybe<Scalars['String']>;
  senderId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseTransferCreateManyRecipientInputEnvelope = {
  data?: InputMaybe<Array<PurchaseTransferCreateManyRecipientInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PurchaseTransferCreateManySenderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  purchaseId?: InputMaybe<Scalars['String']>;
  recipientId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseTransferCreateManySenderInputEnvelope = {
  data?: InputMaybe<Array<PurchaseTransferCreateManySenderInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PurchaseTransferCreateNestedManyWithoutPurchaseInput = {
  connect?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PurchaseTransferCreateOrConnectWithoutPurchaseInput>>;
  create?: InputMaybe<Array<PurchaseTransferCreateWithoutPurchaseInput>>;
  createMany?: InputMaybe<PurchaseTransferCreateManyPurchaseInputEnvelope>;
};

export type PurchaseTransferCreateNestedManyWithoutRecipientInput = {
  connect?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PurchaseTransferCreateOrConnectWithoutRecipientInput>>;
  create?: InputMaybe<Array<PurchaseTransferCreateWithoutRecipientInput>>;
  createMany?: InputMaybe<PurchaseTransferCreateManyRecipientInputEnvelope>;
};

export type PurchaseTransferCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PurchaseTransferCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<PurchaseTransferCreateWithoutSenderInput>>;
  createMany?: InputMaybe<PurchaseTransferCreateManySenderInputEnvelope>;
};

export type PurchaseTransferCreateOrConnectWithoutPurchaseInput = {
  create: PurchaseTransferCreateWithoutPurchaseInput;
  where: PurchaseTransferWhereUniqueInput;
};

export type PurchaseTransferCreateOrConnectWithoutRecipientInput = {
  create: PurchaseTransferCreateWithoutRecipientInput;
  where: PurchaseTransferWhereUniqueInput;
};

export type PurchaseTransferCreateOrConnectWithoutSenderInput = {
  create: PurchaseTransferCreateWithoutSenderInput;
  where: PurchaseTransferWhereUniqueInput;
};

export type PurchaseTransferCreateWithoutPurchaseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  recipient?: InputMaybe<UserCreateNestedOneWithoutPurchaseTransfersWhereRecipientInput>;
  sender: UserCreateNestedOneWithoutPurchaseTransfersWhereSenderInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseTransferCreateWithoutRecipientInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  purchase?: InputMaybe<PurchaseCreateNestedOneWithoutTransferHistoryInput>;
  sender: UserCreateNestedOneWithoutPurchaseTransfersWhereSenderInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseTransferCreateWithoutSenderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  purchase?: InputMaybe<PurchaseCreateNestedOneWithoutTransferHistoryInput>;
  recipient?: InputMaybe<UserCreateNestedOneWithoutPurchaseTransfersWhereRecipientInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PurchaseTransferListRelationFilter = {
  every?: InputMaybe<PurchaseTransferWhereInput>;
  none?: InputMaybe<PurchaseTransferWhereInput>;
  some?: InputMaybe<PurchaseTransferWhereInput>;
};

export type PurchaseTransferOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  purchaseId?: InputMaybe<SortOrder>;
  recipientId?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PurchaseTransferScalarWhereInput = {
  AND?: InputMaybe<Array<PurchaseTransferScalarWhereInput>>;
  NOT?: InputMaybe<Array<PurchaseTransferScalarWhereInput>>;
  OR?: InputMaybe<Array<PurchaseTransferScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  purchaseId?: InputMaybe<StringNullableFilter>;
  recipientId?: InputMaybe<StringNullableFilter>;
  senderId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PurchaseTransferUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchase?: InputMaybe<PurchaseUpdateOneWithoutTransferHistoryInput>;
  recipient?: InputMaybe<UserUpdateOneWithoutPurchaseTransfersWhereRecipientInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutPurchaseTransfersWhereSenderInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PurchaseTransferUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PurchaseTransferUpdateManyWithWhereWithoutPurchaseInput = {
  data: PurchaseTransferUpdateManyMutationInput;
  where: PurchaseTransferScalarWhereInput;
};

export type PurchaseTransferUpdateManyWithWhereWithoutRecipientInput = {
  data: PurchaseTransferUpdateManyMutationInput;
  where: PurchaseTransferScalarWhereInput;
};

export type PurchaseTransferUpdateManyWithWhereWithoutSenderInput = {
  data: PurchaseTransferUpdateManyMutationInput;
  where: PurchaseTransferScalarWhereInput;
};

export type PurchaseTransferUpdateManyWithoutPurchaseInput = {
  connect?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PurchaseTransferCreateOrConnectWithoutPurchaseInput>>;
  create?: InputMaybe<Array<PurchaseTransferCreateWithoutPurchaseInput>>;
  createMany?: InputMaybe<PurchaseTransferCreateManyPurchaseInputEnvelope>;
  delete?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PurchaseTransferScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  set?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  update?: InputMaybe<Array<PurchaseTransferUpdateWithWhereUniqueWithoutPurchaseInput>>;
  updateMany?: InputMaybe<Array<PurchaseTransferUpdateManyWithWhereWithoutPurchaseInput>>;
  upsert?: InputMaybe<Array<PurchaseTransferUpsertWithWhereUniqueWithoutPurchaseInput>>;
};

export type PurchaseTransferUpdateManyWithoutRecipientInput = {
  connect?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PurchaseTransferCreateOrConnectWithoutRecipientInput>>;
  create?: InputMaybe<Array<PurchaseTransferCreateWithoutRecipientInput>>;
  createMany?: InputMaybe<PurchaseTransferCreateManyRecipientInputEnvelope>;
  delete?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PurchaseTransferScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  set?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  update?: InputMaybe<Array<PurchaseTransferUpdateWithWhereUniqueWithoutRecipientInput>>;
  updateMany?: InputMaybe<Array<PurchaseTransferUpdateManyWithWhereWithoutRecipientInput>>;
  upsert?: InputMaybe<Array<PurchaseTransferUpsertWithWhereUniqueWithoutRecipientInput>>;
};

export type PurchaseTransferUpdateManyWithoutSenderInput = {
  connect?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PurchaseTransferCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<PurchaseTransferCreateWithoutSenderInput>>;
  createMany?: InputMaybe<PurchaseTransferCreateManySenderInputEnvelope>;
  delete?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PurchaseTransferScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  set?: InputMaybe<Array<PurchaseTransferWhereUniqueInput>>;
  update?: InputMaybe<Array<PurchaseTransferUpdateWithWhereUniqueWithoutSenderInput>>;
  updateMany?: InputMaybe<Array<PurchaseTransferUpdateManyWithWhereWithoutSenderInput>>;
  upsert?: InputMaybe<Array<PurchaseTransferUpsertWithWhereUniqueWithoutSenderInput>>;
};

export type PurchaseTransferUpdateWithWhereUniqueWithoutPurchaseInput = {
  data: PurchaseTransferUpdateWithoutPurchaseInput;
  where: PurchaseTransferWhereUniqueInput;
};

export type PurchaseTransferUpdateWithWhereUniqueWithoutRecipientInput = {
  data: PurchaseTransferUpdateWithoutRecipientInput;
  where: PurchaseTransferWhereUniqueInput;
};

export type PurchaseTransferUpdateWithWhereUniqueWithoutSenderInput = {
  data: PurchaseTransferUpdateWithoutSenderInput;
  where: PurchaseTransferWhereUniqueInput;
};

export type PurchaseTransferUpdateWithoutPurchaseInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipient?: InputMaybe<UserUpdateOneWithoutPurchaseTransfersWhereRecipientInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutPurchaseTransfersWhereSenderInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PurchaseTransferUpdateWithoutRecipientInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchase?: InputMaybe<PurchaseUpdateOneWithoutTransferHistoryInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutPurchaseTransfersWhereSenderInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PurchaseTransferUpdateWithoutSenderInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  purchase?: InputMaybe<PurchaseUpdateOneWithoutTransferHistoryInput>;
  recipient?: InputMaybe<UserUpdateOneWithoutPurchaseTransfersWhereRecipientInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PurchaseTransferUpsertWithWhereUniqueWithoutPurchaseInput = {
  create: PurchaseTransferCreateWithoutPurchaseInput;
  update: PurchaseTransferUpdateWithoutPurchaseInput;
  where: PurchaseTransferWhereUniqueInput;
};

export type PurchaseTransferUpsertWithWhereUniqueWithoutRecipientInput = {
  create: PurchaseTransferCreateWithoutRecipientInput;
  update: PurchaseTransferUpdateWithoutRecipientInput;
  where: PurchaseTransferWhereUniqueInput;
};

export type PurchaseTransferUpsertWithWhereUniqueWithoutSenderInput = {
  create: PurchaseTransferCreateWithoutSenderInput;
  update: PurchaseTransferUpdateWithoutSenderInput;
  where: PurchaseTransferWhereUniqueInput;
};

export type PurchaseTransferWhereInput = {
  AND?: InputMaybe<Array<PurchaseTransferWhereInput>>;
  NOT?: InputMaybe<Array<PurchaseTransferWhereInput>>;
  OR?: InputMaybe<Array<PurchaseTransferWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  purchase?: InputMaybe<PurchaseWhereInput>;
  purchaseId?: InputMaybe<StringNullableFilter>;
  recipient?: InputMaybe<UserWhereInput>;
  recipientId?: InputMaybe<StringNullableFilter>;
  sender?: InputMaybe<UserWhereInput>;
  senderId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PurchaseTransferWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PurchaseUpdateInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  badge?: InputMaybe<ClaimedBadgeUpdateOneWithoutPurchaseInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  discount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  emailSent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fee?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCheckedIn?: InputMaybe<BoolFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutPurchasesInput>;
  payee?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<EnumPurchasePaymentMethodFieldUpdateOperationsInput>;
  paymentMethodChargeId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutPurchasesInput>;
  promocode?: InputMaybe<PromocodeUpdateOneWithoutPurchasesInput>;
  purchaserId?: InputMaybe<StringFieldUpdateOperationsInput>;
  relatedPurchases?: InputMaybe<PurchaseUpdaterelatedPurchasesInput>;
  sendQR?: InputMaybe<BoolFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPurchaseStatusFieldUpdateOperationsInput>;
  statusMessage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  transferHistory?: InputMaybe<PurchaseTransferUpdateManyWithoutPurchaseInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PurchaseUpdateManyMutationInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  discount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  emailSent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fee?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCheckedIn?: InputMaybe<BoolFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  payee?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<EnumPurchasePaymentMethodFieldUpdateOperationsInput>;
  paymentMethodChargeId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  purchaserId?: InputMaybe<StringFieldUpdateOperationsInput>;
  relatedPurchases?: InputMaybe<PurchaseUpdaterelatedPurchasesInput>;
  sendQR?: InputMaybe<BoolFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPurchaseStatusFieldUpdateOperationsInput>;
  statusMessage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PurchaseUpdateManyWithWhereWithoutOwnerInput = {
  data: PurchaseUpdateManyMutationInput;
  where: PurchaseScalarWhereInput;
};

export type PurchaseUpdateManyWithWhereWithoutProductInput = {
  data: PurchaseUpdateManyMutationInput;
  where: PurchaseScalarWhereInput;
};

export type PurchaseUpdateManyWithWhereWithoutPromocodeInput = {
  data: PurchaseUpdateManyMutationInput;
  where: PurchaseScalarWhereInput;
};

export type PurchaseUpdateManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PurchaseCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<PurchaseCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<PurchaseCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PurchaseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  set?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  update?: InputMaybe<Array<PurchaseUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: InputMaybe<Array<PurchaseUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: InputMaybe<Array<PurchaseUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type PurchaseUpdateManyWithoutProductInput = {
  connect?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PurchaseCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<PurchaseCreateWithoutProductInput>>;
  createMany?: InputMaybe<PurchaseCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PurchaseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  set?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  update?: InputMaybe<Array<PurchaseUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<PurchaseUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<PurchaseUpsertWithWhereUniqueWithoutProductInput>>;
};

export type PurchaseUpdateManyWithoutPromocodeInput = {
  connect?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PurchaseCreateOrConnectWithoutPromocodeInput>>;
  create?: InputMaybe<Array<PurchaseCreateWithoutPromocodeInput>>;
  createMany?: InputMaybe<PurchaseCreateManyPromocodeInputEnvelope>;
  delete?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PurchaseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  set?: InputMaybe<Array<PurchaseWhereUniqueInput>>;
  update?: InputMaybe<Array<PurchaseUpdateWithWhereUniqueWithoutPromocodeInput>>;
  updateMany?: InputMaybe<Array<PurchaseUpdateManyWithWhereWithoutPromocodeInput>>;
  upsert?: InputMaybe<Array<PurchaseUpsertWithWhereUniqueWithoutPromocodeInput>>;
};

export type PurchaseUpdateOneWithoutBadgeInput = {
  connect?: InputMaybe<PurchaseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PurchaseCreateOrConnectWithoutBadgeInput>;
  create?: InputMaybe<PurchaseCreateWithoutBadgeInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PurchaseUpdateWithoutBadgeInput>;
  upsert?: InputMaybe<PurchaseUpsertWithoutBadgeInput>;
};

export type PurchaseUpdateOneWithoutTransferHistoryInput = {
  connect?: InputMaybe<PurchaseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PurchaseCreateOrConnectWithoutTransferHistoryInput>;
  create?: InputMaybe<PurchaseCreateWithoutTransferHistoryInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PurchaseUpdateWithoutTransferHistoryInput>;
  upsert?: InputMaybe<PurchaseUpsertWithoutTransferHistoryInput>;
};

export type PurchaseUpdateWithWhereUniqueWithoutOwnerInput = {
  data: PurchaseUpdateWithoutOwnerInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseUpdateWithWhereUniqueWithoutProductInput = {
  data: PurchaseUpdateWithoutProductInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseUpdateWithWhereUniqueWithoutPromocodeInput = {
  data: PurchaseUpdateWithoutPromocodeInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseUpdateWithoutBadgeInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  discount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  emailSent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fee?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCheckedIn?: InputMaybe<BoolFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutPurchasesInput>;
  payee?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<EnumPurchasePaymentMethodFieldUpdateOperationsInput>;
  paymentMethodChargeId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutPurchasesInput>;
  promocode?: InputMaybe<PromocodeUpdateOneWithoutPurchasesInput>;
  purchaserId?: InputMaybe<StringFieldUpdateOperationsInput>;
  relatedPurchases?: InputMaybe<PurchaseUpdaterelatedPurchasesInput>;
  sendQR?: InputMaybe<BoolFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPurchaseStatusFieldUpdateOperationsInput>;
  statusMessage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  transferHistory?: InputMaybe<PurchaseTransferUpdateManyWithoutPurchaseInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PurchaseUpdateWithoutOwnerInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  badge?: InputMaybe<ClaimedBadgeUpdateOneWithoutPurchaseInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  discount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  emailSent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fee?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCheckedIn?: InputMaybe<BoolFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  payee?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<EnumPurchasePaymentMethodFieldUpdateOperationsInput>;
  paymentMethodChargeId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutPurchasesInput>;
  promocode?: InputMaybe<PromocodeUpdateOneWithoutPurchasesInput>;
  purchaserId?: InputMaybe<StringFieldUpdateOperationsInput>;
  relatedPurchases?: InputMaybe<PurchaseUpdaterelatedPurchasesInput>;
  sendQR?: InputMaybe<BoolFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPurchaseStatusFieldUpdateOperationsInput>;
  statusMessage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  transferHistory?: InputMaybe<PurchaseTransferUpdateManyWithoutPurchaseInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PurchaseUpdateWithoutProductInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  badge?: InputMaybe<ClaimedBadgeUpdateOneWithoutPurchaseInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  discount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  emailSent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fee?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCheckedIn?: InputMaybe<BoolFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutPurchasesInput>;
  payee?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<EnumPurchasePaymentMethodFieldUpdateOperationsInput>;
  paymentMethodChargeId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  promocode?: InputMaybe<PromocodeUpdateOneWithoutPurchasesInput>;
  purchaserId?: InputMaybe<StringFieldUpdateOperationsInput>;
  relatedPurchases?: InputMaybe<PurchaseUpdaterelatedPurchasesInput>;
  sendQR?: InputMaybe<BoolFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPurchaseStatusFieldUpdateOperationsInput>;
  statusMessage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  transferHistory?: InputMaybe<PurchaseTransferUpdateManyWithoutPurchaseInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PurchaseUpdateWithoutPromocodeInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  badge?: InputMaybe<ClaimedBadgeUpdateOneWithoutPurchaseInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  discount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  emailSent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fee?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCheckedIn?: InputMaybe<BoolFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutPurchasesInput>;
  payee?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<EnumPurchasePaymentMethodFieldUpdateOperationsInput>;
  paymentMethodChargeId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutPurchasesInput>;
  purchaserId?: InputMaybe<StringFieldUpdateOperationsInput>;
  relatedPurchases?: InputMaybe<PurchaseUpdaterelatedPurchasesInput>;
  sendQR?: InputMaybe<BoolFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPurchaseStatusFieldUpdateOperationsInput>;
  statusMessage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  transferHistory?: InputMaybe<PurchaseTransferUpdateManyWithoutPurchaseInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PurchaseUpdateWithoutTransferHistoryInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  badge?: InputMaybe<ClaimedBadgeUpdateOneWithoutPurchaseInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<EnumSupportedCurrenciesFieldUpdateOperationsInput>;
  discount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  emailSent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fee?: InputMaybe<FloatFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCheckedIn?: InputMaybe<BoolFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutPurchasesInput>;
  payee?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: InputMaybe<EnumPurchasePaymentMethodFieldUpdateOperationsInput>;
  paymentMethodChargeId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutPurchasesInput>;
  promocode?: InputMaybe<PromocodeUpdateOneWithoutPurchasesInput>;
  purchaserId?: InputMaybe<StringFieldUpdateOperationsInput>;
  relatedPurchases?: InputMaybe<PurchaseUpdaterelatedPurchasesInput>;
  sendQR?: InputMaybe<BoolFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumPurchaseStatusFieldUpdateOperationsInput>;
  statusMessage?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PurchaseUpdaterelatedPurchasesInput = {
  push?: InputMaybe<Scalars['String']>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type PurchaseUpsertWithWhereUniqueWithoutOwnerInput = {
  create: PurchaseCreateWithoutOwnerInput;
  update: PurchaseUpdateWithoutOwnerInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseUpsertWithWhereUniqueWithoutProductInput = {
  create: PurchaseCreateWithoutProductInput;
  update: PurchaseUpdateWithoutProductInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseUpsertWithWhereUniqueWithoutPromocodeInput = {
  create: PurchaseCreateWithoutPromocodeInput;
  update: PurchaseUpdateWithoutPromocodeInput;
  where: PurchaseWhereUniqueInput;
};

export type PurchaseUpsertWithoutBadgeInput = {
  create: PurchaseCreateWithoutBadgeInput;
  update: PurchaseUpdateWithoutBadgeInput;
};

export type PurchaseUpsertWithoutTransferHistoryInput = {
  create: PurchaseCreateWithoutTransferHistoryInput;
  update: PurchaseUpdateWithoutTransferHistoryInput;
};

export type PurchaseWhereInput = {
  AND?: InputMaybe<Array<PurchaseWhereInput>>;
  NOT?: InputMaybe<Array<PurchaseWhereInput>>;
  OR?: InputMaybe<Array<PurchaseWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  badge?: InputMaybe<ClaimedBadgeWhereInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currency?: InputMaybe<EnumSupportedCurrenciesFilter>;
  discount?: InputMaybe<FloatFilter>;
  emailSent?: InputMaybe<BoolFilter>;
  fee?: InputMaybe<FloatFilter>;
  fromWeb?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  isCheckedIn?: InputMaybe<BoolFilter>;
  message?: InputMaybe<StringNullableFilter>;
  number?: InputMaybe<IntFilter>;
  owner?: InputMaybe<UserWhereInput>;
  ownerId?: InputMaybe<StringFilter>;
  payee?: InputMaybe<StringNullableFilter>;
  paymentMethod?: InputMaybe<EnumPurchasePaymentMethodFilter>;
  paymentMethodChargeId?: InputMaybe<StringNullableFilter>;
  product?: InputMaybe<ProductWhereInput>;
  productId?: InputMaybe<StringFilter>;
  promocode?: InputMaybe<PromocodeWhereInput>;
  promocodeId?: InputMaybe<StringNullableFilter>;
  purchaserId?: InputMaybe<StringFilter>;
  relatedPurchases?: InputMaybe<StringNullableListFilter>;
  sendQR?: InputMaybe<BoolFilter>;
  status?: InputMaybe<EnumPurchaseStatusFilter>;
  statusMessage?: InputMaybe<StringNullableFilter>;
  transferHistory?: InputMaybe<PurchaseTransferListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PurchaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PurchasesResponse = {
  __typename?: 'PurchasesResponse';
  errors?: Maybe<Array<Maybe<TranslatableError>>>;
  purchases?: Maybe<Array<Maybe<Purchase>>>;
};

export type Query = {
  __typename?: 'Query';
  adminActivityEvent?: Maybe<ActivityEvent>;
  adminActivityEvents: Array<ActivityEvent>;
  adminActivityEventsCount?: Maybe<Scalars['Int']>;
  adminCatalogItem?: Maybe<CatalogItem>;
  adminCatalogItemCategories: Array<CatalogItemCategory>;
  adminCatalogItemCategoriesCount?: Maybe<Scalars['Int']>;
  adminCatalogItemCategory?: Maybe<CatalogItemCategory>;
  adminCatalogItemSchedule?: Maybe<CatalogItemSchedule>;
  adminCatalogItemSchedules: Array<CatalogItemSchedule>;
  adminCatalogItemSchedulesCount?: Maybe<Scalars['Int']>;
  adminCatalogItems: Array<CatalogItem>;
  adminCatalogItemsCount?: Maybe<Scalars['Int']>;
  adminClaimedBadge?: Maybe<ClaimedBadge>;
  adminClaimedBadges: Array<ClaimedBadge>;
  adminClaimedBadgesCount?: Maybe<Scalars['Int']>;
  adminCommunities: Array<Community>;
  adminCommunitiesCount?: Maybe<Scalars['Int']>;
  adminCommunity?: Maybe<Community>;
  adminCommunityMemberInfo?: Maybe<CommunityMemberInfo>;
  adminCommunityMemberInfos: Array<CommunityMemberInfo>;
  adminCommunityMemberInfosCount?: Maybe<Scalars['Int']>;
  adminCommunitySuggestion?: Maybe<CommunitySuggestion>;
  adminCommunitySuggestions: Array<CommunitySuggestion>;
  adminCommunitySuggestionsCount?: Maybe<Scalars['Int']>;
  adminDiscoverCard?: Maybe<DiscoverCard>;
  adminDiscoverCards: Array<DiscoverCard>;
  adminDiscoverCardsCount?: Maybe<Scalars['Int']>;
  adminEvent?: Maybe<Event>;
  adminEventCategories: Array<EventCategory>;
  adminEventCategoriesCount?: Maybe<Scalars['Int']>;
  adminEventCategory?: Maybe<EventCategory>;
  adminEventDetail?: Maybe<EventDetail>;
  adminEventDetails: Array<EventDetail>;
  adminEventDetailsCount?: Maybe<Scalars['Int']>;
  adminEvents: Array<Event>;
  adminEventsCount?: Maybe<Scalars['Int']>;
  adminFaqCategories: Array<FaqCategory>;
  adminFaqCategoriesCount?: Maybe<Scalars['Int']>;
  adminFaqCategory?: Maybe<FaqCategory>;
  adminFaqItem?: Maybe<FaqItem>;
  adminFaqItems: Array<FaqItem>;
  adminFaqItemsCount?: Maybe<Scalars['Int']>;
  adminFeedCategories: Array<FeedCategory>;
  adminFeedCategoriesCount?: Maybe<Scalars['Int']>;
  adminFeedCategory?: Maybe<FeedCategory>;
  adminFeedItem?: Maybe<FeedItem>;
  adminFeedItems: Array<FeedItem>;
  adminFeedItemsCount?: Maybe<Scalars['Int']>;
  adminHighlight?: Maybe<Highlight>;
  adminHighlights: Array<Highlight>;
  adminHighlightsCount?: Maybe<Scalars['Int']>;
  adminInterestTag?: Maybe<InterestTag>;
  adminInterestTags: Array<InterestTag>;
  adminInterestTagsCount?: Maybe<Scalars['Int']>;
  adminInviteCode?: Maybe<InviteCode>;
  adminInviteCodes: Array<InviteCode>;
  adminInviteCodesCount?: Maybe<Scalars['Int']>;
  adminListEventInfo?: Maybe<Array<Maybe<EventInfoSection>>>;
  adminMassMessage?: Maybe<MassMessage>;
  adminMassMessages: Array<MassMessage>;
  adminMassMessagesCount?: Maybe<Scalars['Int']>;
  adminPayout?: Maybe<Payout>;
  adminPayouts: Array<Payout>;
  adminPayoutsCount?: Maybe<Scalars['Int']>;
  adminPremiumAccessCard?: Maybe<PremiumAccessCard>;
  adminPremiumAccessCards: Array<PremiumAccessCard>;
  adminPremiumAccessCardsCount?: Maybe<Scalars['Int']>;
  adminProduct?: Maybe<Product>;
  adminProducts: Array<Product>;
  adminProductsCount?: Maybe<Scalars['Int']>;
  adminPromocode?: Maybe<Promocode>;
  adminPromocodes: Array<Promocode>;
  adminPromocodesCount?: Maybe<Scalars['Int']>;
  adminPurchase?: Maybe<Purchase>;
  adminPurchaseTransfer?: Maybe<PurchaseTransfer>;
  adminPurchaseTransfers: Array<PurchaseTransfer>;
  adminPurchaseTransfersCount?: Maybe<Scalars['Int']>;
  adminPurchases: Array<Purchase>;
  adminPurchasesCount?: Maybe<Scalars['Int']>;
  adminTalksMessage?: Maybe<TalksMessage>;
  adminTalksMessages: Array<TalksMessage>;
  adminTalksMessagesCount?: Maybe<Scalars['Int']>;
  adminTemplateBadge?: Maybe<TemplateBadge>;
  adminTemplateBadges: Array<TemplateBadge>;
  adminTemplateBadgesCount?: Maybe<Scalars['Int']>;
  adminTrack?: Maybe<Track>;
  adminTracks: Array<Track>;
  adminTracksCount?: Maybe<Scalars['Int']>;
  adminUser?: Maybe<User>;
  adminUsers: Array<User>;
  adminUsersCount?: Maybe<Scalars['Int']>;
  adminWaitlistUser?: Maybe<WaitlistUser>;
  adminWaitlistUsers: Array<WaitlistUser>;
  adminWaitlistUsersCount?: Maybe<Scalars['Int']>;
  caCommunities?: Maybe<Array<Maybe<Event>>>;
  caDashboard?: Maybe<CaDashboardResponse>;
  caEvent?: Maybe<CaEventResponse>;
  caEventTicketsActivity?: Maybe<CaEventTicketsActivityResponse>;
  caEvents?: Maybe<Array<Maybe<Event>>>;
  caFinancesOverview?: Maybe<CaFinancesOverviewResponse>;
  caFinancesPayouts?: Maybe<CaFinancesPayoutsResponse>;
  caStripeAccountInfo?: Maybe<CaStripeAccountInfoPayload>;
  catalogItemCategories: Array<CatalogItemCategory>;
  catalogItemSchedules: Array<CatalogItemSchedule>;
  catalogItems: Array<CatalogItem>;
  claimedBadges: Array<ClaimedBadge>;
  communities: Array<Community>;
  community?: Maybe<Community>;
  communitySuggestions: Array<CommunitySuggestion>;
  discoverCards: Array<DiscoverCard>;
  event?: Maybe<Event>;
  eventDetails: Array<EventDetail>;
  events: Array<Event>;
  faqCategories: Array<FaqCategory>;
  faqItems: Array<FaqItem>;
  feedCategories: Array<FeedCategory>;
  feedItem?: Maybe<FeedItem>;
  feedItems: Array<FeedItem>;
  highlights: Array<Highlight>;
  interestTags: Array<InterestTag>;
  inventory?: Maybe<InventoryReturnType>;
  inviteCode?: Maybe<InviteCode>;
  inviteCodes: Array<InviteCode>;
  nfts?: Maybe<Array<Maybe<Nft>>>;
  premiumAccessCards: Array<PremiumAccessCard>;
  products: Array<Product>;
  promocodes: Array<Promocode>;
  purchases?: Maybe<PurchasesResponse>;
  shopPurchases: Array<Purchase>;
  talksChats?: Maybe<TalksChatsResponse>;
  talksMessages?: Maybe<TalksMessagesResponse>;
  testInternetConnection?: Maybe<TestInternetConnectionResponse>;
  tracks: Array<Track>;
  user?: Maybe<User>;
  userIndicators?: Maybe<UserIndicators>;
  userPopups?: Maybe<Array<Maybe<Modal>>>;
  usernameAvailable?: Maybe<Scalars['Boolean']>;
  users: Array<User>;
  waitlistUsers: Array<WaitlistUser>;
  warmer?: Maybe<Scalars['Boolean']>;
};


export type QueryAdminActivityEventArgs = {
  where: ActivityEventWhereUniqueInput;
};


export type QueryAdminActivityEventsArgs = {
  cursor?: InputMaybe<ActivityEventWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ActivityEventOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActivityEventWhereInput>;
};


export type QueryAdminActivityEventsCountArgs = {
  cursor?: InputMaybe<ActivityEventWhereUniqueInput>;
  orderBy?: InputMaybe<ActivityEventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActivityEventWhereInput>;
};


export type QueryAdminCatalogItemArgs = {
  where: CatalogItemWhereUniqueInput;
};


export type QueryAdminCatalogItemCategoriesArgs = {
  cursor?: InputMaybe<CatalogItemCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CatalogItemCategoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CatalogItemCategoryWhereInput>;
};


export type QueryAdminCatalogItemCategoriesCountArgs = {
  cursor?: InputMaybe<CatalogItemCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<CatalogItemCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CatalogItemCategoryWhereInput>;
};


export type QueryAdminCatalogItemCategoryArgs = {
  where: CatalogItemCategoryWhereUniqueInput;
};


export type QueryAdminCatalogItemScheduleArgs = {
  where: CatalogItemScheduleWhereUniqueInput;
};


export type QueryAdminCatalogItemSchedulesArgs = {
  cursor?: InputMaybe<CatalogItemScheduleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CatalogItemScheduleOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CatalogItemScheduleWhereInput>;
};


export type QueryAdminCatalogItemSchedulesCountArgs = {
  cursor?: InputMaybe<CatalogItemScheduleWhereUniqueInput>;
  orderBy?: InputMaybe<CatalogItemScheduleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CatalogItemScheduleWhereInput>;
};


export type QueryAdminCatalogItemsArgs = {
  cursor?: InputMaybe<CatalogItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CatalogItemOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CatalogItemWhereInput>;
};


export type QueryAdminCatalogItemsCountArgs = {
  cursor?: InputMaybe<CatalogItemWhereUniqueInput>;
  orderBy?: InputMaybe<CatalogItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CatalogItemWhereInput>;
};


export type QueryAdminClaimedBadgeArgs = {
  where: ClaimedBadgeWhereUniqueInput;
};


export type QueryAdminClaimedBadgesArgs = {
  cursor?: InputMaybe<ClaimedBadgeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClaimedBadgeOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClaimedBadgeWhereInput>;
};


export type QueryAdminClaimedBadgesCountArgs = {
  cursor?: InputMaybe<ClaimedBadgeWhereUniqueInput>;
  orderBy?: InputMaybe<ClaimedBadgeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClaimedBadgeWhereInput>;
};


export type QueryAdminCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CommunityOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommunityWhereInput>;
};


export type QueryAdminCommunitiesCountArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: InputMaybe<CommunityOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommunityWhereInput>;
};


export type QueryAdminCommunityArgs = {
  where: CommunityWhereUniqueInput;
};


export type QueryAdminCommunityMemberInfoArgs = {
  where: CommunityMemberInfoWhereUniqueInput;
};


export type QueryAdminCommunityMemberInfosArgs = {
  cursor?: InputMaybe<CommunityMemberInfoWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CommunityMemberInfoOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommunityMemberInfoWhereInput>;
};


export type QueryAdminCommunityMemberInfosCountArgs = {
  cursor?: InputMaybe<CommunityMemberInfoWhereUniqueInput>;
  orderBy?: InputMaybe<CommunityMemberInfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommunityMemberInfoWhereInput>;
};


export type QueryAdminCommunitySuggestionArgs = {
  where: CommunitySuggestionWhereUniqueInput;
};


export type QueryAdminCommunitySuggestionsArgs = {
  cursor?: InputMaybe<CommunitySuggestionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CommunitySuggestionOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommunitySuggestionWhereInput>;
};


export type QueryAdminCommunitySuggestionsCountArgs = {
  cursor?: InputMaybe<CommunitySuggestionWhereUniqueInput>;
  orderBy?: InputMaybe<CommunitySuggestionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommunitySuggestionWhereInput>;
};


export type QueryAdminDiscoverCardArgs = {
  where: DiscoverCardWhereUniqueInput;
};


export type QueryAdminDiscoverCardsArgs = {
  cursor?: InputMaybe<DiscoverCardWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DiscoverCardOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DiscoverCardWhereInput>;
};


export type QueryAdminDiscoverCardsCountArgs = {
  cursor?: InputMaybe<DiscoverCardWhereUniqueInput>;
  orderBy?: InputMaybe<DiscoverCardOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DiscoverCardWhereInput>;
};


export type QueryAdminEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryAdminEventCategoriesArgs = {
  cursor?: InputMaybe<EventCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EventCategoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventCategoryWhereInput>;
};


export type QueryAdminEventCategoriesCountArgs = {
  cursor?: InputMaybe<EventCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<EventCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventCategoryWhereInput>;
};


export type QueryAdminEventCategoryArgs = {
  where: EventCategoryWhereUniqueInput;
};


export type QueryAdminEventDetailArgs = {
  where: EventDetailWhereUniqueInput;
};


export type QueryAdminEventDetailsArgs = {
  cursor?: InputMaybe<EventDetailWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EventDetailOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventDetailWhereInput>;
};


export type QueryAdminEventDetailsCountArgs = {
  cursor?: InputMaybe<EventDetailWhereUniqueInput>;
  orderBy?: InputMaybe<EventDetailOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventDetailWhereInput>;
};


export type QueryAdminEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EventOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryAdminEventsCountArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryAdminFaqCategoriesArgs = {
  cursor?: InputMaybe<FaqCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FaqCategoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqCategoryWhereInput>;
};


export type QueryAdminFaqCategoriesCountArgs = {
  cursor?: InputMaybe<FaqCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<FaqCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqCategoryWhereInput>;
};


export type QueryAdminFaqCategoryArgs = {
  where: FaqCategoryWhereUniqueInput;
};


export type QueryAdminFaqItemArgs = {
  where: FaqItemWhereUniqueInput;
};


export type QueryAdminFaqItemsArgs = {
  cursor?: InputMaybe<FaqItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FaqItemOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqItemWhereInput>;
};


export type QueryAdminFaqItemsCountArgs = {
  cursor?: InputMaybe<FaqItemWhereUniqueInput>;
  orderBy?: InputMaybe<FaqItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqItemWhereInput>;
};


export type QueryAdminFeedCategoriesArgs = {
  cursor?: InputMaybe<FeedCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FeedCategoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FeedCategoryWhereInput>;
};


export type QueryAdminFeedCategoriesCountArgs = {
  cursor?: InputMaybe<FeedCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<FeedCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FeedCategoryWhereInput>;
};


export type QueryAdminFeedCategoryArgs = {
  where: FeedCategoryWhereUniqueInput;
};


export type QueryAdminFeedItemArgs = {
  where: FeedItemWhereUniqueInput;
};


export type QueryAdminFeedItemsArgs = {
  cursor?: InputMaybe<FeedItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FeedItemOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FeedItemWhereInput>;
};


export type QueryAdminFeedItemsCountArgs = {
  cursor?: InputMaybe<FeedItemWhereUniqueInput>;
  orderBy?: InputMaybe<FeedItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FeedItemWhereInput>;
};


export type QueryAdminHighlightArgs = {
  where: HighlightWhereUniqueInput;
};


export type QueryAdminHighlightsArgs = {
  cursor?: InputMaybe<HighlightWhereUniqueInput>;
  orderBy?: InputMaybe<Array<HighlightOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HighlightWhereInput>;
};


export type QueryAdminHighlightsCountArgs = {
  cursor?: InputMaybe<HighlightWhereUniqueInput>;
  orderBy?: InputMaybe<HighlightOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HighlightWhereInput>;
};


export type QueryAdminInterestTagArgs = {
  where: InterestTagWhereUniqueInput;
};


export type QueryAdminInterestTagsArgs = {
  cursor?: InputMaybe<InterestTagWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InterestTagOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InterestTagWhereInput>;
};


export type QueryAdminInterestTagsCountArgs = {
  cursor?: InputMaybe<InterestTagWhereUniqueInput>;
  orderBy?: InputMaybe<InterestTagOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InterestTagWhereInput>;
};


export type QueryAdminInviteCodeArgs = {
  where: InviteCodeWhereUniqueInput;
};


export type QueryAdminInviteCodesArgs = {
  cursor?: InputMaybe<InviteCodeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InviteCodeOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InviteCodeWhereInput>;
};


export type QueryAdminInviteCodesCountArgs = {
  cursor?: InputMaybe<InviteCodeWhereUniqueInput>;
  orderBy?: InputMaybe<InviteCodeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InviteCodeWhereInput>;
};


export type QueryAdminListEventInfoArgs = {
  eventId: Scalars['String'];
};


export type QueryAdminMassMessageArgs = {
  where: MassMessageWhereUniqueInput;
};


export type QueryAdminMassMessagesArgs = {
  cursor?: InputMaybe<MassMessageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MassMessageOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MassMessageWhereInput>;
};


export type QueryAdminMassMessagesCountArgs = {
  cursor?: InputMaybe<MassMessageWhereUniqueInput>;
  orderBy?: InputMaybe<MassMessageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MassMessageWhereInput>;
};


export type QueryAdminPayoutArgs = {
  where: PayoutWhereUniqueInput;
};


export type QueryAdminPayoutsArgs = {
  cursor?: InputMaybe<PayoutWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PayoutOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PayoutWhereInput>;
};


export type QueryAdminPayoutsCountArgs = {
  cursor?: InputMaybe<PayoutWhereUniqueInput>;
  orderBy?: InputMaybe<PayoutOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PayoutWhereInput>;
};


export type QueryAdminPremiumAccessCardArgs = {
  where: PremiumAccessCardWhereUniqueInput;
};


export type QueryAdminPremiumAccessCardsArgs = {
  cursor?: InputMaybe<PremiumAccessCardWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PremiumAccessCardOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PremiumAccessCardWhereInput>;
};


export type QueryAdminPremiumAccessCardsCountArgs = {
  cursor?: InputMaybe<PremiumAccessCardWhereUniqueInput>;
  orderBy?: InputMaybe<PremiumAccessCardOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PremiumAccessCardWhereInput>;
};


export type QueryAdminProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryAdminProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryAdminProductsCountArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryAdminPromocodeArgs = {
  where: PromocodeWhereUniqueInput;
};


export type QueryAdminPromocodesArgs = {
  cursor?: InputMaybe<PromocodeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PromocodeOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PromocodeWhereInput>;
};


export type QueryAdminPromocodesCountArgs = {
  cursor?: InputMaybe<PromocodeWhereUniqueInput>;
  orderBy?: InputMaybe<PromocodeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PromocodeWhereInput>;
};


export type QueryAdminPurchaseArgs = {
  where: PurchaseWhereUniqueInput;
};


export type QueryAdminPurchaseTransferArgs = {
  where: PurchaseTransferWhereUniqueInput;
};


export type QueryAdminPurchaseTransfersArgs = {
  cursor?: InputMaybe<PurchaseTransferWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PurchaseTransferOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PurchaseTransferWhereInput>;
};


export type QueryAdminPurchaseTransfersCountArgs = {
  cursor?: InputMaybe<PurchaseTransferWhereUniqueInput>;
  orderBy?: InputMaybe<PurchaseTransferOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PurchaseTransferWhereInput>;
};


export type QueryAdminPurchasesArgs = {
  cursor?: InputMaybe<PurchaseWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PurchaseOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PurchaseWhereInput>;
};


export type QueryAdminPurchasesCountArgs = {
  cursor?: InputMaybe<PurchaseWhereUniqueInput>;
  orderBy?: InputMaybe<PurchaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PurchaseWhereInput>;
};


export type QueryAdminTalksMessageArgs = {
  where: TalksMessageWhereUniqueInput;
};


export type QueryAdminTalksMessagesArgs = {
  cursor?: InputMaybe<TalksMessageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TalksMessageOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TalksMessageWhereInput>;
};


export type QueryAdminTalksMessagesCountArgs = {
  cursor?: InputMaybe<TalksMessageWhereUniqueInput>;
  orderBy?: InputMaybe<TalksMessageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TalksMessageWhereInput>;
};


export type QueryAdminTemplateBadgeArgs = {
  where: TemplateBadgeWhereUniqueInput;
};


export type QueryAdminTemplateBadgesArgs = {
  cursor?: InputMaybe<TemplateBadgeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TemplateBadgeOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateBadgeWhereInput>;
};


export type QueryAdminTemplateBadgesCountArgs = {
  cursor?: InputMaybe<TemplateBadgeWhereUniqueInput>;
  orderBy?: InputMaybe<TemplateBadgeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateBadgeWhereInput>;
};


export type QueryAdminTrackArgs = {
  where: TrackWhereUniqueInput;
};


export type QueryAdminTracksArgs = {
  cursor?: InputMaybe<TrackWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TrackOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrackWhereInput>;
};


export type QueryAdminTracksCountArgs = {
  cursor?: InputMaybe<TrackWhereUniqueInput>;
  orderBy?: InputMaybe<TrackOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrackWhereInput>;
};


export type QueryAdminUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryAdminUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAdminUsersCountArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAdminWaitlistUserArgs = {
  where: WaitlistUserWhereUniqueInput;
};


export type QueryAdminWaitlistUsersArgs = {
  cursor?: InputMaybe<WaitlistUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<WaitlistUserOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WaitlistUserWhereInput>;
};


export type QueryAdminWaitlistUsersCountArgs = {
  cursor?: InputMaybe<WaitlistUserWhereUniqueInput>;
  orderBy?: InputMaybe<WaitlistUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WaitlistUserWhereInput>;
};


export type QueryCaDashboardArgs = {
  communityId: Scalars['String'];
};


export type QueryCaEventArgs = {
  eventId: Scalars['ID'];
};


export type QueryCaEventTicketsActivityArgs = {
  dateFrom: Scalars['DateTime'];
  dateTo: Scalars['DateTime'];
  eventId: Scalars['String'];
};


export type QueryCaEventsArgs = {
  communityId: Scalars['ID'];
};


export type QueryCaFinancesOverviewArgs = {
  communityId: Scalars['String'];
  dateFrom: Scalars['DateTime'];
  dateTo: Scalars['DateTime'];
};


export type QueryCaFinancesPayoutsArgs = {
  communityId: Scalars['String'];
  dateFrom: Scalars['DateTime'];
  dateTo: Scalars['DateTime'];
};


export type QueryCaStripeAccountInfoArgs = {
  communityId: Scalars['String'];
};


export type QueryCatalogItemCategoriesArgs = {
  cursor?: InputMaybe<CatalogItemCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CatalogItemCategoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CatalogItemCategoryWhereInput>;
};


export type QueryCatalogItemSchedulesArgs = {
  cursor?: InputMaybe<CatalogItemScheduleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CatalogItemScheduleOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CatalogItemScheduleWhereInput>;
};


export type QueryCatalogItemsArgs = {
  cursor?: InputMaybe<CatalogItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CatalogItemOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CatalogItemWhereInput>;
};


export type QueryClaimedBadgesArgs = {
  cursor?: InputMaybe<ClaimedBadgeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClaimedBadgeOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClaimedBadgeWhereInput>;
};


export type QueryCommunitiesArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CommunityOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommunityWhereInput>;
};


export type QueryCommunityArgs = {
  where: CommunityWhereUniqueInput;
};


export type QueryCommunitySuggestionsArgs = {
  cursor?: InputMaybe<CommunitySuggestionWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommunitySuggestionWhereInput>;
};


export type QueryDiscoverCardsArgs = {
  cursor?: InputMaybe<DiscoverCardWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DiscoverCardWhereInput>;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventDetailsArgs = {
  cursor?: InputMaybe<EventDetailWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EventDetailOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventDetailWhereInput>;
};


export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EventOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFaqCategoriesArgs = {
  cursor?: InputMaybe<FaqCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FaqCategoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqCategoryWhereInput>;
};


export type QueryFaqItemsArgs = {
  cursor?: InputMaybe<FaqItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FaqItemOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqItemWhereInput>;
};


export type QueryFeedCategoriesArgs = {
  cursor?: InputMaybe<FeedCategoryWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FeedCategoryWhereInput>;
};


export type QueryFeedItemArgs = {
  where: FeedItemWhereUniqueInput;
};


export type QueryFeedItemsArgs = {
  cursor?: InputMaybe<FeedItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FeedItemOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FeedItemWhereInput>;
};


export type QueryHighlightsArgs = {
  cursor?: InputMaybe<HighlightWhereUniqueInput>;
  orderBy?: InputMaybe<Array<HighlightOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HighlightWhereInput>;
};


export type QueryInterestTagsArgs = {
  cursor?: InputMaybe<InterestTagWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InterestTagWhereInput>;
};


export type QueryInviteCodeArgs = {
  where: InviteCodeWhereUniqueInput;
};


export type QueryInviteCodesArgs = {
  cursor?: InputMaybe<InviteCodeWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InviteCodeWhereInput>;
};


export type QueryNftsArgs = {
  collectionName?: InputMaybe<Scalars['String']>;
  ignoreCache?: InputMaybe<Scalars['Boolean']>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
};


export type QueryPremiumAccessCardsArgs = {
  cursor?: InputMaybe<PremiumAccessCardWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PremiumAccessCardWhereInput>;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryPromocodesArgs = {
  cursor?: InputMaybe<PromocodeWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PromocodeWhereInput>;
};


export type QueryShopPurchasesArgs = {
  cursor?: InputMaybe<PurchaseWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PurchaseOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PurchaseWhereInput>;
};


export type QueryTalksChatsArgs = {
  chatId?: InputMaybe<Scalars['String']>;
};


export type QueryTalksMessagesArgs = {
  chatId?: InputMaybe<Scalars['String']>;
};


export type QueryTracksArgs = {
  cursor?: InputMaybe<TrackWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrackWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsernameAvailableArgs = {
  username: Scalars['String'];
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryWaitlistUsersArgs = {
  cursor?: InputMaybe<WaitlistUserWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type ReadMessageResponse = {
  __typename?: 'ReadMessageResponse';
  errors?: Maybe<Array<Maybe<TranslatableError>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type RequestProductPurchase = {
  __typename?: 'RequestProductPurchase';
  errors?: Maybe<Array<Maybe<TranslatableError>>>;
  purchase?: Maybe<Purchase>;
  stripePaymentIntentClientSecret?: Maybe<Scalars['String']>;
  swishCheckoutDeepLink?: Maybe<Scalars['String']>;
};

export type RequestProductsPurchase = {
  __typename?: 'RequestProductsPurchase';
  purchaseIds?: Maybe<Array<Scalars['String']>>;
  stripePaymentIntentClientSecret?: Maybe<Scalars['String']>;
  swishCheckoutDeepLink?: Maybe<Scalars['String']>;
};

export type RequestProductsPurchaseInput = {
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type SalesData = {
  __typename?: 'SalesData';
  endDate?: Maybe<Scalars['Date']>;
  startDate?: Maybe<Scalars['Date']>;
  total?: Maybe<Scalars['Float']>;
};

export type SendMessageResponse = {
  __typename?: 'SendMessageResponse';
  errors?: Maybe<Array<Maybe<TranslatableError>>>;
  notification?: Maybe<TalksMessage>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export enum SupportedCountries {
  Dk = 'DK',
  Se = 'SE'
}

export enum SupportedCurrencies {
  Dkk = 'DKK',
  Sek = 'SEK'
}

export type SyncPushPlayerIdsResponse = {
  __typename?: 'SyncPushPlayerIdsResponse';
  errors?: Maybe<Array<Maybe<TranslatableError>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type TalksChatsResponse = {
  __typename?: 'TalksChatsResponse';
  chats?: Maybe<Array<Maybe<AdminChat>>>;
};

export type TalksMessage = {
  __typename?: 'TalksMessage';
  actionDeepLink?: Maybe<Scalars['String']>;
  attachmentId?: Maybe<Scalars['String']>;
  community?: Maybe<Community>;
  communitySuggestionId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  event?: Maybe<Event>;
  id: Scalars['String'];
  message: Scalars['String'];
  pushTrackingId?: Maybe<Scalars['String']>;
  read: Scalars['Boolean'];
  recipient: User;
  sender?: Maybe<User>;
  senderTitle?: Maybe<Scalars['String']>;
  status: MessageHighlightStatus;
  type: TalksMessageType;
  updatedAt: Scalars['DateTime'];
};

export type TalksMessageCreateInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  attachmentId?: InputMaybe<Scalars['String']>;
  community?: InputMaybe<CommunityCreateNestedOneWithoutRelatedTalksMessagesInput>;
  communitySuggestionId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutRelatedTalksMessagesInput>;
  id?: InputMaybe<Scalars['String']>;
  massMessageId?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  pushTrackingId?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
  recipient: UserCreateNestedOneWithoutNotificationsWhereRecipientInput;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  sender?: InputMaybe<UserCreateNestedOneWithoutNotificationsWhereSenderInput>;
  senderTitle?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<TalksMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TalksMessageCreateManyCommunityInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  attachmentId?: InputMaybe<Scalars['String']>;
  communitySuggestionId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  massMessageId?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  pushTrackingId?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
  recipientId: Scalars['String'];
  sendAt?: InputMaybe<Scalars['DateTime']>;
  senderId?: InputMaybe<Scalars['String']>;
  senderTitle?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<TalksMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TalksMessageCreateManyCommunityInputEnvelope = {
  data?: InputMaybe<Array<TalksMessageCreateManyCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TalksMessageCreateManyEventInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  attachmentId?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['String']>;
  communitySuggestionId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  massMessageId?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  pushTrackingId?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
  recipientId: Scalars['String'];
  sendAt?: InputMaybe<Scalars['DateTime']>;
  senderId?: InputMaybe<Scalars['String']>;
  senderTitle?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<TalksMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TalksMessageCreateManyEventInputEnvelope = {
  data?: InputMaybe<Array<TalksMessageCreateManyEventInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TalksMessageCreateManyRecipientInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  attachmentId?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['String']>;
  communitySuggestionId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  massMessageId?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  pushTrackingId?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  senderId?: InputMaybe<Scalars['String']>;
  senderTitle?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<TalksMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TalksMessageCreateManyRecipientInputEnvelope = {
  data?: InputMaybe<Array<TalksMessageCreateManyRecipientInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TalksMessageCreateManySenderInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  attachmentId?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['String']>;
  communitySuggestionId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  massMessageId?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  pushTrackingId?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
  recipientId: Scalars['String'];
  sendAt?: InputMaybe<Scalars['DateTime']>;
  senderTitle?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<TalksMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TalksMessageCreateManySenderInputEnvelope = {
  data?: InputMaybe<Array<TalksMessageCreateManySenderInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TalksMessageCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TalksMessageCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<TalksMessageCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<TalksMessageCreateManyCommunityInputEnvelope>;
};

export type TalksMessageCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TalksMessageCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<TalksMessageCreateWithoutEventInput>>;
  createMany?: InputMaybe<TalksMessageCreateManyEventInputEnvelope>;
};

export type TalksMessageCreateNestedManyWithoutRecipientInput = {
  connect?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TalksMessageCreateOrConnectWithoutRecipientInput>>;
  create?: InputMaybe<Array<TalksMessageCreateWithoutRecipientInput>>;
  createMany?: InputMaybe<TalksMessageCreateManyRecipientInputEnvelope>;
};

export type TalksMessageCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TalksMessageCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<TalksMessageCreateWithoutSenderInput>>;
  createMany?: InputMaybe<TalksMessageCreateManySenderInputEnvelope>;
};

export type TalksMessageCreateOrConnectWithoutCommunityInput = {
  create: TalksMessageCreateWithoutCommunityInput;
  where: TalksMessageWhereUniqueInput;
};

export type TalksMessageCreateOrConnectWithoutEventInput = {
  create: TalksMessageCreateWithoutEventInput;
  where: TalksMessageWhereUniqueInput;
};

export type TalksMessageCreateOrConnectWithoutRecipientInput = {
  create: TalksMessageCreateWithoutRecipientInput;
  where: TalksMessageWhereUniqueInput;
};

export type TalksMessageCreateOrConnectWithoutSenderInput = {
  create: TalksMessageCreateWithoutSenderInput;
  where: TalksMessageWhereUniqueInput;
};

export type TalksMessageCreateWithoutCommunityInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  attachmentId?: InputMaybe<Scalars['String']>;
  communitySuggestionId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutRelatedTalksMessagesInput>;
  id?: InputMaybe<Scalars['String']>;
  massMessageId?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  pushTrackingId?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
  recipient: UserCreateNestedOneWithoutNotificationsWhereRecipientInput;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  sender?: InputMaybe<UserCreateNestedOneWithoutNotificationsWhereSenderInput>;
  senderTitle?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<TalksMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TalksMessageCreateWithoutEventInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  attachmentId?: InputMaybe<Scalars['String']>;
  community?: InputMaybe<CommunityCreateNestedOneWithoutRelatedTalksMessagesInput>;
  communitySuggestionId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  massMessageId?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  pushTrackingId?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
  recipient: UserCreateNestedOneWithoutNotificationsWhereRecipientInput;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  sender?: InputMaybe<UserCreateNestedOneWithoutNotificationsWhereSenderInput>;
  senderTitle?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<TalksMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TalksMessageCreateWithoutRecipientInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  attachmentId?: InputMaybe<Scalars['String']>;
  community?: InputMaybe<CommunityCreateNestedOneWithoutRelatedTalksMessagesInput>;
  communitySuggestionId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutRelatedTalksMessagesInput>;
  id?: InputMaybe<Scalars['String']>;
  massMessageId?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  pushTrackingId?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  sender?: InputMaybe<UserCreateNestedOneWithoutNotificationsWhereSenderInput>;
  senderTitle?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<TalksMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TalksMessageCreateWithoutSenderInput = {
  actionDeepLink?: InputMaybe<Scalars['String']>;
  attachmentId?: InputMaybe<Scalars['String']>;
  community?: InputMaybe<CommunityCreateNestedOneWithoutRelatedTalksMessagesInput>;
  communitySuggestionId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateNestedOneWithoutRelatedTalksMessagesInput>;
  id?: InputMaybe<Scalars['String']>;
  massMessageId?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  pushTrackingId?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
  recipient: UserCreateNestedOneWithoutNotificationsWhereRecipientInput;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  senderTitle?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MessageHighlightStatus>;
  type?: InputMaybe<TalksMessageType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TalksMessageListRelationFilter = {
  every?: InputMaybe<TalksMessageWhereInput>;
  none?: InputMaybe<TalksMessageWhereInput>;
  some?: InputMaybe<TalksMessageWhereInput>;
};

export type TalksMessageOrderByInput = {
  actionDeepLink?: InputMaybe<SortOrder>;
  attachmentId?: InputMaybe<SortOrder>;
  communityId?: InputMaybe<SortOrder>;
  communitySuggestionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  massMessageId?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  pushTrackingId?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  recipientId?: InputMaybe<SortOrder>;
  sendAt?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  senderTitle?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TalksMessageScalarWhereInput = {
  AND?: InputMaybe<Array<TalksMessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<TalksMessageScalarWhereInput>>;
  OR?: InputMaybe<Array<TalksMessageScalarWhereInput>>;
  actionDeepLink?: InputMaybe<StringNullableFilter>;
  attachmentId?: InputMaybe<StringNullableFilter>;
  communityId?: InputMaybe<StringNullableFilter>;
  communitySuggestionId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  massMessageId?: InputMaybe<StringNullableFilter>;
  message?: InputMaybe<StringFilter>;
  pushTrackingId?: InputMaybe<StringNullableFilter>;
  read?: InputMaybe<BoolFilter>;
  recipientId?: InputMaybe<StringFilter>;
  sendAt?: InputMaybe<DateTimeFilter>;
  senderId?: InputMaybe<StringNullableFilter>;
  senderTitle?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumMessageHighlightStatusFilter>;
  type?: InputMaybe<EnumTalksMessageTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum TalksMessageType {
  AccountDeleted = 'AccountDeleted',
  CommunityInvite = 'CommunityInvite',
  Direct = 'Direct',
  InvitedPrivateEvent = 'InvitedPrivateEvent',
  JoinedWithInviteCode = 'JoinedWithInviteCode',
  LocationDropped = 'LocationDropped',
  NewEventDetails = 'NewEventDetails',
  SharedInventory = 'SharedInventory',
  UserSuggestionAdmin = 'UserSuggestionAdmin'
}

export type TalksMessageUpdateInput = {
  actionDeepLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  attachmentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneWithoutRelatedTalksMessagesInput>;
  communitySuggestionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutRelatedTalksMessagesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  massMessageId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushTrackingId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  recipient?: InputMaybe<UserUpdateOneRequiredWithoutNotificationsWhereRecipientInput>;
  sendAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneWithoutNotificationsWhereSenderInput>;
  senderTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageHighlightStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTalksMessageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TalksMessageUpdateManyMutationInput = {
  actionDeepLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  attachmentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  massMessageId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushTrackingId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  sendAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  senderTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageHighlightStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTalksMessageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TalksMessageUpdateManyWithWhereWithoutCommunityInput = {
  data: TalksMessageUpdateManyMutationInput;
  where: TalksMessageScalarWhereInput;
};

export type TalksMessageUpdateManyWithWhereWithoutEventInput = {
  data: TalksMessageUpdateManyMutationInput;
  where: TalksMessageScalarWhereInput;
};

export type TalksMessageUpdateManyWithWhereWithoutRecipientInput = {
  data: TalksMessageUpdateManyMutationInput;
  where: TalksMessageScalarWhereInput;
};

export type TalksMessageUpdateManyWithWhereWithoutSenderInput = {
  data: TalksMessageUpdateManyMutationInput;
  where: TalksMessageScalarWhereInput;
};

export type TalksMessageUpdateManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TalksMessageCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<TalksMessageCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<TalksMessageCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TalksMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<TalksMessageUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<TalksMessageUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<TalksMessageUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type TalksMessageUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TalksMessageCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<TalksMessageCreateWithoutEventInput>>;
  createMany?: InputMaybe<TalksMessageCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TalksMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<TalksMessageUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<TalksMessageUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<TalksMessageUpsertWithWhereUniqueWithoutEventInput>>;
};

export type TalksMessageUpdateManyWithoutRecipientInput = {
  connect?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TalksMessageCreateOrConnectWithoutRecipientInput>>;
  create?: InputMaybe<Array<TalksMessageCreateWithoutRecipientInput>>;
  createMany?: InputMaybe<TalksMessageCreateManyRecipientInputEnvelope>;
  delete?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TalksMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<TalksMessageUpdateWithWhereUniqueWithoutRecipientInput>>;
  updateMany?: InputMaybe<Array<TalksMessageUpdateManyWithWhereWithoutRecipientInput>>;
  upsert?: InputMaybe<Array<TalksMessageUpsertWithWhereUniqueWithoutRecipientInput>>;
};

export type TalksMessageUpdateManyWithoutSenderInput = {
  connect?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TalksMessageCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<TalksMessageCreateWithoutSenderInput>>;
  createMany?: InputMaybe<TalksMessageCreateManySenderInputEnvelope>;
  delete?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TalksMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<TalksMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<TalksMessageUpdateWithWhereUniqueWithoutSenderInput>>;
  updateMany?: InputMaybe<Array<TalksMessageUpdateManyWithWhereWithoutSenderInput>>;
  upsert?: InputMaybe<Array<TalksMessageUpsertWithWhereUniqueWithoutSenderInput>>;
};

export type TalksMessageUpdateWithWhereUniqueWithoutCommunityInput = {
  data: TalksMessageUpdateWithoutCommunityInput;
  where: TalksMessageWhereUniqueInput;
};

export type TalksMessageUpdateWithWhereUniqueWithoutEventInput = {
  data: TalksMessageUpdateWithoutEventInput;
  where: TalksMessageWhereUniqueInput;
};

export type TalksMessageUpdateWithWhereUniqueWithoutRecipientInput = {
  data: TalksMessageUpdateWithoutRecipientInput;
  where: TalksMessageWhereUniqueInput;
};

export type TalksMessageUpdateWithWhereUniqueWithoutSenderInput = {
  data: TalksMessageUpdateWithoutSenderInput;
  where: TalksMessageWhereUniqueInput;
};

export type TalksMessageUpdateWithoutCommunityInput = {
  actionDeepLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  attachmentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  communitySuggestionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutRelatedTalksMessagesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  massMessageId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushTrackingId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  recipient?: InputMaybe<UserUpdateOneRequiredWithoutNotificationsWhereRecipientInput>;
  sendAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneWithoutNotificationsWhereSenderInput>;
  senderTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageHighlightStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTalksMessageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TalksMessageUpdateWithoutEventInput = {
  actionDeepLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  attachmentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneWithoutRelatedTalksMessagesInput>;
  communitySuggestionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  massMessageId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushTrackingId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  recipient?: InputMaybe<UserUpdateOneRequiredWithoutNotificationsWhereRecipientInput>;
  sendAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneWithoutNotificationsWhereSenderInput>;
  senderTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageHighlightStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTalksMessageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TalksMessageUpdateWithoutRecipientInput = {
  actionDeepLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  attachmentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneWithoutRelatedTalksMessagesInput>;
  communitySuggestionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutRelatedTalksMessagesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  massMessageId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushTrackingId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  sendAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneWithoutNotificationsWhereSenderInput>;
  senderTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageHighlightStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTalksMessageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TalksMessageUpdateWithoutSenderInput = {
  actionDeepLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  attachmentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  community?: InputMaybe<CommunityUpdateOneWithoutRelatedTalksMessagesInput>;
  communitySuggestionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutRelatedTalksMessagesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  massMessageId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushTrackingId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  recipient?: InputMaybe<UserUpdateOneRequiredWithoutNotificationsWhereRecipientInput>;
  sendAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  senderTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumMessageHighlightStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTalksMessageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TalksMessageUpsertWithWhereUniqueWithoutCommunityInput = {
  create: TalksMessageCreateWithoutCommunityInput;
  update: TalksMessageUpdateWithoutCommunityInput;
  where: TalksMessageWhereUniqueInput;
};

export type TalksMessageUpsertWithWhereUniqueWithoutEventInput = {
  create: TalksMessageCreateWithoutEventInput;
  update: TalksMessageUpdateWithoutEventInput;
  where: TalksMessageWhereUniqueInput;
};

export type TalksMessageUpsertWithWhereUniqueWithoutRecipientInput = {
  create: TalksMessageCreateWithoutRecipientInput;
  update: TalksMessageUpdateWithoutRecipientInput;
  where: TalksMessageWhereUniqueInput;
};

export type TalksMessageUpsertWithWhereUniqueWithoutSenderInput = {
  create: TalksMessageCreateWithoutSenderInput;
  update: TalksMessageUpdateWithoutSenderInput;
  where: TalksMessageWhereUniqueInput;
};

export type TalksMessageWhereInput = {
  AND?: InputMaybe<Array<TalksMessageWhereInput>>;
  NOT?: InputMaybe<Array<TalksMessageWhereInput>>;
  OR?: InputMaybe<Array<TalksMessageWhereInput>>;
  actionDeepLink?: InputMaybe<StringNullableFilter>;
  attachmentId?: InputMaybe<StringNullableFilter>;
  community?: InputMaybe<CommunityWhereInput>;
  communityId?: InputMaybe<StringNullableFilter>;
  communitySuggestionId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventWhereInput>;
  eventId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  massMessageId?: InputMaybe<StringNullableFilter>;
  message?: InputMaybe<StringFilter>;
  pushTrackingId?: InputMaybe<StringNullableFilter>;
  read?: InputMaybe<BoolFilter>;
  recipient?: InputMaybe<UserWhereInput>;
  recipientId?: InputMaybe<StringFilter>;
  sendAt?: InputMaybe<DateTimeFilter>;
  sender?: InputMaybe<UserWhereInput>;
  senderId?: InputMaybe<StringNullableFilter>;
  senderTitle?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumMessageHighlightStatusFilter>;
  type?: InputMaybe<EnumTalksMessageTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TalksMessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type TalksMessagesResponse = {
  __typename?: 'TalksMessagesResponse';
  adminId?: Maybe<Scalars['String']>;
  chats?: Maybe<Array<Maybe<Chat>>>;
  talksMessages?: Maybe<Array<Maybe<TalksMessage>>>;
};

export type TemplateBadge = {
  __typename?: 'TemplateBadge';
  claimedBadges: Array<ClaimedBadge>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  mediaUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: Community;
  parentCommunityId: Scalars['String'];
  products: Array<Product>;
  updatedAt: Scalars['DateTime'];
};


export type TemplateBadgeClaimedBadgesArgs = {
  cursor?: InputMaybe<ClaimedBadgeWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type TemplateBadgeProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type TemplateBadgeCreateInput = {
  claimedBadges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutTemplateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutBadgesInput;
  products?: InputMaybe<ProductCreateNestedManyWithoutBadgeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TemplateBadgeCreateManyParentCommunityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TemplateBadgeCreateManyParentCommunityInputEnvelope = {
  data?: InputMaybe<Array<TemplateBadgeCreateManyParentCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TemplateBadgeCreateNestedManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<TemplateBadgeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TemplateBadgeCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<TemplateBadgeCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<TemplateBadgeCreateManyParentCommunityInputEnvelope>;
};

export type TemplateBadgeCreateNestedOneWithoutClaimedBadgesInput = {
  connect?: InputMaybe<TemplateBadgeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateBadgeCreateOrConnectWithoutClaimedBadgesInput>;
  create?: InputMaybe<TemplateBadgeCreateWithoutClaimedBadgesInput>;
};

export type TemplateBadgeCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<TemplateBadgeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateBadgeCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<TemplateBadgeCreateWithoutProductsInput>;
};

export type TemplateBadgeCreateOrConnectWithoutClaimedBadgesInput = {
  create: TemplateBadgeCreateWithoutClaimedBadgesInput;
  where: TemplateBadgeWhereUniqueInput;
};

export type TemplateBadgeCreateOrConnectWithoutParentCommunityInput = {
  create: TemplateBadgeCreateWithoutParentCommunityInput;
  where: TemplateBadgeWhereUniqueInput;
};

export type TemplateBadgeCreateOrConnectWithoutProductsInput = {
  create: TemplateBadgeCreateWithoutProductsInput;
  where: TemplateBadgeWhereUniqueInput;
};

export type TemplateBadgeCreateWithoutClaimedBadgesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutBadgesInput;
  products?: InputMaybe<ProductCreateNestedManyWithoutBadgeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TemplateBadgeCreateWithoutParentCommunityInput = {
  claimedBadges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutTemplateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBadgeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TemplateBadgeCreateWithoutProductsInput = {
  claimedBadges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutTemplateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  mediaUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentCommunity: CommunityCreateNestedOneWithoutBadgesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TemplateBadgeListRelationFilter = {
  every?: InputMaybe<TemplateBadgeWhereInput>;
  none?: InputMaybe<TemplateBadgeWhereInput>;
  some?: InputMaybe<TemplateBadgeWhereInput>;
};

export type TemplateBadgeOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mediaUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentCommunityId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TemplateBadgeScalarWhereInput = {
  AND?: InputMaybe<Array<TemplateBadgeScalarWhereInput>>;
  NOT?: InputMaybe<Array<TemplateBadgeScalarWhereInput>>;
  OR?: InputMaybe<Array<TemplateBadgeScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  mediaUrl?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  parentCommunityId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TemplateBadgeUpdateInput = {
  claimedBadges?: InputMaybe<ClaimedBadgeUpdateManyWithoutTemplateInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutBadgesInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBadgeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TemplateBadgeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TemplateBadgeUpdateManyWithWhereWithoutParentCommunityInput = {
  data: TemplateBadgeUpdateManyMutationInput;
  where: TemplateBadgeScalarWhereInput;
};

export type TemplateBadgeUpdateManyWithoutParentCommunityInput = {
  connect?: InputMaybe<Array<TemplateBadgeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TemplateBadgeCreateOrConnectWithoutParentCommunityInput>>;
  create?: InputMaybe<Array<TemplateBadgeCreateWithoutParentCommunityInput>>;
  createMany?: InputMaybe<TemplateBadgeCreateManyParentCommunityInputEnvelope>;
  delete?: InputMaybe<Array<TemplateBadgeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TemplateBadgeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TemplateBadgeWhereUniqueInput>>;
  set?: InputMaybe<Array<TemplateBadgeWhereUniqueInput>>;
  update?: InputMaybe<Array<TemplateBadgeUpdateWithWhereUniqueWithoutParentCommunityInput>>;
  updateMany?: InputMaybe<Array<TemplateBadgeUpdateManyWithWhereWithoutParentCommunityInput>>;
  upsert?: InputMaybe<Array<TemplateBadgeUpsertWithWhereUniqueWithoutParentCommunityInput>>;
};

export type TemplateBadgeUpdateOneRequiredWithoutClaimedBadgesInput = {
  connect?: InputMaybe<TemplateBadgeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateBadgeCreateOrConnectWithoutClaimedBadgesInput>;
  create?: InputMaybe<TemplateBadgeCreateWithoutClaimedBadgesInput>;
  update?: InputMaybe<TemplateBadgeUpdateWithoutClaimedBadgesInput>;
  upsert?: InputMaybe<TemplateBadgeUpsertWithoutClaimedBadgesInput>;
};

export type TemplateBadgeUpdateOneWithoutProductsInput = {
  connect?: InputMaybe<TemplateBadgeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateBadgeCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<TemplateBadgeCreateWithoutProductsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TemplateBadgeUpdateWithoutProductsInput>;
  upsert?: InputMaybe<TemplateBadgeUpsertWithoutProductsInput>;
};

export type TemplateBadgeUpdateWithWhereUniqueWithoutParentCommunityInput = {
  data: TemplateBadgeUpdateWithoutParentCommunityInput;
  where: TemplateBadgeWhereUniqueInput;
};

export type TemplateBadgeUpdateWithoutClaimedBadgesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutBadgesInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBadgeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TemplateBadgeUpdateWithoutParentCommunityInput = {
  claimedBadges?: InputMaybe<ClaimedBadgeUpdateManyWithoutTemplateInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBadgeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TemplateBadgeUpdateWithoutProductsInput = {
  claimedBadges?: InputMaybe<ClaimedBadgeUpdateManyWithoutTemplateInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediaUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentCommunity?: InputMaybe<CommunityUpdateOneRequiredWithoutBadgesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TemplateBadgeUpsertWithWhereUniqueWithoutParentCommunityInput = {
  create: TemplateBadgeCreateWithoutParentCommunityInput;
  update: TemplateBadgeUpdateWithoutParentCommunityInput;
  where: TemplateBadgeWhereUniqueInput;
};

export type TemplateBadgeUpsertWithoutClaimedBadgesInput = {
  create: TemplateBadgeCreateWithoutClaimedBadgesInput;
  update: TemplateBadgeUpdateWithoutClaimedBadgesInput;
};

export type TemplateBadgeUpsertWithoutProductsInput = {
  create: TemplateBadgeCreateWithoutProductsInput;
  update: TemplateBadgeUpdateWithoutProductsInput;
};

export type TemplateBadgeWhereInput = {
  AND?: InputMaybe<Array<TemplateBadgeWhereInput>>;
  NOT?: InputMaybe<Array<TemplateBadgeWhereInput>>;
  OR?: InputMaybe<Array<TemplateBadgeWhereInput>>;
  claimedBadges?: InputMaybe<ClaimedBadgeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  mediaUrl?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  parentCommunity?: InputMaybe<CommunityWhereInput>;
  parentCommunityId?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TemplateBadgeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type TestInternetConnectionResponse = {
  __typename?: 'TestInternetConnectionResponse';
  errors?: Maybe<Array<Maybe<TranslatableError>>>;
  output?: Maybe<Scalars['String']>;
};

export type TicketCreateOrUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TierCreateOrUpdateInput = {
  allocation: Scalars['Float'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  salesEndDate: Scalars['String'];
  salesStartDate: Scalars['String'];
};

export type Tools = {
  __typename?: 'Tools';
  calendarEvents: Array<Maybe<Scalars['String']>>;
  inventory: Scalars['Boolean'];
  settings: Scalars['Boolean'];
};

export type Track = {
  __typename?: 'Track';
  community: Community;
  duration: Scalars['Int'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type TrackCreateInput = {
  community: CommunityCreateNestedOneWithoutTrackInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrackCreateManyCommunityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrackCreateManyCommunityInputEnvelope = {
  data?: InputMaybe<Array<TrackCreateManyCommunityInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TrackCreateNestedManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<TrackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TrackCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<TrackCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<TrackCreateManyCommunityInputEnvelope>;
};

export type TrackCreateOrConnectWithoutCommunityInput = {
  create: TrackCreateWithoutCommunityInput;
  where: TrackWhereUniqueInput;
};

export type TrackCreateWithoutCommunityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrackListRelationFilter = {
  every?: InputMaybe<TrackWhereInput>;
  none?: InputMaybe<TrackWhereInput>;
  some?: InputMaybe<TrackWhereInput>;
};

export type TrackOrderByInput = {
  communityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TrackScalarWhereInput = {
  AND?: InputMaybe<Array<TrackScalarWhereInput>>;
  NOT?: InputMaybe<Array<TrackScalarWhereInput>>;
  OR?: InputMaybe<Array<TrackScalarWhereInput>>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  duration?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TrackUpdateInput = {
  community?: InputMaybe<CommunityUpdateOneRequiredWithoutTrackInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrackUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrackUpdateManyWithWhereWithoutCommunityInput = {
  data: TrackUpdateManyMutationInput;
  where: TrackScalarWhereInput;
};

export type TrackUpdateManyWithoutCommunityInput = {
  connect?: InputMaybe<Array<TrackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TrackCreateOrConnectWithoutCommunityInput>>;
  create?: InputMaybe<Array<TrackCreateWithoutCommunityInput>>;
  createMany?: InputMaybe<TrackCreateManyCommunityInputEnvelope>;
  delete?: InputMaybe<Array<TrackWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TrackScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TrackWhereUniqueInput>>;
  set?: InputMaybe<Array<TrackWhereUniqueInput>>;
  update?: InputMaybe<Array<TrackUpdateWithWhereUniqueWithoutCommunityInput>>;
  updateMany?: InputMaybe<Array<TrackUpdateManyWithWhereWithoutCommunityInput>>;
  upsert?: InputMaybe<Array<TrackUpsertWithWhereUniqueWithoutCommunityInput>>;
};

export type TrackUpdateWithWhereUniqueWithoutCommunityInput = {
  data: TrackUpdateWithoutCommunityInput;
  where: TrackWhereUniqueInput;
};

export type TrackUpdateWithoutCommunityInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrackUpsertWithWhereUniqueWithoutCommunityInput = {
  create: TrackCreateWithoutCommunityInput;
  update: TrackUpdateWithoutCommunityInput;
  where: TrackWhereUniqueInput;
};

export type TrackWhereInput = {
  AND?: InputMaybe<Array<TrackWhereInput>>;
  NOT?: InputMaybe<Array<TrackWhereInput>>;
  OR?: InputMaybe<Array<TrackWhereInput>>;
  community?: InputMaybe<CommunityWhereInput>;
  communityId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  duration?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TrackWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type TranslatableError = {
  __typename?: 'TranslatableError';
  errorCode?: Maybe<TranslatableErrorCode>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum TranslatableErrorCode {
  AlreadyBought = 'AlreadyBought',
  AlreadyInUse = 'AlreadyInUse',
  InternalServerError = 'InternalServerError',
  InvalidInviteCode = 'InvalidInviteCode',
  InvalidPassword = 'InvalidPassword',
  InvalidPasswordResetCode = 'InvalidPasswordResetCode',
  InvalidVerificationCode = 'InvalidVerificationCode',
  InvalidWalletSignature = 'InvalidWalletSignature',
  NotAllowedToMutatePost = 'NotAllowedToMutatePost',
  NotAllowedToMutateUser = 'NotAllowedToMutateUser',
  ProductNotFound = 'ProductNotFound',
  SpecifyIdentifier = 'SpecifyIdentifier',
  SpecifyUsernameOrPhone = 'SpecifyUsernameOrPhone',
  UserNotFound = 'UserNotFound',
  UserNotFoundOAuth = 'UserNotFoundOAuth'
}

export type User = {
  __typename?: 'User';
  acceptedDiscoverCards: Array<DiscoverCard>;
  avatar?: Maybe<Scalars['String']>;
  badges: Array<ClaimedBadge>;
  birthday?: Maybe<Scalars['DateTime']>;
  checkedInEvents: Array<Event>;
  communitiesWhereAdmin: Array<Community>;
  communitiesWhereMember: Array<Community>;
  communityMemberSince?: Maybe<Scalars['Date']>;
  completedDiscoverCollectionsOnboarding: Scalars['Boolean'];
  completedDiscoverOnboarding: Scalars['Boolean'];
  completedIDCardOnboarding: Scalars['Boolean'];
  completedInventoryOnboarding: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  declinedDiscoverCards: Array<DiscoverCard>;
  email?: Maybe<Scalars['String']>;
  emailVerificationCode?: Maybe<Scalars['String']>;
  emailVerified: Scalars['Boolean'];
  firstName?: Maybe<Scalars['String']>;
  fromWeb: Scalars['Boolean'];
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  invitedEvents: Array<Event>;
  lastName?: Maybe<Scalars['String']>;
  notificationsEnabled: Scalars['Boolean'];
  numberedId: Scalars['Int'];
  ownedInviteCodes: Array<InviteCode>;
  phone?: Maybe<Scalars['String']>;
  phoneVerified: Scalars['Boolean'];
  postalCode?: Maybe<Scalars['String']>;
  purchases: Array<Purchase>;
  pushPlayerIds: Scalars['String'];
  registeredEvents: Array<Event>;
  requirePasswordChange: Scalars['Boolean'];
  role: UserRole;
  solanaWalletAddress?: Maybe<Scalars['String']>;
  ticketsEvents: Array<Event>;
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
  versionOfWerz?: Maybe<Scalars['String']>;
};


export type UserAcceptedDiscoverCardsArgs = {
  cursor?: InputMaybe<DiscoverCardWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type UserBadgesArgs = {
  cursor?: InputMaybe<ClaimedBadgeWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type UserCheckedInEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type UserCommunitiesWhereAdminArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type UserCommunitiesWhereMemberArgs = {
  cursor?: InputMaybe<CommunityWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommunityWhereInput>;
};


export type UserCommunityMemberSinceArgs = {
  communityId?: InputMaybe<Scalars['String']>;
};


export type UserDeclinedDiscoverCardsArgs = {
  cursor?: InputMaybe<DiscoverCardWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type UserInvitedEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type UserOwnedInviteCodesArgs = {
  cursor?: InputMaybe<InviteCodeWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InviteCodeWhereInput>;
};


export type UserPurchasesArgs = {
  cursor?: InputMaybe<PurchaseWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PurchaseWhereInput>;
};


export type UserRegisteredEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type UserTicketsEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};

export type UserCreateInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserCreateNestedManyWithoutAcceptedDiscoverCardsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutAcceptedDiscoverCardsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutAcceptedDiscoverCardsInput>>;
};

export type UserCreateNestedManyWithoutCheckedInEventsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCheckedInEventsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCheckedInEventsInput>>;
};

export type UserCreateNestedManyWithoutCommunitiesWhereAdminInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCommunitiesWhereAdminInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCommunitiesWhereAdminInput>>;
};

export type UserCreateNestedManyWithoutCommunitiesWhereMemberInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCommunitiesWhereMemberInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCommunitiesWhereMemberInput>>;
};

export type UserCreateNestedManyWithoutDeclinedDiscoverCardsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutDeclinedDiscoverCardsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutDeclinedDiscoverCardsInput>>;
};

export type UserCreateNestedManyWithoutDownvotedFeedItemsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutDownvotedFeedItemsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutDownvotedFeedItemsInput>>;
};

export type UserCreateNestedManyWithoutInvitedEventsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutInvitedEventsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutInvitedEventsInput>>;
};

export type UserCreateNestedManyWithoutRegisteredEventsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRegisteredEventsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutRegisteredEventsInput>>;
};

export type UserCreateNestedManyWithoutTicketsEventsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutTicketsEventsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutTicketsEventsInput>>;
};

export type UserCreateNestedManyWithoutUpvotedFeedItemsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUpvotedFeedItemsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUpvotedFeedItemsInput>>;
};

export type UserCreateNestedOneWithoutActivityEventsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutActivityEventsInput>;
  create?: InputMaybe<UserCreateWithoutActivityEventsInput>;
};

export type UserCreateNestedOneWithoutBadgesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBadgesInput>;
  create?: InputMaybe<UserCreateWithoutBadgesInput>;
};

export type UserCreateNestedOneWithoutClaimedInviteCodeInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClaimedInviteCodeInput>;
  create?: InputMaybe<UserCreateWithoutClaimedInviteCodeInput>;
};

export type UserCreateNestedOneWithoutCommunitiesMembershipInfoInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommunitiesMembershipInfoInput>;
  create?: InputMaybe<UserCreateWithoutCommunitiesMembershipInfoInput>;
};

export type UserCreateNestedOneWithoutCommunitySuggestionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommunitySuggestionsInput>;
  create?: InputMaybe<UserCreateWithoutCommunitySuggestionsInput>;
};

export type UserCreateNestedOneWithoutCreatedEventsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedEventsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedEventsInput>;
};

export type UserCreateNestedOneWithoutNotificationsWhereRecipientInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsWhereRecipientInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsWhereRecipientInput>;
};

export type UserCreateNestedOneWithoutNotificationsWhereSenderInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsWhereSenderInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsWhereSenderInput>;
};

export type UserCreateNestedOneWithoutOwnedInviteCodesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOwnedInviteCodesInput>;
  create?: InputMaybe<UserCreateWithoutOwnedInviteCodesInput>;
};

export type UserCreateNestedOneWithoutPremiumAccessCardsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPremiumAccessCardsInput>;
  create?: InputMaybe<UserCreateWithoutPremiumAccessCardsInput>;
};

export type UserCreateNestedOneWithoutPurchaseTransfersWhereRecipientInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPurchaseTransfersWhereRecipientInput>;
  create?: InputMaybe<UserCreateWithoutPurchaseTransfersWhereRecipientInput>;
};

export type UserCreateNestedOneWithoutPurchaseTransfersWhereSenderInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPurchaseTransfersWhereSenderInput>;
  create?: InputMaybe<UserCreateWithoutPurchaseTransfersWhereSenderInput>;
};

export type UserCreateNestedOneWithoutPurchasesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPurchasesInput>;
  create?: InputMaybe<UserCreateWithoutPurchasesInput>;
};

export type UserCreateOrConnectWithoutAcceptedDiscoverCardsInput = {
  create: UserCreateWithoutAcceptedDiscoverCardsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutActivityEventsInput = {
  create: UserCreateWithoutActivityEventsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutBadgesInput = {
  create: UserCreateWithoutBadgesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCheckedInEventsInput = {
  create: UserCreateWithoutCheckedInEventsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutClaimedInviteCodeInput = {
  create: UserCreateWithoutClaimedInviteCodeInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommunitiesMembershipInfoInput = {
  create: UserCreateWithoutCommunitiesMembershipInfoInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommunitiesWhereAdminInput = {
  create: UserCreateWithoutCommunitiesWhereAdminInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommunitiesWhereMemberInput = {
  create: UserCreateWithoutCommunitiesWhereMemberInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommunitySuggestionsInput = {
  create: UserCreateWithoutCommunitySuggestionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedEventsInput = {
  create: UserCreateWithoutCreatedEventsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutDeclinedDiscoverCardsInput = {
  create: UserCreateWithoutDeclinedDiscoverCardsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutDownvotedFeedItemsInput = {
  create: UserCreateWithoutDownvotedFeedItemsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutInvitedEventsInput = {
  create: UserCreateWithoutInvitedEventsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotificationsWhereRecipientInput = {
  create: UserCreateWithoutNotificationsWhereRecipientInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotificationsWhereSenderInput = {
  create: UserCreateWithoutNotificationsWhereSenderInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutOwnedInviteCodesInput = {
  create: UserCreateWithoutOwnedInviteCodesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPremiumAccessCardsInput = {
  create: UserCreateWithoutPremiumAccessCardsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPurchaseTransfersWhereRecipientInput = {
  create: UserCreateWithoutPurchaseTransfersWhereRecipientInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPurchaseTransfersWhereSenderInput = {
  create: UserCreateWithoutPurchaseTransfersWhereSenderInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPurchasesInput = {
  create: UserCreateWithoutPurchasesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRegisteredEventsInput = {
  create: UserCreateWithoutRegisteredEventsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTicketsEventsInput = {
  create: UserCreateWithoutTicketsEventsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpvotedFeedItemsInput = {
  create: UserCreateWithoutUpvotedFeedItemsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAcceptedDiscoverCardsInput = {
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutActivityEventsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutBadgesInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutCheckedInEventsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutClaimedInviteCodeInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutCommunitiesMembershipInfoInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutCommunitiesWhereAdminInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutCommunitiesWhereMemberInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutCommunitySuggestionsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutCreatedEventsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutDeclinedDiscoverCardsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutDownvotedFeedItemsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutInvitedEventsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutNotificationsWhereRecipientInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutNotificationsWhereSenderInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutOwnedInviteCodesInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutPremiumAccessCardsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutPurchaseTransfersWhereRecipientInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutPurchaseTransfersWhereSenderInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutPurchasesInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutRegisteredEventsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutTicketsEventsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  upvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutUpvotedInput>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutUpvotedFeedItemsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  badges?: InputMaybe<ClaimedBadgeCreateNestedManyWithoutOwnerInput>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  checkedInEvents?: InputMaybe<EventCreateNestedManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeCreateNestedManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoCreateNestedManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityCreateNestedManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityCreateNestedManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionCreateNestedManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedDiscoverOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedIDCardOnboarding?: InputMaybe<Scalars['Boolean']>;
  completedInventoryOnboarding?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdEvents?: InputMaybe<EventCreateNestedManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardCreateNestedManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemCreateNestedManyWithoutDownvotedInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerificationCode?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  fromWeb?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  invitedEvents?: InputMaybe<EventCreateNestedManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<Scalars['String']>;
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageCreateNestedManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageCreateNestedManyWithoutSenderInput>;
  numberedId?: InputMaybe<Scalars['Int']>;
  ownedInviteCodes?: InputMaybe<InviteCodeCreateNestedManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  passwordSalt?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerificationCode?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardCreateNestedManyWithoutUserInput>;
  previousEmail?: InputMaybe<Scalars['String']>;
  previousEmailVerified?: InputMaybe<Scalars['Boolean']>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferCreateNestedManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferCreateNestedManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseCreateNestedManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<Scalars['String']>;
  registeredEvents?: InputMaybe<EventCreateNestedManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  ticketsEvents?: InputMaybe<EventCreateNestedManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username?: InputMaybe<Scalars['String']>;
  versionOfWerz?: InputMaybe<Scalars['String']>;
};

export type UserIndicators = {
  __typename?: 'UserIndicators';
  feedOnHome: Scalars['Boolean'];
  tools: Tools;
  unreadMessages: Scalars['Int'];
};

export enum UserInfoField {
  Dob = 'DOB',
  Email = 'Email',
  FirstName = 'FirstName',
  LastName = 'LastName',
  ProfilePicture = 'ProfilePicture'
}

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  avatar?: InputMaybe<SortOrder>;
  birthday?: InputMaybe<SortOrder>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<SortOrder>;
  completedDiscoverOnboarding?: InputMaybe<SortOrder>;
  completedIDCardOnboarding?: InputMaybe<SortOrder>;
  completedInventoryOnboarding?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerificationCode?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  fromWeb?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  notificationsEnabled?: InputMaybe<SortOrder>;
  numberedId?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  passwordResetCode?: InputMaybe<SortOrder>;
  passwordSalt?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  phoneVerificationCode?: InputMaybe<SortOrder>;
  phoneVerified?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
  previousEmail?: InputMaybe<SortOrder>;
  previousEmailVerified?: InputMaybe<SortOrder>;
  pushPlayerIds?: InputMaybe<SortOrder>;
  requirePasswordChange?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  solanaWalletAddress?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  versionOfWerz?: InputMaybe<SortOrder>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  birthday?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum UserRole {
  Administrator = 'Administrator',
  Intern = 'Intern',
  User = 'User'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  birthday?: InputMaybe<DateTimeNullableFilter>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFilter>;
  completedDiscoverOnboarding?: InputMaybe<BoolFilter>;
  completedIDCardOnboarding?: InputMaybe<BoolFilter>;
  completedInventoryOnboarding?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  emailVerificationCode?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<BoolFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  fromWeb?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  notificationsEnabled?: InputMaybe<BoolFilter>;
  numberedId?: InputMaybe<IntFilter>;
  passwordHash?: InputMaybe<StringNullableFilter>;
  passwordResetCode?: InputMaybe<StringNullableFilter>;
  passwordSalt?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  phoneVerificationCode?: InputMaybe<StringNullableFilter>;
  phoneVerified?: InputMaybe<BoolFilter>;
  postalCode?: InputMaybe<StringNullableFilter>;
  previousEmail?: InputMaybe<StringNullableFilter>;
  previousEmailVerified?: InputMaybe<BoolFilter>;
  pushPlayerIds?: InputMaybe<StringFilter>;
  requirePasswordChange?: InputMaybe<BoolFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  solanaWalletAddress?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumUserStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringNullableFilter>;
  versionOfWerz?: InputMaybe<StringNullableFilter>;
};

export enum UserStatus {
  Active = 'Active',
  DeleteRequested = 'DeleteRequested',
  Deleted = 'Deleted'
}

export type UserUpdateInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutAcceptedDiscoverCardsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutCheckedInEventsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutCommunitiesWhereAdminInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutCommunitiesWhereMemberInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutDeclinedDiscoverCardsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutDownvotedFeedItemsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutInvitedEventsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutRegisteredEventsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutTicketsEventsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutUpvotedFeedItemsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutAcceptedDiscoverCardsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutAcceptedDiscoverCardsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutAcceptedDiscoverCardsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutAcceptedDiscoverCardsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutAcceptedDiscoverCardsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutAcceptedDiscoverCardsInput>>;
};

export type UserUpdateManyWithoutCheckedInEventsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCheckedInEventsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCheckedInEventsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutCheckedInEventsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutCheckedInEventsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutCheckedInEventsInput>>;
};

export type UserUpdateManyWithoutCommunitiesWhereAdminInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCommunitiesWhereAdminInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCommunitiesWhereAdminInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutCommunitiesWhereAdminInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutCommunitiesWhereAdminInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutCommunitiesWhereAdminInput>>;
};

export type UserUpdateManyWithoutCommunitiesWhereMemberInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCommunitiesWhereMemberInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCommunitiesWhereMemberInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutCommunitiesWhereMemberInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutCommunitiesWhereMemberInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutCommunitiesWhereMemberInput>>;
};

export type UserUpdateManyWithoutDeclinedDiscoverCardsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutDeclinedDiscoverCardsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutDeclinedDiscoverCardsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutDeclinedDiscoverCardsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutDeclinedDiscoverCardsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutDeclinedDiscoverCardsInput>>;
};

export type UserUpdateManyWithoutDownvotedFeedItemsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutDownvotedFeedItemsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutDownvotedFeedItemsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutDownvotedFeedItemsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutDownvotedFeedItemsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutDownvotedFeedItemsInput>>;
};

export type UserUpdateManyWithoutInvitedEventsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutInvitedEventsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutInvitedEventsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutInvitedEventsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutInvitedEventsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutInvitedEventsInput>>;
};

export type UserUpdateManyWithoutRegisteredEventsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRegisteredEventsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutRegisteredEventsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutRegisteredEventsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutRegisteredEventsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutRegisteredEventsInput>>;
};

export type UserUpdateManyWithoutTicketsEventsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutTicketsEventsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutTicketsEventsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutTicketsEventsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutTicketsEventsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutTicketsEventsInput>>;
};

export type UserUpdateManyWithoutUpvotedFeedItemsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUpvotedFeedItemsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUpvotedFeedItemsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutUpvotedFeedItemsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutUpvotedFeedItemsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutUpvotedFeedItemsInput>>;
};

export type UserUpdateOneRequiredWithoutActivityEventsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutActivityEventsInput>;
  create?: InputMaybe<UserCreateWithoutActivityEventsInput>;
  update?: InputMaybe<UserUpdateWithoutActivityEventsInput>;
  upsert?: InputMaybe<UserUpsertWithoutActivityEventsInput>;
};

export type UserUpdateOneRequiredWithoutBadgesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBadgesInput>;
  create?: InputMaybe<UserCreateWithoutBadgesInput>;
  update?: InputMaybe<UserUpdateWithoutBadgesInput>;
  upsert?: InputMaybe<UserUpsertWithoutBadgesInput>;
};

export type UserUpdateOneRequiredWithoutCommunitiesMembershipInfoInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommunitiesMembershipInfoInput>;
  create?: InputMaybe<UserCreateWithoutCommunitiesMembershipInfoInput>;
  update?: InputMaybe<UserUpdateWithoutCommunitiesMembershipInfoInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommunitiesMembershipInfoInput>;
};

export type UserUpdateOneRequiredWithoutCommunitySuggestionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommunitySuggestionsInput>;
  create?: InputMaybe<UserCreateWithoutCommunitySuggestionsInput>;
  update?: InputMaybe<UserUpdateWithoutCommunitySuggestionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommunitySuggestionsInput>;
};

export type UserUpdateOneRequiredWithoutNotificationsWhereRecipientInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsWhereRecipientInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsWhereRecipientInput>;
  update?: InputMaybe<UserUpdateWithoutNotificationsWhereRecipientInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotificationsWhereRecipientInput>;
};

export type UserUpdateOneRequiredWithoutPremiumAccessCardsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPremiumAccessCardsInput>;
  create?: InputMaybe<UserCreateWithoutPremiumAccessCardsInput>;
  update?: InputMaybe<UserUpdateWithoutPremiumAccessCardsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPremiumAccessCardsInput>;
};

export type UserUpdateOneRequiredWithoutPurchaseTransfersWhereSenderInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPurchaseTransfersWhereSenderInput>;
  create?: InputMaybe<UserCreateWithoutPurchaseTransfersWhereSenderInput>;
  update?: InputMaybe<UserUpdateWithoutPurchaseTransfersWhereSenderInput>;
  upsert?: InputMaybe<UserUpsertWithoutPurchaseTransfersWhereSenderInput>;
};

export type UserUpdateOneRequiredWithoutPurchasesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPurchasesInput>;
  create?: InputMaybe<UserCreateWithoutPurchasesInput>;
  update?: InputMaybe<UserUpdateWithoutPurchasesInput>;
  upsert?: InputMaybe<UserUpsertWithoutPurchasesInput>;
};

export type UserUpdateOneWithoutClaimedInviteCodeInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClaimedInviteCodeInput>;
  create?: InputMaybe<UserCreateWithoutClaimedInviteCodeInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutClaimedInviteCodeInput>;
  upsert?: InputMaybe<UserUpsertWithoutClaimedInviteCodeInput>;
};

export type UserUpdateOneWithoutCreatedEventsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedEventsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedEventsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutCreatedEventsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedEventsInput>;
};

export type UserUpdateOneWithoutNotificationsWhereSenderInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsWhereSenderInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsWhereSenderInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutNotificationsWhereSenderInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotificationsWhereSenderInput>;
};

export type UserUpdateOneWithoutOwnedInviteCodesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOwnedInviteCodesInput>;
  create?: InputMaybe<UserCreateWithoutOwnedInviteCodesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutOwnedInviteCodesInput>;
  upsert?: InputMaybe<UserUpsertWithoutOwnedInviteCodesInput>;
};

export type UserUpdateOneWithoutPurchaseTransfersWhereRecipientInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPurchaseTransfersWhereRecipientInput>;
  create?: InputMaybe<UserCreateWithoutPurchaseTransfersWhereRecipientInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutPurchaseTransfersWhereRecipientInput>;
  upsert?: InputMaybe<UserUpsertWithoutPurchaseTransfersWhereRecipientInput>;
};

export type UserUpdateWithWhereUniqueWithoutAcceptedDiscoverCardsInput = {
  data: UserUpdateWithoutAcceptedDiscoverCardsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutCheckedInEventsInput = {
  data: UserUpdateWithoutCheckedInEventsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutCommunitiesWhereAdminInput = {
  data: UserUpdateWithoutCommunitiesWhereAdminInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutCommunitiesWhereMemberInput = {
  data: UserUpdateWithoutCommunitiesWhereMemberInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutDeclinedDiscoverCardsInput = {
  data: UserUpdateWithoutDeclinedDiscoverCardsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutDownvotedFeedItemsInput = {
  data: UserUpdateWithoutDownvotedFeedItemsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutInvitedEventsInput = {
  data: UserUpdateWithoutInvitedEventsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutRegisteredEventsInput = {
  data: UserUpdateWithoutRegisteredEventsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutTicketsEventsInput = {
  data: UserUpdateWithoutTicketsEventsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutUpvotedFeedItemsInput = {
  data: UserUpdateWithoutUpvotedFeedItemsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutAcceptedDiscoverCardsInput = {
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutActivityEventsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutBadgesInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCheckedInEventsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutClaimedInviteCodeInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommunitiesMembershipInfoInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommunitiesWhereAdminInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommunitiesWhereMemberInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommunitySuggestionsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedEventsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutDeclinedDiscoverCardsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutDownvotedFeedItemsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutInvitedEventsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotificationsWhereRecipientInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotificationsWhereSenderInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutOwnedInviteCodesInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPremiumAccessCardsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPurchaseTransfersWhereRecipientInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPurchaseTransfersWhereSenderInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPurchasesInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRegisteredEventsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTicketsEventsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  upvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutUpvotedInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpvotedFeedItemsInput = {
  acceptedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatAcceptedInput>;
  activityEvents?: InputMaybe<ActivityEventUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  badges?: InputMaybe<ClaimedBadgeUpdateManyWithoutOwnerInput>;
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  checkedInEvents?: InputMaybe<EventUpdateManyWithoutCheckedInUsersInput>;
  claimedInviteCode?: InputMaybe<InviteCodeUpdateManyWithoutClaimerInput>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoUpdateManyWithoutUserInput>;
  communitiesWhereAdmin?: InputMaybe<CommunityUpdateManyWithoutAdminsInput>;
  communitiesWhereMember?: InputMaybe<CommunityUpdateManyWithoutMembersInput>;
  communitySuggestions?: InputMaybe<CommunitySuggestionUpdateManyWithoutUserInput>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedDiscoverOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedIDCardOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedInventoryOnboarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEvents?: InputMaybe<EventUpdateManyWithoutCreatorInput>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardUpdateManyWithoutUsersThatDeclinedInput>;
  downvotedFeedItems?: InputMaybe<FeedItemUpdateManyWithoutDownvotedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fromWeb?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitedEvents?: InputMaybe<EventUpdateManyWithoutInvitedUsersInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationsEnabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageUpdateManyWithoutRecipientInput>;
  notificationsWhereSender?: InputMaybe<TalksMessageUpdateManyWithoutSenderInput>;
  numberedId?: InputMaybe<IntFieldUpdateOperationsInput>;
  ownedInviteCodes?: InputMaybe<InviteCodeUpdateManyWithoutOwnerInput>;
  passwordHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordResetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordSalt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerificationCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardUpdateManyWithoutUserInput>;
  previousEmail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousEmailVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferUpdateManyWithoutRecipientInput>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferUpdateManyWithoutSenderInput>;
  purchases?: InputMaybe<PurchaseUpdateManyWithoutOwnerInput>;
  pushPlayerIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  registeredEvents?: InputMaybe<EventUpdateManyWithoutRegisteredUsersInput>;
  requirePasswordChange?: InputMaybe<BoolFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  solanaWalletAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserStatusFieldUpdateOperationsInput>;
  ticketsEvents?: InputMaybe<EventUpdateManyWithoutTicketedUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versionOfWerz?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutAcceptedDiscoverCardsInput = {
  create: UserCreateWithoutAcceptedDiscoverCardsInput;
  update: UserUpdateWithoutAcceptedDiscoverCardsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutCheckedInEventsInput = {
  create: UserCreateWithoutCheckedInEventsInput;
  update: UserUpdateWithoutCheckedInEventsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutCommunitiesWhereAdminInput = {
  create: UserCreateWithoutCommunitiesWhereAdminInput;
  update: UserUpdateWithoutCommunitiesWhereAdminInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutCommunitiesWhereMemberInput = {
  create: UserCreateWithoutCommunitiesWhereMemberInput;
  update: UserUpdateWithoutCommunitiesWhereMemberInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutDeclinedDiscoverCardsInput = {
  create: UserCreateWithoutDeclinedDiscoverCardsInput;
  update: UserUpdateWithoutDeclinedDiscoverCardsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutDownvotedFeedItemsInput = {
  create: UserCreateWithoutDownvotedFeedItemsInput;
  update: UserUpdateWithoutDownvotedFeedItemsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutInvitedEventsInput = {
  create: UserCreateWithoutInvitedEventsInput;
  update: UserUpdateWithoutInvitedEventsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutRegisteredEventsInput = {
  create: UserCreateWithoutRegisteredEventsInput;
  update: UserUpdateWithoutRegisteredEventsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutTicketsEventsInput = {
  create: UserCreateWithoutTicketsEventsInput;
  update: UserUpdateWithoutTicketsEventsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutUpvotedFeedItemsInput = {
  create: UserCreateWithoutUpvotedFeedItemsInput;
  update: UserUpdateWithoutUpvotedFeedItemsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutActivityEventsInput = {
  create: UserCreateWithoutActivityEventsInput;
  update: UserUpdateWithoutActivityEventsInput;
};

export type UserUpsertWithoutBadgesInput = {
  create: UserCreateWithoutBadgesInput;
  update: UserUpdateWithoutBadgesInput;
};

export type UserUpsertWithoutClaimedInviteCodeInput = {
  create: UserCreateWithoutClaimedInviteCodeInput;
  update: UserUpdateWithoutClaimedInviteCodeInput;
};

export type UserUpsertWithoutCommunitiesMembershipInfoInput = {
  create: UserCreateWithoutCommunitiesMembershipInfoInput;
  update: UserUpdateWithoutCommunitiesMembershipInfoInput;
};

export type UserUpsertWithoutCommunitySuggestionsInput = {
  create: UserCreateWithoutCommunitySuggestionsInput;
  update: UserUpdateWithoutCommunitySuggestionsInput;
};

export type UserUpsertWithoutCreatedEventsInput = {
  create: UserCreateWithoutCreatedEventsInput;
  update: UserUpdateWithoutCreatedEventsInput;
};

export type UserUpsertWithoutNotificationsWhereRecipientInput = {
  create: UserCreateWithoutNotificationsWhereRecipientInput;
  update: UserUpdateWithoutNotificationsWhereRecipientInput;
};

export type UserUpsertWithoutNotificationsWhereSenderInput = {
  create: UserCreateWithoutNotificationsWhereSenderInput;
  update: UserUpdateWithoutNotificationsWhereSenderInput;
};

export type UserUpsertWithoutOwnedInviteCodesInput = {
  create: UserCreateWithoutOwnedInviteCodesInput;
  update: UserUpdateWithoutOwnedInviteCodesInput;
};

export type UserUpsertWithoutPremiumAccessCardsInput = {
  create: UserCreateWithoutPremiumAccessCardsInput;
  update: UserUpdateWithoutPremiumAccessCardsInput;
};

export type UserUpsertWithoutPurchaseTransfersWhereRecipientInput = {
  create: UserCreateWithoutPurchaseTransfersWhereRecipientInput;
  update: UserUpdateWithoutPurchaseTransfersWhereRecipientInput;
};

export type UserUpsertWithoutPurchaseTransfersWhereSenderInput = {
  create: UserCreateWithoutPurchaseTransfersWhereSenderInput;
  update: UserUpdateWithoutPurchaseTransfersWhereSenderInput;
};

export type UserUpsertWithoutPurchasesInput = {
  create: UserCreateWithoutPurchasesInput;
  update: UserUpdateWithoutPurchasesInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  acceptedDiscoverCards?: InputMaybe<DiscoverCardListRelationFilter>;
  activityEvents?: InputMaybe<ActivityEventListRelationFilter>;
  avatar?: InputMaybe<StringNullableFilter>;
  badges?: InputMaybe<ClaimedBadgeListRelationFilter>;
  birthday?: InputMaybe<DateTimeNullableFilter>;
  checkedInEvents?: InputMaybe<EventListRelationFilter>;
  claimedInviteCode?: InputMaybe<InviteCodeListRelationFilter>;
  communitiesMembershipInfo?: InputMaybe<CommunityMemberInfoListRelationFilter>;
  communitiesWhereAdmin?: InputMaybe<CommunityListRelationFilter>;
  communitiesWhereMember?: InputMaybe<CommunityListRelationFilter>;
  communitySuggestions?: InputMaybe<CommunitySuggestionListRelationFilter>;
  completedDiscoverCollectionsOnboarding?: InputMaybe<BoolFilter>;
  completedDiscoverOnboarding?: InputMaybe<BoolFilter>;
  completedIDCardOnboarding?: InputMaybe<BoolFilter>;
  completedInventoryOnboarding?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdEvents?: InputMaybe<EventListRelationFilter>;
  declinedDiscoverCards?: InputMaybe<DiscoverCardListRelationFilter>;
  downvotedFeedItems?: InputMaybe<FeedItemListRelationFilter>;
  email?: InputMaybe<StringNullableFilter>;
  emailVerificationCode?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<BoolFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  fromWeb?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  invitedEvents?: InputMaybe<EventListRelationFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  notificationsEnabled?: InputMaybe<BoolFilter>;
  notificationsWhereRecipient?: InputMaybe<TalksMessageListRelationFilter>;
  notificationsWhereSender?: InputMaybe<TalksMessageListRelationFilter>;
  numberedId?: InputMaybe<IntFilter>;
  ownedInviteCodes?: InputMaybe<InviteCodeListRelationFilter>;
  passwordHash?: InputMaybe<StringNullableFilter>;
  passwordResetCode?: InputMaybe<StringNullableFilter>;
  passwordSalt?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  phoneVerificationCode?: InputMaybe<StringNullableFilter>;
  phoneVerified?: InputMaybe<BoolFilter>;
  postalCode?: InputMaybe<StringNullableFilter>;
  premiumAccessCards?: InputMaybe<PremiumAccessCardListRelationFilter>;
  previousEmail?: InputMaybe<StringNullableFilter>;
  previousEmailVerified?: InputMaybe<BoolFilter>;
  purchaseTransfersWhereRecipient?: InputMaybe<PurchaseTransferListRelationFilter>;
  purchaseTransfersWhereSender?: InputMaybe<PurchaseTransferListRelationFilter>;
  purchases?: InputMaybe<PurchaseListRelationFilter>;
  pushPlayerIds?: InputMaybe<StringFilter>;
  registeredEvents?: InputMaybe<EventListRelationFilter>;
  requirePasswordChange?: InputMaybe<BoolFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  solanaWalletAddress?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumUserStatusFilter>;
  ticketsEvents?: InputMaybe<EventListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  upvotedFeedItems?: InputMaybe<FeedItemListRelationFilter>;
  username?: InputMaybe<StringNullableFilter>;
  versionOfWerz?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  passwordResetCode?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  solanaWalletAddress?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ValidateInviteCodePayload = {
  __typename?: 'ValidateInviteCodePayload';
  community?: Maybe<Community>;
  inviteCode?: Maybe<InviteCode>;
  type?: Maybe<InviteCodeType>;
};

export enum WaitlistSource {
  Mobile = 'Mobile',
  Website = 'Website'
}

export type WaitlistUser = {
  __typename?: 'WaitlistUser';
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  source: WaitlistSource;
  updatedAt: Scalars['DateTime'];
};

export type WaitlistUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<WaitlistSource>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type WaitlistUserOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type WaitlistUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  source?: InputMaybe<EnumWaitlistSourceFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WaitlistUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  source?: InputMaybe<EnumWaitlistSourceFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WaitlistUserWhereInput = {
  AND?: InputMaybe<Array<WaitlistUserWhereInput>>;
  NOT?: InputMaybe<Array<WaitlistUserWhereInput>>;
  OR?: InputMaybe<Array<WaitlistUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  source?: InputMaybe<EnumWaitlistSourceFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type WaitlistUserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  identifier?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token?: string | null, errors?: Array<{ __typename?: 'TranslatableError', errorCode?: TranslatableErrorCode | null, path?: Array<string | null> | null } | null> | null, user?: { __typename?: 'User', username?: string | null, communitiesWhereMember: Array<{ __typename?: 'Community', name: string, code?: string | null }> } | null } | null };

export type UserInfoWithCommunitiesFragment = { __typename?: 'User', username?: string | null, communitiesWhereMember: Array<{ __typename?: 'Community', name: string, code?: string | null }> };

export type UserInfoFragment = { __typename?: 'User', username?: string | null };

export type CommunityInfoFragment = { __typename?: 'Community', name: string, code?: string | null };

export const UserInfoFragmentDoc = `
    fragment userInfo on User {
  username
}
    `;
export const CommunityInfoFragmentDoc = `
    fragment communityInfo on Community {
  name
  code
}
    `;
export const UserInfoWithCommunitiesFragmentDoc = `
    fragment userInfoWithCommunities on User {
  ...userInfo
  communitiesWhereMember {
    ...communityInfo
  }
}
    ${UserInfoFragmentDoc}
${CommunityInfoFragmentDoc}`;
export const LoginDocument = `
    mutation Login($identifier: String, $password: String) {
  login(identifier: $identifier, password: $password) {
    errors {
      ... on TranslatableError {
        errorCode
        path
      }
    }
    token
    user {
      ...userInfoWithCommunities
    }
  }
}
    ${UserInfoWithCommunitiesFragmentDoc}`;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );