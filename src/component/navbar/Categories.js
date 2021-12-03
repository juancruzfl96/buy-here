import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './categories.css';

export default function Categories() {
	const { category } = useParams();
	const [modal, setModal] = useState(false);
	const [categoryItem, setCategoryItem] = useState();

	const toggleModal = () => {
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	const getProductsAxios = async () => {
		const getAxios = await axios.get('../data/db.json');
		const responseAxios = getAxios.data;
		setCategoryItem(responseAxios);
	};

	useEffect(() => {
		setTimeout(() => getProductsAxios(), 2000);
	}, []);

	console.log(category);

	return (
		<>
			<button onClick={toggleModal} className='btn-modal'>
				Categories
			</button>
			{modal && (
				<div className='modal'>
					<div onClick={toggleModal} className='overlay'></div>
					<div className='modal-content'>
						<h2>Categories</h2>
						<li className='category' onClick={toggleModal}>
							<Link className='catLink' to={`category/${category}`}>
								<h3 className='categoryLink'>Iphone</h3>
							</Link>
							<Link className='catLink' to={`category/${category}`}>
								<h3 className='categoryLink'>Samgung</h3>
							</Link>
							<Link className='catLink' to={`category/${category}`}>
								<h3 className='categoryLink'>Motorola</h3>
							</Link>
							<Link className='catLink' to={`category/${category}`}>
								<h3 className='categoryLink'>Xiaomi</h3>
							</Link>
							<Link className='catLink' to={`category/${category}`}>
								<h3 className='categoryLink'>Otros</h3>
							</Link>
						</li>
						<button className='close-modal' onClick={toggleModal}>
							X
						</button>
					</div>
				</div>
			)}
		</>
	);
}
