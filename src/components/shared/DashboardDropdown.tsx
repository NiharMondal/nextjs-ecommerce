"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
	logout,
	selectedUser,
} from "@/redux/slice/authSlice";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import headPng from "../../../public/img/head.png";
import { logoutAction } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { dropdownAdminRoutes, dropdwonUserRotues } from "@/utils/routes";


export default function DashboardDropdown() {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const user = useAppSelector(selectedUser);
	const handleLogout = () => {
		logoutAction();
		dispatch(logout());
		router.push("/");
	};

	return (
		<div className="overflow-hidden">
			<Menu>
				<MenuButton className="size-12 border rounded-full">
					<Image
						src={user?.avatar || headPng}
						height={20}
						width={20}
						className="w-full h-full rounded-full"
						alt="user-avatar"
					/>
				</MenuButton>

				<MenuItems
					transition
					anchor="bottom end"
					className="bg-white min-w-[300px] p-5 rounded-xl"
				>
					<RouteList role={user?.role || "CUSTOMER"} />
					<div className="mt-5">
						<button
							className="btn bg-accent hover:bg-accent/90 hover:shadow text-white w-full"
							onClick={handleLogout}
						>
							Logout
						</button>
					</div>
				</MenuItems>
			</Menu>
		</div>
	);
}

const RouteList = ({ role }: { role: string }) => {
	const checkRole = (roleName: string) => {
		let routesArr = [];

		if (roleName === "CUSTOMER") {
			routesArr = dropdwonUserRotues;
		} else {
			routesArr = dropdownAdminRoutes;
		}
		return routesArr;
	};

	const result = checkRole(role);

	return (
		<ul className="text-gray-800">
			{result.map((route) => (
				<Link href={route.route} key={route.route}>
					<li className="hover:bg-primary p-2 rounded-md hover:text-white">
						{route.level}
					</li>
				</Link>
			))}
		</ul>
	);
};
