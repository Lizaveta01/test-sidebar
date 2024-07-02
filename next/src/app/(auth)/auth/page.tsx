"use client"; 
import { AuthService } from '@/services';
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

// export const metadata: Metadata = {
// 	title: 'Авторизация',
// };

const Auth = () => {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		AuthService.login({email, password}).then(() => router.push('/products'));
	}

	return (
		<div>
			<div className='flex justify-center items-center min-h-screen bg-slate-100 text-zinc-900'>
				<div className='absolute inset-0 flex flex-col'>
					<div className='h-2/5 bg-slate-800' />
				</div>
				<div className='relative flex justify-center items-center min-h-screen'>
					<form onSubmit={handleLogin} className='bg-slate-200 px-8 py-7 rounded-[10px] shadow-md w-[360px] flex flex-col gap-10'>
						<h2 className='text-center'>Авторизация</h2>
						<div className='flex flex-col gap-9 pt-8 pb-[10px]'>
							<div className='flex flex-col gap-1'>
								<h6>Почта</h6>
								<input
								     type='email'
										 value={email}
										 onChange={(e) => setEmail(e.target.value)}
									placeholder='Почта'
									className='p-text bg-[#C9CFD8] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#C9CFD8] focus:bg-transparent outline-none'
								/>
							</div>
							<div className='flex flex-col gap-1'>
								<h6>Пароль</h6>
								<input
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
									placeholder='Пароль'
									className='p-text bg-[#C9CFD8] placeholder:text-[#888F99] pl-[10px] py-[6px] block w-full rounded-md border focus:border-[#C9CFD8] focus:bg-transparent outline-none'
								/>
							</div>
						</div>
						<div className='block mx-auto'>
							<button  
							type='submit'
							className='px-6 py-2 rounded-md font-medium text-base transition duration-200 bg-slate-300 hover:bg-slate-400'>
								Войти
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Auth;
