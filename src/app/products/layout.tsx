import SideNavbar from "@/components/SideNavbar";

export default async function ProductLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex flex-col md:flex-row gap-x-2">
			<section>
				<SideNavbar />
			</section>
			<section className="flex-1">{children}</section>
		</main>
	);
}
