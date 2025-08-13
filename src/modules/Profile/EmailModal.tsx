"use client";

import React, { useState } from "react";
import cn from "@/utils/cn";
import { Dialog, DialogPanel } from "@headlessui/react";
import CrossIcon from "@public/icons/cross.svg";
import TrashImage from "public/img/trash.png";
import Image from "next/image";
import InputText from "@/components/Input/Input";
import Button from "@/components/Button/Button";

type Props = {
  className?: string;
  open: boolean;
  onClose: () => void;
};

const EmailModal: React.FC<Props> = ({ className, open, onClose }) => {
  const [email, setEmail] = useState("");

  if (!open) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      transition
      className="z-50 fixed inset-0 flex w-screen items-center justify-center bg-black/40 backdrop-blur-xs transition duration-300 ease-out data-[closed]:opacity-0"
    >
      <DialogPanel
        as="form"
        className={cn(
          "w-80 md:w-[474px] p-5 md:p-8",
          "bg-darkmode-200 rounded-xl",
          className
        )}
      >
        <div className="flex items-center justify-between">
          <p className="text-white font-semibold md:text-lg">
            Enter your Email Address
          </p>
          <div onClick={onClose} className="rounded-full cursor-pointer">
            <Image
              src={CrossIcon}
              alt=""
              className="hover:opacity-70 w-6 h-6"
            />
          </div>
        </div>

        <div className="mt-7">
          <InputText
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email *"
            placeholder="Enter Email"
            className="px-4.75"
          />

          <div className="mt-[18px] flex items-center gap-2.5">
            <Button variant="secondary" onClick={onClose} className="w-1/2">
              Back
            </Button>
            <Button className="w-1/2">Continue</Button>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default EmailModal;
