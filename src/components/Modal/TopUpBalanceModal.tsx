"use client";

import Button from "@/components/Button/Button";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import XIcon from "@public/icons/cross.svg";
import InputText from "../Input/Input";
import Autocomplete from "../AutoComplete/Autocomplete";
import { useState } from "react";

const paymentOptions = [
  { label: "Credit card", value: 1 },
  { label: "Crypto currency", value: 2 },
];

const TopUpBalanceModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [payment, setPayment] = useState(paymentOptions[0].value);
  const [amount, setAmount] = useState(1);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="z-50 fixed inset-0 flex w-screen items-center justify-center bg-black/45 backdrop-blur-[2px]"
    >
      <DialogPanel className="w-full max-w-[29.65rem] relative z-0">
        <div className="rounded-2xl w-full bg-darkmode-200 flex flex-col border border-darkmode-100 z-20 p-8">
          <div className="flex items-center justify-between">
            <p className="text-white font-semibold text-lg">Top Up Balance</p>
            <Image
              src={XIcon}
              alt="Close"
              className="cursor-pointer hover:brightness-125"
              onClick={onClose}
            />
          </div>

          <div className="mt-7">
            <InputText
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              label="Amount *"
              placeholder="Enter Amount"
            />

            <Autocomplete
              className="mt-[18px]"
              options={paymentOptions}
              value={payment}
              onChange={({ value }) => setPayment(value)}
              label="Payment method *"
              placeholder="Select"
            />
          </div>

          <div className="flex items-center justify-end gap-3 mt-[18px]">
            <Button className="px-8" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button className="px-8">Top Up</Button>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};
export default TopUpBalanceModal;
