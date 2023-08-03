"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { increment, removeFromCart } from "@/redux/slice/cartSlice";
import Image from "next/image";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
export default function Cart() {
	const dispatch = useAppDispatch();
	const { cartItems, totalPrice } = useAppSelector((state) => state.cart);
	
	return (
		<section className="min-h-screen">
			<div className="">
				<table className="w-full h-auto">
					<thead className="text-left border-b-2 text-xl ">
						<tr>
							<th >Product</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					{cartItems.map((item) => (
						<tbody className="border-b-2 h-28">
							<tr className="w-full">
								<td className="w-1/2 md:w-2/3">
									<div className="flex">
										<div className=" w-[80px] h-[80px] mr-3 p-1">
											<Image
												src={item.image}
												width={300}
												height={200}
												alt="product image"
												className=" w-full h-full object-cover object-center"
											/>
										</div>
										<div className="">
											<h4>{item.title}</h4>
											<button className="leading-10">Remove</button>
										</div>
									</div>
								</td>

								<td>
									<div className="flex items-center">
										<MinusIcon className="h-8 w-8  bg-teal-400 p-1" />

										<div className="mx-2 md:mx-4">
											{item.cartQuantity}
										</div>
										<PlusIcon className="h-8 w-8  bg-teal-400 p-1" />
									</div>
								</td>

								<td>${item.price}</td>
							</tr>
						</tbody>
					))}
					<tfoot className="text-left ">
						<tr className="font-bold text-xl ">
							<td></td>
							<td className="pt-5">Subtotal:</td>
							<td className="pt-5">$180</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</section>
	);
}
