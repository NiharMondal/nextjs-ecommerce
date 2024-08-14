
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type QueryType = {
	name:string;
	value:string;
}
type AccordionProps = {
	label:string;
	data: QueryType[];
	query: string[];
	setQuery: React.Dispatch<React.SetStateAction<string[]>>;
};
export default function Accordion({query, setQuery, label, data}: AccordionProps) {
    
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = e.target;
		if (checked) {
			setQuery([...query, value]);
		} else {
			setQuery(query.filter((item) => item !== value));
		}
	};
	return (
		<Disclosure as="div" className="bg-white p-4" defaultOpen={true}>
			<DisclosureButton className="group flex w-full items-center justify-between">
				<h3>{label}</h3>
				<ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
			</DisclosureButton>
			<DisclosurePanel className="border-t-2 mt-2 py-2 text-wrap">
				<div className="space-y-2 max-h-[300px] overflow-y-auto filter-scrollbar">
					{data.map((brand) => (
						<div
							className="flex items-center gap-x-3"
							key={brand.value}
						>
							<input
                                onChange={handleChange}
								type="checkbox"
								name="brand"
								id="brand"
								value={brand.value}
							/>
							<label htmlFor="brand">{brand.name}</label>
						</div>
					))}
				</div>
			</DisclosurePanel>
		</Disclosure>

        
	);
}
