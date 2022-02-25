import { useEffect, useState } from "react";
import { CharacterInterface } from "../../interfaces/characterInterface";
import { useLazyQuery } from "@apollo/client";
import getOneCharacter from "../../graphql/queries/getOneCharacter";
import CardLoading from "../../skeleton/CardLoading";
import { useRouter } from "next/router";
import Detail from "../../components/Detail";
import TableDetail from "../../components/TableDetail";

export default function CardDetail(props: any) {
  const id = props.id;
  const [getCharacter, result] = useLazyQuery(getOneCharacter);
  const [character, setCharacter] = useState({} as CharacterInterface);
  const router = useRouter();

  useEffect(() => {
    getCharacter({ variables: { id: id } });
    if (result.data) setCharacter(result.data.character);
  }, [result.data]);

  return Object.keys(character).length === 0 ? (
    <CardLoading />
  ) : (
    <div className="my-10">
      <button
        className="
        p-3 
        mb-5 
        rounded-2xl 
        text-xl
        font-semibold 
        text-white 
        bg-orange-500"
        onClick={() => router.back()}
      >
        Volver
      </button>
      <Detail character={character} />
      <TableDetail episode={character.episode} />
    </div>
  );
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "" } }],
    fallback: true,
  };
}
export async function getStaticProps(context: any) {
  const { params } = context;
  return { props: { ...params } };
}
