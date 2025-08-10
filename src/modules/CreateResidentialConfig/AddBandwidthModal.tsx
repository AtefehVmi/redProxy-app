"use client";

import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Button from "@/components/Button/Button";
import InputText from "@/components/Input/Input";
import Image from "next/image";
import XIcon from "@public/icons/cross.svg";
import PlusIcon from "@public/icons/plus.svg";
import PurchaseBandwidthModal from "./PurchaseBandwidthModal";

const AddBandwidthModal = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [amount, setAmount] = useState(1);
  const [coupon, setCoupon] = useState("");

  const handleContinue = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(true);
  };

  return (
    <>
      <Button onClick={() => setIsFirstModalOpen(true)} className="p-2.5">
        <Image src={PlusIcon} alt="Add" />
      </Button>

      <Dialog
        open={isFirstModalOpen}
        onClose={() => setIsFirstModalOpen(false)}
        className="z-50 fixed inset-0 flex w-screen items-center justify-center bg-black/45 backdrop-blur-[2px]"
      >
        <DialogPanel className="w-full max-w-[35rem] relative z-0">
          <div className="max-w-[524px] w-full bg-darkmode-100 rounded-2xl h-9 absolute -top-3 left-5 -z-10"></div>

          <div className="rounded-2xl w-full bg-darkmode-200 flex flex-col border border-darkmode-100 z-20">
            <div className="flex items-center justify-between border-b border-darkmode-100 py-4 px-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 rounded-full bg-orange-200"></div>
                <div className="w-12 h-1 rounded-full bg-darkmode-100"></div>
              </div>

              <Image
                src={XIcon}
                alt="Close"
                className="cursor-pointer text-others-o6 hover:text-white"
                onClick={() => setIsFirstModalOpen(false)}
              />
            </div>

            <div className="py-8 px-6">
              <h3 className="text-lg font-semibold text-white">
                Add Bandwidth
              </h3>
              <p className="mt-3 text-xs text-gray-500">Add custom bandwidth</p>

              <div className="h-px w-full bg-darkmode-100 my-5"></div>

              <InputText
                onBlur={() => {
                  if (!amount || amount <= 0) setAmount(1);
                }}
                allocateSpaceForDescription
                fullWidth
                label="Bandwidth (GB) *"
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
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-darkmode-100 py-4 px-6">
              <Button
                variant="secondary"
                onClick={() => setIsFirstModalOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleContinue}>Continue</Button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <PurchaseBandwidthModal
        open={isSecondModalOpen}
        onClose={() => setIsSecondModalOpen(false)}
      />
    </>
  );
};

export default AddBandwidthModal;
