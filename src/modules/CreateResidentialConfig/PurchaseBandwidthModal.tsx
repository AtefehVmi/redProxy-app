"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import { Dialog, DialogPanel, RadioGroup } from "@headlessui/react";
import Image from "next/image";
import XIcon from "@public/icons/cross.svg";
import CryptoIcon from "@public/icons/crypto.svg";
import CreditCardIcon from "@public/icons/credit-card.svg";
import CheckIcon from "@public/icons/check-circle.svg";
import cn from "@/utils/cn";

const paymentMethods = [
  {
    label: "Balance",
    value: "balance",
    icon: CreditCardIcon,
  },
  {
    label: "Crypto Coins",
    value: "crypto",
    icon: CryptoIcon,
  },
];

const PurchaseBandwidthModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [selected, setSelected] = useState("balance");

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="z-50 fixed inset-0 flex w-screen items-center justify-center bg-black/45 backdrop-blur-[2px]"
    >
      <DialogPanel className="w-full max-w-[35rem] relative z-0">
        <div className="max-w-[524px] w-full bg-darkmode-100 rounded-2xl h-9 absolute -top-3 left-5 -z-10" />

        <div className="rounded-2xl w-full bg-darkmode-200 flex flex-col border border-darkmode-100 z-20">
          <div className="flex items-center justify-between border-b border-darkmode-100 py-4 px-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-1 rounded-full bg-darkmode-100"></div>
              <div className="w-12 h-1 rounded-full bg-orange-200"></div>
            </div>
            <Image
              src={XIcon}
              alt="Close"
              className="cursor-pointer hover:brightness-125"
              onClick={onClose}
            />
          </div>

          <div className="py-8 px-6">
            <h3 className="text-lg font-semibold text-white">Add Bandwidth</h3>
            <p className="mt-3 text-xs text-gray-500">Add custom bandwidth</p>

            <div className="h-px w-full bg-darkmode-100 my-5" />

            <p className="text-white text-sm font-semibold mb-2">
              Payment Method
            </p>

            <RadioGroup value={selected} onChange={setSelected}>
              <div className="grid grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <RadioGroup.Option key={method.value} value={method.value}>
                    {({ checked }) => (
                      <div
                        className={cn(
                          "flex items-start gap-2 cursor-pointer border rounded-lg p-3 bg-darkmode-100 transition-colors",
                          checked
                            ? "border-orange-200 ring-1 ring-orange-200"
                            : "border-darkmode-100"
                        )}
                      >
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center mt-1",
                            checked ? "border-orange-200" : "border-gray-600"
                          )}
                        >
                          {checked && (
                            <div className="w-2 h-2 bg-orange-200 rounded-full" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="rounded bg-darkmode-200 relative">
                              <Image
                                src={method.icon}
                                alt=""
                                className="m-1.5"
                              />
                              {checked && (
                                <Image
                                  src={CheckIcon}
                                  alt=""
                                  className="absolute -top-1 -right-1"
                                />
                              )}
                            </div>
                            <p className="text-white text-sm">{method.label}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>

            <p className="mt-3 text-white text-sm font-semibold">Summary</p>
            <div
              className={cn(
                "mt-2 rounded-lg border border-darkmode-100 bg-darkmode-200 px-8 py-4",
                "flex items-center w-full"
              )}
            >
              <div className="flex items-center w-1/2 justify-between">
                <div>
                  <p className="text-grey-400 text-xs">Bandwidth</p>
                  <p className="mt-2 text-white text-sm font-semibold">26GB</p>
                </div>

                <div>
                  <p className="text-grey-400 text-xs">%21 Off Coupon</p>
                  <p className="mt-2 text-white text-sm font-semibold">
                    -$5.63
                  </p>
                </div>
              </div>

              <div className="border-l border-dashed border-darkmode-100 pl-10 ml-10">
                <div>
                  <p className="text-grey-400 text-xs">Payout Total</p>
                  <p className="mt-2 text-white text-sm font-semibold">
                    $10.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-darkmode-100 py-4 px-6">
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={() => console.log("Selected:", selected)}>
              Purchase
            </Button>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default PurchaseBandwidthModal;
