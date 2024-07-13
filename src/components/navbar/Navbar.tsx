'use client';
import React from 'react';
import Link from 'next/link';

interface menuObject {
	items: string;
	link: string;
}

export const menuItems: menuObject[] = [
	{
		items: 'Courses',
		link: '/courses',
	},
	{
		items: 'books',
		link: '/books',
	},
	{
		items: 'resources',
		link: '/resources',
	},
	{
		items: 'projects',
		link: '/projects',
	},
	{
		items: 'dev tools',
		link: '/dev',
	},
	{
		items: 'people',
		link: '/people',
	},
	{
		items: 'events',
		link: '/events',
	},
];

const Navbar = () => {
	return (
		<div className=' hidden sm:block '>
			<ul className='flex space-x-4 capitalize '>
				{menuItems.map((items) => {
					return (
						<li className='cursor-pointer transition ease-in-out'>
							<Link href={items.link} className='hover:text-orange-500'>
								{items.items}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Navbar;
