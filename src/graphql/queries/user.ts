import gql from "graphql-tag";

export const GET_USER = gql`
query {
    user {
        id
        firstName
        lastName
        email
        balance
        walletAddress
        photo
      }
}

`;