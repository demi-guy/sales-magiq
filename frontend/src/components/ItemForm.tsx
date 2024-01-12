import { MutableRefObject, useEffect, useRef, useState } from "react";
import Input from "./Input";
import Switch from "./Switch";

export interface ItemFormProps {
    type?: "input" | "select" | "textarea" | "boolean" | "rate",
    required?: boolean,
    subject?: string,
    description?: null | string,
    value?: string | boolean,
    onChange?: (value: string | boolean) => any,
}

const ItemForm: React.FC<ItemFormProps> = ({ description = null, subject = "Subject", required = false, type = "input", onChange = () => { }, value = "" }) => {
    const ref = useRef<HTMLTextAreaElement>(null);
    const [active, setActive] = useState(false);
    useEffect(() => {
        if (ref.current !== null) {
            ref.current.addEventListener('focusin', () => setActive(true));
            ref.current.addEventListener('focusout', () => setActive(false));
        }
    }, []);
    return (
        <div className="w-full h-full flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-600 text-sm font-medium">{subject}</div>
                {required && <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px]">Required</div>
                </div>}
                {type === "boolean" &&
                    <div className="h-3 justify-between items-center flex"><Switch selected={typeof value === "boolean" ? value : false} onChange={onChange} /></div>}
            </div>
            {description && <div className="text-zinc-400">{description}</div>}
            {type === "input" && <Input onChange={onChange} value={typeof value === "string" ? value : ""} />}
            {type === "textarea" && <textarea ref={ref} value={typeof value === "string" ? value : ""} className={`w-full bg-white rounded-lg border ${active ? "border-gray-900" : "border-gray-300"} outline-none gap-2.5 px-4 py-2 h-[83px] text-sm`} placeholder="Please Input here." onChange={(event) => { onChange(event.target.value) }} />}
        </div>
    )
}

export default ItemForm;