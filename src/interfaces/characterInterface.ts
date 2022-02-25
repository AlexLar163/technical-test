import { EpisodesInterface } from "./episodesInterface";

export interface CharacterInterface {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: Array<EpisodesInterface>;
}

