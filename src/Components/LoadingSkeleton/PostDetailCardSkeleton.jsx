import React from 'react'
import { Header } from '..'

function PostDetailCardSkeleton() {
    return (
        <>
        <div className="bg-blue-light shadow-2xl rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md mb-6">
                <div className="object-top bg-blue-white animate-pulse h-96 w-full shadow-lg rounded-lg"></div>
            </div>
            <div className="px-4 lg:px-8">
                <div className="flex items-center mb-8 w-full">
                    <div className="bg-blue-white animate-pulse rounded-lg h-10 w-24 flex items-center lg:mb-0 lg:w-36 mr-8"></div>
                    <div className="bg-blue-white animate-pulse rounded-lg h-10 w-36 flex items-center justify-center md:w-24 lg:mb-0 lg:w-36"></div>
                </div>
            </div>
            <div className="block ml-4 w-48 md:w-80 lg:w-96 lg:ml-0">
                <div className="bg-blue-white animate-pulse h-10 mb-8 rounded-lg"></div>
            </div>
            <div className="block px-4 w-full lg:px-0">
                <div className="bg-blue-white animate-pulse mb-8 h-16 rounded-lg"></div>
            </div>
        </div>
        </>
    )
}

export default PostDetailCardSkeleton
