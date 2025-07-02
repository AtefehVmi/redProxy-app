"use client";
import React from "react";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import copyIcon from "@public/icons/copy-all.svg";
import DownloadIcon from "@public/icons/download-icon.svg";
import CheckIcon from "@public/icons/check.svg";
import Image from "next/image";
import cn from "@/utils/cn";
import RotationIcon from "@public/icons/rotation.svg";
import PortIcon from "@public/icons/port.svg";
import QuantityIcon from "@public/icons/quantity.svg";
import Button from "@/components/Button/Button";
import Autocomplete from "@/components/AutoComplete/Autocomplete";

const DUMMY_TEXT_AREA_VALUE =
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n";

const CreateDatacenterConfig = () => {
  const [formatedList, setFormatedList] = React.useState<string>(
    DUMMY_TEXT_AREA_VALUE
  );
  const [copied, setCopied] = React.useState(false);
  const [downloaded, setDownloaded] = React.useState(false);

  const selectLabelStyle = "text-sm mb-2.5";

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
    <div
      className={cn(
        "rounded w-full h-auto p-[1.75px] pt-[19px] pr-[29px] pb-5 pl-4 grid grid-cols-2",
        "bg-darkmode-200 card-gradient shadow-nav-link"
      )}
    >
      <div className="col-span-2 grid grid-cols-2 gap-x-[18px]">
        <div>
          <p className="col-span-2 text-white text-base font-semibold">
            Proxy settings
          </p>
          <form className="col-span-1 grid grid-cols-2 grid-rows-4 gap-x-4 gap-y-5 mt-8">
            <Autocomplete
              value={"Rotation"}
              options={[{ label: "Rotation", value: "Rotation" }]}
              onChange={() => {}}
              label={"Rotation *"}
              startAdornment={<Image src={RotationIcon} alt="" />}
            />

            <Autocomplete
              value={"HTTP"}
              options={[
                { label: "HTTP", value: "HTTP" },
                { label: "Socks5", value: "Socks5" },
              ]}
              onChange={() => {}}
              label={"Port Type *"}
              startAdornment={<Image src={PortIcon} alt="" />}
            />

            <Autocomplete
              value={"hostname:port:username:password"}
              options={[
                {
                  label: "hostname:port:username:password",
                  value: "hostname:port:username:password",
                },
              ]}
              onChange={() => {}}
              label={"Format *"}
              startAdornment={<Image src={RotationIcon} alt="" />}
            />
            <Input
              className="col-span-1"
              startAdornment={
                <Image src={QuantityIcon} alt="" width={18} height={18} />
              }
              key={"quantity"}
              type={"number"}
              label={"Quantity *"}
              placeholder={"Please input config quantity"}
            />
            <Button className="col-span-2 mt-8 text-base">
              Generate Proxy
            </Button>
          </form>
        </div>
        <TextArea
          buttons={
            <div className="flex items-center gap-3">
              <Button
                onClick={onDownloadClick}
                icon={
                  <Image
                    width={18}
                    height={18}
                    src={downloaded ? CheckIcon : DownloadIcon}
                    alt={downloaded ? "Copied" : "Copy"}
                  />
                }
              >
                Download
              </Button>
              <Button
                icon={
                  <Image
                    width={18}
                    height={18}
                    src={copied ? CheckIcon : copyIcon}
                    alt={copied ? "Copied" : "Copy"}
                  />
                }
                onClick={onCopyClick}
              >
                Copy All Line
              </Button>
            </div>
          }
          label={"FORMATTED LIST"}
          readonly={true}
          value={formatedList}
          containerClassName={"col-span-1"}
          labelClassName={selectLabelStyle}
          textAreaClassName={
            "h-full max-h-full px-[19px] py-4 text-xs font-medium"
          }
        ></TextArea>
      </div>
    </div>
  );
};

export default CreateDatacenterConfig;
