import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      Dashboard
      <Outlet />
    </div>
  )
}

export default DashboardLayout;