import React from 'react'
import { Navbar } from '../Components';

function Dashboard() {
    let curSlug = 'dashboard';

    return (
        <>
            <Navbar curSlug={curSlug} />
            <div className="container mx-auto px-10">
                <h3 className="text-grey-dark text-lg">Blog Posts</h3>
                <h1 className="text-grey text-2xl font-semibold mb-8">Overview</h1>
            </div>
        </>
    )
}

export default Dashboard
