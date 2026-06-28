import { Outlet, Link } from "react-router-dom";
import AdminLeft from "../components/AdminLeft";
function AdminLayout() {
  return (
    <>
      <div className="flex">
        <div>
          <AdminLeft />
        </div>
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
