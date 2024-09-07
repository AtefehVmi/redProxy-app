import TableCell from "@/components/Table/TableCell";
import {ColumnDef} from "@tanstack/react-table";

export type InvoiceDataType = {
    date: string;
    invoice: string;
    order : string;
    amount : string;
    paymentMethod : string;
    status: string;
    download: string;
}

export const InvoiceColumns: ColumnDef<InvoiceDataType, any>[] = [
    {
        accessorKey: "date",
        header: 'Date',
        cell: ({getValue}) =>{
            return <TableCell type={"TEXT"} value={getValue()}/>
        }
    },
    {
        accessorKey: "invoice",
        header: 'Invoice',
        cell: ({getValue}) =>{
            return <TableCell type={"TEXT"} value={getValue()}/>
        }
    },
    {
        accessorKey: "order",
        header: 'Order',
        cell: ({getValue}) =>{
            return <TableCell type={"TEXT"} value={getValue()}/>
        }
    },
    {
        accessorKey: "amount",
        header: 'Amount',
        cell: ({getValue}) =>{
            return <TableCell type={"TEXT"} value={getValue()}/>
        }
    },
    {
        accessorKey: "paymentMethod",
        header: 'PaymentMethod',
        cell: ({getValue}) =>{
            return <TableCell type={"TEXT"} value={getValue()}/>
        }
    },
    {
        accessorKey: "status",
        header: 'Status',
        cell: ({getValue}) =>{
            return <TableCell type={"BADGE"} value={getValue()}/>
        }
    },
    {
        accessorKey: "download",
        header: 'Download',
        cell: ({getValue}) =>{
            return <TableCell type={"DOWNLOAD"} value={getValue()}/>
        }
    },
]