'use client'

import { graphql } from "@/gql";
export default graphql(`
  query Product($id: ID!){
    Product(id: $id){
        name
        category
        description
        price_in_cents
        image_url
    }
  }
`);