import Background from "@/assets/login2.png"
import Victory from "@/assets/victory.svg"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import SignUp from "./sign-up";
import SignIn from "./sign-in";

const Auth = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
              <img src={Victory} alt="Vicotry Emoji" className="h-[100px]" />
            </div>
            <p className="font-medium text-center">
              Fill in the details to get started with the best chat app!
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs className="w-3/4" defaultValue="login">
              <TabsList className="bg-transparent rounded-nonw w-full">
                <TabsTrigger 
                value="login"
                className="data-[state=active]:bg-transparent text-black text-opacity-90
                border-b-2 rounded-none w-full data-[state=active]:text-black
                data-[state=active]:font-semibold data-[state=active]:border-b-purple-800
                p-3 transition-all duration-300">Login</TabsTrigger>
                <TabsTrigger value="signup"
                className="data-[state=active]:bg-transparent text-black text-opacity-90
                border-b-2 rounded-none w-full data-[state=active]:text-black
                data-[state=active]:font-semibold data-[state=active]:border-b-purple-800
                p-3 transition-all duration-300">Signup</TabsTrigger>
              </TabsList>
              <TabsContent className="" value="login">
                <SignIn />
              </TabsContent>
              <TabsContent className="" value="signup">
                <SignUp />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center">
          <img src={Background} alt="background login" className="h-[35rem]" />
        </div>
      </div>
    </div>
  );
};

export default Auth;