'use client';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { menuItems } from './Navbar';
import Link from 'next/link';
const MobileNav = () => {
	const [isCLicked, setClick] = useState(false);
	const toggleNavbar = (): void => {
		setClick(!isCLicked);
	};
	return (
		<div className='sm:hidden' onClick={toggleNavbar}>
			{isCLicked ? (
				<FiMenu className='text-2xl' />
			) : (
				<div className='absolute top-0 left-0 dark:text-white dark:bg-black bg-white text-black w-44 p-4 shadow-lg'>
					<IoMdClose className='text-2xl' />
					{menuItems.map((items) => (
						<ul className='m-2 '>
							<li>
								<Link className='capitalize ' href={items.link}>
									{items.items}
								</Link>
							</li>
						</ul>
					))}
				</div>
			)}
		</div>
	);
};

export default MobileNav;
