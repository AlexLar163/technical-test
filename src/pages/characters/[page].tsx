import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import getAllCharacters from "../../graphql/queries/getAllCharacters";
import CardLoading from "../../skeleton/CardLoading";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import { CharacterInterface } from "../../interfaces/characterInterface";

export default function Characters(props: any) {
  const page = parseInt(props.page) || 1;
  const [getCharacters, results] = useLazyQuery(getAllCharacters);
  const [characters, setCharacters] = useState([] as Array<CharacterInterface>);

  useEffect(() => {
    getCharacters({ variables: { page: page } });
    if (results.data) {
      setCharacters(results.data.characters.results);
    }
  }, [results.data, page]);

  return (
    <>
      <Pagination />
      {characters.length === 0 ? (
        <>
          <CardLoading />
        </>
      ) : (
        <div
          className="
      container
      sm
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5 
      gap-5"
        >
          {characters.map((char: CharacterInterface) => (
            <Card key={`${char.name}-${char.id}`} data={char} />
          ))}
        </div>
      )}
      <Pagination />
    </>
  );
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { page: "1" } }],
    fallback: true,
  };
}
export async function getStaticProps(context: any) {
  const { params } = context;
  return { props: { ...params } };
}
