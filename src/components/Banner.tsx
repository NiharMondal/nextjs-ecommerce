import React from 'react'

export default function Banner() {
  return (
		<div className="banner">
			<div className=" h-full grid gird-cols-1 lg:grid-cols-2 content-center">
				<div></div>
				<div className="pl-4 lg:px-4 font-bold text-gray-700">
					<h1 className="text-5xl  ">
						Discount 20% For All Orders Over $2000
					</h1>
					<p className="">Use coupon code DISCOUNT20 </p>
				</div>
			</div>
		</div>
  );
}
