type Props = {
    title: string;
    color?: string;
};

export const HeadingTitle = ({title, color}: Props) => {
    const textColor = color ?? "#454545";

    return (
        <h1
            className={`py-4 text-3xl md:text-5xl font-bold`}
            style={{color: textColor}}>
            {title}
        </h1>
    );
};
