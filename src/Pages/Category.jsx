import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Header, PostCard, Categories } from '../Components'
import useGetPostCategory from '../Hooks/useGetPostCategory';

function Category() {
    let { slug } = useParams();
    const [data, setData] = useState([]);
    const { errorGetPostCategory, loadingGetPostCategory, dataGetPostCategory } = useGetPostCategory(slug);

    useEffect(() => {
        if (dataGetPostCategory) {
            setData(dataGetPostCategory.post);
        }
    }, [dataGetPostCategory])

    return (
        <>
        <Header />
        <div className="container mx-auto px-10 mb-8 relative top-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    {data?.map((item) => (
                        <PostCard post={item} key={item.title} />
                    ))}
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relative top-32">
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Category