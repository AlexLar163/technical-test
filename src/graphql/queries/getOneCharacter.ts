import { gql } from "@apollo/client";

const getOneCharacter = gql`
  query getOneCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;

export default getOneCharacter;
