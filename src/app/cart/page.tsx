import CartList from "@/components/CartList";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/option";

import { redirect } from "next/navigation";


export const metadata = {
	title: "Cart | Classy Garments",
	description: "It shows all the item that you added into your cart to buy products",
};
export default async function Cart() {
	const session = await getServerSession(authOptions);

	return session?.user?.email ? <CartList /> : redirect("/login");
}
