type Props = {
    title: string;
    color?: string;
    position?: "left" | "right" | "center" | "justify";
};

export const HeadingTitle = ({title, color,position}: Props) => {
    const textColor = color ?? "#454545";
    const textPosition = position ?? 'center';

    return (
        <h1
            className={`py-4 text-3xl md:text-5xl font-bold`}
            style={{color: textColor, textAlign: textPosition}}>
            {title}
        </h1>
    );
};
