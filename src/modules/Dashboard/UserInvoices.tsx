'use client'
import React from 'react';
import CustomCard from "@/components/CustomCard/customCard";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import Table from "@/components/Table/Table";
import {InvoiceColumns, InvoiceDataType} from "@/constants/TableColumns";


const INVOICE_DATA: Array<InvoiceDataType> = [
    {
        date: "08/05/2024",
        invoice: "#982ZK-001",
        order: "100 GB Residential",
        amount: "$ 300.00",
        paymentMethod: "Mastercard",
        status: "PAID",
        download: "https://www.google.com"
    },
    {
        date: "09/05/2024",
        invoice: "#982ZK-002",
        order: "10 GB Residential",
        amount: "$ 300.00",
        paymentMethod: "Mastercard",
        status: "PAID",
        download: "https://www.google.com"
    },
    {
        date: "10/05/2024",
        invoice: "#982ZK-003",
        order: "50 GB Residential",
        amount: "$ 300.00",
        paymentMethod: "Mastercard",
        status: "PAID",
        download: "https://www.google.com"
    },
    {
        date: "11/05/2024",
        invoice: "#982ZK-004",
        order: "20 GB Residential",
        amount: "$ 300.00",
        paymentMethod: "Mastercard",
        status: "FAILED",
        download: "https://www.google.com"
    },
]


const UserInvoices = () => {
    function onFilterChange() {

    }

    return (
        <CustomCard
            borderRadius={"rounded"}
            borderClassName={"w-full h-[331px] p-[1.75px]"}
            containerClassName={"px-4 pt-5 pb-4 flex flex-col items-center gap-[18px]"}
        >
            <div className="w-full flex justify-between items-center">
                <p className="text-base font-semibold text-white">Invoices</p>
                <CustomSelect
                    options={[
                        {label: "Last 12 months", value: "year"},
                        {label: "Last 30 days", value: "month"},
                        {label: "Last 7 days", value: "week"},
                    ]}
                    defaultValue={"week"}
                    onChange={onFilterChange}
                    className="w-[119px] h-26px"
                />
            </div>
            <Table columns={InvoiceColumns} data={INVOICE_DATA}/>
        </CustomCard>
    );
};

export default UserInvoices;