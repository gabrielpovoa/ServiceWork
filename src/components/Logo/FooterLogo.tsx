import Image from "next/image";

import LogoCase from "@/../public/logo.png";

const FooterLogo = () => {
    return (
        <Image
            src={LogoCase}
            alt="Site Work Service - Especialistas em manutenção e acesso técnico"
            width="160"
            height="80"
            priority
            className="rounded-sm h-fit lg:max-w-60 max-w-[160px] pointer-events-none "
        />
    );
};

export default FooterLogo;
