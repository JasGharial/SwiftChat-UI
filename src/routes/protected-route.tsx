import { useAppStore } from "@/store";
import { Navigate } from "react-router";
import { useToast } from "@/hooks/use-toast";

const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
  const { userInfo } = useAppStore();
  const { toast } = useToast();

  if(!userInfo || (Object.keys(userInfo).length === 0)) {
    toast({title: "Unauthorized", description: "You need to login first", variant: "destructive" });
    return <Navigate to="/auth" replace={true} />;
  }

  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute;
