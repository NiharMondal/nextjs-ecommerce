"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";

const category = ["mens", "womens", "electronics", "juwellery"];

export default function SearchBar() {
	const [category, setCategory] = useState("all");

	
	const searchParams = useSearchParams();
	const search = searchParams.get("category");

	const path = usePathname();

	return (
		<section>
			{search}
			<aside>
				<ul>
					<li>electronics</li>
					<li>mens fasion</li>
					<li>woman's fasion</li>
				</ul>
			</aside>
		</section>
	);
}
