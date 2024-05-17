import gql from "graphql-tag";

export const GET_ALL_POSITIONS = gql`
query {
    openPositions{
      id
      direction
      stock{
        ticker
        name
        image
        open
        price
        prevClose
        marketCap
      }
      volume
      price
      date
      currentPercent
    }
  }

`;