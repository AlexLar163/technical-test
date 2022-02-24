const Header = () => {
  return (
    <header className=" bg-purple-100">
      <div className="flex justify-center flex-col md:justify-between md:flex-row container mx-auto">
        <img
          className="mx-auto md:mx-0"
          src="https://pngset.com/images/rick-et-morty-rick-fan-art-rick-icon-graphics-label-text-doodle-transparent-png-212312.png"
          width="50px"
          height="50px"
          alt="rick.png"
        />
        <nav className="flex justify-center space-x-4 ">
          {[
            ["Inicio", "/"],
            ["Favoritos", "/card-detail"],
          ].map(([title, url]) => (
            <a
              key={title}
              href={url}
              className="rounded-lg px-3 py-2 text-slate-700 font-bold text-lg hover:bg-green-200"
            >
              {title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default Header;
