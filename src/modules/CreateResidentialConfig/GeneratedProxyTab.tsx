import Button from "@/components/Button/Button";
import Image from "next/image";

import copyIcon from "@public/icons/copy-all.svg";
import DownloadIcon from "@public/icons/download-icon.svg";
import CheckIcon from "@public/icons/check.svg";

type Props = {
  downloaded?: boolean;
  copied?: boolean;
  onDownloadClick: () => void;
  onCopyClick: () => void;
};

const generatedProxy = [
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030",
];

const GeneratedProxyTab = ({
  downloaded,
  copied,
  onCopyClick,
  onDownloadClick,
}: Props) => {
  return (
    <div className="rounded-xl bg-darkmode-300 border border-darkmode-100">
      <div className="border-b border-darkmode-100 p-2 flex items-center justify-end">
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

      <div className="text-white text-sm p-4 h-[220px] overflow-auto">
        {generatedProxy.map((proxy, index) => (
          <p key={index}>{proxy}</p>
        ))}
      </div>
    </div>
  );
};
export default GeneratedProxyTab;
