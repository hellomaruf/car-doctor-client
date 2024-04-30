import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

function MainLayout() {
  return (
      <div>
          <Nav/>
      <Outlet />
    </div>
  );
}

export default MainLayout;
