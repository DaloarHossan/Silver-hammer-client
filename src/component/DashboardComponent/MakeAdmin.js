import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../SharedComponent/Loading';

const MakeAdmin = () => {
	const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://silver-hammer643.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
	const makeAdmin = () => {
        fetch(`https://silver-hammer643.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                   
                    toast.success(`Successfully made an admin`);
					 refetch();
                }

            })
    }
	return (
		<div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users?.map(user=><div>
							<tr>
									<th>1</th>
									<td>{user.email}</td>
									<td>{user.role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
									<td><button class="btn btn-xs">Remove User</button></td>
								</tr>
								</div>)
                       }
                    </tbody>
                </table>
            </div>
	);
};

export default MakeAdmin;