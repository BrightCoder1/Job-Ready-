import React, { useState } from 'react'
import "./css/home.css"

const FirstPage = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchSubmit = async (e) => {
        e.preventDefault()

        console.log(searchTerm)

        setSearchTerm('')
    }

    return (
        <div className=' background '>
            <h1 className='background-h1'>Build Your <span style={{color:"#ff003f"}}>Future</span> with the <span>Right Job</span></h1>
            <form className='search' onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder='Search for jobs'
                    className='search-input'
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                />
                <button type='submit' className='search-button'>Search</button>
            </form>
            <p className='background-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ipsam natus veniam rem cum ullam similique et quod consequatur, nisi accusantium sapiente quaerat optio iure impedit animi, deserunt in fugiat!</p>
        </div>
    )
}

export default FirstPage
