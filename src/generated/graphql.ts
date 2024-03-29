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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Auth = {
  __typename?: 'Auth';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  /** Example 2 field (placeholder) */
  exampleField: Scalars['Int'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateAuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateCategoryInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateMetaInput = {
  description: Scalars['String'];
  image: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type CreatePostBlockInput = {
  raw: Scalars['String'];
  type: PostBlockType;
  value: Scalars['String'];
};

export type CreatePostInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  content: Scalars['String'];
  meta: CreateMetaInput;
  schedule?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

export type CreatePostVersionInput = {
  postId: Scalars['String'];
  raw: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type FindFileInput = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type FindOneByMetaUrlInput = {
  url: Scalars['String'];
};

export type FindPostInput = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type FindPostVersionInput = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type HtmlObject = {
  __typename?: 'HTMLObject';
  html: Scalars['String'];
};

export type Meta = {
  __typename?: 'Meta';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  /** A short description or summary of the object. [Between 2 and 4 sentences.] [Maximum 200 characters.] */
  description: Scalars['String'];
  id: Scalars['String'];
  /** The URL of the image for your object. It should be at least 600×315 pixels, but 1200×630 or larger is preferred (up to 5MB). Stay close to a 1.91:1 aspect ratio to avoid cropping. */
  image: Scalars['String'];
  post: Post;
  /** Follow this guide https://developers.google.com/search/docs/appearance/title-link#page-titles [Maximum 70 characters.] */
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  /** Keep it simple follow this guide: https://developers.google.com/search/docs/crawling-indexing/url-structure */
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createPost: Post;
  createPostBlock: PostBlock;
  createPostVersion: PostVersion;
  createUser: User;
  findOneByMetaUrl: Post;
  login: Auth;
  register: Auth;
  removeCategory: Category;
  removeMeta: Meta;
  removePost: UpdateResultInput;
  removePostBlock: PostBlock;
  removePostVersion: PostVersion;
  removeUser: User;
  updateCategory: Category;
  updateMeta: Meta;
  updatePost: Post;
  updatePostBlock: PostBlock;
  updatePostVersion: PostVersion;
  updateUser: User;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreatePostBlockArgs = {
  createPostBlockInput: CreatePostBlockInput;
};


export type MutationCreatePostVersionArgs = {
  createPostVersionInput: CreatePostVersionInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationFindOneByMetaUrlArgs = {
  findOneByMetaUrlInput: FindOneByMetaUrlInput;
};


export type MutationLoginArgs = {
  createAuthInput: CreateAuthInput;
};


export type MutationRegisterArgs = {
  createAuthInput: CreateAuthInput;
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMetaArgs = {
  id: Scalars['Int'];
};


export type MutationRemovePostArgs = {
  id: Scalars['String'];
};


export type MutationRemovePostBlockArgs = {
  id: Scalars['String'];
};


export type MutationRemovePostVersionArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateMetaArgs = {
  updateMetaInput: UpdateMetaInput;
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationUpdatePostBlockArgs = {
  updatePostBlockInput: UpdatePostBlockInput;
};


export type MutationUpdatePostVersionArgs = {
  updatePostVersionInput: UpdatePostVersionInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  blocks: Array<PostBlock>;
  category: Category;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  meta: Meta;
  raw: Scalars['String'];
  schedule?: Maybe<Scalars['Float']>;
  status: Scalars['Boolean'];
  text: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostBlock = {
  __typename?: 'PostBlock';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  index: Scalars['Float'];
  post: Post;
  raw: Scalars['String'];
  type: PostBlockType;
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export enum PostBlockType {
  Header = 'HEADER',
  Image = 'IMAGE',
  List = 'LIST',
  Paragraph = 'PARAGRAPH'
}

export type PostVersion = {
  __typename?: 'PostVersion';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  post: Post;
  raw: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  category: Category;
  file: Array<File>;
  fileById: File;
  findOnePostById: Post;
  findPost: Array<Post>;
  findPostVersion: Array<PostVersion>;
  me: Auth;
  meta: Meta;
  postBlock: PostBlock;
  postHTMLById: HtmlObject;
  postHTMLByMetaURL: HtmlObject;
  postVersion: PostVersion;
  user: User;
};


export type QueryCategoryArgs = {
  id: Scalars['Int'];
};


export type QueryFileArgs = {
  findFileInput: FindFileInput;
};


export type QueryFileByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindOnePostByIdArgs = {
  id: Scalars['String'];
};


export type QueryFindPostArgs = {
  findPostInput: FindPostInput;
};


export type QueryFindPostVersionArgs = {
  findPostVersionInput: FindPostVersionInput;
};


export type QueryMetaArgs = {
  id: Scalars['Int'];
};


export type QueryPostBlockArgs = {
  id: Scalars['String'];
};


export type QueryPostHtmlByIdArgs = {
  id: Scalars['String'];
};


export type QueryPostHtmlByMetaUrlArgs = {
  url: Scalars['String'];
};


export type QueryPostVersionArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type UpdateCategoryInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateMetaInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type UpdatePostBlockInput = {
  id: Scalars['String'];
  raw?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostBlockType>;
  value?: InputMaybe<Scalars['String']>;
};

export type UpdatePostInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  meta?: InputMaybe<CreateMetaInput>;
  schedule?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdatePostVersionInput = {
  id: Scalars['Int'];
  postId?: InputMaybe<Scalars['String']>;
  raw?: InputMaybe<Scalars['String']>;
};

export type UpdateResultInput = {
  __typename?: 'UpdateResultInput';
  affected: Scalars['Int'];
  generatedMaps: Scalars['String'];
  raw: Scalars['String'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RegisterMutationVariables = Exact<{
  createAuthInput: CreateAuthInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'Auth', token: string, user: { __typename?: 'User', email: string } } };

export type LoginMutationVariables = Exact<{
  createAuthInput: CreateAuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', token: string, user: { __typename?: 'User', email: string } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'Auth', token: string, createdAt: any } };

export type FileQueryVariables = Exact<{
  findFileInput: FindFileInput;
}>;


export type FileQuery = { __typename?: 'Query', file: Array<{ __typename?: 'File', url: string, name: string }> };

export type CreatePostVersionMutationVariables = Exact<{
  createPostVersionInput: CreatePostVersionInput;
}>;


export type CreatePostVersionMutation = { __typename?: 'Mutation', createPostVersion: { __typename?: 'PostVersion', raw: string, createdAt: any } };

export type FindPostVersionQueryVariables = Exact<{
  findPostVersionInput: FindPostVersionInput;
}>;


export type FindPostVersionQuery = { __typename?: 'Query', findPostVersion: Array<{ __typename?: 'PostVersion', raw: string, createdAt: any }> };

export type FindPostQueryVariables = Exact<{
  findPostInput: FindPostInput;
}>;


export type FindPostQuery = { __typename?: 'Query', findPost: Array<{ __typename?: 'Post', title: string, id: string, status: boolean, raw: string, schedule?: number | null, meta: { __typename?: 'Meta', image: string, url: string, title: string, description: string } }> };

export type FindOnePostQueryVariables = Exact<{
  findOnePostInput: Scalars['String'];
}>;


export type FindOnePostQuery = { __typename?: 'Query', findOnePostById: { __typename?: 'Post', title: string, id: string, status: boolean, raw: string, schedule?: number | null, meta: { __typename?: 'Meta', image: string, url: string, title: string, description: string } } };

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', title: string, id: string } };

export type RemovePostMutationVariables = Exact<{
  removePostInput: Scalars['String'];
}>;


export type RemovePostMutation = { __typename?: 'Mutation', removePost: { __typename?: 'UpdateResultInput', affected: number } };

export type UpdatePostMutationVariables = Exact<{
  updatePostInput: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', raw: string, title: string, id: string } };

export type PostHtmlByIdQueryVariables = Exact<{
  postHTMLById: Scalars['String'];
}>;


export type PostHtmlByIdQuery = { __typename?: 'Query', postHTMLById: { __typename?: 'HTMLObject', html: string } };

export type PostHtmlByMetaUrlQueryVariables = Exact<{
  postHTMLByMetaURL: Scalars['String'];
}>;


export type PostHtmlByMetaUrlQuery = { __typename?: 'Query', postHTMLByMetaURL: { __typename?: 'HTMLObject', html: string } };

export const RegisterDocument = gql`
    mutation Register($createAuthInput: CreateAuthInput!) {
  register(createAuthInput: $createAuthInput) {
    user {
      email
    }
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation Login($createAuthInput: CreateAuthInput!) {
  login(createAuthInput: $createAuthInput) {
    token
    user {
      email
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MeDocument = gql`
    query Me {
  me {
    token
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
    document = MeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FileDocument = gql`
    query File($findFileInput: FindFileInput!) {
  file(findFileInput: $findFileInput) {
    url
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FileGQL extends Apollo.Query<FileQuery, FileQueryVariables> {
    document = FileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePostVersionDocument = gql`
    mutation CreatePostVersion($createPostVersionInput: CreatePostVersionInput!) {
  createPostVersion(createPostVersionInput: $createPostVersionInput) {
    raw
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePostVersionGQL extends Apollo.Mutation<CreatePostVersionMutation, CreatePostVersionMutationVariables> {
    document = CreatePostVersionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindPostVersionDocument = gql`
    query FindPostVersion($findPostVersionInput: FindPostVersionInput!) {
  findPostVersion(findPostVersionInput: $findPostVersionInput) {
    raw
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindPostVersionGQL extends Apollo.Query<FindPostVersionQuery, FindPostVersionQueryVariables> {
    document = FindPostVersionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindPostDocument = gql`
    query FindPost($findPostInput: FindPostInput!) {
  findPost(findPostInput: $findPostInput) {
    title
    id
    status
    raw
    schedule
    meta {
      image
      url
      title
      description
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindPostGQL extends Apollo.Query<FindPostQuery, FindPostQueryVariables> {
    document = FindPostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindOnePostDocument = gql`
    query FindOnePost($findOnePostInput: String!) {
  findOnePostById(id: $findOnePostInput) {
    title
    id
    status
    raw
    meta {
      image
      url
      title
      description
    }
    schedule
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindOnePostGQL extends Apollo.Query<FindOnePostQuery, FindOnePostQueryVariables> {
    document = FindOnePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePostDocument = gql`
    mutation CreatePost($createPostInput: CreatePostInput!) {
  createPost(createPostInput: $createPostInput) {
    title
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePostGQL extends Apollo.Mutation<CreatePostMutation, CreatePostMutationVariables> {
    document = CreatePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemovePostDocument = gql`
    mutation RemovePost($removePostInput: String!) {
  removePost(id: $removePostInput) {
    affected
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemovePostGQL extends Apollo.Mutation<RemovePostMutation, RemovePostMutationVariables> {
    document = RemovePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePostDocument = gql`
    mutation UpdatePost($updatePostInput: UpdatePostInput!) {
  updatePost(updatePostInput: $updatePostInput) {
    raw
    title
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePostGQL extends Apollo.Mutation<UpdatePostMutation, UpdatePostMutationVariables> {
    document = UpdatePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PostHtmlByIdDocument = gql`
    query PostHTMLById($postHTMLById: String!) {
  postHTMLById(id: $postHTMLById) {
    html
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostHtmlByIdGQL extends Apollo.Query<PostHtmlByIdQuery, PostHtmlByIdQueryVariables> {
    document = PostHtmlByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PostHtmlByMetaUrlDocument = gql`
    query PostHTMLByMetaURL($postHTMLByMetaURL: String!) {
  postHTMLByMetaURL(url: $postHTMLByMetaURL) {
    html
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostHtmlByMetaUrlGQL extends Apollo.Query<PostHtmlByMetaUrlQuery, PostHtmlByMetaUrlQueryVariables> {
    document = PostHtmlByMetaUrlDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }