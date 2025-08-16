"use client";

import Button from "@/components/Button/Button";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import XIcon from "@public/icons/cross.svg";
import InputText from "../Input/Input";
import Autocomplete from "../AutoComplete/Autocomplete";
import React, { useState } from "react";
import CreditCartIcon from "@public/icons/cart.svg";
import CryptoIcon from "@public/icons/crypto.svg";
import useFetch from "@/hooks/UseFetch";
import { depositBalance } from "@/service/api";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const paymentOptions = [
  { label: "Credit card", value: 1, icon: CreditCartIcon },
  { label: "Crypto currency", value: 2, icon: CryptoIcon },
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

  const { fetch: depositBalanceFetch, loading } = useFetch(
    depositBalance,
    false,
    { toastOnError: true }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await depositBalanceFetch(payment, amount);

      if (res) {
        window.location.href = res.url;
      }
    } catch (err) {
      toast.error("Deposit failed");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="z-50 fixed inset-0 flex w-screen items-center justify-center bg-black/45 backdrop-blur-[2px]"
    >
      <DialogPanel className="w-full max-w-[29.65rem] relative z-0">
        <form className="rounded-2xl w-full bg-darkmode-200 flex flex-col border border-darkmode-100 z-20 p-8">
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
            <Button
              type="button"
              className="px-8"
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button onClick={handleSubmit} type="submit" className="px-8">
              {loading ? (
                <div className="flex items-center">
                  Top Up <Loader />
                </div>
              ) : (
                "Top Up"
              )}
            </Button>
          </div>
        </form>
      </DialogPanel>
    </Dialog>
  );
};
export default TopUpBalanceModal;
