import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="container mx-auto mb-8">
            <div className="w-full shadow-lg inline-block py-8">
                <div className="md:float-left block">
                    <Link to={`/`}>
                        <span className="cursor-pointer font-bold text-4xl px-8 text-grey font-serif">
                            Whauzan
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    <a href="https://wahyuhauzan.netlify.app/" target="_blank" rel="noreferrer">
                        <span className="md:float-right mt-2 align-middle px-8 text-grey font-serif ml-4">
                            About Author
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
