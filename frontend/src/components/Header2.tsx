import AvatarHeader from "./AvatarHeader"
import ButtonGroup from "./ButtonGroup";

export interface Header2Props {
    type?: "default" | "job" | "applicant" | "company" | "jobApply" | "profile"
}

const Header2: React.FC<Header2Props> = ({ type = "default" }) => {
    return (
        <>
            {type === "default" && <div className="w-full h-full flex-col px-[10%] gap-6 inline-flex">
                <div className="justify-start items-center gap-6 inline-flex">
                    <AvatarHeader />
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                        <div className="text-neutral-600 text-[32px] capitalize">Hire</div>
                        <div className="text-black text-opacity-50">Lorem ipsum dolor sit amet consectetur. Tellus nulla ipsum faucibus consectetur. Felis nunc in tempor aenean purus.</div>
                    </div>
                </div>
                <ButtonGroup />
            </div>}
        </>
    )
}

export default Header2;