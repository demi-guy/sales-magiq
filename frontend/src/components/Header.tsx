import Avatar from "./Avatar";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import Image from "next/image";
import { Search, BellNotification } from "iconoir-react";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export interface HeaderProps {
    user?: "employeer" | "salesPro",
}

const Header: React.FC<HeaderProps> = ({ user = "employeer" }) => {
    const [currentSelect, setCurrentSelect] = useState(0);
    const router = useRouter();
    return (
        <div className="w-full bg-white flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-[69px] px-[10%] py-3.5 bg-white justify-center items-center gap-8 inline-flex">
                <div className="grow shrink basis-0 h-[47px] justify-start items-center gap-8 flex">
                    <Logo />
                    <div className="grow shrink basis-0 h-8 justify-center items-start gap-[54px] xl:flex hidden">
                        {user === "employeer" ?
                            <>
                                <MenuItem icon="/icons/iconoir_add-user.svg" text="Hire" selected={currentSelect === 0} onClick={() => setCurrentSelect(0)} />
                                <MenuItem icon="/icons/iconoir_reports.svg" text="Lead" selected={currentSelect === 1} onClick={() => setCurrentSelect(1)} />
                                <MenuItem icon="/icons/iconoir_ecology-book.svg" text="Train" selected={currentSelect === 2} onClick={() => setCurrentSelect(2)} />
                                <MenuItem icon="/icons/iconoir_message.svg" text="Community" selected={currentSelect === 3} onClick={() => setCurrentSelect(3)} />
                            </> : <>
                                <MenuItem icon="/icons/iconoir_shopping-bag.svg" text="Career" selected={currentSelect === 0} onClick={() => setCurrentSelect(0)} />
                                <MenuItem icon="/icons/iconoir_cube-replace-face.svg" text="Learn" selected={currentSelect === 1} onClick={() => setCurrentSelect(1)} />
                                <MenuItem icon="/icons/iconoir_message.svg" text="Community" selected={currentSelect === 2} onClick={() => setCurrentSelect(2)} />
                            </>
                        }
                    </div>
                    <div className="w-[217px] h-9 px-4 py-2 bg-slate-200 rounded-2xl justify-start items-center gap-2.5 hidden lg:flex">
                        <Search
                            color="white"
                            width={20}
                            height={20}
                        />
                        <input className=" placeholder:text-white text-sm outline-none bg-transparent w-[100%]" placeholder="Search" />
                    </div>
                    <div className="flex gap-8 float-right">
                        <Image
                            className="hover:cursor-pointer hidden md:flex"
                            width={24}
                            height={24}
                            src="/icons/iconoir_bell-notification.svg"
                            alt="Bell Notification Icon"
                        />
                        <div className="justify-start items-center gap-3 flex hover:shadow rounded cursor-pointer" onClick={() => { router.push("/"); localStorage.removeItem("token"); toast.info("You are sign out!") }}>
                            <Avatar icon="/avatars/Human1.svg" type="person" state="offline" />
                            <div className="flex-col justify-start items-start gap-1 inline-flex">
                                <div className="text-neutral-600 text-xl font-medium">John Doe</div>
                                <div className="text-zinc-400 text-base">Hiring Manager</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;