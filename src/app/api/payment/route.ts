import { NextResponse } from "next/server";

const stripe = require("stripe")(
	"sk_test_51NprDyEuV5fOCajB7FDs2vq08yda5tJmxjD9KAZItWboWi5RN2RCqv05VmjE7h6kzxaiLpDGSWzGao0BCmEiQicY00zlfjgYqa"
);
const url = process.env.API_URL;

export async function POST(req: Request) {
	const body = await req.json();
	try {
		const product = body.map((pd: any) => {
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

		const session = await stripe.checkout.sessions.create({
			line_items: product,
			mode: "payment",
			success_url: `${url}/success`,
			cancel_url: `${url}/cancel`,
		});
		NextResponse.json(session);
	} catch (error) {
		console.log(error);
	}
}
