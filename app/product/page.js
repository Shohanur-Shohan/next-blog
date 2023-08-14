'use client'
import Menu from '@/Components/Menu';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Page = ({searchParams}) => {

    const params = useSearchParams();

    return (
        <div>
            <Menu/>
            <h3>This is product page</h3>
            <h3>{searchParams.name}</h3>
            <h3>{searchParams.price}</h3>
            <h3>{params.get('name')}</h3>

        </div>
    );
};

export default Page;