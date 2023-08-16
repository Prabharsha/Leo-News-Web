'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

function SearchBox() {
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const router = useRouter();

    //handle submit function
    const handleSearch =(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(searchKeyWord);

        if(!searchKeyWord) return;

        router.push(`/search?term=${searchKeyWord}`);

    }

    return (
        <form 
        onSubmit={handleSearch}
        className='max-w-6xl mx-auto flex justify-between items-center'>
            <input
                type="text"
                value={searchKeyWord}
                onChange={(e)=>setSearchKeyWord(e.target.value)}
                placeholder='Search for news'
                className='w-full h-14 rounded-sm placeholder-gray-600
         text-gray-700 outline-none flex-1 bg-transparent dark:text-orange-400'/>

            <button 
            type='submit'
            disabled={!searchKeyWord}
            className='text-orange-400 disabled:text-gray-500 rounded-sm bg-transparent py-1 px-2'
            >
                 Search </button>
        </form>
    )
}

export default SearchBox
