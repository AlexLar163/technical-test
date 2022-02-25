import { EpisodesInterface } from "../interfaces/episodesInterface";
type Props = {
  episode: Array<EpisodesInterface>;
};

const TableDetail = (props: Props) => {
  const { episode } = props;
  return (
    <table
      className="
    w-[100%]  
    mx-auto 
    border-separate 
    border-2 
    rounded-3xl 
    border-slate-700 
    bg-slate-700"
    >
      <thead className="">
        <tr className="flex">
          <th className="flex-1 p-5 font-bold text-2xl md:text-4xl text-orange-500">
            Nombre
          </th>
          <th className="flex-1 p-5 font-bold text-2xl md:text-4xl text-orange-500">
            Episodio
          </th>
        </tr>
      </thead>
      <tbody className="h-[60px] overflow-auto">
        {episode.map((ep: EpisodesInterface, index: number) =>
          index % 2 === 0 ? (
            <tr className="flex text-slate-700 bg-orange-200" key={ep.id}>
              <td className="flex-1 p-5 font-semibold text-center">
                {ep.name}
              </td>
              <td className="flex-1 p-5 font-semibold text-center">
                {ep.episode}
              </td>
            </tr>
          ) : (
            <tr className="flex text-orange-200 bg-slate-500 " key={ep.id}>
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
  );
};
export default TableDetail;
