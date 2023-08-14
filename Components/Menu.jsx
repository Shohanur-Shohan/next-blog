'use client'
import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const Menu = () => {
    const currentPath = usePathname();

    return (
        <div>
            <h2>{currentPath}</h2>

            <Link href={'/'} className={ currentPath==='/' ? 'activeLink' : 'notActiveLink' }>Home</Link>
            <Link href={'/about'} className={ currentPath==='/about' ? 'activeLink' : 'notActiveLink' }>About</Link>
            <Link href={{pathname:'/product', query:{name:'iphone', price:'2000'}}} className={ currentPath==='/product' ? 'activeLink' : 'notActiveLink' }>Product</Link>
            <Link href={'/shop'} className={ currentPath==='/shop' ? 'activeLink' : 'notActiveLink' }>Shop</Link>
            
        </div>
    );
};

export default Menu;