import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FeaturedPostCard } from '../Components';
import { useGetFeaturedPost } from '../Hooks';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};  

function FeaturedPosts() {
    const { errorGetFeaturedPost, loadingGetFeaturedPost, dataGetFeaturedPost } = useGetFeaturedPost();
    const [featuredPost, setFeaturedPost] = useState([]);

    useEffect(() => {
        if (dataGetFeaturedPost) {
            setFeaturedPost(dataGetFeaturedPost.post);
        }
    }, [dataGetFeaturedPost])


    const customLeftArrow = (
        <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-blue-light rounded-full shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-green w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </div>
    );
    
      const customRightArrow = (
        <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-blue-light rounded-full shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-green w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
    );

    return (
        <div className="mb-8">
            <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-4">
                {featuredPost?.map((post, index) => (
                    <FeaturedPostCard key={index} post={post} />
                ))}
            </Carousel>
        </div>
    )
}

export default FeaturedPosts
