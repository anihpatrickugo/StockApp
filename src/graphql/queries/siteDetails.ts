import gql from "graphql-tag";

export const WALLET_ADDRESS = gql`
query{
    walletAddress
  }
`;

export const MINIMUM_DEPOSIT_AMOUNT = gql`
query{
  minimumDeposit
}
`;

export const MINIMUM_WITHDRAWAL_AMOUNT = gql`
query{
  minimumWithdrawal
}
`;

