import React from "react";
import CustomCard from "@/components/CustomCard/customCard";
import Image from "next/image";
import authLogo from "@public/icons/auth_form_logo.svg";
import CustomButton from "@/components/CustomButton/CustomButton";
import InputText from "@/components/Input/Input";

const ForgetPasswordForm = () => {
  return (
    <CustomCard
      borderRadius={"rounded"}
      borderClassName={"p-[1.75px] w-[448px]"}
      containerClassName={
        "pt-[47px] pr-[30px] pb-6 pl-[28px] !shadow-nav-link backdrop-blur-[14px]"
      }
    >
      <div
        className="absolute w-[474px] h-[178px] bg-forget-password-card-effect opacity-10 blur-[150px] \
        -top-[50px] -left-[39px] rotate-[45deg]"
      />
      <div className="w-full h-full flex flex-col items-center">
        <Image src={authLogo} alt={"sign-in"} className={"h-5 w-5"} />
        <p className="text-white text-[18px] leading-[21px] font-semibold mt-[19px]">
          Forgotten password?
        </p>
        <p className="text-base-500 text-nav-sub-menu-heading-text mt-[13px] mb-8">
          Fill in your details to initiate recovery
        </p>
        <form className="w-full h-auto flex flex-col items-center mb-4">
          <InputText
            className="w-full"
            type={"email"}
            label={"Email"}
            placeholder={"johndoe@gmail.com"}
          />

          <CustomButton className="w-full h-[47px] text-white/50 mt-4">
            Send recovery email
          </CustomButton>
        </form>
      </div>
    </CustomCard>
  );
};

export default ForgetPasswordForm;
