import Image from "next/image";
export interface LogoProps {
    withSlogan?: boolean,
    width?: number,
    height?: number,
}

const Logo: React.FC<LogoProps> = ({ withSlogan = false, width = 407, height = 43.5 }) => {
    return (
        <div className="w-[258px] h-7 relative">
            <Image
                src="/logos/Logo1.svg"
                alt="Logo image"
                width={width}
                height={height}
            />
            {withSlogan && (
                <Image
                    src="/logos/Logo2.svg"
                    width={width}
                    height={height}
                    alt="Logo image"
                />
            )}
        </div>
    );
}

export default Logo;