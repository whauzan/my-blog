import React from 'react'

function PostCardSkeleton() {
    return (
        <>
        <div className="bg-blue-light shadow-2xl rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <div className="object-top bg-blue-white animate-pulse absolute h-72 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"></div>
            </div>
            <div className="px-16 lg:px-36 md:px-30">
                <div className="bg-blue-white animate-pulse h-10 mb-8 rounded-lg"></div>
            </div>
            <div className="block lg:flex items-center justify-center mb-8 w-full">
                <div className="bg-blue-white m-auto animate-pulse rounded-lg h-10 w-24 flex items-center justify-center mb-4 md:w-24 lg:mb-0 lg:w-36 lg:-mr-32"></div>
                <div className="bg-blue-white m-auto animate-pulse rounded-lg h-10 w-36 flex items-center justify-center mb-4 md:w-24 lg:mb-0 lg:w-36"></div>
            </div>
            <div className="px-16 lg:px-36 md:px-30">
                <div className="bg-blue-white animate-pulse mb-8 h-10 rounded-lg"></div>
            </div>
            <div className="px-16 lg:px-80 md:px-30">
                <div className="bg-blue-white animate-pulse h-10 rounded-lg"></div>
            </div>
        </div>
        </>
    )
}

export default PostCardSkeleton
