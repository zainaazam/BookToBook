import gql from 'graphql-tag';

export const PHOTO_FRAGMENT = gql`
  fragment PhotoFragment on Upload {
    id
    type
    filename
    thumbnail
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $name: String!
    $email: String!
    $phone: String!
    $password: String!
  ) {
    createAccount(
      createAccountInput: {
        name: $name
        email: $email
        phone: $phone
        password: $password
      }
    ) {
      id
      name
      email
      phone
      password
      deleted
      updated_at
      created_at
    }
  }
`;

export const ACCOUNT_LOGIN = gql`
  mutation accountLogin($emailOrPhone: String!, $password: String!) {
    accountLogin(
      loginInput: {emailOrPhone: $emailOrPhone, password: $password}
    ) {
      id
      name
      email
      phone
      password
      deleted
      updated_at
      created_at
    }
  }
`;

export const FORGET_PASSWORD = gql`
  mutation forgotPassword($phoneEmailOrUsername: String!) {
    forgotPassword(phoneEmailOrUsername: $phoneEmailOrUsername)
  }
`;

export const VERIFY_CODE = gql`
  mutation verifyCode($phoneEmailOrUsername: String!, $code: String!) {
    verifyCode(phoneEmailOrUsername: $phoneEmailOrUsername, code: $code)
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword($password: String!, $account_id: String!) {
    resetPassword(password: $password, account_id: $account_id) {
      name
      email
      phone
    }
  }
`;
