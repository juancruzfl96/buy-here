import React from 'react';
import Categories from './Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CartWidget';

import './index.css';

const Navbar = () => {
	return (
		<div className='header'>
			<div className='leftSection'>
				<a href='/' className='home'>
					<h2>Home JCStrore</h2>
				</a>
				<Categories />
				<label className='search'>
					<FontAwesomeIcon icon={faSearch} className='iconSearch' />
					<input placeholder='Search'></input>
				</label>
			</div>
			<div className='rightSection'>
				<CartWidget />
				<button className='user'>
					Login <FontAwesomeIcon icon={faUser} />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
