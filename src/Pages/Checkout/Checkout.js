import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
	const {id}=useParams();
	const [product,setProduct]=useState([]);
	useEffect(()=>{
		fetch(`http://localhost:5000/products/${id}`)
		.then(res=>res.json())
		.then(data=>setProduct(data))
	},[])
	console.log(product);
	
	return (
		<div>
			
		</div>
	);
};

export default Checkout;