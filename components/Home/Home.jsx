import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Hi, I'm Falak Patel
                            <span className="hidden sm:block text-4xl">Computer Science Student</span>
                        </h2>

                        <p className="text-lg text-gray-600">
                            B.E. Computer Science & Engineering student at GTU, interested in building
                            responsive web applications and practical software solutions.
                        </p>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/about"
                        >
                            View My Work
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                    <img
                        className="w-96 rounded-full"
                        src="https://github.com/FalakPatel213.png"
                        alt="Falak Patel"
                    />
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20">
                <img
                    className="sm:w-96 w-48 rounded-full"
                    src="https://github.com/FalakPatel213.png"
                    alt="Falak Patel"
                />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                ReactJS • JavaScript • Python • Java • C • SQL
            </h1>
        </div>
    );
}

export default Home;
