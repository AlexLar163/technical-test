import { useEffect, useState } from "react";
import { CharacterInterface } from "../../interfaces/characterInterface";
import { useLazyQuery } from "@apollo/client";
import getOneCharacter from "../../graphql/queries/getOneCharacter";
import CardLoading from "../../skeleton/CardLoading";

export default function CardDetail(props: any) {
  const id = props.id;
  const [getCharacter, result] = useLazyQuery(getOneCharacter);
  const [person, setPerson] = useState({} as CharacterInterface);

  useEffect(() => {
    getCharacter({ variables: { id: id } });
    if (result.data) setPerson(result.data.character);
  }, [result.data]);

  return Object.keys(person).length === 0 ? (
    <CardLoading />
  ) : (
    <div className="my-10">
      <figure className="mb-5 rounded-3xl bg-slate-200">
        <img className="rounded-full p-5 mx-auto" src={person.image} alt="" />
        <div className="p-10 bg-slate-700">
          <h2 className="font-bold text-5xl text-orange-500">{person.name}</h2>
          <h2 className="font-bold text-3xl text-orange-500 animate-pulse">
            {person.status}
          </h2>
        </div>
        <div className="flex rounded-b-3xl bg-orange-500">
          <h2 className="flex-1 py-5 border-2 rounded-bl-3xl border-slate-700 font-bold text-3xl text-center text-slate-700">
            {person.species}
          </h2>
          <h2 className="flex-1 py-5 border-2 rounded-br-3xl border-slate-700 font-bold text-3xl text-center text-slate-700">
            {person.gender}
          </h2>
        </div>
      </figure>
      <div className="">
        <table className="w-[100%]  mx-auto border-separate border-2 rounded-3xl border-slate-700 bg-slate-700 ">
          <thead className="">
            <tr className="flex">
              <th className="flex-1 p-5 font-bold text-3xl text-orange-500">
                Nombre
              </th>
              <th className="flex-1 p-5 font-bold text-3xl text-orange-500">
                Episodio
              </th>
            </tr>
          </thead>
          <tbody className="h-[60px] overflow-auto">
            {person.episode.map((ep: any, index) =>
              index % 2 === 0 ? (
                <tr className="flex text-slate-700 bg-orange-200 rounded-b-3xl" key={ep.id}>
                  <td className="flex-1 p-5 font-semibold text-center">
                    {ep.name}
                  </td>
                  <td className="flex-1 p-5 font-semibold text-center">
                    {ep.episode}
                  </td>
                </tr>
              ) : (
                <tr className="flex text-orange-200 bg-slate-500 rounded-b-3xl" key={ep.id}>
                  <td className="flex-1 p-5 font-semibold text-center">
                    {ep.name}
                  </td>
                  <td className="flex-1 p-5 font-semibold text-center">
                    {ep.episode}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
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
