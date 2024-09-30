// Dependencies
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import { useAppStore } from "@/store";
// Components
import Auth from "@/features/auth/components";
import Dashboard from "@/features/dashboard/components";
import Profile from "@/features/profile/components";
// Layouts
import DashboardLayout from "@/layouts/dashboard";
// API
import { getUserInfoUsingCookie } from "./lib"
import { iUser } from "@/types/user.type";

const AppRoutes = () => {
  const { userInfo, setUserInfo } = useAppStore();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data: user, status } = await getUserInfoUsingCookie();
        if( status === 200 && user.id) {
          setUserInfo(user);
        } else {
          setUserInfo(undefined);
        }
        console.log(user);
      } catch(error) {
        setUserInfo({} as iUser);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if(!userInfo) {
      getUserInfo();
    } else {
      setLoading(false);
    }

  }, [userInfo, setUserInfo])


  if(loading) {
    return <div>Loading...</div>
  }

// TODO: Use / Route for Landing Animation / Handle Pre-Loading
  return (
    <Routes>
      {/* <Route path="/" element={<LandingRoute />} /> */}
      <Route path="/auth" element={<Auth />} />
      <Route path="/dashboard" element={<DashboardLayout />} >
      <Route index element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      </Route>
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/auth" />}/>
    </Routes>
  )
}

export default AppRoutes;
