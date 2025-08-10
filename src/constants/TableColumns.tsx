import TableCell from "@/components/Table/TableCell";
import Order from "@/service/models";
import { ColumnDef } from "@tanstack/react-table";

export const InvoiceColumns: ColumnDef<Order, any>[] = [
  {
    accessorKey: "created",
    header: "Date",
    cell: ({ getValue }) => {
      return <TableCell type={"TEXT"} value={getValue()} />;
    },
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ getValue }) => {
      return <TableCell type={"TEXT"} value={getValue()} />;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue }) => {
      return <TableCell type={"TEXT"} value={getValue()} />;
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ getValue }) => {
      return <TableCell type={"TEXT"} value={getValue()} />;
    },
  },
  {
    accessorKey: "provider",
    header: "Provider",
    cell: ({ getValue }) => {
      return <TableCell type={"TEXT"} value={getValue()} />;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      return <TableCell type={"BADGE"} value={getValue()} />;
    },
  },
  {
    accessorKey: "total_amount",
    header: "Total Amount",
    cell: ({ getValue }) => {
      return <TableCell type={"TEXT"} value={getValue()} />;
    },
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ getValue }) => {
      return <TableCell type={"TEXT"} value={getValue()} />;
    },
  },
  {
    accessorKey: "download",
    header: "Download",
    cell: ({ getValue }) => {
      return <TableCell type={"DOWNLOAD"} value={getValue()} />;
    },
  },
];
