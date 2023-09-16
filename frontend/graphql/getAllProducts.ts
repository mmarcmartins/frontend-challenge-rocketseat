'use client'

import { graphql } from "@/gql";

export default graphql(`
  query allProducts($page: Int!){
    allProducts(perPage: 10, page: $page){
      id
      name
    }
  }
`);