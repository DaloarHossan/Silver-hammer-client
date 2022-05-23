import React from 'react';
import Banner from '../../component/HomeComponent/Banner';
import Products from '../../component/HomeComponent/Products';
import Footer from '../../component/SharedComponent/Footer';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Products></Products>
			<Footer></Footer>
		</div>
	);
};

export default Home;