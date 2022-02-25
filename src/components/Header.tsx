import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-purple-100">
      <div
        className="
        flex 
        justify-center 
        mx-auto"
      >
        <Link href="/">
          <img
            className="mx-auto md:mx-5 h-16 w-auto cursor-pointer"
            src="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Images.png"
            width="50px"
            height="50px"
            alt="rick.png"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
