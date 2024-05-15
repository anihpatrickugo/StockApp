import gql from "graphql-tag";

export const GET_TRANSACTIONS = gql`
query {
  recentTransactions{
    id
    name
    amount
    logo
    date
  }
}
  
`;