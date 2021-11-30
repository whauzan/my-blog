import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { CommentList, Navbar } from '../Components';
import { useSubsComment } from '../Hooks';

function CommentDetail() {
    const navigate = useNavigate();

    const authorData = {
        name: localStorage.getItem("name"),
        password: localStorage.getItem("password"),
    }

    const { errorSubsComment, loadingSubsComment, dataSubsComment } = useSubsComment();
    const [comment, setComment] = useState();

    useEffect(() => {
        if (dataSubsComment) {
            setComment(dataSubsComment.comment);
        }
    }, [dataSubsComment])

    return (
        <>
            {authorData.name && authorData.password ? 
                <>
                <Navbar />
                <div className="container mx-auto px-10">
                    <h3 className="text-grey-dark text-lg">Blog Posts</h3>
                    <h1 className="text-grey text-2xl font-semibold mb-8">Comments</h1>
                    <div className="bg-blue-light shadow-2xl rounded-lg p-8 pb-12 mb-8">
                        {comment?.map((item, index) => (
                            <CommentList key={index} item={item} />
                        ))}
                    </div>
                </div>
                </>
            : navigate("/admin")}
        </>
    )
}

export default CommentDetail
