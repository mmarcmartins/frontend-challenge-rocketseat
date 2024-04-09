'use client'

import { graphql } from "@/gql";
//perPage: 10, page: 1, sortOrder: "desc", sortField: "created_at",
export default graphql(`
  query allProducts($page: Int!, $sortOrder:String = "asc", $sortField: String = "created_at", $filter: ProductFilter){
    allProducts(perPage: 10, page: $page, sortOrder: $sortOrder, sortField: $sortField, filter: $filter){
      id
      name
      description
      image_url
      category
      price_in_cents
      sales
    }
  }
`);