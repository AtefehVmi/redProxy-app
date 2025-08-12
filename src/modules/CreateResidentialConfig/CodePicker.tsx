"use client";

import React, { useState } from "react";

import Button from "@/components/Button/Button";
import Image from "next/image";
import DownloadIcon from "@public/icons/download-icon.svg";
import CheckIcon from "@public/icons/check.svg";
import copyIcon from "@public/icons/copy-all.svg";
import cn from "@/utils/cn";

const pyCode = `username = "customer-USER"
password = "PASS"
proxy = "core.proxy.io:7777"

proxies = {
  'http': f'http://{username}:{password}@{proxy}',
  'https': f'http://{username}:{password}@{proxy}'
}
`;

const jsCode = `const username = "customer-USER";
const password = "PASS";
const proxy = "core.proxy.io:7777";

const proxies = {
  http: \`http://\${username}:\${password}@\${proxy}\`,
  https: \`http://\${username}:\${password}@\${proxy}\`
};
`;

const curlCommand = `curl -x http://customer-USER:PASS@core.proxy.io:7777 https://example.com
`;

const phpCode = `<?php
$username = "customer-USER";
$password = "PASS";
$proxy = "core.proxy.io:7777";

$proxies = [
    'http' => "http://$username:$password@$proxy",
    'https' => "http://$username:$password@$proxy"
];
`;

const codes: {
  [x: string]: string;
} = {
  python: pyCode,
  js: jsCode,
  curl: curlCommand,
  php: phpCode,
};

type Props = {
  downloaded?: boolean;
  copied?: boolean;
  onDownloadClick: () => void;
  onCopyClick: () => void;
};

const CodePicker = ({
  downloaded,
  copied,
  onCopyClick,
  onDownloadClick,
}: Props) => {
  const [lang, setLang] = useState("python");

  const getCode = () => {
    return codes[lang];
  };

  const changeCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLang(e.currentTarget.name);
  };

  return (
    <div>
      <div className="border border-darkmode-100 bg-darkmode-300 rounded-xl">
        <div>
          <div className="flex items-center justify-between *:p-2 border-b border-darkmode-100">
            <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-0 justify-between px-[30px] pb-[30px]">
              <div className="flex gap-4 *:rounded-md *:px-6 *:py-2.5 *:text-white *:text-sm">
                <button
                  className={cn(lang === "python" ? "bg-darkmode-100" : "")}
                  name={"python"}
                  onClick={changeCode}
                >
                  Python
                </button>
                <button
                  className={cn(lang === "curl" ? "bg-darkmode-100" : "")}
                  name={"curl"}
                  onClick={changeCode}
                >
                  cURL
                </button>
                <button
                  className={cn(lang === "php" ? "bg-darkmode-100" : "")}
                  name={"php"}
                  onClick={changeCode}
                >
                  PHP
                </button>
                <button
                  className={cn(lang === "js" ? "bg-darkmode-100" : "")}
                  name={"js"}
                  onClick={changeCode}
                >
                  Javascript
                </button>
              </div>
            </div>

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
          </div>

          <div className="py-5 grow font-mono p-4 text-sm text-white whitespace-pre-wrap h-[220px] overflow-auto">
            {getCode()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePicker;
