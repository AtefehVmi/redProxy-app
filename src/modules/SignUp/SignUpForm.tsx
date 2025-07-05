"use client";

import React from "react";
import CustomCard from "@/components/CustomCard/customCard";
import Image from "next/image";
import authLogo from "@public/icons/auth_form_logo.svg";
import Link from "next/link";
import CustomButton from "@/components/CustomButton/CustomButton";
import AuthFormDivider from "@/components/AuthFormDivider/AuthFormDivider";
import googleLogo from "@public/icons/google-logo.svg";
import xLogo from "@public/icons/x_logo.svg";
import InputText from "@/components/Input/Input";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useFetch from "@/hooks/UseFetch";
import { regisetrUser } from "@/service/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const signUpSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6),
    captcha: z.string().nonempty("Captcha is required"),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    trigger,
  } = useForm<SignUpFormData>({ resolver: zodResolver(signUpSchema) });

  const { loading, fetch: registerFetch } = useFetch(regisetrUser, false, {
    toastOnError: true,
  });

  const router = useRouter();

  // const updateCaptcha = (token: string) => {
  //   setValue("captcha", token, { shouldValidate: true });
  // };

  function generateCaptcha(length = 6) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from(
      { length },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
  }

  React.useEffect(() => {
    setValue("captcha", generateCaptcha(), { shouldValidate: true });
  }, []);

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    const captcha = generateCaptcha();
    setValue("captcha", captcha);

    await registerFetch({ ...data, captcha })
      .then(() => {
        localStorage.setItem("email", data.email);
        toast.success(
          "Account created successfully. Please check your email to activate your account."
        );
        router.push("/login");
      })
      .catch((error) => {
        console.log("Login failed", error);
      });
  };

  const values = watch();

  return (
    <CustomCard
      borderRadius={"rounded"}
      borderClassName={"p-[1.75px] w-[448px]"}
      containerClassName={
        "pt-[47px] pr-[30px] pb-6 pl-[28px] !shadow-nav-link backdrop-blur-[14px]"
      }
    >
      <div
        className="absolute w-[474px] h-[178px] bg-login-card-effect opacity-10 blur-[150px] \
        -top-[50px] -left-[39px] rotate-[45deg]"
      />
      <div className="w-full h-full flex flex-col items-center">
        <Image src={authLogo} alt={"sign-in"} className={"h-5 w-5"} />
        <p className="text-white text-[18px] leading-[21px] font-semibold mt-[19px]">
          Sign up!
        </p>
        <p className="text-base-500 text-nav-sub-menu-heading-text mt-[13px] mb-8">
          The proxy gateway for professionals
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-auto flex flex-col gap-4 items-center mb-4"
        >
          <InputText
            error={!!errors.email?.message}
            value={values.email}
            description={errors.email?.message}
            {...register("email")}
            onChange={({ target: { value } }) => {
              setValue("email", value);
              trigger("email");
            }}
            className="w-full"
            type={"email"}
            label={"Email"}
            placeholder={"johndoe@gmail.com"}
          />
          <InputText
            error={!!errors.password?.message}
            value={values.password}
            description={errors.password?.message}
            {...register("password")}
            onChange={({ target: { value } }) => {
              setValue("password", value);
              trigger("password");
            }}
            className="w-full"
            type={"password"}
            label={"Password"}
            placeholder={"***********"}
          />
          <InputText
            error={!!errors.confirmPassword?.message}
            value={values.confirmPassword}
            description={errors.confirmPassword?.message}
            {...register("confirmPassword")}
            onChange={({ target: { value } }) => {
              setValue("confirmPassword", value);
              trigger("confirmPassword");
            }}
            className="w-full"
            type={"password"}
            label={"Confirm password"}
          />
          <CustomButton
            loading={loading}
            type="submit"
            className="w-full h-[47px] text-white/50 mt-4 !bg-custom-link-hover-bg hover:!bg-[#FBFAF908]"
          >
            Sign up
          </CustomButton>
        </form>
        <AuthFormDivider />
        <CustomButton className="w-full h-[47px] mt-4 gap-3">
          <Image src={googleLogo} alt={""} width={18} height={18} />
          <p className="text-white text-base-500">Sign up with Google</p>
        </CustomButton>
        <CustomButton className="w-full h-[47px] mt-2 gap-3">
          <Image src={xLogo} alt={""} width={16} height={16} />
          <p className="text-white text-base-500">Sign up with X</p>
        </CustomButton>

        <div className="w-full flex justify-center items-center mt-[27px] text-sm">
          <span className="text-auth-redirect-text ">
            Do you have an account?
          </span>
          &nbsp;
          <Link
            href={"/login"}
            className="text-profile-card-text underline underline-profile-card-text"
          >
            Sign in
          </Link>
        </div>
      </div>
    </CustomCard>
  );
};

export default SignUpForm;
