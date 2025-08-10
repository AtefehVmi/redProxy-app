"use client";

import React, { useEffect } from "react";
import CustomCard from "@/components/CustomCard/customCard";
import Image from "next/image";

import Link from "next/link";
import CustomButton from "@/components/CustomButton/CustomButton";
import AuthFormDivider from "@/components/AuthFormDivider/AuthFormDivider";

import authLogo from "@public/icons/auth_form_logo.svg";
import googleLogo from "@public/icons/google-logo.svg";
import xLogo from "@public/icons/x_logo.svg";
import InputText from "@/components/Input/Input";
import z from "zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useFetch from "@/hooks/UseFetch";
import { loginUser } from "@/service/api";
import { toast } from "react-toastify";
import { generateCaptcha } from "@/utils/generateCaptcha";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
  captcha: z.string().nonempty("Captcha is required"),
});
type SignInFormData = z.infer<typeof signInSchema>;

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    setError,
    formState: { errors },
    watch,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const { loading, fetch: loginFetch } = useFetch(loginUser, false, {
    toastOnError: true,
  });

  useEffect(() => {
    setValue("captcha", generateCaptcha(), { shouldValidate: true });
  }, []);

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    const captcha = generateCaptcha();
    setValue("captcha", captcha);

    const res = await loginFetch({ ...data, captcha }).catch((error) => {
      const err = error.err;
      if (typeof err.response.data === "object") {
        for (const key in err.response.data) {
          console.log(key, Object.prototype.hasOwnProperty.call(data, key));

          if (Object.prototype.hasOwnProperty.call(data, key)) {
            setError(key as keyof SignInFormData, {
              type: "server",
              message: err.response.data[key],
            });
          }
        }
      }

      toast.error("Login failed", error);
    });

    localStorage.setItem("token", res.token);

    toast.success("Logged in successfully!");
    router.push("/");
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
          Sign in!
        </p>
        <p className="text-base-500 text-nav-sub-menu-heading-text mt-[13px] mb-8">
          The proxy gateway for professionals
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-auto flex flex-col items-center mb-4"
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
            className="w-full mt-4"
            type={"password"}
            label={"Password"}
            placeholder={"***********"}
          />
          <Link
            href={"/forget-password"}
            className="text-profile-card-text text-sm mt-2 self-end"
          >
            Forget Password?
          </Link>
          <CustomButton
            loading={loading}
            type="submit"
            className="w-full h-[47px] text-white/50 mt-4 !bg-custom-link-hover-bg hover:!bg-[#FBFAF908]"
          >
            Sign in
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
            Don’t have an account?
          </span>
          &nbsp;
          <Link
            href={"/sign-up"}
            className="text-profile-card-text underline underline-profile-card-text"
          >
            Sign up
          </Link>
        </div>
      </div>
    </CustomCard>
  );
};

export default LoginForm;
