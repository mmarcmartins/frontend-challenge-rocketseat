/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date type */
  Date: { input: any; output: any; }
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProduct?: Maybe<Array<Maybe<Product>>>;
  createProduct?: Maybe<Product>;
  removeProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
};


export type MutationCreateManyProductArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductInput>>>;
};


export type MutationCreateProductArgs = {
  category: Scalars['String']['input'];
  created_at: Scalars['Date']['input'];
  description: Scalars['String']['input'];
  image_url: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price_in_cents: Scalars['Int']['input'];
  sales: Scalars['Int']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price_in_cents?: InputMaybe<Scalars['Int']['input']>;
  sales?: InputMaybe<Scalars['Int']['input']>;
};

export type Product = {
  __typename?: 'Product';
  category: Scalars['String']['output'];
  created_at: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image_url: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price_in_cents: Scalars['Int']['output'];
  sales: Scalars['Int']['output'];
};

export type ProductFilter = {
  category?: InputMaybe<Scalars['String']['input']>;
  category_neq?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  created_at_gt?: InputMaybe<Scalars['Date']['input']>;
  created_at_gte?: InputMaybe<Scalars['Date']['input']>;
  created_at_lt?: InputMaybe<Scalars['Date']['input']>;
  created_at_lte?: InputMaybe<Scalars['Date']['input']>;
  created_at_neq?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_neq?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  image_url_neq?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  price_in_cents?: InputMaybe<Scalars['Int']['input']>;
  price_in_cents_gt?: InputMaybe<Scalars['Int']['input']>;
  price_in_cents_gte?: InputMaybe<Scalars['Int']['input']>;
  price_in_cents_lt?: InputMaybe<Scalars['Int']['input']>;
  price_in_cents_lte?: InputMaybe<Scalars['Int']['input']>;
  price_in_cents_neq?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  sales?: InputMaybe<Scalars['Int']['input']>;
  sales_gt?: InputMaybe<Scalars['Int']['input']>;
  sales_gte?: InputMaybe<Scalars['Int']['input']>;
  sales_lt?: InputMaybe<Scalars['Int']['input']>;
  sales_lte?: InputMaybe<Scalars['Int']['input']>;
  sales_neq?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductInput = {
  category: Scalars['String']['input'];
  created_at: Scalars['Date']['input'];
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  image_url: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price_in_cents: Scalars['Int']['input'];
  sales: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  Product?: Maybe<Product>;
  _allProductsMeta?: Maybe<ListMetadata>;
  allProducts?: Maybe<Array<Maybe<Product>>>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllProductsMetaArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type AllProductsQueryVariables = Exact<{
  page: Scalars['Int']['input'];
}>;


export type AllProductsQuery = { __typename?: 'Query', allProducts?: Array<{ __typename?: 'Product', id: string, name: string } | null> | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const AllProductsDocument = new TypedDocumentString(`
    query allProducts($page: Int!) {
  allProducts(perPage: 10, page: $page) {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<AllProductsQuery, AllProductsQueryVariables>;