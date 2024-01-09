import Logo from "./Logo";
import Image from "next/image";

export interface AvatarHeaderProps {
    type?: "default" | "person" | "company",
    icon?: string
}

const AvatarHeader: React.FC<AvatarHeaderProps> = ({ type = "default", icon = "/avatars/Human1.svg" }) => {
    return (
        <>
            {type === "company" && <div className="w-16 h-16 p-2 bg-white rounded-[32px] border border-indigo-900 justify-start items-center gap-2.5 inline-flex">
                <div className="w-12 h-[5px] justify-center items-center flex">
                    <div className="w-12 h-[5px] relative">
                        <Logo width={48} height={5} />
                    </div>
                </div>
            </div>}
            {type === "default" && <div className="w-16 h-16 p-2 bg-slate-200 rounded-2xl justify-start items-center gap-2.5 inline-flex">
                <div className="w-12 h-12 px-0.5 py-2 justify-center items-center flex" >
                    <Image
                        width={48}
                        height={48}
                        alt="Avatar Image"
                        src="/icons/iconoir_add-user-primary.svg"
                    />
                </div>
            </div>}
            {type === "person" && <div className="w-16 h-16 bg-slate-200 rounded-[32px] justify-center items-center gap-2.5 inline-flex">
                <Image
                    src={icon}
                    width={64}
                    height={64}
                    alt="Avatar Image"
                />
            </div>}
        </>
    )
}

export default AvatarHeader;