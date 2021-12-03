import { Link } from 'react-router-dom';
import './page404.css';

const Page404 = () => {
	return (
		<div className='errorContainer'>
			<div className='pageNotFound'>
				<h1>404 Oops!</h1>
				<h3>Page not found</h3>
			</div>
			<div className='solution'>
				<h1>We have a problem on this page.</h1>
				<h3>We are working on that.</h3>
				<Link to='/' className='homeBottom'>
					HOME
				</Link>
			</div>
		</div>
	);
};
export default Page404;
