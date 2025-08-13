"use client";

import React, { useState } from "react";
import cn from "@/utils/cn";
import { Dialog, DialogPanel } from "@headlessui/react";
import CrossIcon from "@public/icons/cross.svg";
import { QRCodeSVG } from "qrcode.react";
import InputText from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Image from "next/image";

type Props = {
  className?: string;
  open: boolean;
  onClose: () => void;
  qrCodeValue: string;
};

const AuthAppModal: React.FC<Props> = ({
  className,
  open,
  onClose,
  qrCodeValue,
}) => {
  const [code, setCode] = useState("");

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
          "w-80 md:w-[474px] p-8",
          "bg-darkmode-200 rounded-xl",
          className
        )}
      >
        <div className="flex items-center justify-between">
          <p className="text-white font-semibold text-lg">
            Setup app based Authentication
          </p>
          <div
            onClick={onClose}
            className="rounded-full shadow-modal-button cursor-pointer"
          >
            <Image
              src={CrossIcon}
              alt=""
              className="h-6 w-6 hover:opacity-70"
            />
          </div>
        </div>

        <div>
          <p className="mt-7 text-grey-300 text-center">
            Scan this QR with your selected app, then enter the code you got
            below
          </p>
          <div className="flex justify-center mt-7">
            <div className="border-4 border-orange-200">
              <QRCodeSVG value={qrCodeValue} size={160} />
            </div>
          </div>

          <InputText
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="mt-7"
            label="Authentication Code *"
            placeholder="Enter Authentication Code"
          />
        </div>

        <div className="mt-[18px] flex items-center gap-2.5">
          <Button variant="secondary" onClick={onClose} className="w-1/2">
            Back
          </Button>
          <Button className="w-1/2">Continue</Button>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default AuthAppModal;
