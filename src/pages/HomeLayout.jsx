import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useNavigation } from 'react-router-dom';

const HomeLayout = () => {
	const navigation = useNavigation();
	console.log(navigation);
	const isPageLoading = navigation.state === 'loading';
	// const value = 'some value'
	return (
		<>
			<Navbar />
			<section className='page'>
				{/* {isPageLoading ? <div className='loading'></div> : <Outlet context={{value}}/>} */}
				{isPageLoading ? <div className='loading'></div> : <Outlet />}
			</section>
		</>
	);
};
export default HomeLayout;
