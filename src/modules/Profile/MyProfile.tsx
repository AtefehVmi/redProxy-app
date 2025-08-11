"use client";

import ProfileImage from "@public/icons/profile.svg";
import Image from "next/image";
import EditIcon from "@public/icons/edit.svg";
import Button from "@/components/Button/Button";
import InputText from "@/components/Input/Input";
import { useState } from "react";
import UserIcon from "@public/icons/sidebar-user.svg";
import EmailIcon from "@public/icons/email.svg";
import LockIcon from "@public/icons/lock.svg";
import PasswordInput from "@/components/PasswordInput/PasswordInput";

type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const MyProfile = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (field: keyof ProfileData, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-darkmode-200 border border-darkmode-100 rounded-xl py-8 pl-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Image src={ProfileImage} alt="" />

          <div>
            <p className="text-white text-base md:text-lg font-semibold">
              Fatemeh.mozaffari.77@gmail.com
            </p>

            <div className="flex items-center mt-2 gap-2">
              <p className="text-grey-400 text-xs">Register Date</p>
              <p className="text-grey-100 text-sm font-semibold">
                2025 / April / 12
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-darkmode-200 border border-darkmode-100 rounded-xl p-6 lg:p-8">
        <div className="flex items-center justify-between">
          <p className="text-white text-lg font-semibold">
            Personal Information
          </p>

          <Button icon={<Image src={EditIcon} alt="" />}>Edit</Button>
        </div>

        <form className="mt-8">
          <div className="grid md:grid-cols-2 gap-x-5 gap-y-7">
            <InputText
              startAdornment={<Image src={UserIcon} alt="" />}
              value={profileData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="Enter first name"
              label="First name *"
            />
            <InputText
              startAdornment={<Image src={UserIcon} alt="" />}
              value={profileData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="Enter last name"
              label="Last name *"
            />
            <InputText
              startAdornment={<Image src={EmailIcon} alt="" />}
              value={profileData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Enter email"
              label="Email *"
            />
          </div>
          <div className="grid lg:grid-cols-3 gap-5 mt-7">
            <PasswordInput
              startAdornment={<Image src={LockIcon} alt="" />}
              value={profileData.currentPassword}
              onChange={(e) => handleChange("currentPassword", e.target.value)}
              placeholder="Enter current password"
              label="Current Password *"
            />
            <PasswordInput
              startAdornment={<Image src={LockIcon} alt="" />}
              value={profileData.newPassword}
              onChange={(e) => handleChange("newPassword", e.target.value)}
              placeholder="Enter new password"
              label="New Password *"
            />
            <PasswordInput
              startAdornment={<Image src={LockIcon} alt="" />}
              value={profileData.confirmNewPassword}
              onChange={(e) =>
                handleChange("confirmNewPassword", e.target.value)
              }
              placeholder="Enter new password"
              label="Confirm New Password *"
            />
          </div>

          <div className="mt-16 flex items-center justify-end">
            <Button className="text-base px-6" type="submit">
              Save change
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
