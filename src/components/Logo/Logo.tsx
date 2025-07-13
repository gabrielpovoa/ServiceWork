import Image from "next/image";

import LogoCase from "@/../public/logo.png";

type Props = {
    classname?:string;
}
const Logo = ({classname}:Props) => {
    return (
        <Image
            src={LogoCase}
            alt="Site Work Service - Especialistas em manutenção e acesso técnico"
            width="160"
            height="80"
            priority
            className={ `shadow-inner rounded-sm h-fit lg:max-w-60 max-w-[160px] pointer-events-none -translate-y-2 lg:-translate-y-4 p-0 ${classname}`}
        />
    );
};

export default Logo;
