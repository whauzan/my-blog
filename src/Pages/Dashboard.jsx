import React, { useEffect, useState } from 'react'
import { CommentList, Navbar } from '../Components';
import { useNavigate } from 'react-router';
import { useSubsComment, useSubsCommentEmail } from '../Hooks';
import { Link } from 'react-router-dom';

function Dashboard() {
    let curSlug = 'dashboard';
    const navigate = useNavigate();

    const authorData = {
        name: localStorage.getItem("name"),
        password: localStorage.getItem("password"),
    }

    const { errorSubsComment, loadingSubsComment, dataSubsComment } = useSubsComment();
    const [comment, setComment] = useState();
    const { errorSubsCommentEmail, loadingSubsCommentEmail, dataSubsCommentEmail } = useSubsCommentEmail();
    const [email, setEmail] = useState();

    useEffect(() => {
        if (dataSubsComment) {
            setComment(dataSubsComment.comment);
        }
        if (dataSubsCommentEmail) {
            setEmail(dataSubsCommentEmail.comment);
        }
    }, [dataSubsComment, dataSubsCommentEmail])
    console.log(email);

    const deleteDuplicate = (email) => {
        let unique = [];
        email?.forEach((item) => {
            if (!unique.includes(item.email)) {
                unique.push(item.email)
            }
        })
        return unique.length;
    }
    console.log(deleteDuplicate(email));

    return (
        <>
            {authorData.name && authorData.password ? 
                <>
                <Navbar curSlug={curSlug} />
                <div className="container mx-auto px-10">
                    <h3 className="text-grey-dark text-lg">Blog Posts</h3>
                    <h1 className="text-grey text-2xl font-semibold mb-8">Overview</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-5 col-span-1">
                            <div className="lg:sticky top-32">
                                <div className="bg-blue-light shadow-2xl rounded-lg p-8 pb-12 mb-8">
                                    <h3 className="text-2xl text-center font-semibold pb-4 text-grey">Total Comments</h3>
                                    <h1 className="text-grey text-center font-bold text-3xl">{comment?.length}</h1>
                                </div>
                                <div className="bg-blue-light shadow-2xl rounded-lg p-8 pb-12 mb-8">
                                    <h3 className="text-2xl text-center font-semibold pb-4 text-grey">Visitors</h3>
                                    <h1 className="text-grey text-center font-bold text-3xl">{deleteDuplicate(email)}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7 col-span-1">
                            <div className="bg-blue-light shadow-2xl rounded-lg p-8 pb-12 mb-8">
                                <h3 className="text-2xl font-semibold border-b mb-8 pb-4 text-grey">Comments</h3>
                                {comment?.slice().splice(0,5).map((item, index) => (
                                    <CommentList key={index} item={item} />
                                ))}
                                <Link to={`/admin/dashboard/comments`}>
                                    <button
                                        type="button"
                                        className="inline-flex mt-6 px-7 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium font-serif border-green text-green bg-blue hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        View All Comments
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            : navigate("/admin")}
        </>
    )
}

export default Dashboard
