import { useAppStore } from "@/store";
import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ArrowBigLeftDash } from "lucide-react";

const Profile = () => {
  const { userInfo } = useAppStore();
  const [ hovered, setHovered ] = useState(false);

  console.log(hovered);

  return (
    <div className="bg-[#1b1c24] h-[100vh] flex items-center justify-center flex-col gap-10">
      <div className="flex flex-col gap-10 w-[80vw] md:w-max">
        <div>
          <ArrowBigLeftDash className="text-4xl lg:text-6xl text-white/90 cursor-pointer" />
        </div>
        <div className="grid grid-cols-2">
          <div
            className="h-full w-32 md:w-48 md:h-48 relative flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Avatar className="h-32 w-32 md:w-48 md:h-48 rounded-full overflow-hidden">
              {userInfo?.avatar ? (
                <AvatarImage
                  src={userInfo?.avatar}
                  alt="profile"
                  className="object-cover w-full h-full bg-black"
                />
              ) : (
                <div className="upppercase h-32 w-32 mid:w-48 md:h-48 text-5xl border-[1px] flex items-center justify-center rounded-full">
                  {userInfo?.first_name
                    ? userInfo?.first_name.split("")[0]
                    : userInfo?.email.split("")[0]}
                </div>
              )}
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
