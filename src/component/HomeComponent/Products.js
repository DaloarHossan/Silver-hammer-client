import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
	const [products,setProducts]=useState([]);
	useEffect(()=>{
		fetch('products.json')
		.then(res=>res.json())
		.then(data=>setProducts(data))
	},[])
	// console.log(products);
	
	return (
		<div className='grid md:grid-cols-3 gap-5 md:mx-12'>
			{
				products.map(product=><Product key={product._id} product={product}></Product>)
			}
		</div>
	);
};

export default Products;