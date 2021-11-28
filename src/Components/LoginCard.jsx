import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

function LoginCard() {
    return (
    <>
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-light rounded-lg shadow-2xl p-12">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-grey">Sign in as Admin</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Username"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                            Password
                            </label>
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            />
                        </div>
                    </div>
                    <div>
                        <Link to={`/admin/dashboard`}>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-green text-sm font-medium rounded-md text-green font-serif bg-blue hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockIcon className="h-5 w-5 text-green group-hover:text-green-light" aria-hidden="true" />
                                </span>
                                Sign in
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}

export default LoginCard
