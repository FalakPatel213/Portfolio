function Contact() {
    return (
        <main className="relative flex items-top justify-center min-h-[600px] sm:min-h-[700px] bg-white py-6 sm:py-10 lg:py-0">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-4 sm:mt-8 overflow-hidden rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-5 sm:p-6 md:p-8 bg-gray-100">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-600 mt-2 leading-7">
                                Feel free to connect with me for opportunities or project discussions.
                            </p>

                            <div className="flex items-start mt-7 sm:mt-8 text-gray-600">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-gray-500 shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="ml-4 text-sm sm:text-md tracking-wide font-semibold break-words">
                                    Ahmedabad, Gujarat, India
                                </div>
                            </div>

                            <div className="flex items-start mt-4 text-gray-600">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-gray-500 shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a2 2 0 011.21-.502l4.493 1.498a1 1 0 011.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div className="ml-4 text-sm sm:text-md tracking-wide font-semibold break-words">
                                    +91 6351846690
                                </div>
                            </div>

                            <div className="flex items-start mt-4 text-gray-600">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-gray-500 shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div className="ml-4 text-sm sm:text-md tracking-wide font-semibold break-all">
                                    falakpatel213@gmail.com
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-orange-700 font-semibold hover:underline">
                                    LinkedIn
                                </a>
                                <span className="text-gray-400 hidden sm:inline">|</span>
                                <a href="https://github.com/FalakPatel213" target="_blank" rel="noreferrer" className="text-orange-700 font-semibold hover:underline">
                                    GitHub
                                </a>
                            </div>
                        </div>

                        <form
                            className="p-5 sm:p-6 md:p-8 flex flex-col justify-center"
                            action="mailto:falakpatel213@gmail.com"
                            method="post"
                            encType="text/plain"
                        >
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">Number</label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="message" className="hidden">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Message"
                                    required
                                    rows="5"
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;
