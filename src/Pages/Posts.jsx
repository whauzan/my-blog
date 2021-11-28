import React from 'react'
import { Navbar } from '../Components';

function Posts() {
    let curSlug = 'posts';

    return (
        <>
            <Navbar curSlug={curSlug} />
            <div className="container mx-auto px-10">
                <h3 className="text-grey-dark text-lg">Blog Posts</h3>
                <h1 className="text-grey text-2xl font-semibold mb-8">Details</h1>
            </div>
        </>
    )
}

export default Posts
