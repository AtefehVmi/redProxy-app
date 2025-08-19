import Button from "@/components/Button/Button";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import XIcon from "@public/icons/cross.svg";
import SuccessImage from "@public/image/success.png";

const SuccessPaymentModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="z-50 fixed inset-0 flex w-screen items-center justify-center bg-black/45 backdrop-blur-[2px]"
    >
      <DialogPanel className="w-full max-w-[22.3rem] relative z-0">
        <div className="rounded-2xl w-full bg-darkmode-200 flex flex-col border border-darkmode-100 z-20">
          <div className="border-b border-darkmode-100 py-4 px-6">
            <Image
              src={XIcon}
              alt="Close"
              className="cursor-pointer hover:brightness-125"
              onClick={onClose}
            />
          </div>

          <div className="p-8">
            <Image
              src={SuccessImage}
              alt=""
              quality={100}
              priority
              className="mx-auto"
            />

            <p className="text-white font-semibold text-lg text-center mt-4">
              Payment Successful !
            </p>
            <p className="text-grey-400 text-sm text-center mt-2">
              You’ve successfully purchased
            </p>
            <div className="flex items-center gap-1 mt-1 justify-center">
              <p className="text-grey-400 text-xs">Total</p>
              <p className="text-white font-bold text-base"> $234.00</p>
            </div>

            <div className="bg-darkmode-100 rounded py-3 px-6 mt-4 flex items-center justify-between gap-[18px]">
              <div>
                <p className="text-grey-500 text-sm">Status</p>
                <p className="text-white mt-1 text-sm">Completed</p>
              </div>

              <div>
                <p className="text-grey-500 text-sm">Payment Method</p>
                <p className="text-white mt-1 text-sm">Credit Card</p>
              </div>
            </div>
          </div>

          <div className="border-t border-darkmode-100 py-4 px-6">
            <Button onClick={onClose} className="w-full">
              Done
            </Button>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};
export default SuccessPaymentModal;
