import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.config";
import Loading from "../SharedComponent/Loading";
const OrderList = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const { data: orderList, isLoading,refetch } = useQuery("orderList", () =>
    fetch(`http://localhost:5000/orders/${email}`,{
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
    }).then((res) => {
      const result = res.json();
      return result;
    })
  );

  if (isLoading) {
    <Loading></Loading>;
  }
  const orderDelete=(id)=>{
	swal({
		title: "Are you sure?",
		
		icon: "warning",
		buttons: true,
		dangerMode: true,
	  })
	  .then((willDelete) => {
		if (willDelete) {
		  fetch(`http://localhost:5000/orders/${id}`,{
			  method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
		  },
      )
		  .then(res=>res.json())
		  swal("Your order has been deleted!", {
			icon: "success",
		  });
		 
		  refetch()
		} else {
		  swal("Your order is safe!");
		}
	  });
   
   
  }

  return (
    <div>
      <h1>My Order </h1>

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Product Image
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderList?.map((order, index) => (
                      
                      <tr class="border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index+1}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div class="avatar">
                            <div class="w-20 rounded">
                              <img
                                src={order.productImg}
                                alt="order-img"
                              />
                            </div>
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <h3>{order.productName}</h3>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         <h3>{order.price}</h3>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         <h3>{order.quantity}</h3>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         <p><Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-xs btn-success" >Pay</button></Link></p>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
						<button onClick={()=>orderDelete(order._id)} class="btn btn-xs bg-red-600">Cancel</button>
                        </td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
