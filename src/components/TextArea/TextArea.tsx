import React, {useEffect} from 'react';

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
        <div className={`${props.containerClassName ?? ""} relative flex flex-col`}>
            {props.label &&
                <label className={`${props.labelClassName ?? ""} text-config-card-heading-text`}>
                    {props.label}
                </label>
            }
            <div className="relative w-auto h-full max-h-full">
                <textarea
                    className={`
                        ${props.textAreaClassName ?? ""}
                        w-full h-full bg-select-bg border border-solid border-white/10 rounded
                        text-profile-card-text focus:outline-none focus:border-white/20
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