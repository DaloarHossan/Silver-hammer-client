import React from 'react';

const Blogs = () => {
	return (
		<div>
			 <h1 className='text-xl font -bold'>1. How will you improve the performance of a React Application?</h1>
			 <p>Answer:  Avoid over-rendering unnecessary features.Use dynamic import().Customize image use,Hooks use. </p>
			 <h1 className='text-xl font -bold'>2.What are the different ways to manage a state in a React application?
</h1>
  <p>Answer: Global state,sever state,local state,url state</p>

  <h1 className='text-xl font -bold'>3.What is a unit test? Why should write unit tests?
</h1>
<p>Answer: It is a method that instantiates a small part of our code and verifies its behavior independently from other parts of the project. It is use for tast className='text-xl font -bold'ing tools for developers automated test cases,the unite test frameworks or unite report the filed test cases.</p>
<h1 className='text-xl font -bold'>4.How does prototypical inheritance work?
</h1>
<p>Answer:Object can inherit from multiple prototypes.Objects can be created out of nothing or from another object.</p>
<h1 className='text-xl font -bold'>5.Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`
</h1>
<p>Answer :React, the state is immutable. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.</p>

 

		</div>
	);
};

export default Blogs;