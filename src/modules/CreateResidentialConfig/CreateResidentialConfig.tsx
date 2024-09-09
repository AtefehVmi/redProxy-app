'use client'
import React from 'react';
import CustomCard from "@/components/CustomCard/customCard";
import Select from "@/components/CustomSelect/Select";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import copyIcon from "@public/icons/copy.svg"
import Image from "next/image";


const DUMMY_TEXT_AREA_VALUE = "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
    "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
    "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
    "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
    "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n"

const CreateResidentialConfig = () => {

    const [formatedList, setFormatedList] = React.useState<string>(DUMMY_TEXT_AREA_VALUE);

    const selectContainerStyle = "h-[62px] col-span-1"
    const selectLabelStyle = "text-xs font-medium mb-[5px]"
    const selectStyle = "h-[43px] text-profile-card-text text-xs px-4 py-[14px]"
    const selectItemStyle = "text-sm text-white px-4 py-[14px]"

    function copyToClipboard(text:string) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Text copied to clipboard');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    function onCopyClick() {
        copyToClipboard(formatedList)
    }

    return (
        <CustomCard
            borderRadius={"rounded"}
            borderClassName={"w-full h-auto p-[1.75px]"}
            containerClassName={"pt-[19px] pr-[29px] pb-5 pl-4 grid grid-cols-2"}
        >
            <p className="col-span-2 text-white text-base font-semibold">Proxy settings</p>
            <div className="col-span-2 grid grid-cols-2 gap-x-[18px] mt-[23px]">
                <form className="col-span-1 grid grid-cols-2 grid-rows-4 gap-x-5 gap-y-4">
                    <Input
                        key={"name"}
                        type={"text"}
                        label={"CONFIG NAME"}
                        placeholder={"Please input your config name"}
                        mainContainerClassName={selectContainerStyle}
                        labelClassName={selectLabelStyle}
                        inputClassName={selectStyle}
                    />

                    <Select
                        key={"port"}
                        options={[
                            {label: "HTTP", value: "HTTP"},
                            {label: "Socks5", value: "Socks5"},
                        ]}
                        onChange={() => {
                        }}
                        label={"PORT TYPE"}
                        className={selectContainerStyle}
                        labelClassName={selectLabelStyle}
                        selectClassName={selectStyle}
                        itemClassName={selectItemStyle}
                    />
                    <Select
                        key={"rotation"}
                        options={[
                            {label: "Rotation", value: "Rotation"},
                        ]}
                        onChange={() => {
                        }}
                        label={"ROTATION"}
                        className={selectContainerStyle}
                        labelClassName={selectLabelStyle}
                        selectClassName={selectStyle}
                        itemClassName={selectItemStyle}
                    />
                    <Select
                        key={"geoLocation"}
                        options={[
                            {label: "Random", value: "Random"},
                            {label: "Germany", value: "Germany"},
                            {label: "France", value: "France"},
                        ]}
                        onChange={() => {
                        }}
                        label={"GEO LOCATION"}
                        className={selectContainerStyle}
                        labelClassName={selectLabelStyle}
                        selectClassName={selectStyle}
                        itemClassName={selectItemStyle}
                    />
                    <Select
                        key={"format"}
                        options={[
                            {label: "hostname:port:username:password", value: "hostname:port:username:password"},
                        ]}
                        onChange={() => {
                        }}
                        label={"FORMAT"}
                        className={selectContainerStyle}
                        labelClassName={selectLabelStyle}
                        selectClassName={selectStyle}
                        itemClassName={selectItemStyle}
                    />
                    <Input
                        key={"quantity"}
                        type={"number"}
                        label={"QUANTITY"}
                        placeholder={"Please input config quantity"}
                        mainContainerClassName={selectContainerStyle}
                        labelClassName={selectLabelStyle}
                        inputClassName={selectStyle}
                    />
                    <button
                        className="
                            col-span-2 h-[43px] self-end
                            bg-create-config-button-bg text-white text-xs font-medium flex justify-center items-center
                            rounded border border-solid border-white/10 transition-all duration-300
                            hover:bg-create-config-button-hover active:bg-create-config-button-active
                        "
                    >
                        Create proxy config
                    </button>
                </form>
                <TextArea
                    label={"FORMATTED LIST"}
                    readonly={true}
                    value={formatedList}
                    containerClassName={"col-span-1"}
                    labelClassName={selectLabelStyle}
                    textAreaClassName={"h-full max-h-full px-[19px] py-4 text-xs font-medium"}
                >
                    <CustomCard
                        borderRadius={"rounded"}
                        borderClassName={"p-px w-[124px] h-[34px] absolute top-4 right-4"}
                        containerClassName={"flex justify-center items-center gap-1 cursor-pointer "}
                        onClick={onCopyClick}
                    >
                        <Image src={copyIcon} alt={''} className={"w-4 h-4"}/>
                        <p className="text-xs text-white font-medium">Copy all lines</p>
                    </CustomCard>
                </TextArea>
            </div>
        </CustomCard>
    );
};

export default CreateResidentialConfig;