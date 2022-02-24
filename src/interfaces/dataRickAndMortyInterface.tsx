export interface DataRickAndMortyInterface {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: Array<{ id: string; name: string; episode: string }>;
}
