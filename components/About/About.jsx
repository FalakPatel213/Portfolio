import React from 'react';

function About() {
    return (
        <main className="py-10 sm:py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 xl:px-6 text-gray-600">
                <div className="space-y-8 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-12">
                    <div className="w-full md:w-5/12 lg:w-5/12">
                        <img
                            src="https://github.com/FalakPatel213.png"
                            alt="Falak Patel"
                            className="rounded-lg w-full max-w-md mx-auto object-cover"
                        />
                    </div>

                    <div className="w-full md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-bold">
                            About Me
                        </h2>

                        <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-7 text-gray-600">
                            I am Falak Patel, a Computer Science undergraduate pursuing a B.E. in
                            Computer Science & Engineering at Gujarat Technological University (GTU).
                            I have hands-on knowledge of ReactJS, JavaScript, HTML5, CSS3, Tailwind CSS,
                            Java, C, SQL, and Python.
                        </p>

                        <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600">
                            I enjoy developing responsive web applications and working on practical
                            software projects. My projects include a College Management System, a
                            Portfolio Website, an Encryption and Decryption System, and a Binary
                            Conversion System.
                        </p>

                        <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600">
                            I am currently looking for an entry-level software development opportunity
                            where I can apply my programming, web development, and problem-solving skills.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
