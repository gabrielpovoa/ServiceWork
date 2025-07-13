export const Form = () => {
    return(
        <form className="max-w-xl w-full p-6 bg-white shadow-lg rounded-2xl space-y-4">
            <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    id="message"
                    placeholder="Write your message here..."
                    className="resize-none px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
                Send
            </button>
        </form>

    )
}