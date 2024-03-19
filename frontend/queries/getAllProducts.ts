'use client'

import { graphql } from "@/gql";

export default graphql(`
  query allProducts($page: Int!){
    allProducts(perPage: 10, page: $page){
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