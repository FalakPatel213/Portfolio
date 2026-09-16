import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const { profile, repositories } = useLoaderData();

    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-6">
                    <img
                        src={profile.avatar_url}
                        alt="Falak Patel"
                        className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover"
                    />

                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-900">Falak Patel</h1>
                        <p className="mt-1 text-gray-500">@{profile.login}</p>
                        <p className="mt-3 text-gray-600">
                            {profile.bio || 'Computer Science student and software development enthusiast.'}
                        </p>

                        <div className="mt-4 flex justify-center sm:justify-start gap-8">
                            <div>
                                <p className="text-xl font-bold text-gray-900">{profile.followers}</p>
                                <p className="text-sm text-gray-500">Followers</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold text-gray-900">{profile.following}</p>
                                <p className="text-sm text-gray-500">Following</p>
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
            </div>

            <div className="mt-10">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-2xl font-bold text-gray-900">My Repositories</h2>
                    <span className="text-sm text-gray-500">{repositories.length} repositories</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {repositories.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-orange-300 transition duration-200"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-lg font-semibold text-gray-900 break-words">
                                    {repo.name}
                                </h3>
                                <span className="shrink-0 text-xs border border-gray-300 rounded-full px-2 py-1 text-gray-500">
                                    {repo.private ? 'Private' : 'Public'}
                                </span>
                            </div>

                            <p className="mt-2 text-sm text-gray-600 min-h-[40px]">
                                {repo.description || 'No description available.'}
                            </p>

                            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                                {repo.language && <span>{repo.language}</span>}
                                <span>★ {repo.stargazers_count}</span>
                                <span>⑂ {repo.forks_count}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
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
