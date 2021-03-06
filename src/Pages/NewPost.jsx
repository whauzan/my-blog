import React, { useEffect, useState } from 'react'
import { app } from "../Firebase/firebase-config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { CategoriesDashboard, Navbar, NewPostCard } from '../Components';
import { useGetCategories, useGetLastPostID, useInsertCategory, useInsertPost, useInsertPostCategory } from '../Hooks';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import imageCompression from 'browser-image-compression';

function NewPost() {
    let curSlug = 'add-post';
    const navigate = useNavigate();
    const authorData = useSelector((state) => state.admin.admins);

    const initialData = {
        title: "",
        slug : "",
        excerpt : "",
        content : "",
        featured_image : "",
        featured_post : false,
        id_author : 1,
    }

    const [newPost, setNewPost] = useState(initialData);
    const [categories, setCategories] = useState([]);
    const [postCategories, setPostCategories] = useState([]);
    const [inputCategory, setInputCategory] = useState([]);
    const [featuredPost, setFeaturedPost] = useState(false);
    const [lastPostID, setLastPostID] = useState();

    const { errorGetCategories, loadingGetCategories, dataGetCategories } = useGetCategories();
    const { insertCategory, loadingInsertCategory } = useInsertCategory();
    const { insertPost, loadingInsertPost } = useInsertPost();
    const { dataLastPostID } = useGetLastPostID();
    const { insertPostCategory, loadingInsertPostCategory } = useInsertPostCategory();

    const compressionOption = {
		maxWidthOrHeight: 1080,
		useWebWorker: true,
	};

    const tambahCategory = (newCategory) => {
        insertCategory({variables: {
            name: newCategory.name,
            slug: newCategory.slug
        }})
    }

    const tambahPost = (newPostData) => {
        insertPost({variables: {
            title: newPostData.title,
            slug: newPostData.slug,
            excerpt: newPostData.excerpt,
            content: newPostData.content,
            featured_image: newPostData.featured_image,
            featured_post: newPostData.featured_post,
            id_author: newPostData.id_author,
        }})
    }

    const tambahPostCategory = (category, post) => {
        insertPostCategory({variables: {
            id_category: category,
            id_post: post,
        }})
    }

    useEffect(() => {
        if (dataGetCategories) {
            setCategories(dataGetCategories.category);
        }
        if (categories) {
            const initialPostCategories = categories.map(item => ({...item, checked: false}));
            setPostCategories(initialPostCategories);
        }
        if (dataLastPostID) {
            setLastPostID(dataLastPostID.post[0]);
        }
    }, [dataGetCategories, categories, dataLastPostID])

    const handleInput = (e) => {
        const nameTarget = e.target.name;
        const value = e.target.value;
        setNewPost({
            ...newPost,
            [nameTarget]: value,
            slug: value.toLowerCase().replace(' ', '-')
        });
    }

    const handleInputContent = (value) => {
        setNewPost({
            ...newPost,
            content : value
        });
    }

    const handleInputExcerpt = (value) => {
        setNewPost({
            ...newPost,
            excerpt : value
        });
    }

    const handleFile = (e) => {
        if (app) {
            const file = e.target.files[0];
            const storageRef = getStorage();
            const fileRef = ref(storageRef, file.name);
            imageCompression(file, compressionOption).then((compressedFile) => {
				uploadBytes(fileRef, compressedFile).then(() => {
					getDownloadURL(fileRef)
						.then((url) => {
                            console.log("ini link", url);
							setNewPost({
                                ...newPost,
                                featured_image : url
                            });
						}
                    )
                });
            });
        }
    }

    const handleChangeCategory = (e) => {
        const nameTarget = e.target.name;
        const value = e.target.value;
        setInputCategory({
            ...inputCategory,
            [nameTarget] : value
        })
    }

    const handleInsertCategory = () => {
        const newCategory = {
            name: inputCategory.name,
            slug: inputCategory.name.toLowerCase().replace(' ', '-'),
        }
        tambahCategory(newCategory);
        setInputCategory({
            name: ""
        });
    }

    const handleFeatured = () => {
        setFeaturedPost(!featuredPost);
        setNewPost({
            ...newPost,
            featured_post: !featuredPost
        })
    }

    const handlePostCategories = (id) => {
        setPostCategories((postCategories) => postCategories.map((item) => item.id === id ? { ...item, checked: !item.checked } : item));
    }

    const handleInsertPost = () => {
        tambahPost(newPost);
        setNewPost(initialData);
    }

    const handleInsertPostCategory = () => {
        // handleInsertPost();
        postCategories.map(item => (
            item.checked ? tambahPostCategory(item.id, lastPostID.id) : null
        ))
    }

    return (
        <>
            {authorData.name && authorData.password ? 
                <>
                <Navbar curSlug={curSlug} />
                <div className="container mx-auto px-10">
                    <h3 className="text-grey-dark text-lg">Blog Posts</h3>
                    <h1 className="text-grey text-2xl font-semibold mb-8">Add New Post</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 col-span-1">
                            <NewPostCard newPost={newPost} handleInput={handleInput} handleInputExcerpt={handleInputExcerpt} handleInputContent={handleInputContent} handleFile={handleFile} handleFeatured={handleFeatured} handleInsertPost={handleInsertPost} />
                        </div>
                        <div className="lg:col-span-4 col-span-1">
                            <CategoriesDashboard categories={categories} handlePostCategories={handlePostCategories} handleChangeCategory={handleChangeCategory} inputCategory={inputCategory} handleInsertCategory={handleInsertCategory} handleInsertPostCategory={handleInsertPostCategory} />
                        </div>
                    </div>
                </div>
                </>
            : navigate("/admin")}
        </>
    )
}

export default NewPost
