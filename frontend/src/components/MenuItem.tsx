import Image from "next/image";
export interface MenuItemProps {
    selected?: boolean,
    text?: string,
    icon: string,
    device?: "landscape" | "portrait",
    onClick?: () => any,
}

const MenuItem: React.FC<MenuItemProps> = ({ selected = false, device = "landscape", text = "Hire", icon, onClick}) => {
    return (
        <>
            {device === "landscape" ? (
                <div className={`custom-menu-item h-${selected ? 8 : 6} justify-center items-center gap-${selected ? 2 : 1} inline-flex hover:cursor-pointer`} onClick={onClick}>
                    <div className="flex-col justify-center items-center gap-1 flex">
                        <div className="justify-center items-center gap-1.5 inline-flex">
                            <Image
                                width={20}
                                height={20}
                                alt="Menu Item Image"
                                src={selected ? icon.replace(".svg", "-selected.svg") : icon}
                            />
                            <div className={`text-${selected ? "blue-950" : "neutral-600"} text-xl`}>{text}</div>
                        </div>
                        {selected && <Image
                            width={21}
                            height={0}
                            alt="Line Image"
                            src="/icons/Line 1.svg"
                        />}
                    </div>
                </div>
            ) : (
                <div className="h-[46px] flex-col justify-center items-center inline-flex hover:cursor-pointer" onClick={onClick}>
                    <Image
                        width={20}
                        height={20}
                        alt="Menu Item Image"
                        src={icon}
                    />
                    <div className={`text-${selected ? "sky-700" : "neutral-600"}`}>{text}</div>
                </div>
            )}
        </>
    );
}

export default MenuItem;