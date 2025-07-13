import Link from "next/link";
import {MessageSquare} from "lucide-react";

const ChatWhatsapp = () => {
    const chat = "https://w.app/hi4a8x";

    return (
        <div className="fixed bottom-12 right-4 z-50">
            <Link
                href={chat}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group
                flex items-center
                w-14 h-14
                bg-green-600 rounded-full shadow-xl
                overflow-hidden
                cursor-pointer
                transition-all duration-300 ease-in-out
                hover:xl:w-72">
                <MessageSquare className="text-white w-6 h-6 flex-shrink-0 mx-4"/>
                <span
                    className="
                    hidden md:block
                    text-white font-semibold whitespace-nowrap
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300 ease-in-out z-50">
                    Chat with one of our consultants
                </span>
            </Link>
        </div>
    );
};

export default ChatWhatsapp;
