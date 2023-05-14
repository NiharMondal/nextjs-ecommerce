export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="text-center border-gray-400 drak:border-gray-200 border-t py-4 mt-4">
			Copyright &copy; {year} myCommerce
		</footer>
	);
}
