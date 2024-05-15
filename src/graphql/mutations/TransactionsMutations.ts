import { gql } from "@apollo/client";

export const NEW_DEPOSIT = gql`
  mutation NewDeposit($amount: Int!, $trnxHash: String!){
    newDeposit(amount: $amount, trnxHash: $trnxHash){
      deposit{
        id
        amount
        trnxHash
        verified
        date
        reference
      }
    }
  }
`;



