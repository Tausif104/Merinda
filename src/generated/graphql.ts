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
  id: Scalars['ID'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime'];
  /** Example 2 field (placeholder) */
  exampleField: Scalars['Int'];
  id: Scalars['ID'];
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

export type CreatePostInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  content: Scalars['String'];
  title: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type FindPostInput = {
  /** Example field (placeholder) */
  skip?: InputMaybe<Scalars['Int']>;
  /** Example field (placeholder) */
  take?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createPost: Post;
  createUser: User;
  login: Auth;
  register: Auth;
  removeCategory: Category;
  removePost: Array<Post>;
  removeUser: User;
  updateCategory: Category;
  updatePost: Post;
  updateUser: User;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
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


export type MutationRemovePostArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  category: Category;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  postStatus: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  category: Category;
  findOnePostById: Post;
  findPost: Array<Post>;
  user: User;
};


export type QueryCategoryArgs = {
  id: Scalars['Int'];
};


export type QueryFindOnePostByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindPostArgs = {
  findPostInput: FindPostInput;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type UpdateCategoryInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdatePostInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  password?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type FindPostQueryVariables = Exact<{
  findPostInput: FindPostInput;
}>;


export type FindPostQuery = { __typename?: 'Query', findPost: Array<{ __typename?: 'Post', title: string, id: string, postStatus: boolean, content: string }> };

export type FindOnePostQueryVariables = Exact<{
  findOnePostInput: Scalars['Int'];
}>;


export type FindOnePostQuery = { __typename?: 'Query', findOnePostById: { __typename?: 'Post', title: string, id: string, postStatus: boolean, content: string } };

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', title: string, id: string } };

export type RemovePostMutationVariables = Exact<{
  removePostInput: Scalars['Int'];
}>;


export type RemovePostMutation = { __typename?: 'Mutation', removePost: Array<{ __typename?: 'Post', title: string, id: string }> };

export type UpdatePostMutationVariables = Exact<{
  updatePostInput: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', content: string, title: string, id: string } };

export const FindPostDocument = gql`
    query FindPost($findPostInput: FindPostInput!) {
  findPost(findPostInput: $findPostInput) {
    title
    id
    postStatus
    content
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
    query FindOnePost($findOnePostInput: Int!) {
  findOnePostById(id: $findOnePostInput) {
    title
    id
    postStatus
    content
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
    mutation RemovePost($removePostInput: Int!) {
  removePost(id: $removePostInput) {
    title
    id
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
    content
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