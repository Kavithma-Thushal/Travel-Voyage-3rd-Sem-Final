export function Contact() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 m-8 bg-white rounded-lg shadow-md mt-[90px] mb-[80px] w-[600px]">
                <h2 className="text-3xl text-center text-neonBlue font-bold mb-3">Contact Us</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" className="w-full p-3 border border-gray-300 rounded-md"
                               placeholder="Enter your email"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                        <input type="text"
                               className="w-full p-3 border border-gray-300 rounded-md focus:ring-lightGreen focus:border-lightGreen"
                               placeholder="Enter subject"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-lightGreen focus:border-lightGreen"
                            rows={5} placeholder="Enter your message"></textarea>
                    </div>
                    <div className="text-center">
                        <button className="px-6 py-2 bg-neonBlue rounded-md hover:text-white transition duration-300">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}