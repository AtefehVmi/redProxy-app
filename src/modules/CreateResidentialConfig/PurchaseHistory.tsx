import cn from "@/utils/cn";

const historyData = [
  { gb: 17, date: "13-12-2024", status: "Active", id: 1 },
  { gb: 17, date: "13-12-2024", status: "Inactive", id: 2 },
  { gb: 17, date: "13-12-2024", status: "Active", id: 1 },
  { gb: 17, date: "13-12-2024", status: "Inactive", id: 2 },
  { gb: 17, date: "13-12-2024", status: "Active", id: 1 },
  { gb: 17, date: "13-12-2024", status: "Inactive", id: 2 },
  { gb: 17, date: "13-12-2024", status: "Active", id: 1 },
  { gb: 17, date: "13-12-2024", status: "Inactive", id: 2 },
  { gb: 17, date: "13-12-2024", status: "Active", id: 1 },
  { gb: 17, date: "13-12-2024", status: "Inactive", id: 2 },
];

const PurchaseHistory = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-darkmode-200 border border-darkmode-100 rounded-lg p-5 max-h-[487px] overflow-auto",
        className
      )}
    >
      <p className="text-white text-base font-semibold">Purchase History</p>

      <div className="flex flex-col gap-1 mt-6">
        {historyData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-darkmode-300 p-3"
          >
            <p className="text-white text-sm font-semibold">{item.gb}GB</p>
            <p className="text-grey-40 text-sm">{item.date}</p>
            <div className="flex items-center gap-1">
              <div
                className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  item.status === "Active" ? "bg-succes" : "bg-danger"
                )}
              ></div>

              <p
                className={cn(
                  "text-xs",
                  item.status === "Active" ? "text-succes" : "text-danger"
                )}
              >
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PurchaseHistory;
