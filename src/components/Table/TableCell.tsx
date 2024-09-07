import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badge/Badge";

import downloadImage from "@public/icons/download.svg";


interface TableCellProps {
    className?: string;
    children?: React.ReactNode;
    type: "BADGE" |  "IMAGE" | "TEXT" | "LINK" |"SELECT" | "DATE" | "DOWNLOAD";
    value: any;
    onChange?: (value: any) => void;
    onSwitch?: (newValue: boolean) => void;
    selectName?: string;
}



const TableCell = ({
                       className,
                       children,
                       type,
                       value,
                       selectName,
                       onChange,
                       onSwitch
                   }: TableCellProps) => {

    return (
        <>
            {type === "TEXT" && value}
            {type === "DATE" && <p className="text-storm-gray-500">{value}</p>}
            {type === "BADGE" &&
                <div className="flex">
                    <Badge
                        text={value}
                        variant={value === "PAID" ? "SUCCESS" : "ERROR"}
                    />
                </div>
            }
            {type === "IMAGE" &&
                <div className="w-8 h-8 relative">
                    <Image src={value} alt={''} fill={true}/>
                </div>
            }
            {type === "LINK" &&
                <Link
                    href={value.href}
                    className="
                        bg-storm-gray-200 border border-solid border-gray-300 rounded-xl
                        text-storm-gray-900 text-sm font-medium w-[102px] h-[36px]
                        px-[14px] py-2 transition-all duration-300
                        hover:bg-storm-gray-300
                    "
                    target={"_blank"}
                >
                    {value.text}
                </Link>
            }
            {type === "DOWNLOAD" &&
                <Link href={value} className="flex justify-center items-center gap-1" target={"_blank"}>
                    <p className="text-xs text-white font-medium hover:underline hover:underline-white">.PDF</p>
                    <Image src={downloadImage} alt={''} className="w-4 h-4"/>
                </Link>
            }
            {/*{type === "SELECT" &&*/}
            {/*    <Select options={value} onChange={onChange!} name={selectName ?? undefined}/>*/}
            {/*}*/}
        </>
    );
};

export default TableCell;