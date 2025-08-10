import React, { ReactNode, useEffect } from "react";

interface TextAreaProps {
  children?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  readonly?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  textAreaClassName?: string;
  buttons?: ReactNode;
  className?: string;
}

const TextArea = (props: TextAreaProps) => {
  const [value, setValue] = React.useState("");

  useEffect(() => {
    if (props.readonly) {
      setValue(props.value ?? "");
    }
  }, [props.value]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  }

  return (
    <div
      className={`${
        props.containerClassName ?? ""
      } relative flex flex-col bg-darkmode-300 rounded-xl border border-darkmode-100 ${
        props.className
      }`}
    >
      <div className="flex items-center justify-between p-6 border-b border-darkmode-100">
        {props.label && (
          <label className={`${props.labelClassName ?? ""} text-grey-400`}>
            {props.label}
          </label>
        )}
        {props.buttons && props.buttons}
      </div>
      <div className="relative w-auto h-full max-h-full">
        <textarea
          className={`
                        ${props.textAreaClassName ?? ""}
                        w-full h-full bg-darkmode-300 text-sm
                        text-grey-200 leading-5 focus:outline-none focus:border-white/20
                    `}
          readOnly={props.readonly}
          value={value}
          onChange={handleChange}
        />
        {props.children ?? undefined}
      </div>
    </div>
  );
};

export default TextArea;
