import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "@/features/auth/components";

// export const MainRoute = () => {
//   return (
//     <ProtectedRoute>
//       <Route path="/dashboard" element={<MasterLayout />}>
//         <Route index element={<Dashboard />} />
//       </Route>
//     </ProtectedRoute>
//   )
// }

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<LandingRoute />} /> */}
      <Route path="/auth" element={<Auth />} />
      {/* <Route path="/dashboard" element={<MainRoute />} /> */}
      <Route path="*" element={<Navigate to="/auth" />}/>
    </Routes>
  )
}

export default AppRoutes;