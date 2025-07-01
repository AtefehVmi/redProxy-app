"use client";

import React, { useEffect } from "react";
import cn from "@/utils/cn";
import { Dialog, DialogPanel } from "@headlessui/react";
import CrossIcon from "@public/icons/cross.svg";
import Image from "next/image";
import Button from "../Button/Button";
import DownloadIcon from "@public/icons/download-icon.svg";
import CopyIcon from "@public/icons/copy-all.svg";

type Props = {
  className?: string;
  open: boolean;
  onClose: () => void;
  title: string;
};

const proxies = [
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
];

const ProxiesModal: React.FC<Props> = ({ className, open, onClose, title }) => {
  if (!open) return null;

  const handleCopyAll = () => {
    navigator.clipboard.writeText(proxies.join("\n"));
  };

  const handleDownload = () => {
    const content = proxies.join("\n");
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "proxies.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      transition
      className="z-50 fixed inset-0 flex w-screen items-center justify-center bg-black/40 transition duration-300 ease-out data-[closed]:opacity-0"
    >
      <DialogPanel
        as="form"
        className={cn(
          "w-[424px]",
          "bg-darkmode-200 border border-darkmode-100 rounded-xl",
          className
        )}
      >
        <div className="flex items-center justify-between border-b border-darkmode-100 px-6 py-5">
          <p className="text-base font-semibold text-grey-400">{title}</p>
          <Image
            src={CrossIcon}
            alt=""
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="px-6 pt-6 pb-8">
          <div className="bg-darkmode-300 rounded py-4 pl-4 pr-5 h-[406px] overflow-auto">
            {proxies.map((proxy, index) => (
              <p className="text-[14px] text-grey-200" key={index}>
                {proxy}
              </p>
            ))}
          </div>
        </div>

        <div className="border-t border-darkmode-100 py-4 px-6 flex items-center justify-end gap-3">
          <Button
            onClick={handleDownload}
            className="w-1/2"
            icon={<Image src={DownloadIcon} alt="" />}
          >
            Download
          </Button>
          <Button
            onClick={handleCopyAll}
            className="w-1/2"
            icon={<Image src={CopyIcon} alt="" />}
          >
            Copy All Line
          </Button>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default ProxiesModal;
