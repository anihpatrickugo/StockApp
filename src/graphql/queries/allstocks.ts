import gql from "graphql-tag";

export const GET_ALL_STOCKS = gql`
query {
  allStocks {
    id
    ticker
    image
    name 
    open
    prevClose
    price
    marketCap
  }
}

`;