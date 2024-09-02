import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type QueryType = {
	name: string;
	value: string;
};
type FieldFilteringProps = {
	label: string;
	data: QueryType[];
	query: string[];
	setQuery: React.Dispatch<React.SetStateAction<string[]>>;
};
export default function FieldFiltering({
	query,
	setQuery,
	label,
	data,
}: FieldFilteringProps) {
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
				<h4>{label}</h4>
				<ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
			</DisclosureButton>
			<DisclosurePanel className="border-t-2 mt-2 py-2 text-wrap">
				<div className="max-h-[300px] pr-5 overflow-y-auto filter-scrollbar">
					{data.map((item) => (
						<div
							className="py-1 px-4 flex items-center gap-x-3 w-full hover:bg-primary/5 duration-100"
							key={item.value}
						>
							<input
								onChange={handleChange}
								type="checkbox"
								name={item.name}
								id={item.value}
								value={item.value}
							/>
							<label htmlFor={item.value} className="w-full inline-block h-full cursor-pointer">{item.name}</label>
						</div>
					))}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
}
