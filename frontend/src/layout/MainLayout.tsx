import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen bg-zinc-800 text-white flex flex-col">
      <Outlet />
    </div>
  );
};

export default MainLayout;
