import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return <div style={{ padding: "48px calc(10% - 28.8px)" }} className="w-full h-full bg-slate-200 rounded-2xl flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch h-[157px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[231px] h-[29px] justify-center items-center inline-flex">
                        <Logo width={231} />
                    </div>
                    <div className="self-stretch grow shrink basis-0 text-blue-950 text-sm">Lorem ipsum dolor sit amet consectetur. Lectus facilisi id bibendum quis consectetur egestas. </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="text-indigo-900 text-lg font-medium">Bussiness</div>
                    <div className="text-neutral-600 text-base">Hire</div>
                    <div className="text-neutral-600 text-base">Training</div>
                    <div className="text-neutral-600 text-base">Scaling</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="text-indigo-900 text-lg font-medium">Bussiness</div>
                    <div className="text-neutral-600 text-base">Hire</div>
                    <div className="text-neutral-600 text-base">Training</div>
                    <div className="text-neutral-600 text-base">Scaling</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="text-indigo-900 text-lg font-medium">Bussiness</div>
                    <div className="text-neutral-600 text-base">Hire</div>
                    <div className="text-neutral-600 text-base">Training</div>
                    <div className="text-neutral-600 text-base">Scaling</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="text-indigo-900 text-lg font-medium">Fllow Us</div>
                    <div className="justify-start items-start gap-4 inline-flex">
                        <Image className="hover:cursor-pointer" alt="Icon Image" width={24} height={24} src="/icons/entypo-social_twitter-with-circle.svg" />
                        <Image className="hover:cursor-pointer" alt="Icon Image" width={24} height={24} src="/icons/entypo-social_youtube-with-circle.svg" />
                        <Image className="hover:cursor-pointer" alt="Icon Image" width={24} height={24} src="/icons/entypo-social_facebook-with-circle.svg" />
                        <Image className="hover:cursor-pointer" alt="Icon Image" width={24} height={24} src="/icons/entypo-social_pinterest-with-circle.svg" />
                    </div>
                </div>
            </div>
            <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                <div><span className="text-neutral-600 text-sm">Copyright © All rights reserved by </span><Link href="" className="text-blue-500 text-sm underline">Salesmagiq</Link></div>
            </div>
        </div>
    </div>
}