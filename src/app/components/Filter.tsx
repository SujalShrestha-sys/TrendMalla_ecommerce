"use client"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React from 'react'

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleFilter = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }
    return (
        <div className='flex gap-2 items-center justify-end text-sm text-gray-500 my-6'>
            <span>Sort by: </span>
            <select name="sort" id="sort" className='ring-1 shadow-md rounded-sm ring-gray-200 p-1' onChange={(e) => {
                handleFilter(e.target.value)
            }}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
        </div>
    )
}

export default Filter
