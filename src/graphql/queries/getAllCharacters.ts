import { gql } from "@apollo/client";

const getAllCharacters = gql`
  query getAllCharacters ($page: Int) {
    characters (page: $page) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`;
export default getAllCharacters;