import React from 'react'

function AdjacentPostSkeleton() {
    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8">
            <div className="bg-blue-white animate-pulse h-72 col-span-1 lg:col-span-4 rounded-lg relative">
                <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                    <div className="bg-blue animate-pulse h-6 w-36 rounded-lg"></div>
                    <div className="bg-blue animate-pulse h-6 w-48 mt-2 rounded-lg"></div>
                </div>
                <div className="bg-blue animate-pulse h-14 w-14 absolute left-4 bottom-4 rounded-full"></div>
            </div>
            <div className="bg-blue-white animate-pulse h-72 col-span-1 lg:col-span-4 rounded-lg relative">
                <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                    <div className="bg-blue animate-pulse h-6 w-36 rounded-lg"></div>
                    <div className="bg-blue animate-pulse h-6 w-48 mt-2 rounded-lg"></div>
                </div>
                <div className="bg-blue animate-pulse h-14 w-14 absolute right-4 bottom-4 rounded-full"></div>
            </div>
        </div>
        </>
    )
}

export default AdjacentPostSkeleton
