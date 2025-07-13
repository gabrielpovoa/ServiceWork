"use client"
import {useState, useEffect} from "react";

export const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [mounted, setMounted] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        if(!name && !email && !message) {
            setError("Before sending an e-mail, you need to fill out the filed")
        }
    }

    return (
        <form className="max-w-xl w-full p-6 bg-white shadow-lg rounded-2xl space-y-4" onSubmit={handleSubmit}>
            {error &&
                <span className="text-red-600 text-sm font-medium py-4">{error}</span>
            }
            <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    id="message"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                />
            </div>

            <button
                type="submit"
                className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
                Send
            </button>
        </form>
    );
};
