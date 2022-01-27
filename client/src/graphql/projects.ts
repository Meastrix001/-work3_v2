import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
query Projects{
        Projects {
        id,
        title,
        desc,
        projectOwner,
        state,
        price,
        repository,
        createdOn,
        startingOn,
        endingOn,
        teamSizeReq
      }
    }
  `

export const CREATE_PROJECT = gql`
  mutation createProject($title: String!, $desc: String!, $projectOwner: String!, $price: Float!, $repository: String!, $createdOn: DateTime!, $startingOn: DateTime!, $endingOn: DateTime!, $teamSizeReq: Float!) {
    createProject(
      createProjectInput: { 
      title: $title
      desc: $desc
      projectOwner: $projectOwner
      teamSizeReq: $teamSizeReq
      state: "Wordt goedgekeurd"
      price: $price
      repository: $repository
      createdOn: $createdOn
      startingOn: $startingOn
      endingOn: $endingOn
      }
    ) {
    id
  }
}
`