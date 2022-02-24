import { DataRickAndMortyAPI } from "../interfaces/dataRickAndMortyAPI.interface";

const Card = (props: any) => {
  const { data } = props;
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={data.image} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.name}</div>
        <p className="text-gray-700 text-base">{data.status}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{data.species}</p>
      </div>
    </div>
  );
};
export default Card;
