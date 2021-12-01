import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Navbar, PostListTable } from '../Components';
import { useDeletePost, useGetPostTable } from '../Hooks';

function Posts() {
    let curSlug = 'posts';
    const navigate = useNavigate();

    const authorData = useSelector((state) => state.admin.admins);

    const [postTable, setPostTable] = useState([]);
    const { errorGetPostTable, loadingGetPostTable, dataGetPostTable } = useGetPostTable();
    const { deletePost, loadingDeletePost } = useDeletePost();

    useEffect(() => {
        if (dataGetPostTable) {
            setPostTable(dataGetPostTable.post);
        }
    },[dataGetPostTable])

    const hapusPost = (idDel) => {
        deletePost({variables: {
            id: idDel
        }})
    }

    return (
        <>
            {authorData.name && authorData.password ? 
                <>
                <Navbar curSlug={curSlug} />
                <div className="container mx-auto px-10">
                    <h3 className="text-grey-dark text-lg">Blog Posts</h3>
                    <h1 className="text-grey text-2xl font-semibold mb-8">Details</h1>
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
                                <PostListTable post={postTable} hapusPost={hapusPost} />
                            </div>
                        </div>
                    </div>
                </div>
                </>
            : navigate("/admin")}
        </>
    )
}

export default Posts
