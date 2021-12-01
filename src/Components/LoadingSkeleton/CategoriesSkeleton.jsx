import React from 'react'

function CategoriesSkeleton() {
    const array = [1,2,3];
    return (
        <>
        <div className="bg-blue-light shadow-2xl rounded-lg p-8 mb-8">
            <div className="bg-blue-white animate-pulse h-10 rounded-lg"></div>
            <div className="bg-grey h-px my-4"></div>
                {array.map((index) => (
                    <>
                    <div className="bg-blue-white animate-pulse h-8 rounded-lg"></div>
                    <div className="bg-grey h-px rounded-lg my-4"></div>
                    </>
                ))}
        </div>
        </>
    )
}

export default CategoriesSkeleton
