export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="text-center  border-gray-400 drak:border-gray-200 border-t py-4 mt-4 flex flex-col md:flex-row items-center justify-around space-y-2 ">
			<p>
				Copyright &copy; {year}
				<span className="uppercase text-violet-500 font-black tracking-widest">
					classy garments
				</span>
			</p>

			<p className="">
				Created my free logo at
				<a href="https://logomakr.com/" className="underline">
					LogoMakr.com
				</a>
			</p>
		</footer>
	);
}
