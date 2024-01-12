import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { NavArrowDown } from "iconoir-react";

export interface SelectProps {
    icon?: boolean,
    placeholder?: string
    src?: string,
    setResult?: (value: string) => any,
}

const Select: React.FC<SelectProps> = ({ icon = false, src = "", placeholder = "Please Select.", setResult = () => { } }) => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const options = ["all", "fixed", "hourly"];
    return (
        <div ref={ref}>
            <div onClick={() => setShow(!show)} className="hover:cursor-pointer w-[141px] h-8 px-2 py-1 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 inline-flex">
                {icon && <Image
                    width={18}
                    height={18}
                    src={src}
                    alt="Icon Image"
                />}
                <div className={`${value ? "text-neutral-600" : "text-zinc-400"} text-sm grow shrink basis-0`}>{value ? options[value - 1] : placeholder}</div>

                <NavArrowDown className="relative" width={24} height={24} />
                {/* <div className="text-zinc-400 text-sm">Please Select.</div>
                <div className="w-6 h-6 px-1.5 justify-center items-center flex" /> */}
            </div>
            <div style={{ display: show ? "block" : "none" }} className="w-[141px] custom-select absolute bg-white border border-gray-300 rounded-sm py-2">
                {options.map((option, index) => {
                    return <div key={index} onClick={() => { setValue(index + 1); setShow(false); setResult(option) }} className={`hover:cursor-pointer hover:bg-gray-200 p-2 transition-all rounded-sm ` + (value === index + 1 ? "bg-gray-400" : "")}>{option}</div>
                })}
            </div>
        </div>
    )
}

export default Select;