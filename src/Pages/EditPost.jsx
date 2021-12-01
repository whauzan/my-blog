import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { EditCategories, EditPostCard, Navbar } from '../Components';
import { useGetCategories, useGetPostDetail } from '../Hooks';
import { app } from "../Firebase/firebase-config";
import { useSelector } from 'react-redux';

function EditPost() {
    let { slug } = useParams();
    const navigate = useNavigate();
    const authorData = useSelector((state) => state.admin.admins);

    const { errorGetPostDetail, loadingGetPostDetail, dataGetPostDetail } = useGetPostDetail(slug);
    const { errorGetCategories, loadingGetCategories, dataGetCategories } = useGetCategories();
    const [editPost, setEditPost] = useState([]);
    const [categories, setCategories] = useState([]);
    const [editCategory, setEditCategory] = useState([]);

    useEffect(() => {
        if (dataGetPostDetail) {
            setEditPost(dataGetPostDetail?.post[0]);
        }
        if (dataGetCategories) {
            setCategories(dataGetCategories.category);
        }
        // if (categories) {
        //     const initialPostCategories = categories.map(item => (editPost.category_posts.find(item.name) ? {...item, checked: true} : {...item, checked: false}));
        //     setEditCategory(initialPostCategories);
        // }
    }, [dataGetPostDetail, dataGetCategories])
    // console.log(editCategory);

    const handleChange = (e) => {
        const target = e.target.name;
        const value = e.target.value;
        setEditPost({
            ...editPost,
            [target]: value
        })
    }

    const handleInputContent = (getContents) => {
        // console.log(getContents);
        setEditPost({
            ...editPost,
            content : getContents || ""
        });
    }

    const handleInputExcerpt = (getContents) => {
        // console.log(getContents);
        setEditPost({
            ...editPost,
            excerpt : getContents || ""
        });
    }

    const handleFile = (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then((e) => {
            e.ref.getDownloadURL().then(function (downloadURL) {
                console.log("File available at", downloadURL);
                setEditPost({
                    ...editPost,
                    featured_image : downloadURL
                })
            });
        });
    }

    return (
        <>
        {authorData.name && authorData.password ? 
            <>
                <Navbar />
                <div className="container mx-auto px-10">
                    <h3 className="text-grey-dark text-lg">Blog Posts</h3>
                    <h1 className="text-grey text-2xl font-semibold mb-8">Edit </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 col-span-1">
                            <EditPostCard editPost={editPost} handleChange={handleChange} handleInputContent={handleInputContent} handleInputExcerpt={handleInputExcerpt} handleFile={handleFile} />
                        </div>
                        {/* <div className="lg:col-span-4 col-span-1">
                            <EditCategories categories={categories} handlePostCategories={handlePostCategories} handleChangeCategory={handleChangeCategory} inputCategory={inputCategory} handleInsertCategory={handleInsertCategory} />
                        </div> */}
                    </div>
                </div>
            </>
        : navigate("/admin")}
        </>
    )
}

export default EditPost
