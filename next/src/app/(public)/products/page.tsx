"use client"; 
import { AuthService } from '@/services';
import { Metadata } from 'next';
import { FormEvent, useState } from 'react';

// export const metadata: Metadata = {
// 	title: 'Авторизация',
// };

export default function Products() {
	const [catalogView, setCatalogView] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	const [page, setPage] = useState('');


	return (
		<div>
			<div className='flex justify-center items-center min-h-screen bg-slate-100 text-zinc-900'>
				<div className='absolute inset-0 flex flex-col'>
				<h2 className='text-center'>PRODUCTS</h2>
				</div>
			</div>
		</div>
	);
}
