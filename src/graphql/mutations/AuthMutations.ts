import { gql } from "@apollo/client";

export const SIGN_USER_IN = gql`
  mutation SignUserIn($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
      refreshExpiresIn
    }
  }
`;



export const SIGN_USER_UP = gql`
mutation SignUserUp ($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    registerUser(firstName: $firstname, lastName: $lastname, email: $email, password: $password){
      user {
        id
        profilePhoto
        email
        firstName
        lastName
        walletAddress
        balance
        lastLogin
        isStaff
        isActive
        dateJoined
      }
    }
  }
`


export const EDIT_USER = gql`
mutation EditUser($firstname: String!, $lastname: String!, $email: String!, $walletAddress: String!){
  updateUser (firstName: $firstname, lastName: $lastname, email: $email, walletAddress: $walletAddress){
   user {
      id
      profilePhoto
      email
      firstName
      lastName
      walletAddress
      balance
      lastLogin
      isStaff
      isActive
      dateJoined
    }
  }
}
`


export const VERIFY_USER = gql`
mutation VerifyEmailToken ($token: String!) {
  verifyUser(token: $token) {
    success
  }
}`