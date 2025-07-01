"use client";

import Select from "@/components/CustomSelect/Select";
import Image from "next/image";
import BandwidthIcon from "@public/icons/config-name.svg";
import InputText from "@/components/Input/Input";

const CustomPlan = () => {
  const selectContainerStyle = "h-[62px] col-span-1";
  const selectLabelStyle = "text-sm mb-2.5";
  const selectStyle = "h-[53px] text-grey-400 text-base px-4 py-[14px]";
  const selectItemStyle = "text-sm text-white px-4 py-[14px]";

  return (
    <div className="rounded bg-darkmode-200 border border-darkmode-100 p-8">
      <p className="text-white font-bold text-xl">Custom Plan</p>

      <div className="mt-8 flex flex-col gap-y-7">
        <Select
          icon={<Image src={BandwidthIcon} alt="" />}
          key={"bandwidth"}
          options={[{ label: "Bandwidth", value: "Bandwidth" }]}
          onChange={() => {}}
          label={"Band width *"}
          className={selectContainerStyle}
          labelClassName={selectLabelStyle}
          selectClassName={selectStyle}
          itemClassName={selectItemStyle}
        />

        <div className="relative pt-8">
          <div className="w-full h-px bg-darkmode-100"></div>
          <p className="bg-darkmode-200 p-2.5 absolute top-[35%] left-[47%] text-grey-400 font-semibold">
            OR
          </p>
        </div>

        <InputText
          className="col-span-1"
          startAdornment={
            <Image src={BandwidthIcon} alt="" width={18} height={18} />
          }
          key={"bandwidth"}
          type={"number"}
          label={"Custom Bandwidth *"}
          placeholder={"Enter"}
        />
      </div>
    </div>
  );
};
export default CustomPlan;
