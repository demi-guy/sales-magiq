import { useState } from "react";

export interface SwitchProps {
    selected?: boolean,
    onChange?: (value: boolean) => any,
}

const Switch: React.FC<SwitchProps> = ({ selected = false, onChange = () => { } }) => {
    return (
        <div className={` hover:shadow-lg p-[1px] w-[34px] h-[18px]  ${selected ? "bg-indigo-900 pl-[17px]" : "bg-zinc-400 pl-[1px]"} rounded-[32px] hover:cursor-pointer transition-all`} onClick={() => onChange((!selected))}>
            <div className={`w-4 h-4 bg-white rounded-[32px]`} />
        </div>
    )
}

export default Switch;