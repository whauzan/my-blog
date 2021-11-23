import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useGetCategories from '../Hooks/useGetCategories';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const { errorGetCategories, loadingGetCategories, dataGetCategories } = useGetCategories();

    // console.log(categories);
    useEffect(() => {
        if (dataGetCategories) {
            setCategories(dataGetCategories.category);
        }
    }, [dataGetCategories])

    return (
        <div className="bg-blue-light shadow-2xl rounded-lg p-8 mt-8">
            <h3 className="text-xl font-semibold text-grey mb-8 border-b pb-4">Categories</h3>
            {categories.map((category, index) => (
                <Link key={index} to={`/category/${category.slug}`}>
                    <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3 text-grey`}>{category.name}</span>
                </Link>
            ))}
        </div>
    )
}

export default Categories
