"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import Button from "@/components/Button/Button";
import XIcon from "@public/icons/cross.svg";
import InputText from "@/components/Input/Input";
import Image from "next/image";
import PlusIcon from "@public/icons/plus.svg";

const AddBandwidthModal = () => {
  const router = useRouter();
  const searchparams = useSearchParams();
  const open = searchparams.get("modalOpen") === "true";

  const handleClose = () => {
    const params = new URLSearchParams(searchparams.toString());
    params.set("modalOpen", "false");
    router.replace(`?${params.toString()}`);
  };

  const handleOpen = () => {
    const params = new URLSearchParams(searchparams.toString());
    params.set("modalOpen", "true");
    router.replace(`?${params.toString()}`);
  };

  const [amount, setAmount] = useState(1);
  const [coupon, setCoupon] = useState("");

  return (
    <>
      <Button onClick={handleOpen} className="p-2.5">
        <Image src={PlusIcon} alt="" />
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        transition
        className="z-50 fixed inset-0 flex w-screen items-center justify-center bg-black/45 backdrop-blur-[2px] transition duration-300 ease-out data-[closed]:opacity-0"
      >
        <DialogPanel className="px-6 pt-8 rounded-2xl w-full max-w-[35rem] bg-darkmode-200 flex flex-col border border-darkmode-100">
          <div className="mb-3 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Add Bandwidth
              </h3>
              <p className="mt-3 text-xs font-normal text-gray-500">
                Add custom bandwidth
              </p>
            </div>
            <Image
              src={XIcon}
              alt=""
              className="cursor-pointer text-others-o6 hover:text-white"
              onClick={handleClose}
            />
          </div>

          <div className="h-px w-full bg-darkmode-100 my-2.5"></div>

          <InputText
            className="mt-3"
            onBlur={() => {
              if (!amount || amount <= 0) setAmount(1);
            }}
            allocateSpaceForDescription
            fullWidth
            label="Bandwidth(GB) *"
            placeholder="Enter"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <InputText
            allocateSpaceForDescription
            fullWidth
            label="Coupon"
            placeholder="Enter"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-3 border-t border-darkmode-100 py-4">
            <Button onClick={handleClose} className="t">
              Cancel
            </Button>
            <Button>Continue</Button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default AddBandwidthModal;
