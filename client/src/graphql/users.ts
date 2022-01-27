import { gql } from '@apollo/client'



export const GET_USER = gql`
query findByArgs($email: String!) {
  findByArgs(email: $email){
    email,
    id,
    password,
    picture,
    firstName,
    lastName,
    devType,
    role
  }
} `

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      email
    }
    access_token
  }
}
`
export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $firstName: String!, $lastName: String!, $role: String!, $devType: String!) {
    createUser(
      createUserInput: { 
        email: $email,
        password: $password,
        firstName: $firstName,
        lastName: $lastName,
        role: $role,
        devType: $devType
      }
    ) {
    id,
    email,
    password,
    firstName,
    lastName,
    role,
    devType
  }
}
`