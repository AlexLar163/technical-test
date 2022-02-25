import Link from "next/link";
import { CharacterInterface } from "../interfaces/characterInterface";

type Props = {
  data: CharacterInterface;
};
const Card = (props: Props) => {
  const { data } = props;
  return (
    <Link href={`/detail/${data.id}`}>
      <div
        className="
        bg-orange-200 
        shadow-md 
        rounded-lg 
        overflow-hidden 
        w-fit 
        m-auto 
        hover:shadow-slate-400
        hover:bg-slate-50
        cursor-pointer
        transition 
        ease-in-out 
        duration-300"
      >
        <img src={data.image} alt="" />
        <p className="font-bold text-xl my-2 text-center text-ellipsis overflow-hidden">
          {data.name}
        </p>
      </div>
    </Link>
  );
};
export default Card;
