import React from "react";
import AddressForm from "./AddressForm";

export default function AddressPage() {
	return (
		<>
			<div className="p-5 rounded-sm bg-secondary/20 text-accent border-l-4 border-accent mb-5 w-fit">
				<p className="font-bold text-xl">Note</p>
				<p>Please update your address inforamtion for products delivery.</p>
			</div>
			<AddressForm />
		</>
	);
}
