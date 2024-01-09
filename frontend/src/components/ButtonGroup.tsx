import Button from "./Button";
import { useState } from "react";

export interface ButtonGroupProps {
    state?: "hire" | "lead" | "train" | "career" | "itemInvite" | "itemApplyed"
}

const buttonTexts = {
    hire: ["Dashboard", "My Jobs", "Applicants", "Interviews"],
    lead: ["Dashboard", "Modeling", "Mapping", "Managing", "Measuring"],
    train: ["Dashboard", "Training", "Selling", "Ramping", "Coaching", "Nurturing"],
    career: ["Dashboard", "Apply", "Interviews", "Offer"],
    itemInvite: ["Invite", "View Detail"],
    itemApplyed: ["Message", "View Detail"],
}

const iconTexts = {
    itemInvite: ["/icons/iconoir_send-mail.svg", "/icons/iconoir_eye-empty.svg"],
    itemApplyed: ["/icons/iconoir_chat-bubble.svg", "/icons/iconoir_eye-empty.svg"],
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ state = "hire" }) => {
    const [selected, setSelected] = useState(1);
    return (
        <div className="justify-start items-center gap-2.5 inline-flex">
            {buttonTexts[state].map((buttonText, index) =>
                <Button key={index} width="auto" icon={(state === "itemApplyed" || state === "itemInvite") ? iconTexts[state][index] : "none"} text={buttonText} color={(state === "itemApplyed" || state === "itemInvite") ? "primary" : "secondary"} variant={selected === index ? "full" : "tonal"} />)}
        </div>
    );
}

export default ButtonGroup;