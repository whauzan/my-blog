import React, { useEffect, useState } from 'react'
import { PostCard, Categories, PostWidget, Header } from '../Components';
import { useGetPost } from '../Hooks';
import FeaturedPosts from '../Section/FeaturedPosts';

function Home() {
    const [data, setData] = useState([]);
    const { dataGetPost, loadingGetPost, errorLoadingPost } = useGetPost();

    useEffect(() => {
        if (dataGetPost) {
            setData(dataGetPost.post);
        }
    }, [dataGetPost])

    // console.log(data);

    return (
        <>
        <Header />
        <div className="container mx-auto px-10 mb-8">
            <FeaturedPosts />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    {data?.map((item) => (
                        <PostCard post={item} key={item.title} />
                    ))}
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky top-32">
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
