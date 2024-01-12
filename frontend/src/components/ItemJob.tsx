import Avatar from "./Avatar";
import { Coins, Page } from "iconoir-react";
export interface ItemJobProps {
    title?: string,
    description?: string,
    price?: string,
    onClick?: () => any
}

const ItemJob: React.FC<ItemJobProps> = ({ title = "", description = "", price = "Full Time", onClick = () => { } }) => {
    return (
        <div onClick={onClick} className="w-full h-full py-2 border-b border-black border-opacity-0 justify-start items-center gap-3 inline-flex hover:cursor-pointer hover:shadow transition-all hover:rounded">
            <Avatar type="job" />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                <div className="self-stretch justify-start items-center gap-6 inline-flex">
                    <div className="grow shrink basis-0 h-6 justify-between items-center flex">
                        <div className="grow shrink basis-0 text-neutral-600 text-xl">{title}</div>
                    </div>
                    <div className="justify-start items-start gap-2 flex">
                        <div className="justify-start items-center gap-2 flex">
                            <Coins
                                width={18}
                                height={18}
                            />
                            <div className="px-4 py-0.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 flex">
                                <div className="text-white">{price}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="py-0.5 justify-start items-start flex">
                        <Page
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className="h-[50px] overflow-hidden grow shrink basis-0 text-zinc-400 font-light">{description}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemJob;