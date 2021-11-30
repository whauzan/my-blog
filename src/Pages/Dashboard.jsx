import React from 'react'
import { Navbar } from '../Components';
import { useNavigate } from 'react-router';

function Dashboard() {
    let curSlug = 'dashboard';
    const navigate = useNavigate();

    const authorData = {
        name: localStorage.getItem("name"),
        password: localStorage.getItem("password"),
    }
    console.log(authorData);

    return (
        <>
            {authorData.name && authorData.password ? 
                <>
                <Navbar curSlug={curSlug} />
                <div className="container mx-auto px-10">
                    <h3 className="text-grey-dark text-lg">Blog Posts</h3>
                    <h1 className="text-grey text-2xl font-semibold mb-8">Overview</h1>
                </div>
                </>
            : navigate("/admin")}
        </>
    )
}

export default Dashboard
