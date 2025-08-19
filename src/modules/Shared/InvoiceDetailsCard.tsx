"use client";

import cn from "@/utils/cn";
import PurchaseIcon from "@public/icons/time-past.svg";
import MethodIcon from "@public/icons/cart-gray.svg";
import DollarIcon from "@public/icons/dollar-gray.svg";
import CubeIcon from "@public/icons/cube-gray.svg";
import DownloadIcon from "@public/icons/download-gray.svg";
import Image from "next/image";
import { useState } from "react";

const invoiceData = [
  { icon: PurchaseIcon, title: "Purchase Date", value: "12 April 2026" },
  { icon: MethodIcon, title: "Purchase Method", value: "Balance" },
  { icon: DollarIcon, title: "Total Paid", value: "$30" },
  { icon: CubeIcon, title: "Transaction ID", value: "134" },
  { icon: DownloadIcon, title: "Download Invoice", value: "Donwload" },
];

const DUMMY_TEXT_AREA_VALUE =
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n";

const InvoiceDetailsCard = ({ className }: { className?: string }) => {
  const [downloaded, setDownloaded] = useState(false);

  const [formatedList, setFormatedList] = useState<string>(
    DUMMY_TEXT_AREA_VALUE
  );

  function onDownloadClick() {
    const blob = new Blob([formatedList], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "proxy-config.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 5000);
  }

  return (
    <div
      className={cn(
        "border border-darkmode-100 bg-darkmode-200 rounded-lg p-5",
        className
      )}
    >
      <p className="text-white font-semibold">Invoice Details</p>
      <div className="mt-6 flex flex-col gap-4">
        {invoiceData.map((item, index) => (
          <div key={item.title} className="flex flex-col gap-4">
            <div key={item.title} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-darkmode-300 rounded">
                  <Image src={item.icon} alt="" className="m-2.5" />
                </div>
                <p className="text-xs text-grey-600">{item.title}</p>
              </div>
              {index < invoiceData.length - 1 ? (
                <p className="text-white font-semibold">{item.value}</p>
              ) : (
                <button
                  onClick={() => onDownloadClick()}
                  className="text-white font-semibold underline decoration-white"
                >
                  {item.value}
                </button>
              )}
            </div>
            {index < invoiceData.length - 1 && (
              <div className="h-px w-full bg-darkmode-100"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default InvoiceDetailsCard;
