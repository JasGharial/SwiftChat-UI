import { useAppStore } from "@/store";
import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ArrowBigLeftDash, Trash2, ImagePlus } from "lucide-react";
import { getColor, colors } from "@/utils/color.utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router";
// API
import { updateUserProfile } from "../lib"

const Profile = () => {
  const { userInfo, setUserInfo } = useAppStore();
  const [ firstName, setFirstName ] = useState(userInfo?.first_name ?? "");
  const [ lastName, setLastName ] = useState(userInfo?.last_name ?? "");
  const [ avatar, setAvatar ] = useState(userInfo?.avatar ?? "");
  const [ hovered, setHovered ] = useState(false);
  const [ selectedColor, setSelectedColor ] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();
  // TODO: Add Default Fields Object and alter it with changes

  const validateProfile = () => {
    if(!firstName) {
      toast({title: 'First Name is Required', variant: "destructive" });
      return false;
    }

    if(!lastName) {
      toast({title: 'First Name is Required', variant: "destructive" });
      return false;
    }

    return true;
  }

  const saveProfileChanges = () => {
    if(validateProfile()) {
      const updateProfile = async () => {
        const response = await updateUserProfile(firstName, lastName, selectedColor);
        if(response.status === 200 && response.data) {
          setUserInfo({...response.data});
          navigate('/dashboard');
        }
      }
      updateProfile();
    }
  }

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
              {avatar ? (
                <AvatarImage
                  src={avatar}
                  alt="profile"
                  className="object-cover w-full h-full bg-black"
                />
              ) : (
                <div className={`upppercase h-32 w-32 md:w-48 md:h-48 text-5xl border-[1px] flex items-center justify-center rounded-full ${getColor(selectedColor)}`}>
                  {userInfo?.first_name
                    ? userInfo?.first_name.split("")[0]
                    : userInfo?.email.split("")[0]}
                </div>
              )}
            </Avatar>
            {
              hovered &&
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 ring-fuchsia-50 cursor-pointer rounded-full">
                  {
                    avatar ? <Trash2 className="text-white tex-3xl cursor-pointer"/> : <ImagePlus className="text-white tex-3xl cursor-pointer" />
                  }
                </div>
            }
            {/* <input type="text" /> */}
          </div>
          <div className="flex min-w-32 md:min-w-64 flex-col gap-5 text-white items-center justify-center">
            <div className="w-full">
              <Input
                placeholder="Email"
                type="email"
                disabled
                value={userInfo?.email}
                className="rounded-lg p-6 bg-[#2c2e3b] border-none"
              />
            </div>
            <div className="w-full">
              <Input
                placeholder="First Name"
                type="text"
                value={firstName ?? ""}
                className="rounded-lg p-6 bg-[#2c2e3b] border-none"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <Input
                placeholder="Last Name"
                type="text"
                value={lastName ?? ""}
                className="rounded-lg p-6 bg-[#2c2e3b] border-none"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="w-full flex gap-5">
              {
                colors.map((color: string, index: number) => (
                  <div
                    className={`${color} h-8 w-8 cursor-pointer rounded-full transition-all duration-300 ${
                      selectedColor === index
                        ? "outline outline-white outline-1"
                        : ""
                    }`}
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    >

                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="w-full">
          <Button className="h-16 w-full bg-purple-700 hover:bg-purple-900 transition-all duration-300"
          onClick={saveProfileChanges}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Profile;
