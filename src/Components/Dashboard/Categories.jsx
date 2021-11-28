import React from 'react'

function Categories({ categories, handlePostCategories, handleChangeCategory, inputCategory, handleInsertCategory }) {
    return (
        <div className="lg:sticky relative top-32">
            <div className="bg-blue-light shadow-2xl rounded-lg p-8 mb-8">
                <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-grey">Categories</h3>
                {categories?.map((item, index) => (
                    <div key={ index } className="mb-3">
                        <input type="checkbox" value={item.id} onClick={() => handlePostCategories(item.id)} />
                        <label className="text-grey cursor-pointer ml-2">{item.name}</label>
                    </div>
                ))}
                <div>
                    <input type="text" 
                        className="p-2 w-auto outline-none rounded-l-lg focus:ring-2 focus:ring-green bg-blue-white placeholder-black placeholder-opacity-50"
                        placeholder="New Category"
                        onChange={handleChangeCategory}
                        name="name"
                        value={inputCategory?.name}
                    />
                    <button
                        className="cursor-pointer h-10 rounded-r-lg text-grey font-serif border-l bg-blue-white p-2 border-green hover:bg-blue"
                        onClick={handleInsertCategory}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories
