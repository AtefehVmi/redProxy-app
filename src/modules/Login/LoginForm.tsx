import React from 'react';
import CustomCard from "@/components/CustomCard/customCard";
import Image from "next/image";

import Input from "@/components/Input/Input";
import Link from "next/link";
import CustomButton from "@/components/CustomButton/CustomButton";
import AuthFormDivider from "@/components/AuthFormDivider/AuthFormDivider";

import authLogo from '@public/icons/auth_form_logo.svg'
import googleLogo from '@public/icons/google-logo.svg'
import xLogo from '@public/icons/x_logo.svg'


const LoginForm = () => {

  const inputMainContainerStyle = "h-[62px] "
  const inputContainerStyle = "h-auto w-full"
  const inputLabelStyle = "text-sm font-medium mb-[5px]"
  const inputStyle = "!h-[43px] text-profile-card-text text-xs px-4 py-[14px]"

  return (
    <CustomCard
      borderRadius={"rounded"}
      borderClassName={"p-[1.75px] w-[448px]"}
      containerClassName={"pt-[47px] pr-[30px] pb-6 pl-[28px] !shadow-nav-link backdrop-blur-[14px]"}
    >
      <div className="w-full h-full flex flex-col items-center">
        <Image src={authLogo} alt={'sign-in'} className={"h-5 w-5"}/>
        <p className="text-white text-[18px] leading-[21px] font-semibold mt-[19px]">
          Sign in!
        </p>
        <p className="text-base-500 text-nav-sub-menu-heading-text mt-[13px] mb-8">
          The proxy gateway for professionals
        </p>
        <form className="w-full h-auto flex flex-col items-center mb-4">
          <Input
            type={"email"}
            label={"Email"}
            placeholder={"johndoe@gmail.com"}
            mainContainerClassName={inputMainContainerStyle + "mb-4"}
            inputContainerClassName={inputContainerStyle}
            labelClassName={inputLabelStyle}
            inputClassName={inputStyle}
          />
          <Input
            type={"password"}
            label={"Password"}
            placeholder={"***********"}
            mainContainerClassName={inputMainContainerStyle}
            inputContainerClassName={inputContainerStyle}
            labelClassName={inputLabelStyle}
            inputClassName={inputStyle}
          />
          <Link
            href={'/forget-password'}
            className="text-profile-card-text text-sm mt-2 self-end"
          >
            Forget Password?
          </Link>
          <CustomButton className="w-full h-[47px] text-white/50 mt-4 !bg-custom-link-hover-bg hover:!bg-[#FBFAF908]">
            Sign in
          </CustomButton>
        </form>
        <AuthFormDivider/>
        <CustomButton className="w-full h-[47px] mt-4 gap-3">
          <Image src={googleLogo} alt={''} width={18} height={18}/>
          <p className="text-white text-base-500">Sign up with Google</p>
        </CustomButton>
        <CustomButton className="w-full h-[47px] mt-2 gap-3">
          <Image src={xLogo} alt={''} width={16} height={16}/>
          <p className="text-white text-base-500">Sign up with X</p>
        </CustomButton>

        <div className="w-full flex justify-center items-center mt-[27px] text-sm">
          <span className="text-auth-redirect-text ">Don’t have an account?</span>&nbsp;
          <Link href={'/sign-up'} className="text-profile-card-text underline underline-profile-card-text">
            Sign up
          </Link>
        </div>
      </div>
    </CustomCard>
  );
};

export default LoginForm;