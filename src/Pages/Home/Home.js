import React from 'react';
import Banner from '../../component/HomeComponent/Banner';
import OnlineReview from '../../component/HomeComponent/OnlineReview';
import Products from '../../component/HomeComponent/Products';
import Summary from '../../component/HomeComponent/Summary';
import Footer from '../../component/SharedComponent/Footer';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Products></Products>
			<OnlineReview></OnlineReview>
			<Summary></Summary>
			<Footer></Footer>
		</div>
	);
};

export default Home;