import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
	About,
	HomeLayout,
	Landing,
	Error,
	Newsletter,
	Coctail,
} from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: 'coctail',
				element: <Coctail />,
			},
			{
				path: 'newsletter',
				element: <Newsletter />,
			},
			{
				path: 'about',
				element: <About />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
