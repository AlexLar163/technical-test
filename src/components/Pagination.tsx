import Link from "next/link";

const Pagination = () => {
  const buttons = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex p-2 justify-center space-x-2">
      {buttons.map((button: any) => (
        <Link key={button} href={`/characters/${button}`}>
          <span className="
          p-3 
          text-white 
          text-center 
          text-lg 
          font-bold rounded 
          bg-orange-500 
          hover:bg-orange-700 
          cursor-pointer">
            {button}
          </span>
        </Link>
      ))}
    </div>
  );
};
export default Pagination;
