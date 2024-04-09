/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query allProducts($page: Int!, $sortOrder:String = \"asc\", $sortField: String = \"created_at\", $filter: ProductFilter){\n    allProducts(perPage: 10, page: $page, sortOrder: $sortOrder, sortField: $sortField, filter: $filter){\n      id\n      name\n      description\n      image_url\n      category\n      price_in_cents\n      sales\n    }\n  }\n": types.AllProductsDocument,
    "\n  query Product($id: ID!){\n    Product(id: $id){\n        name\n        category\n        description\n        price_in_cents\n        image_url\n    }\n  }\n": types.ProductDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allProducts($page: Int!, $sortOrder:String = \"asc\", $sortField: String = \"created_at\", $filter: ProductFilter){\n    allProducts(perPage: 10, page: $page, sortOrder: $sortOrder, sortField: $sortField, filter: $filter){\n      id\n      name\n      description\n      image_url\n      category\n      price_in_cents\n      sales\n    }\n  }\n"): (typeof documents)["\n  query allProducts($page: Int!, $sortOrder:String = \"asc\", $sortField: String = \"created_at\", $filter: ProductFilter){\n    allProducts(perPage: 10, page: $page, sortOrder: $sortOrder, sortField: $sortField, filter: $filter){\n      id\n      name\n      description\n      image_url\n      category\n      price_in_cents\n      sales\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Product($id: ID!){\n    Product(id: $id){\n        name\n        category\n        description\n        price_in_cents\n        image_url\n    }\n  }\n"): (typeof documents)["\n  query Product($id: ID!){\n    Product(id: $id){\n        name\n        category\n        description\n        price_in_cents\n        image_url\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;