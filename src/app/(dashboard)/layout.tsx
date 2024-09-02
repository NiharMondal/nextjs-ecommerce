import Drawer from "@/components/admin-dashboard/sidebar/Drawer";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Drawer children={children} />;
}
