type Props = {
    title: string;
    color?: string; // espera cor hexadecimal, ex: "#FF0000"
};

export const HeadingTitle = ({ title, color }: Props) => {
    const textColor = color ?? "#454545";

    return (
        <h1
            className={`py-8 text-4xl md:text-6xl font-bold`}
            style={{ color: textColor }}
        >
            {title}
        </h1>
    );
};
