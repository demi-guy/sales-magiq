import Image from "next/image";
import Logo from "./Logo";
import { ShoppingBag } from "iconoir-react";
export interface AvatarProps {
    icon?: string,
    state?: "normal" | "online" | "offline",
    type?: "person" | "job" | "company",
}

const Avatar: React.FC<AvatarProps> = ({ icon = "/icons/iconoir_shopping-bag-selected.svg", state = "normal", type = "company" }) => {
    return (
        <>
            {type === "person" && <div className="w-10 h-10 relative">
                <div className="w-10 h-10 left-0 top-0 absolute justify-center items-center inline-flex">
                    <Image
                        className="rounded-full border-2 border-slate-200"
                        src={icon}
                        width={40}
                        height={40}
                        alt="Avatar Image"
                    />
                </div>
                {state !== "normal" && <div className={"w-[11px] h-[11px] left-[28px] top-[28px] absolute rounded-full " + (state === "online" ? "bg-green-500" : "bg-zinc-400")} />
                }
            </div>}
            {type === "job" && <div className="w-10 h-10 bg-slate-200 rounded-[40px] border-2 border-slate-400 justify-center items-center gap-2.5 inline-flex">
                <ShoppingBag
                    width={24}
                    height={24}
                    color="#8986BB"
                />
            </div>}
            {type === "company" && <div className="w-[38px] h-[38px] p-2 bg-white rounded-[32px] border border-indigo-900 justify-center items-center gap-2.5 inline-flex">
                <div className="w-[33px] h-1 justify-center items-center flex">
                    <div className="w-[33px] h-1 relative">
                        <Logo width={33} height={4} />
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Avatar;