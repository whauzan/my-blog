import React from 'react'

function PostWidget() {
    const array = [1,2,3];
    return (
        <>
        <div className="bg-blue-light shadow-2xl rounded-lg p-8 mb-8">
            <div className="bg-blue-white animate-pulse h-10 rounded-lg"></div>
            <div className="bg-grey h-px mt-4"></div>
                {array.map((index) => (
                    <div key={index} className="flex items-center w-full mb-1">
                        <div className="w-16 flex-none">
                            <div className="bg-blue-white animate-pulse align-middle rounded-full h-14 w-14 mt-4"></div>
                        </div>
                        <div className="flex-grow ml-4">
                            <div className="bg-blue-white animate-pulse rounded-md h-2 mt-4 mb-2"></div>
                            <div className="bg-blue-white animate-pulse rounded-md h-4"></div>
                        </div>
                    </div>
                ))}
        </div>
        </>
    )
}

export default PostWidget
