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



export const NEW_WITHDRAWAL = gql`
mutation NewWithdrawal ($amount: Int!){
  newWithdrawal(amount: $amount){
    withdrawal{
      id
      amount
      verified
      date
      reference
      
    }
  }
}
`;

export const NEW_POSITION = gql`
mutation NewPosition ($direction: String!, $ticker: String!, $volume: Int!, $pin: Int!) {
  newPosition(direction: $direction, ticker: $ticker, volume: $volume, pin: $pin){
    position{
      id
      direction
      stock {
        name
      }
      price
      volume
      date
    }
  }
}
`;

export const CLOSE_POSITION = gql`
mutation ClosePosition($id: Int!) {
  closePosition(id: $id){
    Success
  }
}
`;



