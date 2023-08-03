import SideNavbar from "@/components/SideNavbar";

export default function CategoryLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col md:flex-row gap-2">
			{/* Include shared UI here e.g. a header or sidebar */}
			<aside className="w-full md:w-[220px] shrink-0">
				<SideNavbar />
			</aside>

			<div className="flex-1">{children}</div>
		</section>
	);
}
