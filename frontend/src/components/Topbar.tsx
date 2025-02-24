
const Topbar = () => {
  

  return (
    <div className="flex items-center justify-between rounded-md p-4 sticky top-0 bg-zinc-700 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center text-xl font-bold text-zinc-300 cursor-default select-none hover:drop-shadow-[0_0_10px_#8d609a] hover:text-white/80 hover:transition duration-200 ease-in-out ">
        <p>MoviesFinder</p>
      </div>
      
    </div>
  );
};

export default Topbar;
