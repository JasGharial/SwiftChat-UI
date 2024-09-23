import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

type AppProviderChildren = {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderChildren) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HelmetProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </HelmetProvider>
    </Suspense>
  )
}

export default AppProvider;