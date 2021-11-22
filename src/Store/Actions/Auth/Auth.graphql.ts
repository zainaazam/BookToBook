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
