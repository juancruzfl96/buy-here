import React, { useState } from 'react';
import './categories.css';

export default function Categories() {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

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
						<ul>
							<li>
								<a href='/categories'>Sin alcohol</a>
							</li>
							<li>
								<a href='/categories'>Whisky</a>
							</li>
							<li>
								<a href='/categories'>Vodka</a>
							</li>
							<li>
								<a href='/categories'>Fernet</a>
							</li>
							<li>
								<a href='/categories'>Cerveza</a>
							</li>
							<li>
								<a href='/categories'>Vinos</a>
							</li>
							<li>
								<a href='/categories'>Otros</a>
							</li>
						</ul>
						<button className='close-modal' onClick={toggleModal}>
							X
						</button>
					</div>
				</div>
			)}
		</>
	);
}
