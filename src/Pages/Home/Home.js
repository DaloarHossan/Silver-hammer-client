import React from 'react';
import Banner from '../../component/HomeComponent/Banner';
import Help from '../../component/HomeComponent/Help';
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
			<Help></Help>
			<Footer></Footer>
		</div>
	);
};

export default Home;