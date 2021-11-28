import React, { useRef, useState } from 'react'
import useInsertComment from '../Hooks/useInsertComment';

function CommentForm({ slug }) {
    const initialError = {
        nameError : "",
        emailError : "",
        commentError : "",
    }

    const localData = {
        nama: localStorage.getItem("nama"),
        email: localStorage.getItem("email"),
        comment: "",
    }

    const initialData = {
        nama: "",
        email: "",
        comment: "",
    }

    const [error, setError] = useState(initialError);
    const [storeData, setStoreData] = useState(false);
    const [data, setData] = useState(localData ? localData : initialData);
    const { insertComment, loadingInsertComment } = useInsertComment();
    // console.log("cek",storeData);
    // const [showSuccesMessage, setShowSuccesMessage] = useState(false);
    
    // const commentElement = useRef();
    // const nameElement = useRef();
    // const emailElement = useRef();
    // const storeDataElement = useRef();

    // const comment = commentElement.current?.value;
    // const name = nameElement.current?.value;
    // const email = emailElement.current?.value;
    // const storeData = storeDataElement.current?.checked;

    const emailRegex = /\S+@\S+\.\S+/;
    // console.log(commentElement.current?.name);

    const tambahComment = (newComment) => {
        insertComment({variables: {
            comment: newComment.comment,
            email: newComment.email,
            name: newComment.nama,
            slug_post: newComment.slug,
        }})
    }

    const validateOnChange = (name, value) => {
        if (name === "email" && !emailRegex.test(value)) {
            setError({
                ...error,
                emailError: "Email is invalid",
            });
        } else if (emailRegex.test(value)) {
            setError({
                ...error,
                emailError: "",
            })
        }
    }

    const handleInput = (e) => {
        const nameTarget = e.target.name;
        const value = e.target.value;
        validateOnChange(nameTarget, value);
        setData({
            ...data,
            [nameTarget]: value,
        });
    };

    const handleStore = () => {
        setStoreData(!storeData);
    }

    const handleCommentSubmit = (e) => {
        if (data.nama !== "" && data.email !== "" && data.comment !== "") {
            const newData = {
                nama: data.nama,
                email: data.email,
                comment: data.comment,
                slug: slug,
            }

            tambahComment(newData);
        } else {
            e.preventDefault();
            alert("All fields is required");
        }

        if (storeData) {
            localStorage.setItem('nama', data.nama);
            localStorage.setItem('email', data.email);
        }
        console.log("sebelum", data);
        setData(initialData);
        console.log(data);
    }
    // console.log(data);
    // console.log(error);


    return (
        <div className="bg-blue-light shadow-2xl rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-grey">Leave a Reply</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea
                    onChange={handleInput}
                    className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-green bg-blue-white placeholder-black placeholder-opacity-50"
                    placeholder="Comment"
                    name="comment"
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    onChange={handleInput}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-green bg-blue-white placeholder-black placeholder-opacity-50"
                    placeholder="Name"
                    name="nama"
                    value={data?.nama}
                />
                {error.nameError ? <p className="text-xs text-red-500">{error.nameError}</p> : null}
                <input
                    type="text"
                    onChange={handleInput}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-green bg-blue-white placeholder-black placeholder-opacity-50"
                    placeholder="example@mail.com"
                    name="email"
                    value={data?.email}
                />
                {error.emailError ? <p className="text-xs text-red-500">{error.emailError}</p> : null}
            </div>
            {localData.nama || localData.email ? null : 
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                        <input type="checkbox" id="storeData" name="storeData" onClick={handleStore} />
                        <label className="text-grey cursor-pointer ml-2" htmlFor="storeData">Save my name and email in this browser for the next time I comment.</label>
                    </div>
                </div>
            }
            
            {/* {error && <p className="text-xs text-red-500">All fields are required</p>} */}
            <div className="mt-8">
                <button
                    type="button"
                    onClick={handleCommentSubmit}
                    className="inline-flex items-center px-7 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium font-serif border-green text-green bg-blue hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Post Comment
                </button>
                {/* {showSuccesMessage && <span className="text-xl float-right font-semiboldmt-3 text-grey">Comment Submitted for review</span>} */}
            </div>
        </div>
    )
}

export default CommentForm
