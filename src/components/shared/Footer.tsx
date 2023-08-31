export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="text-center  border-gray-400 drak:border-gray-200 border-t py-8">
			<p>
				Copyright &copy; {year} {" "}
				<span className="uppercase text-blue-500 font-black tracking-widest">
					classy garments
				</span>
			</p>

			
		</footer>
	);
}
