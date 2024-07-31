import React from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function ProductQuantityInput() {
	return (
		<div className="flex items-center gap-5">
			<div className="flex items-center ">
				<button className="p-2 border">
					<MinusIcon width={15} />
				</button>
				<div className="p-2 border">
					<MinusIcon width={15} />
				</div>
				<button className="p-2 border">
					<PlusIcon width={15} />
				</button>
			</div>

			<div>
				<button className="btn primary font-bold">Buy Now</button>
			</div>
		</div>
	);
}
