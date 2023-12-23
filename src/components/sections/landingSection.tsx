const Landing = () => {
  return (
    <div className="h-[100vh] flex z-10 flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-center tracking-tighter text-7xl p-5 font-bold drop-shadow-xl">
        <div className="gap-3 items-baseline flex-shrink-0 sm:text-center">Abhineeth</div>
        <div className="gap-3 items-baseline flex-shrink-0 sm:text-center">Adiraju</div>
      </div>
      <div className="flex flex-row justify-center items-center w-full p-5 gap-4 text-3xl tracking-tighter font-normal">
        <div className="">DevOps Engineer</div>
        <div>|</div>
        <div className="">Artist</div>
        <div>|</div>
        <div className="">Home &quot;Chef&quot;</div>
      </div>
    </div>
  );
};

export default Landing;