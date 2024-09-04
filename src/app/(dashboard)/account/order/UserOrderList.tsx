"use client";
import { useSingleUserOrderQuery } from "@/redux/api/orderApi";
import { useAppSelector } from "@/redux/hooks";
import { selectedUser } from "@/redux/slice/authSlice";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type Products = {
	id: string;
	productId: string;
	name: string;
	price: number;
	quantity: number;
	orderId: string;
};
type TOrderRes = {
	id: string;
	totalPrice: number;
	createdAt: string;
	products: Products[];
};

export default function UserOrderList() {
	const user = useAppSelector(selectedUser);
	const { data: orders } = useSingleUserOrderQuery(user!.id);

	return (
		<div className="">
			{!orders?.result?.orders?.length && (
				<p className="border-l-2 border-secondary bg-secondary/10 p-2">
					You haven't placed any order so far!
				</p>
			)}
			{orders?.result?.orders?.map((order: TOrderRes) => (
				<div>
					<Disclosure
						key={order?.id}
						as="div"
						className="bg-white p-5 rounded-md mb-5"
						defaultOpen={false}
					>
						<DisclosureButton className="group flex w-full items-center justify-between ">
							<div>
								<p>OrderId</p>
								<span className="bg-secondary text-color px-2 rounded-sm">
									# {order?.id}
								</span>
							</div>
							<div className="font-semibold">
								<p>Sub Total</p>
								<p>${order?.totalPrice}</p>
							</div>
							<div className="hidden md:block">
								<p>Date</p>
								<p>{order?.createdAt?.split("T")[0]}</p>
							</div>

							<div>
								<ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
							</div>
						</DisclosureButton>
						<DisclosurePanel className="pt-5">
							<table className="w-full text-left">
								<thead className="border-t">
									<th className="py-3">Product Name</th>
									<th>Quantity</th>
									<th>Unit Price</th>
									<th>Total Price</th>
								</thead>
								<tbody>
									{order?.products?.map((pd) => (
										<tr key={pd?.id} className="border-t">
											<td className="py-3 text-xs md:text-base">
												{pd?.name}
											</td>
											<td>{pd?.quantity}</td>
											<td>{pd?.price}</td>
											<td>{pd?.price * pd.quantity}</td>
										</tr>
									))}
								</tbody>
							</table>
						</DisclosurePanel>
					</Disclosure>
				</div>
			))}
		</div>
	);
}
