import OfferDetailsWrapper from "@/components/product/product-offer-details/OfferDetailsWrapper";

import { config } from "@/config";

import { THotOfferResponse, TServerResponse } from "@/types";
export const metadata = {
	title: "Special Offers | Gadget Galaxy",
	description:
		"Explore the latest discounts and special offers on electronics, gadgets, and accessories at Gadget Galaxy. Limited-time deals available now.",
};

const productDetails = async (
	id: string
): Promise<TServerResponse<THotOfferResponse>> => {
	const res = await fetch(`${config.backend_url}/hot-offer/${id}`, {
		method: "GET",
		cache: "no-cache",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	return data;
};
export default async function ProductDetails({
	params: { id },
}: {
	params: { id: string };
}) {
	const { result: product } = await productDetails(id);
	return (
		<>
			<OfferDetailsWrapper product={product} />

			<div className="max-w-7xl mx-auto py-10">
				<div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-5">
					<div className=" space-y-5">
						<div className=" bg-white rounded-md p-5 space-y-3">
							<h4>Specification</h4>
							<table className="w-full text-left text-gray-600">
								<tr>
									<td className="py-2 font-medium ">
										Processor Brand
									</td>
									<td className="capitalize">
										{product?.product?.brand}
									</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										Processor Modle
									</td>
									<td>{product?.product?.processor_model}</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										Display Size
									</td>
									<td>{product?.product?.display_size}"</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										Display Type
									</td>
									<td>{product?.product?.display_type}</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										Display Resulation
									</td>
									<td>{product?.product?.display}</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">RAM</td>
									<td>{product?.product?.ram}</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										RAM Type
									</td>
									<td>{product?.product?.ram_type}</td>
								</tr>
								<tr>
									<td className="py-2 font-medium ">
										Storage Capacity
									</td>
									<td>
										{product?.product?.ssd} SSD &amp;{" "}
										{product?.product?.hdd} HHD{" "}
									</td>
								</tr>
							</table>
						</div>

						{/* <Reviews reviews={product?.product?.reviews}/> */}
					</div>
					<div className=" bg-white rounded-md p-5 space-y-3">
						<h3>Description</h3>

						<h3>
							{product?.product?.name}{" "}
							{product?.product?.processor_model}{" "}
							{product?.product?.generation}{" "}
							{product?.product?.display}
						</h3>

						<p>{product?.product?.description}</p>
					</div>
				</div>
			</div>
		</>
	);
}
