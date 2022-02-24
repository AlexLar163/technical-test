import Card from "../components/Card";
import { DataRickAndMortyAPI } from "../interfaces/dataRickAndMortyAPI.interface";

const home = () => {
  // data rick and morty api
  let data:Array<DataRickAndMortyAPI> = [
    {
      id: 1,
      name: "rick",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      status: "alive",
      species: "human",
    },
    {
      id: 2,
      name: "morty",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      status: "alive",
      species: "human",
    },
    {
      id: 3,
      name: "summer",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      status: "alive",
      species: "human",
    },
    {
      id: 4,
      name: "jerry",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      status: "alive",
      species: "human",
    },
    {
      id: 5,
      name: "beth",
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      status: "alive",
      species: "human",
    },
    {
      id: 6,
      name: "summer",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      status: "alive",
      species: "human",
    },
    {
      id: 7,
      name: "jerry",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      status: "alive",
      species: "human",
    },
    {
      id: 8,
      name: "beth",
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      status: "alive",
      species: "human",
    },
    {
      id: 9,
      name: "summer",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      status: "alive",
      species: "human",
    },
    {
      id: 10,
      name: "jerry",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      status: "alive",
      species: "human",
    },
  ];
  return (
    <div className="container mx-auto my-5 grid grid-cols-3  gap-4">
      {data.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </div>
  );
};
export default home;
