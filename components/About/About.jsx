import React from 'react';

function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://github.com/FalakPatel213.png"
                            alt="Falak Patel"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About Me
                        </h2>
                        <p className="mt-6 text-gray-600">
                            I am Falak Patel, a Computer Science undergraduate pursuing a B.E. in
                            Computer Science & Engineering at Gujarat Technological University (GTU).
                            I have hands-on knowledge of ReactJS, JavaScript, HTML5, CSS3, Tailwind CSS,
                            Java, C, SQL, and Python.
                        </p>
                        <p className="mt-4 text-gray-600">
                            I enjoy developing responsive web applications and working on practical
                            software projects. My projects include a College Management System, a
                            Portfolio Website, an Encryption and Decryption System, and a Binary
                            Conversion System.
                        </p>
                        <p className="mt-4 text-gray-600">
                            I am currently looking for an entry-level software development opportunity
                            where I can apply my programming, web development, and problem-solving skills.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
