import { TProduct } from "@/types";
import { NextResponse } from "next/server";
const stripe = require("stripe")(
	"sk_test_51NprDyEuV5fOCajB7FDs2vq08yda5tJmxjD9KAZItWboWi5RN2RCqv05VmjE7h6kzxaiLpDGSWzGao0BCmEiQicY00zlfjgYqa"
);
export async function POST(req: Request) {
	const products = await req.json();

	const lineItems = products.map((pd: TProduct) => {
		return {
			price_data: {
				currency: "usd",
				product_data: {
					name: pd.title,
				},
				unit_amount: pd.price * 100,
			},
			quantity: pd.productQuantity,
		};
	});

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: lineItems,
			mode: "payment",
			success_url: `${process.env.API_URL}/success`, //"http://localhost:3000/success",
			cancel_url: `${process.env.API_URL}/cancel`,
		});
		return NextResponse.json({ id: session.id });
	} catch (error) {
		return NextResponse.json("Internal server error", { status: 500 });
	}
}
