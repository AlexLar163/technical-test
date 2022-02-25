import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-purple-100 py-2">
      <Link href="/">
        <img
          className="mx-auto h-14 w-14 cursor-pointer"
          src="https://pngset.com/images/rick-et-morty-rick-fan-art-rick-icon-graphics-label-text-doodle-transparent-png-212312.png"
          alt="rick.png"
        />
      </Link>
    </footer>
  );
};
export default Footer;
