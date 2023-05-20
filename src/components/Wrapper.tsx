export default function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		<section className="mt-8 grid lg:grid-cols-4 grid-rows-2 gap-4">
			{children}
		</section>
	);
}
