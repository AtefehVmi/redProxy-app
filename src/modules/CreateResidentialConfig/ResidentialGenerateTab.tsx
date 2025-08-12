"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import cn from "@/utils/cn";
import TextArea from "@/components/TextArea/TextArea";
import Button from "@/components/Button/Button";

import copyIcon from "@public/icons/copy-all.svg";
import DownloadIcon from "@public/icons/download-icon.svg";
import CheckIcon from "@public/icons/check.svg";
import ProxyIcon from "@public/icons/model-cube.svg";
import CodeIcon from "@public/icons/display-code.svg";
import Image from "next/image";
import CodePicker from "./CodePicker";

const DUMMY_TEXT_AREA_VALUE =
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n";

const ResidentialGenerateTab = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [downloaded, setDownloaded] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const [formatedList, setFormatedList] = React.useState<string>(
    DUMMY_TEXT_AREA_VALUE
  );

  const selectLabelStyle = "text-sm mb-2.5";

  const tabs = [
    { title: "Proxy", icon: ProxyIcon, key: "proxy", content: <></> },
    {
      title: "Code",
      icon: CodeIcon,
      key: "code",
      content: (
        <CodePicker
          downloaded={downloaded}
          copied={copied}
          onCopyClick={onCopyClick}
          onDownloadClick={onDownloadClick}
        />
      ),
    },
  ];

  const activeTab = params.get("tab") || tabs[0].key;

  const handleTabClick = (tabKey: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("tab", tabKey);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  function onCopyClick() {
    copyToClipboard(formatedList);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  }

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
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-darkmode-100 mt-6 py-5">
        <div className="bg-darkmode-200 rounded p-2 w-full md:w-fit grid grid-cols-2 gap-2.5 border border-darkmode-100">
          {tabs.map((item) => (
            <button
              key={item.key}
              onClick={() => handleTabClick(item.key)}
              className={cn(
                "rounded border px-3 py-1.5 text-white text-sm flex items-center gap-1",
                activeTab === item.key
                  ? "bg-darkmode-100 border-darkmode-100 cursor-not-allowed"
                  : "bg-darkmode-300 border-darkmode-300 cursor-pointer"
              )}
            >
              <Image src={item.icon} alt="" />
              {item.title}
            </button>
          ))}
        </div>
      </div>

      <div>{tabs.find((t) => t.key === activeTab)?.content}</div>
    </div>
  );
};

export default ResidentialGenerateTab;
