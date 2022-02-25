const CardLoading = () => {
  return (
    <div className="py-5  animate-spin">
      <img
        className="m-auto h-14 w-14 cursor-pointer"
        src="https://pngset.com/images/rick-et-morty-rick-fan-art-rick-icon-graphics-label-text-doodle-transparent-png-212312.png"
        alt="rick.png"
      />
      <p className="m-5 text-center font-semibold text-3xl animate-pulse text-orange-500">Loading ...</p>
    </div>
  );
};
export default CardLoading;
