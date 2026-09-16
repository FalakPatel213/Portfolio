import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className="mx-auto w-full max-w-7xl overflow-hidden">
            <section className="relative overflow-hidden text-black rounded-lg mx-2 sm:mx-6 lg:mx-16 py-10 sm:py-16 lg:py-24">
                <div className="relative z-10 max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="max-w-xl lg:ml-auto space-y-6 sm:space-y-8 text-center lg:text-right">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            Hi, I'm Falak Patel
                            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2">
                                Computer Science Student
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-600 leading-7">
                            B.E. Computer Science & Engineering student at GTU, interested in building
                            responsive web applications and practical software solutions.
                        </p>

                        <Link
                            className="inline-flex text-white items-center px-5 sm:px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/about"
                        >
                            View My Work
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2">
                    <div className="flex items-center justify-center h-full">
                        <img
                            className="w-64 xl:w-80 2xl:w-96 max-w-full rounded-full"
                            src="https://github.com/FalakPatel213.png"
                            alt="Falak Patel"
                        />
                    </div>
                </div>
            </section>

            <div className="grid place-items-center mt-10 sm:mt-16 lg:hidden px-4">
                <img
                    className="w-48 sm:w-64 md:w-72 max-w-full rounded-full"
                    src="https://github.com/FalakPatel213.png"
                    alt="Falak Patel"
                />
            </div>

            <h2 className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl px-4 py-8 sm:py-10 font-medium leading-relaxed break-words">
                ReactJS • JavaScript • Python • Java • C • SQL
            </h2>
        </main>
    );
}

export default Home;
