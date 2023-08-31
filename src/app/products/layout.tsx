import SideNavbar from "@/components/SideNavbar";


export const metadata = {
	title: "Classy Garments | Products",
};
export default async function ProductLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex flex-col md:flex-row gap-4">
			<aside className="w-full md:w-[220px] shrink-0">
				<SideNavbar />
			</aside>
			<section className="flex-1">{children}</section>
		</main>
	);
}
