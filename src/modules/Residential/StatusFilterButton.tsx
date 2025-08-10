"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Button from "@/components/Button/Button";
import Image from "next/image";
import SettingsIcon from "@public/icons/settings-sliders.svg";

interface Props {
  field: string;
  value: string;
}

const StatusFilterButton = ({ field, value }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const isActive = params.get(field) === value;

  const handleClick = () => {
    const newParams = new URLSearchParams(params.toString());

    if (isActive) {
      newParams.delete(field);
    } else {
      newParams.set(field, value);
    }

    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <Button
      className={`px-4 py-3 text-base ${isActive ? "bg-darkmode-100" : ""}`}
      rightIcon={<Image src={SettingsIcon} alt="" />}
      onClick={handleClick}
    >
      Status
    </Button>
  );
};

export default StatusFilterButton;
