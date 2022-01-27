import { gql } from '@apollo/client'

export const GET_TEAM = gql`
query teamMembers{
  teamMembers {
    firstName,
    lastName,
    email,
    quote,
    devType,
}
}
`

export const CREATE_TEAM = gql`
  mutation createTeamm($firstName: String!, $lastName: String!, $email: String!, $quote: String!, $devType: String!) {
    createTeam(
      createTeamInput: { 
      firstName: $firstName
      lastName: $lastName
      email: $email
      quote: $quote
      devType: $devType
      }
    ) {
    id
  }
}
`