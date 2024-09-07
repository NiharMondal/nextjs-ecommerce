"use client";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html>
			<body className="flex items-center justify-center text-center h-screen">
				<div>
					<h2>Sorry, Something went wrong!</h2>
					<button
						className="btn primary text-white"
						onClick={() => reset()}
					>
						Try again
					</button>
				</div>
			</body>
		</html>
	);
}
