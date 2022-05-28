import React from 'react';

const Summary = () => {
	return (
		<div className='mb-12'>
      <div className='text-center mb-8'>
      <h1 className='text-5xl uppercase font-bold text-secondary'>Business Stats Overview</h1>
      <h4 className='text-2xl font-bold text-slate-800'>Try to Understand users Expectation</h4>
      </div>
      <div className='flex justify-center items-center'>
			<div class="stats shadow">
  
  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title">Reviews</div>
    <div class="stat-value text-primary">1.5k</div>
  </div>
  <div class="stat">
    <div class="stat-figure text-primary">
    </div>
    <div class="stat-title">Country</div>
    <div class="stat-value text-primary">75</div>
  </div>
  
  <div class="stat mx-4">
    <div class="stat-title">Active Client</div>
    <div class="stat-value text-secondary">253+</div>
  </div>
  <div class="stat">
    <div class="stat-figure text-secondary">
    </div>
    <div class="stat-title">Buyer</div>
    <div class="stat-value text-secondary">365+</div>
  </div>
  
  
</div>
		</div>
    </div>
	);
};

export default Summary;