import Link from "next/link";

const Card = (props: any) => {
  const { data } = props;
  return (
    <Link href={`/card-detail/${data.id}`}>
      <div
        className="
        bg-white 
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
        <p className="font-bold text-xl my-2 text-center text-ellipsis overflow-hidden">{data.name}</p>
      </div>
    </Link>
  );
};
export default Card;
