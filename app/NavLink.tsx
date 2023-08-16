import Link from 'next/link';
import React from 'react';
type Props={
    catogory:string;
    isActive:boolean;
}

export default function NavLink({catogory,isActive}:Props) {
  return (
    <>
    <Link href={`/news/'${catogory}`} className={`navLink ${isActive && 
        'underline decoration-orange-400 underline-offset-4 font-bold text-lg'}`}>
        {catogory}
    </Link>
    </>
  );
}
