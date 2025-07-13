const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center py-4 text-sm text-gray-500 bg-[#F2F2F2]">
            <span> Developed by João Póvoa - {currentYear}</span>
        </footer>
    );
};

export default Footer;
