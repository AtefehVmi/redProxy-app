import Button from "@/components/Button/Button";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import XIcon from "@public/icons/cross.svg";
import TrashImage from "@public/image/recycle-bin.png";

const DeleteModal = ({
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

          <div className="px-8 pt-4 pb-8">
            <div className="h-[104px] w-[104px] border border-white/5 rounded-full flex items-center justify-center mx-auto">
              <div className="bg-white/5 rounded-full w-20 h-20 p-3 flex items-center justify-center">
                <Image src={TrashImage} alt="" quality={100} priority />
              </div>
            </div>

            <p className="text-white font-semibold text-lg text-center mt-4">
              Are you sure delete this proxy?
            </p>
            <p className="text-grey-400 text-sm text-center mt-2">
              Delete Residential Proxy
            </p>
          </div>

          <div className="border-t border-darkmode-100 py-4 px-6 flex items-center gap-3">
            <Button variant="secondary" onClick={onClose} className="w-full">
              No, Cancel
            </Button>
            <Button className="w-full">Yes, Delete</Button>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};
export default DeleteModal;
