import { useEffect, useState } from "react"

const useToken=(user)=>{
	const [token,setToken] = useState('');
	
	
    useEffect(()=>{
		const email=user?.user?.email;
		if(email){
			fetch(`http://localhost:5000/users/${email}`,{
				method: 'PUT',
				headers:{
					'content-type': 'application/json'
				},
			})
			.then(res=>res.json())
			.then(data=>{
				localStorage.setItem('accessToken',data.token);
				setToken(data.token)
			})
		}

	},[user]);
	return [token];
	
	
}

export default useToken;