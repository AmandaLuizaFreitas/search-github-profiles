import React from "react";
import { ProfileUserProps } from "../types/index";
type UserProps = {
  user: ProfileUserProps;
};

const UserFound = ({ user }: UserProps) => {
  return (
    <div className="w-[804px] mx-auto h-[257px] my-5 bg-[#D9D9D9]/90 rounded-xl ">
      <div className="flex items-center justify-center gap-7">
        <div className="p-3">
          <img
            src={user.avatar_url}
            alt={user.name}
            width={220}
            height={220}
            className="border border-[#005CFF] rounded-[50%]"
          />
        </div>
        <div className="w-[448px]">
          {user && (
            <div>
              <h2 className="text-blue-700 font-[700] text-[20px]">
                {user.name || user.login}
              </h2>
              <p className="text-black">{user.bio}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserFound;
