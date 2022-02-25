import { CharacterInterface } from "../interfaces/characterInterface";

type Props = {
  character: CharacterInterface;
};

const Detail = (props: Props) => {
  const { character } = props;

  return (
    <figure className="mb-5 rounded-3xl bg-slate-200">
      <img className="rounded-full p-5 mx-auto" src={character.image} alt="" />
      <div className="p-10 bg-slate-700">
        <h2 className="font-bold text-3xl md:text-5xl text-orange-500">
          {character.name}
        </h2>
        <h2 className="font-bold text-1xl md:text-3xl text-orange-500 animate-pulse">
          {character.status}
        </h2>
      </div>
      <div className="flex rounded-b-3xl bg-orange-500">
        <h2 className="flex-1 py-5 border-2 rounded-bl-3xl border-slate-700 font-bold text-2xl md:text-4xl text-center text-slate-700">
          {character.species}
        </h2>
        <h2 className="flex-1 py-5 border-2 rounded-br-3xl border-slate-700 font-bold text-2xl md:text-4xl text-center text-slate-700">
          {character.gender}
        </h2>
      </div>
    </figure>
  );
};
export default Detail;
