const CardLoading = () => {
  return (
    <div className="h-40 bg-gradient-to-br ">
      <div className="bg-white rounded shadow-2xl">
        <div className="h-32 bg-gray-500 rounded-tr rounded-tl animate-pulse"></div>
        <div className="p-5">
          <div className="h-6 rounded-sm bg-gray-500 animate-pulse mb-4"></div>
          <div className="grid grid-cols-4 gap-1"></div>
        </div>
      </div>
    </div>
  );
};
export default CardLoading;
