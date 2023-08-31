import CartList from "@/components/CartList";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/option";

import { redirect } from "next/navigation";

export default async function Cart() {
	const session = await getServerSession(authOptions);

	
	return session?.user ? <CartList /> : redirect("/login");
}
