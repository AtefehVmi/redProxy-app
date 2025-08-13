import Image, { StaticImageData } from "next/image";

type Props = {
  Icon: StaticImageData;
  name: string;
  security: string;
  securityClassName?: string;
  value: string;
  nameAttr: string;
  checked: boolean;
  onChange: (value: string) => void;
  onSelect: () => void;
};

const FactorAuthCard: React.FC<Props> = ({
  Icon,
  name,
  security,
  securityClassName,
  value,
  nameAttr,
  checked,
  onChange,
  onSelect,
}) => {
  return (
    <label
      className={`border rounded-lg flex items-center justify-between px-4 py-[15px] cursor-pointer transition border-darkmode-100`}
      onClick={() => {
        onChange(value);
        onSelect();
      }}
    >
      <div className="flex items-center gap-3">
        <div className="bg-darkmode-100 rounded">
          <Image src={Icon} alt="" className="m-3" />
        </div>
        <div>
          <p className="text-base font-semibold text-white">{name}</p>
          <p className={`text-xs text-grey-400 ${securityClassName}`}>
            {security}
          </p>
        </div>
      </div>
      <input
        className="h-4 w-4 accent-orange-200"
        type="radio"
        name={nameAttr}
        value={value}
        checked={checked}
      />
    </label>
  );
};

export default FactorAuthCard;
