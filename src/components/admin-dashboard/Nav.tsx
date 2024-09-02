import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import DashboardDropdown from "../shared/DashboardDropdown";
type Props = {
	openDrawer: () => void;
	open: boolean;
};
export default function Nav({ openDrawer, open }: Props) {
	return (
		<div className="h-[80px] flex items-center justify-between px-5 py-2 bg-white shadow-md ">
			<div>
				{!open && (
					<button onClick={openDrawer}>
						<ChevronRightIcon width={20} />
					</button>
				)}
			</div>
			<DashboardDropdown />
		</div>
	);
}
