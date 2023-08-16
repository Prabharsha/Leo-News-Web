'use client'
import { catogories } from '@/constant';
import { usePathname } from "next/navigation";
import React from 'react';
import NavLink from './NavLink';

export default function NavLinks() {

    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname?.split('/').pop() === path;
    }

  return (
    <>
    <nav className='grid grid-col-4 md:grid-cols-7 text-xs md:text-sm
    gap-4 pb-10 max-w-6xl mx-auto border-b'>
    {catogories.map((catogory) => (
        <NavLink 
        key={catogory} 
        catogory={catogory} 
        isActive={isActive(catogory)} />
    ))}

    </nav>
    </>
  );
}
