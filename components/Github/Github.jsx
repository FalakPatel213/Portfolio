import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const { profile, repositories } = useLoaderData();

    return (
        <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-10 overflow-hidden">
            <section className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-5 sm:gap-6">
                    <img
                        src={profile.avatar_url}
                        alt="Falak Patel"
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-gray-200 object-cover shrink-0"
                    />

                    <div className="flex-1 min-w-0 w-full">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 break-words">Falak Patel</h1>
                        <p className="mt-1 text-gray-500 break-words">@{profile.login}</p>
                        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-6 break-words">
                            {profile.bio || 'Computer Science student and software development enthusiast.'}
                        </p>

                        <div className="mt-4 flex justify-center sm:justify-start gap-6 sm:gap-8">
                            <div>
                                <p className="text-lg sm:text-xl font-bold text-gray-900">{profile.followers}</p>
                                <p className="text-xs sm:text-sm text-gray-500">Followers</p>
                            </div>
                            <div>
                                <p className="text-lg sm:text-xl font-bold text-gray-900">{profile.following}</p>
                                <p className="text-xs sm:text-sm text-gray-500">Following</p>
                            </div>
                        </div>

                        <a
                            href={profile.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mt-5 text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Visit GitHub Profile
                        </a>
                    </div>
                </div>
            </section>

            <section className="mt-8 sm:mt-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">My Repositories</h2>
                    <span className="text-sm text-gray-500">{repositories.length} repositories</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {repositories.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white border border-gray-200 rounded-lg p-4 sm:p-5 hover:shadow-md hover:border-orange-300 transition duration-200 min-w-0"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words min-w-0">
                                    {repo.name}
                                </h3>
                                <span className="shrink-0 text-xs border border-gray-300 rounded-full px-2 py-1 text-gray-500">
                                    {repo.private ? 'Private' : 'Public'}
                                </span>
                            </div>

                            <p className="mt-2 text-sm text-gray-600 min-h-[40px] leading-6 break-words">
                                {repo.description || 'No description available.'}
                            </p>

                            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                                {repo.language && <span>{repo.language}</span>}
                                <span>★ {repo.stargazers_count}</span>
                                <span>⑂ {repo.forks_count}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const [profileResponse, repositoriesResponse] = await Promise.all([
        fetch('https://api.github.com/users/FalakPatel213'),
        fetch('https://api.github.com/users/FalakPatel213/repos?per_page=100&sort=updated'),
    ]);

    if (!profileResponse.ok || !repositoriesResponse.ok) {
        throw new Response('Unable to load GitHub information', { status: 500 });
    }

    const [profile, repositories] = await Promise.all([
        profileResponse.json(),
        repositoriesResponse.json(),
    ]);

    return { profile, repositories };
};
