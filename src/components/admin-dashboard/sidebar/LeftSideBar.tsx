import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "@/redux/hooks";
import { selectedUserToken } from "@/redux/slice/authSlice";
import { decodeToken } from "@/utils/decodeToken";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminRoutes, userRotues } from "@/utils/routes";

type FunctionReturn = {
	route: string;
	level: string;
};

export default function LeftSideBar({
	closeDrawer,
	open,
}: {
	closeDrawer: () => void;
	open: boolean;
}) {
	return (
		<aside className={`min-h-screen ${open ? "block z-50" : "hidden"}`}>
			<div
				className={`fixed top-0 left-0 lg:relative bg-white shadow-xl h-full w-[250px]`}
			>
				<LogoSection close={closeDrawer} />

				<ConditonalRoutes />
			</div>
		</aside>
	);
}

const LogoSection = ({ close }: { close: () => void }) => {
	return (
		<div className="h-[80px] border-b-2 border-accent">
			<div className="h-full flex items-center justify-between px-4">
				<div className="w-fit mx-auto">
					<Link href="/">
						<Image
							src="/img/logo.png"
							alt="LogoSection"
							height={100}
							width={100}
						/>
					</Link>
				</div>
				<div>
					<button onClick={close}>
						<ChevronLeftIcon width={20} />
					</button>
				</div>
			</div>
		</div>
	);
};

const ConditonalRoutes = () => {
	const pathname = usePathname();
	const token = useAppSelector(selectedUserToken);
	const user: any = decodeToken(token as string);

	const checkRole = (roleName: string): FunctionReturn[] => {
		let routesArr = [];
		if (roleName === "CUSTOMER") {
			routesArr = userRotues;
		} else {
			routesArr = adminRoutes;
		}
		return routesArr;
	};

	const result = checkRole(user?.role);

	return (
		<ul className="p-5">
			{result.map(({ level, route }) => (
				<Link href={route} key={level}>
					<li
						className={`px-4 py-3 font-medium rounded-tl rounded-bl tracking-wide duration-300 transition-all ease-in ${
							pathname === route
								? "bg-secondary/20 border-r-4 border-accent text-accent "
								: ""
						}`}
					>
						{level}
					</li>
				</Link>
			))}
		</ul>
	);
};
