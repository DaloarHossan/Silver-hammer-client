import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminUp, setAdminUp] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`https://silver-hammer643.herokuapp.com/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
				console.log(data);
				
                setAdmin(data.admin);
                setAdminUp(false);
            })
        }
    }, [user])

    return [admin, adminUp]
}

export default useAdmin;